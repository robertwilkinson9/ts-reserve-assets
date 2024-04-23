/**
 * @vitest-environment jsdom
 */

//import { render, toBe } from '@testing-library/react';
import { render } from '@testing-library/react';
// import { render, screen } from '@testing-library/react';
// import selectEvent from 'react-select-event'

import { MongoData } from '../components/interfaces';
import { Items } from '../components/items';
import { get_items_from_config } from '../components/get_items_from_config';

const test_numeric_config = {
  "APIPORT": 1234,
  "COLLECTION": "test",
  "ITEM_NAME": "test_items_name",
  "ITEM_LABEL": "test_items_label",
  "BUCKET_NAME": "test_items",
  "BUCKETS":
  [
    {
      "NAME": "first",
      "PREFIX": "f",
      "IFIRST": 1,
      "ILAST": 10
    },
    {
      "NAME": "second",
      "PREFIX": "s",
      "IFIRST": 11,
      "ILAST": 20
    }
  ]
}

const test_list_config = {
  "APIPORT": 1235,
  "COLLECTION": "listtest",
  "ITEM_NAME": "listtest_items_name",
  "ITEM_LABEL": "listtest_items_label",
  "BUCKET_NAME": "listtest_items",
  "BUCKETS":
  [
    {
      "NAME": "singleton",
      "ITEMS": ["first one", "second two", "third three"]
    }
  ]
}


/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */
 
// export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps
const renderItems = (bucket = 0, allocated_items: MongoData[] = []) => {
  const key = 'key__' + bucket;

  return render(<Items key={key} id={key} config={test_numeric_config} bucket={bucket} allocated_items={allocated_items} set_item={null_setter} />);
}

describe('label test', () => {
  it("should render", async () => {
    const { findAllByTestId } = renderItems();

    const ItemsDiv = await findAllByTestId("items_div");
    const firstItemsDiv = ItemsDiv[0];
    expect(firstItemsDiv).toBeInTheDocument();
  });

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

describe('get_items_from_config test', () => {
  const data = {"config": test_numeric_config, "bucket": 0};
  const items = get_items_from_config(data);
  if (items) {
  it("Numeric items computed from config should have selected element values", async () => {
    if (items[0]) {expect(items[0]).toBe('f01');}
    if (items[9]) {expect(items[9]).toBe('f10');}
  });
  }
  });

  const listdata = {"config": test_list_config, "bucket": 0};
  const listitems = get_items_from_config(listdata);
  if (listitems) {
    it("List items from config should have selected element values", async () =>   {
      if (listitems[0]) {expect(listitems[0]).toBe('first one');}
      if (listitems[2]) {expect(listitems[2]).toBe('third three');}
   });
  }

describe('items test', () => {
  it("All items should be available if none allocated", async () => {
    // const test_data_0 = {"config": test_numeric_config, "bucket": 0, "allocated_items": [], "set_item": null_setter};
    // const { findByTestId, getAllByRole, getAllByText } = renderItems(0, []);
    const { findByTestId, getAllByRole } = renderItems(0, []);

    const Itemslabel = await findByTestId("items_label");
    expect(Itemslabel).toBeInTheDocument();

    const OptionsText = await getAllByRole('option');
    const options_values = OptionsText.map((it) => { return (it as HTMLInputElement).value });
   
    expect(options_values.length).toBe(11);
    expect(options_values[options_values.length - 1]).toBe('f10');
  });

  it("Allocated items should not be available", async () => {
    const start_test_date = new Date("1999-12-31T00:00");
    const end_test_date = new Date("1999-12-31T11:59");
    const expiry_test_date = new Date("2000-01-01T00:00");

    const allocated_items_0 = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": 0, "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "f07"};
    const allocated_items_1 = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": 0, "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "f09"};
    const allocated_items = [ allocated_items_0, allocated_items_1 ]

    // const { findByTestId, getAllByRole, getAllByText } = renderItems(0, allocated_items);
    const { findByTestId, getAllByRole } = renderItems(0, allocated_items);

    const Itemslabel = await findByTestId("items_label");
    expect(Itemslabel).toBeInTheDocument();

    const OptionsText = await getAllByRole('option');
    const options_values = OptionsText.map((it) => { return (it as HTMLInputElement).value });
   
    expect(options_values.length).toBe(9);
    const expected = ['', 'f01', 'f02', 'f03', 'f04',
  'f05', 'f06', 'f08', 'f10'];

    expect(options_values).toStrictEqual(expected);
  });
});

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
