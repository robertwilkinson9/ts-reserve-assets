/**
 * @vitest-environment jsdom
 */

import { add_item_to_mongodb } from '../components/add_item_to_mongodb';

// - import { render, screen } from '@testing-library/react';
// - 
// - import {ProcessDataProps} from '../components/interfaces'
// - import { ProcessData } from '../components/processdata';
// - 
// - function renderProcessData(props: Partial<ProcessDataProps> = {}) {
// - // export interface configData {
// - //   APIPORT: number;
// - //   LCCOLLECTION: string;
// - //   ITEM_NAME: string;
// - //   ITEM_LABEL: string;
// - //   BUCKET_NAME: string;
// - //   BUCKETS: bucketData[];
// - //   AUXILLIARY?: AuxConfigRecordType[];
// - // }
// - 
// -   const defaultConfig = {
// -     "APIPORT": 7345,
// -     "LCCOLLECTION": "test",
// -     "ITEM_NAME": "test_item",
// -     "ITEM_LABEL": "test_label",
// -     "BUCKET_NAME": "test_bucket",
// -     "BUCKETS": [],
// -   }
// - 
// - // export interface ProcessDataProps {
// - //   config: configData;
// - //   mongo_data: MongoData[];
// - //   set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>;
// - //   booking_start: date_or_null;
// - //   set_booking_start: React.Dispatch<React.SetStateAction<date_or_null>>;
// - //   booking_end: date_or_null;
// - //   set_booking_end: React.Dispatch<React.SetStateAction<date_or_null>>;
// - //   bucket: number_or_null;
// - //   set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
// - //   item: string_or_null;
// - //   set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
// - //   email: string_or_null;
// - //   set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
// - //   auxdata: AuxDataRecordType[];
// - //   set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
// - //   set_complete: React.Dispatch<React.SetStateAction<boolean>>;
// - //   url: string;
// - //   confirmed: boolean;
// - //   set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
// - //   set_needreset: React.Dispatch<React.SetStateAction<boolean>>;
// - // }
// - 
// - /* eslint-disable */
// - const null_setter = () => {};
// - /* eslint-enable */
// - 
// -   const defaultProps = {
// -     config: defaultConfig,
// -     mongo_data: [],
// -     set_mongodata: null_setter,
// -     booking_start: null,
// -     set_booking_start: null_setter,
// -     booking_end: null,
// -     set_booking_end: null_setter,
// -     bucket: null,
// -     set_bucket: null_setter,
// -     item: null,
// -     set_item: null_setter,
// -     email: "",
// -     set_email: null_setter,
// -     auxdata: [],
// -     set_auxdata: null_setter,
// -     set_complete: null_setter,
// -     url: "",
// -     confirmed: false,
// -     set_confirmed: null_setter,
// -     set_needreset: null_setter,
// -   };
// - 
// -   return render(<ProcessData {...defaultProps} {...props} />);
// - }


test('expect add_item_to_mongodb to work', () => {
  add_item_to_mongodb
//  expect(iiElement).toBeInTheDocument();
})
