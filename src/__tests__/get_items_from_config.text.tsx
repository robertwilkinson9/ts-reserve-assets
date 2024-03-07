/**
 * @vitest-environment jsdom
 */

import { get_items_from_config } from '../components/get_items_from_config';

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

describe('get_items_from_config test', () => {
  const data = {"config": test_numeric_config, "bucket": 1};
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
