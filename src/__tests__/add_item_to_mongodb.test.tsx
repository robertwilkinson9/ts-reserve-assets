/**
 * @vitest-environment jsdom
 */

import { add_item_to_mongodb } from '../components/add_item_to_mongodb';

/*
export interface ItemData {
  booking_start: string;
  booking_end: string;
  expireAt: string;
  bucket: number;
  email: string
  [key: string]: string | number; // 👈️ variable key
}
*/

//item_data
test('expect add_item_to_mongodb to work', () => {
  const url = "https://www.fourtheye.org";
  const start_test_date = new Date("1999-12-31T00:00");
  const end_test_date = new Date("1999-12-31T11:59");
  const expiry_test_date = new Date("2000-01-01T00:00");

  const test_item_data = {"booking_start": start_test_date, "booking_end": end_test_date, "bucket": "0", "expireAt": expiry_test_date, "email": "me@there.com", "test_items_name": "test_item"};

  add_item_to_mongodb(url, test_item_data);

//  expect(iiElement).toBeInTheDocument();
})
