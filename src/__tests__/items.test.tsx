/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';
//import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event'

import { MongoData } from '../components/interfaces';
import { Items } from '../components/items';

const test_config = {
  "APIPORT": "1234",
  "ITEM_NAME": "test_items_name",
  "ITEM_LABEL": "test_items_label",
  "BUCKET_NAME": "test_items",
  "BUCKETS":
  [
    {
      "name": "first",
      "prefix": "f",
      "ifirst": 1,
      "ilast": 10
    },
    {
      "name": "second",
      "prefix": "s",
      "ifirst": 11,
      "ilast": 20
    }
  ]
}

const null_setter = () => {};
 
// export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps
const renderItems = (num: number = 0, bucket: number = 0, allocated_items: MongoData[] = []) => {
  return render(<Items config={test_config} bucket={bucket} allocated_items={allocated_items} set_item={null_setter} />);
}

describe('label test', () => {
  it("should contain a items div element", async () => {
    const { findAllByTestId } = renderItems();

    const ItemsDiv = await findAllByTestId("items_div");
    const firstItemsDiv = ItemsDiv[0];
    expect(firstItemsDiv).toBeInTheDocument();
  });

  it("should contain a items label label element", async () => {
    const { findByTestId } = renderItems();

    const ItemsLabel = await findByTestId("items_label");
    expect(ItemsLabel).toBeInTheDocument();
  });

  it("items label label element should have the correct value", async () => {
    const { findByTestId } = renderItems();

    const ItemsLabel = await findByTestId("items_label");
    expect(ItemsLabel).toHaveTextContent("Test_items_name");
  });
});

//describe('items test', () => {
//  const { container, findByDisplayValue, getByText, getByLabelText, queryAllByLabelText, getByTestId } = renderItems(42);
//
//  it("Select list should have select element values", async () => {
////    const my_item =  container.querySelector('#itemPulldown')
////    await container.querySelector('#itemPulldown')
////    await selectEvent.select(getByText('Test_items_name'), 'f02')
////    await selectEvent.select(getByLabelText('Test_items_name'), 'f02')
//    const labels = queryAllByLabelText(/Test_items_name/);
//    const llen = labels.length;
//    console.log("SIZE OF LABELS is ",llen);
////    await selectEvent.select(queryAllByLabelText(/Test_items_name/)[0], 'f02')
////    await selectEvent.select(queryAllByLabelText(/t/), 'f02')
////    await selectEvent.select(findByDisplayValue('Test_items_name'), 'f02')
////    expect(my_item).toHaveFormValues({food: 'chocolate',})
//  });
//});

//describe('items test', () => {
//  it("Select list should have correct values", async () => {
////    const test_label = "date_test";
////    const test_date_string = "31/12/1999 11:59 PM";
////    const test_date = new Date("1999-12-31T23:59");
//
////    const { findByTestId } = renderItems();
//    renderItems();
//
//    const combo_box = screen.getByRole('combobox');
////    const dropdown = combo_box.querySelector('input')
////    console.log("DROPDOWN");
////    console.log(dropdown);
//    console.log("COMBO BOX");
//    console.log(combo_box);
////    expect(combo_box).toHaveAttribute("value", test_date_string);
//  });
//});

//describe('items test', () => {
//  it("Select list should have correct values via id selector", async () => {
//    const { container, findByTestId } = renderItems();
////    console.log("56");
////    console.log(container);
//    const itemPulldown = container.querySelector('#itemPulldown')
//
//
////    console.log("itemPulldown");
////    console.log(itemPulldown);
////    console.log("itemPulldown.children");
////    console.log(itemPulldown.children[0]);
////    console.log(itemPulldown.children[0].memoizedProps);
////    const bits  = itemPulldown.children[0].querySelector('[items_label=${items_label}]')
//
//    const ItemsDiv = await findByTestId("items_div");
////    expect(ItemsDiv).toBeInTheDocument();
//    expect(ItemsDiv).toContainElement(itemPulldown);
//    expect(itemPulldown).toHaveTextContent("Select...");
//    expect(itemPulldown).toHaveAttribute('placeholder', "Select...");
//
////    const items_label = await findByTestId("items_label");
////   console.log("items_label");
//
////    expect(items_label).toHaveTextContent("f10");
////    console.log(items_label.children);
////    console.log(items_label);
////    console.log(typeof(items_label));
////    console.log("items_label keys");
////    console.log(Object.keys(items_label));
////    console.log("items_label values");
////    console.log(Object.values(items_label));
////    console.log("items_label second value");
////    console.log(Object.values(items_label)[1]);
////    console.log("items_label second value children");
////    console.log(Object.values(items_label)[1].children);
////
////    console.log(items_labels[Object.keys(items_label)[1]]);
////    expect(items_label).toHaveTextContent("f10");
//
////#'data-testid': 'items_label'
////    for c in itemPulldown.children
////      console.log(c);
//    
////    const placeholder = container.querySelector('[placeholder="Select..."]')
////    console.log("55");
////    console.log(placeholder);
////    expect(combo_box).toHaveAttribute("value", test_date_string);
//  });
//});
//
//describe('items test', () => {
//  const { getByLabelText, getByTestId } = renderItems(42);
//
//  it("Select list should have select element values", async () => {
//    await selectEvent.select(getByLabelText('Test_items_name'), 'Chocolate')
//    expect(getByTestId('form')).toHaveFormValues({food: 'chocolate',})
//  });
//});
//
////    renderItems();
////
////    const select = screen.getByRole('select');
////    console.log("SLECT BOX");
////    console.log(select);
//  });
////
////  it("Select list should be accessible from div", async () => {
////    const { findByTestId } = renderItems();
////
////    const ItemsDiv = await findByTestId("items_div");
//////    console.log(ItemsDiv);
//////    expect(ItemsDiv).toBeInTheDocument();
////  });
////
////
////  it("Select list should be accessible via query selector", async () => {
////    const { container } =  renderItems();
////    const dropdown = screen.getByTestId('items_div').querySelector('input')
////    console.log(dropdown);
////
//////    const keyed_list = container.querySelector('[key="key__0"]')
//////    expect(keyed_list).toBeInTheDocument();
////  });
////});
