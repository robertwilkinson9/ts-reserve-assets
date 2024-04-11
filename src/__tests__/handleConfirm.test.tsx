import { describe, it } from 'vitest';
import { handleConfirm } from '../components/handleConfirm';

const defaultConfig = {
  "APIPORT": 7345,
  "LCCOLLECTION": "test",
  "ITEM_NAME": "test_item",
  "ITEM_LABEL": "test_label",
  "BUCKET_NAME": "test_bucket",
  "BUCKETS": [
    {NAME: "first", ITEMS: ["alpha", "beta", "gamma"]},
    {NAME: "last", ITEMS: ["chi", "psi", "omega"]}
  ]
};

const bucket = 0;
const url = "https://www.fourtheye.org";
const start_test_date = new Date("1999-12-31T00:00");
const end_test_date = new Date("1999-12-31T11:59");
const expiry_test_date = new Date("2000-01-01T00:00");
const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    handleConfirm(url, test_item_data, null_setter, start_test_date, end_test_date, bucket, defaultConfig);
  });
});
