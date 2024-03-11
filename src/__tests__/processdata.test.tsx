/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import {ProcessDataProps} from '../components/interfaces'
import { ProcessData } from '../components/processdata';

function renderProcessData(props: Partial<ProcessDataProps> = {}) {
// export interface configData {
//   APIPORT: number;
//   LCCOLLECTION: string;
//   ITEM_NAME: string;
//   ITEM_LABEL: string;
//   BUCKET_NAME: string;
//   BUCKETS: bucketData[];
//   AUXILLIARY?: AuxConfigRecordType[];
// }

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

// export interface ProcessDataProps {
//   config: configData;
//   mongo_data: MongoData[];
//   set_mongodata: React.Dispatch<React.SetStateAction<MongoData[]>>;
//   booking_start: date_or_null;
//   set_booking_start: React.Dispatch<React.SetStateAction<date_or_null>>;
//   booking_end: date_or_null;
//   set_booking_end: React.Dispatch<React.SetStateAction<date_or_null>>;
//   bucket: number_or_null;
//   set_bucket: React.Dispatch<React.SetStateAction<number_or_null>>;
//   item: string_or_null;
//   set_item: React.Dispatch<React.SetStateAction<string_or_null>>;
//   email: string_or_null;
//   set_email: React.Dispatch<React.SetStateAction<string_or_null>>;
//   auxdata: AuxDataRecordType[];
//   set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
//   set_complete: React.Dispatch<React.SetStateAction<boolean>>;
//   url: string;
//   confirmed: boolean;
//   set_confirmed: React.Dispatch<React.SetStateAction<boolean>>;
//   set_needreset: React.Dispatch<React.SetStateAction<boolean>>;
// }

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

  const defaultProps = {
    config: defaultConfig,
    mongo_data: [],
    set_mongodata: null_setter,
    booking_start: null,
    set_booking_start: null_setter,
    booking_end: null,
    set_booking_end: null_setter,
    bucket: null,
    set_bucket: null_setter,
    item: null,
    set_item: null_setter,
    email: "",
    set_email: null_setter,
    auxdata: [],
    set_auxdata: null_setter,
    set_complete: null_setter,
    url: "",
    confirmed: false,
    set_confirmed: null_setter,
    set_needreset: null_setter,
  };

  return render(<ProcessData {...defaultProps} {...props} />);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

test('expect ProcessData to render', () => {
  renderProcessData();

  const iistring = 'Insufficient Input';

  const iiElement = screen.getByText(iistring);
  expect(iiElement).toBeInTheDocument();
})

test('expect ProcessData to render', () => {
  const booking_start = new Date("2099-12-31T23:00");
  const booking_end = new Date("2099-12-31T23:59");
  const bucket = 0;
  const item = "apple";
  const email = "a@b.c";

  renderProcessData({booking_start: booking_start, booking_end: booking_end, bucket: bucket, item: item, email: email});

  const ftbstring = 'first test_bucket';

  const iiElement = screen.getByText(ftbstring);
  expect(iiElement).toBeInTheDocument();
})

test('expect ProcessData with auxilliary data to render', () => {
  const booking_start = new Date("2099-12-31T23:00");
  const booking_end = new Date("2099-12-31T23:59");
  const bucket = 0;
  const item = "apple";
  const email = "a@b.c";
  const auxilliaryConfig = {
    "APIPORT": 7345,
    "LCCOLLECTION": "test",
    "ITEM_NAME": "test_item",
    "ITEM_LABEL": "test_label",
    "BUCKET_NAME": "test_bucket",
    "BUCKETS": [
      {NAME: "first", ITEMS: ["alpha", "beta", "gamma"]},
      {NAME: "last", ITEMS: ["chi", "psi", "omega"]}
    ],
    "AUXILLIARY": [
      {"id": "1", "label": "favourite_colour", "dbname": "fav_colour"},
      {"id": "2", "label": "date_of_birth", "dbname": "notTHEre"}
    ]
  };

  const auxilliary = [
    {"id": "1", "value": "sausage"},
    {"id": "2", "value": "pudding"}
  ];

  renderProcessData({config: auxilliaryConfig, booking_start: booking_start, booking_end: booking_end, bucket: bucket, item: item, email: email, auxdata: auxilliary});

  const ftbstring = 'apple';
  const iiElement = screen.getByText(ftbstring);
  expect(iiElement).toBeInTheDocument();
})
