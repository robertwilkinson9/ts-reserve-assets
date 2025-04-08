/** 
* semantics - a bucket is a collection or container for items
* e.g. a room containing desks, the desks being the items
* the books by an author, the author is the bucket and the books the items
* the tables in the restaurant, the tables are the buckets, the bookable seats the items.
* was called collection until mongodb objected to the variable name ... AWS ...

* these items are presented to the author as pull down lists once the bucket radio button is selected
* filter out those items currently booked at the time requested from those presented 
*/

import { ItemsProps } from './interfaces';

import { capitalizeFirstLetter } from './capitalizeFirstLetter';
import { get_items_from_config } from './get_items_from_config';
import { PullDown } from './pulldown';

/**
*
* create a pulldown list for the selected bucket
*
*/

export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps) => {
  let items: string[] | undefined = [];
  if (config !== null && bucket !== undefined) {
    items = get_items_from_config({config, bucket}) || [];

    if (allocated_items) {
      const bucket_items = allocated_items.filter(it => {return bucket == it.bucket});
      if (bucket_items) {
        const reserved_items = bucket_items.map(x => {return x[config.ITEM_NAME]});
        if (items) {
          items = items.filter(n => !reserved_items.includes(n)); // slow and simple set difference 
        }
      }
    }
  }

  if (config && items.length) {
    return (
      <>
      <PullDown string_list={items} label={capitalizeFirstLetter(config.ITEM_NAME)} set_item={set_item} />
      </>
    );
  } else {
    return(
    <>
    <h4>No SELECT items</h4>
    </>
  );

  }
};

export default Items;
