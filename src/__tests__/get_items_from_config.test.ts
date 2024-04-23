/**
 * @vitest-environment jsdom
 */

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
      "ILAST": 15
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
      "ITEMS": ["first one", "second two", "third three"],
    }
  ]
}

describe('get_items_from_config numeric test', () => {
  const data = {"config": test_numeric_config, "bucket": 1};
  const items = get_items_from_config(data);
  it("Numeric items computed from config should have selected element values", async () => {
    if (items && items.length > 4) {
      expect(items[0]).toBe('s11');
      expect(items[4]).toBe('s15');
    }
  });
});

describe('get_items_from_config list test', () => {
  const listdata = {"config": test_list_config, "bucket": 0};
  const listitems = get_items_from_config(listdata);
  it("List items from config should have selected element values", async () => {
    if (listitems && listitems.length > 1) {
      expect(listitems[0]).toBe('first one');
      expect(listitems[2]).toBe('third three');
    }
  });
});
