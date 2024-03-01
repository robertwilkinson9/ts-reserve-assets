/**
 * @vitest-environment jsdom
 */

import { render, screen, toBe } from '@testing-library/react';

// import selectEvent from 'react-select-event'

import { MongoData } from '../components/interfaces';
import { get_items_from_config, Items } from '../components/items';

const test_numeric_config = {
  "APIPORT": 1234,
  "LCCOLLECTION": "test",
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
  "LCCOLLECTION": "listtest",
  "ITEM_NAME": "listtest_items_name",
  "ITEM_LABEL": "listtest_items_label",
  "BUCKET_NAME": "listtest_items",
  "BUCKETS":
  [
    {
    "ITEMS": ["first one", "second two", "third three"],
    }
  ]
}

const null_setter = () => {};
 
// export const Items = ({ config, bucket, allocated_items, set_item } : ItemsProps
const renderItems = (bucket: number = 0, allocated_items: MongoData[] = []) => {
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
  it("Numeric items computed from config should have selected element values", async () => {
    expect(items[0]).toBe('f01');
    expect(items[9]).toBe('f10');
  });

  const listdata = {"config": test_list_config, "bucket": 0};
  const listitems = get_items_from_config(listdata);
  it("List items from config should have selected element values", async () => {
    expect(listitems[0]).toBe('first one');
    expect(listitems[2]).toBe('third three');
  });
});

describe('items test', () => {
  it("All items should be available if none allocated", async () => {
    const test_data_0 = {"config": test_numeric_config, "bucket": 0, "allocated_items": [], "set_item": null_setter};
    const { findByTestId, getAllByRole, getAllByText } = renderItems(0, []);

    const Itemslabel = await findByTestId("items_label");
    expect(Itemslabel).toBeInTheDocument();

    const OptionsText = await getAllByRole('option');
    const options_values = OptionsText.map((it) => { return it.value });
   
    expect(options_values.length).toBe(11);
    expect(options_values[options_values.length - 1]).toBe('f10');
  });

  it("Allocated items should not be available", async () => {
    const start_test_date = new Date("1999-12-31T00:00");
    const end_test_date = new Date("1999-12-31T11:59");
    const expiry_test_date = new Date("2000-01-01T00:00");

    const allocated_items_0 = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "f07"};
    const allocated_items_1 = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "f09"};
    const allocated_items = [ allocated_items_0, allocated_items_1 ]

    const { findByTestId, getAllByRole, getAllByText } = renderItems(0, allocated_items);

    const Itemslabel = await findByTestId("items_label");
    expect(Itemslabel).toBeInTheDocument();

    const OptionsText = await getAllByRole('option');
    const options_values = OptionsText.map((it) => { return it.value });
   
    expect(options_values.length).toBe(9);
    const expected = ['', 'f01', 'f02', 'f03', 'f04',
  'f05', 'f06', 'f08', 'f10'];

    expect(options_values).toStrictEqual(expected);
  });
});

describe('items test', () => {
  it("Select list should have correct values via id selector", async () => {
    const { container, findByTestId } = renderItems();
//    screen.debug();
    const select = container.querySelector(".chakra-select")
    const list_items = select.children;
    const so0 = "Select option";
    const so1 = "f01";
    const so9 = "f09";
    expect(list_items[0]).toHaveTextContent(so0);
    expect(list_items[0].value).toBe("");
    expect(list_items[1]).toHaveTextContent(so1);
    expect(list_items[1].value).toBe(so1);
    expect(list_items[9]).toHaveTextContent(so9);
    expect(list_items[9].value).toBe(so9);
  });});
