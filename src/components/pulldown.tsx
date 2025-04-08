/** 
* a list of strings is converted to a working pulldown list.
* each list item is used for the value and label of the pulldown element
*/

import React from 'react';

import { Select } from '@chakra-ui/react'

import { Select_type, PullDownProps } from './interfaces';

const items_select = (items: string[]): Select_type[] => {
  return items.map((item) => {return {value: item, label: item};});
}

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
