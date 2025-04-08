/** 
* semantics - a bucket is a collection or container for items
* e.g. a room containing desks, the desks being the items
* the books by an author, the author is the bucket and the books the items
* the tables in the restaurant, the tables are the buckets, the bookable seats the items.
* was called collection until mongodb objected to the variable name ... AWS ...

* these items are presented to the author as pull down lists once the bucket radio button is selected
* filter out those items currently booked at the time requested from those presented 
*/

import React from 'react';

import { Select } from '@chakra-ui/react'

import { Select_type, PullDownProps } from './interfaces';

const items_select = (items: string[]): Select_type[] => {
  return items.map((item) => {return {value: item, label: item};});
}

/**
*
* create a pulldown list for the selected bucket
*
*/

export const PullDown = ({string_list, label, set_item } : PullDownProps) => {
  if (string_list.length) {
    const select_item_list: Select_type[] = items_select(string_list)
    const select_option_list = select_item_list.map((item, key) => { return (<React.Fragment key={key}><option data-testid="item" value={item.value}>{item.label}</option></React.Fragment>) });

    return (
      <>
      <div data-testid="items_div" id="itemPulldown">
        <label data-testid="items_label" className="mb-0 font-weight-bold">{label}</label>
          <Select
            data-testid="items_select"
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

export default PullDown;
