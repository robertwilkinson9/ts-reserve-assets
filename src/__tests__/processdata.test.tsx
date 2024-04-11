/**
 * @vitest-environment jsdom
 */
//<<<<<<< HEAD
//import { render, screen } from '@testing-library/react';
//import { describe, test, expect, vi } from 'vitest'
//import axios, { } from 'axios';
//
//import {ProcessDataProps} from '../components/interfaces'
//import { ProcessData } from '../components/processdata';
//
//const mockedImplementation = () => Promise.resolve({ 
//  json() {
//    return { data: {id: 'mocked id'}}
//  }
//});
//=======
//import { render } from '@testing-library/react';
//import { render, screen } from '@testing-library/react';

// import {ProcessDataProps} from '../components/interfaces'
// import { ProcessData, auxdatamerge, tomorrow_from_day} from '../components/processdata';
import { auxdatamerge, tomorrow_from_day} from '../components/processdata';

// export const tomorrow_from_day = (startDateTime: Date): Date => {
// export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {

/*
function renderProcessData(props: Partial<ProcessDataProps> = {}) {
  const defaultConfig = {
    "APIPORT": 7345,
    "LCCOLLECTION": "test",
    "ITEM_NAME": "test_item",
    "ITEM_LABEL": "test_label",
    "BUCKET_NAME": "test_bucket",
//<<<<<<< HEAD
//    "BUCKETS": [
//      {NAME: "first", ITEMS: ["alpha", "beta", "gamma"]},
//      {NAME: "last", ITEMS: ["chi", "psi", "omega"]}
//    ]
//  };
    "BUCKETS": [],
  }

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
*/

describe ('processData', () => {
  let originalAxiosPost;

  beforeAll(() => {
    originalAxiosPost = axios.post;
    axios.post = vi.fn(mockedImplementation);
  });

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
    const item = "apple1";
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
    const item = "apple2";
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

    const ftbstring = 'apple2';
    const iiElement = screen.getByText(ftbstring);
    expect(iiElement).toBeInTheDocument();
  })

  test('expect confirmed ProcessData to render', () => {
    const booking_start = new Date("2099-12-31T23:00");
    const booking_end = new Date("2099-12-31T23:59");
    const bucket = 0;
    const item = "apple4";
    const email = "a@b.c";
    const confirmed = true;

    renderProcessData({booking_start: booking_start, booking_end: booking_end, bucket: bucket, item: item, email: email, confirmed: confirmed});

  //  screen.debug();
    const il_string = "items_label";

    const il_element = screen.getByTestId(il_string);
    expect(il_element).toBeInTheDocument();
  })

  afterAll(() => {
    axios.post = originalAxiosPost;
  });
})

