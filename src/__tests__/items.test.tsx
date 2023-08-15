/**
 * @vitest-environment jsdom
 */

//import { render } from '@testing-library/react';
import { render, screen } from '@testing-library/react';

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
const renderItems = (bucket: number = 0, allocated_items: MongoData[] = []) => {
  return render(<Items config={test_config} bucket={bucket} allocated_items={allocated_items} set_item={null_setter} />);
}

describe('label test', () => {
  it("should contain a items div element", async () => {
    const { findByTestId } = renderItems();

    const ItemsDiv = await findByTestId("items_div");
    expect(ItemsDiv).toBeInTheDocument();
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

describe('items test', () => {
  it("Select list should have correct values", async () => {
    const test_label = "date_test";
    const test_date_string = "31/12/1999 11:59 PM";
    const test_date = new Date("1999-12-31T23:59");

    const { findByTestId } = renderItems();

    const combo_box = screen.getByRole('combobox');
    console.log(combo_box);
//    expect(combo_box).toHaveAttribute("value", test_date_string);
  });
});
