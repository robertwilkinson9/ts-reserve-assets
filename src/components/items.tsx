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

import { BucketReadProps, ItemsProps, Select_type} from './interfaces';

// import {hasOwnProperty} from './utils';

const items_select = (items: string[]): Select_type[] => {
  return items.map((item) => {return {value: item, label: item};});
}

/**
* listbuild can build a list from a start and last number and surround each with a prefix and suffix
*/

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

/**
*
* items are either listed in the config files as strings
* or else numeric, with the first and last in the config file, and the items computed
*
*/

export const get_items_from_config = ({config, bucket}: BucketReadProps): string[] | undefined => {
  let items: string[] | undefined = [];

  if ((bucket !== null) && config.BUCKETS !== undefined && config.BUCKETS.length && (config.BUCKETS[bucket] !== undefined)) {
    if ('ITEMS' in config.BUCKETS[bucket]) {
      items = config.BUCKETS[bucket].ITEMS;
    } else {
      if (config.BUCKETS[bucket].IFIRST && config.BUCKETS[bucket].ILAST) {
        items = listbuild(config.BUCKETS[bucket].IFIRST, config.BUCKETS[bucket].ILAST, config.BUCKETS[bucket].PREFIX, config.BUCKETS[bucket].SUFFIX);
      }
    }
  }
  return items;
}
 
/**
*
* create a pulldown list for the selected bucket
*
*/

export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps) => {
  let items: string[] | undefined = [];

      console.log("BUCKET IS");
      console.dir(bucket);

      console.log("CONFIG IS");
      console.dir(config);

  if (bucket !== null) {
    items = get_items_from_config({config, bucket});

      console.log("ITEMS are ");
      console.dir(items);

    if (allocated_items) {

      console.log("ALLOCATED ITEMS");
      console.dir(allocated_items);

      const bucket_items = allocated_items.filter(it => {return bucket == it.bucket});
      if (bucket_items) {

        console.log("BUCKET ITEMS");
        console.dir(bucket_items);

        const reserved_items = bucket_items.map(x => {return x[config.ITEM_NAME]});

        console.log("RESERVED ITEMS");
        console.dir(reserved_items);

        if (items) {

          console.log("ITEMS");
          console.dir(items);

          items = items.filter(n => !reserved_items.includes(n)); // slow and simple set difference 
        }
      }
    }
  }

  if (items) {
    console.log("ITEMS 1 ");
    console.dir(items);

    const select_item_list: Select_type[] = items_select(items)
    const select_option_list = select_item_list.map((item, key) => { return (<React.Fragment key={key}><option value={item.value}>{item.label}</option></React.Fragment>) });

    const capitalizeFirstLetter = (name: string) => {if (name && name.length) {return name.charAt(0).toUpperCase() + name.slice(1);} else {return "X"} }

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
