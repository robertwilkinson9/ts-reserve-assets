// semantics - a bucket is a collection - and was called that until mongoDB objected to the name
// e.g. a room containing desks, the desks being the items
// the books by an author, the author is the bucket and the books the items
// the tables in the restaurant, the tables are the buckets, the bookable seats the items.

// these items are presented to the author as pull down lists once the bucket radio button is selected
// we filter the out those items currently booked at the time requested from those presented 

 import Select from 'react-select'
// import { Select } from '@chakra-ui/react'
// import {
//   AsyncCreatableSelect,
//   AsyncSelect,
//   CreatableSelect,
//   Select,
// } from "chakra-react-select";

// import { Select } from "chakra-react-select";

import { ItemsProps, Select_type} from './interfaces';

const items_select = (items: string[]): Select_type[] => {
  return items.map(item => {return {value: item, label: item};});
}

// listbuild can build a list from a start and last number and surround each with a prefix and suffix
const listbuild = (istart:number | undefined, ilast:number | undefined, prefix: string | undefined, suffix?: string | undefined) => {
  const items: string[] = [];
  if (istart != undefined && ilast != undefined) {
    for (let i = istart; i <= ilast; i++) {
      let d = i.toString().padStart(ilast.toString().length, '0');

      if (prefix !== undefined) {
        d = `${prefix}${d}`;
      }
      if (suffix !== undefined) {
        d = `${d}${suffix}`;
      }
      items.push(d);
    }
  }
  return items;
}
   
export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps) => {
  let items: string[] | undefined = [];

  if (bucket !== null) {
    if (config.BUCKETS[bucket].items) {
      items = config.BUCKETS[bucket].items;
    } else {
      if (config.BUCKETS[bucket].ifirst && config.BUCKETS[bucket].ilast) {
        items = listbuild(config.BUCKETS[bucket].ifirst, config.BUCKETS[bucket].ilast, config.BUCKETS[bucket].prefix);
      }
    }
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

  if (items) {
    const select_item_list: Select_type[] = items_select(items)

    const key = `key__${bucket}`

    const capitalizeFirstLetter = (name: string) => {if (name && name.length) {return name.charAt(0).toUpperCase() + name.slice(1);} else {return "X"} }
    return (
      <>
      <div data-testid="items_div" id="itemPulldown">
        <label data-testid="items_label" className="mb-0 font-weight-bold">{capitalizeFirstLetter(config.ITEM_NAME)}</label>
          <Select
            key={key}
            options={select_item_list}
            onChange={(choice) => choice ? set_item(choice.value) : ""}
          />
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
