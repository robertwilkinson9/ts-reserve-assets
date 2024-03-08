/** 
* semantics - a bucket is a collection or container for items
* e.g. a room containing desks, the desks being the items
* the books by an author, the author is the bucket and the books the items
* the tables in the restaurant, the tables are the buckets, the bookable seats the items.

* these items are presented to the author as pull down lists once the bucket radio button is selected
* filter out those items currently booked at the time requested from those presented 
*/

import React from 'react';

import { Select } from '@chakra-ui/react'

import { ItemsProps, Select_type} from './interfaces';

import { capitalizeFirstLetter } from './capitalizeFirstLetter';
import { get_items_from_config } from './get_items_from_config';

const items_select = (items: string[]): Select_type[] => {
  return items.map((item) => {return {value: item, label: item};});
}

/**
*
* create a pulldown list for the selected bucket
*
*/

export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps) => {
  let items: string[] | undefined = [];

  if (config !== null && bucket !== undefined) {
    items = get_items_from_config({config, bucket});

    if (allocated_items) {
      const bucket_items = allocated_items.filter(it => {return bucket == it.bucket});
/*
      console.log("bucket_items");
      console.dir(bucket_items);
*/
      if (bucket_items) {

        const reserved_items = bucket_items.map(x => {return x[config.ITEM_NAME]});

        if (items) {

          items = items.filter(n => !reserved_items.includes(n)); // slow and simple set difference 

        }
      }
    }
  }

  if (config && items) {
    const select_item_list: Select_type[] = items_select(items)

    const select_option_list = select_item_list.map((item, key) => { return (<React.Fragment key={key}><option value={item.value}>{item.label}</option></React.Fragment>) });

    return (
      <>
      <div data-testid="items_div" id="itemPulldown">
        <label data-testid="items_label" className="mb-0 font-weight-bold">{capitalizeFirstLetter(config.ITEM_NAME)}</label>
          <Select
            onChange={(event) => set_item(event.target.value)}
            placeholder='Select option'
          >
            {select_option_list}
          </Select>
      </div>
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
