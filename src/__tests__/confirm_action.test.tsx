import { describe, it } from 'vitest';
import { confirm_action } from '../components/confirm_action';

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
const mongo_data = [];

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

console.log(`in test configm action and start_test_date is ${start_test_date}`);
const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    confirm_action(url, mongo_data, test_item_data, start_test_date, end_test_date, bucket, defaultConfig, null_setter, null_setter);

//      expect(app_string).toMatchSnapshot();
  });
});
