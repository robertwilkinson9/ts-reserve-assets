/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { MongoData } from '../components/interfaces';
import { Items } from '../components/items';

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
      "ILAST": 15
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
    renderItems();

    const ItemsDiv = screen.queryByTestId("items_div");
    expect(ItemsDiv).toBeInTheDocument();
  });

  it("should contain a items label label element", async () => {
    renderItems();

    const ItemsLabel = screen.queryByTestId("items_label");
    expect(ItemsLabel).toBeInTheDocument();
  });

  it("items label label element should have the correct value", async () => {
    renderItems();

    const ItemsLabel = screen.queryByTestId("items_label");
    expect(ItemsLabel).toHaveTextContent("Test_items_name");
  });
});

describe('items test', () => {
  it("All items should be available if none allocated", async () => {
    renderItems(0, []);

    const ItemsLabel = screen.queryByTestId("items_label");
    expect(ItemsLabel).toBeInTheDocument();
    expect(ItemsLabel.textContent).toBe("Test_items_name");

    const OptionsText = screen.queryAllByRole('option');

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

    renderItems(0, allocated_items);

    const Itemslabel = screen.queryByTestId("items_label");
    expect(Itemslabel).toBeInTheDocument();

    const OptionsText = screen.queryAllByRole('option');
    const options_values = OptionsText.map((it) => { return it.value });
   
    expect(options_values.length).toBe(9);
    const expected = ['', 'f01', 'f02', 'f03', 'f04',
  'f05', 'f06', 'f08', 'f10'];

    expect(options_values).toStrictEqual(expected);
  });
});

describe('items test', () => {
  it("Select list should have correct values via id selector", async () => {
    const { container } = renderItems();
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
  });
});

describe('overlapping items test', () => {
  const set_mongodata_item = (start, end, bucket, key, value) => {
/*
export type MongoData = {
  booking_start: string;
  booking_end: string;
  bucket: number;
  [key: string]: string | number | undefined; // 👈️ variable key
};
*/
    const mditem: MongoData = {};
    mditem.booking_start = start;
    mditem.booking_end =  end;
    mditem.bucket = bucket;
    mditem[key] = value;

    return mditem;
  };
  it("no config no items", async () => {
    const { container } = render(<Items />);
    expect(container).toHaveTextContent("No SELECT items");
  });
  it("Overlapping items must be removed from ", async () => {
    const xdate1 = new Date("1999-12-31T01:00");
    const ydate1 = new Date("1999-12-31T02:00");
    const bucket1 = 0;
    const key1 = "name";
    const value1 = "tester1";
    const ov1 = set_mongodata_item(xdate1, ydate1, bucket1, key1, value1);

    const { container } = render(<Items allocated_items={ov1} />);

    expect(container).toHaveTextContent("No SELECT items");
  });
  it("Overlapping items must be  from ", async () => {
    const { container } = render(<Items config={test_list_config} />);
    expect(container).not.toHaveTextContent("No SELECT items");
  });
  it("Overlapping items must be removed from ", async () => {
    const xdate1 = new Date("1999-12-31T01:00");
    const ydate1 = new Date("1999-12-31T02:00");
    const bucket1 = 0;
    const key1 = "name";
    const value1 = "tester1";
    const ov1 = set_mongodata_item(xdate1, ydate1, bucket1, key1, value1);

    const { container } = render(<Items config={test_list_config} allocated_items={ov1} />);

    expect(container).not.toHaveTextContent("No SELECT items");
  });
});

describe('listbuild test', () => {
  it("check list for prefix show No SELECT items", async () => {
    render(<Items />);
//    screen.debug();
//    screen.debug(container.children);
//    expect(container[0]).toBe("f0");
/*
    const list = listbuild(2, 8, "pf_", "");
    expect(list).toHaveTextContent("No SELECT items");
*/
  });

  it("Null Select list should return HTML warning", async () => {
    render(<Items />);
    const heading = screen.getByRole('heading', {level: 4});
    expect(heading).toHaveTextContent("No SELECT items");
  });
});

describe('no items test', () => {
  it("Null Select list should show No SELECT items", async () => {
    const { container } = render(<Items />);
    expect(container).toHaveTextContent("No SELECT items");
  });

  it("Null Select list should return HTML warning", async () => {
    render(<Items />);
    const heading = screen.getByRole('heading', {level: 4});
    expect(heading).toHaveTextContent("No SELECT items");
  });
});


