/**
 * @vitest-environment jsdom
 */

// import { render } from '@testing-library/react';
import { render, screen } from '@testing-library/react';

import {ProcessDataProps} from '../components/interfaces'
import { ProcessData, auxdatamerge, tomorrow_from_day} from '../components/processdata';

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

// export interface configData {
//   APIPORT: string; // XXX should be a number?
//   LCCOLLECTION: string;
//   ITEM_NAME: string;
//   ITEM_LABEL: string;
//   BUCKET_NAME: string;
//   BUCKETS: bucketData[];
//   AUXILLIARY?: AuxConfigRecordType[];
// } 


// export const tomorrow_from_day = (startDateTime: Date): Date => {
// export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {

function renderProcessData(props: Partial<ProcessDataProps> = {}) {
  const defaultConfig = {
    "APIPORT": "7345",
    "LCCOLLECTION": "test",
    "ITEM_NAME": "test_item",
    "ITEM_LABEL": "test_label",
    "BUCKET_NAME": "test_bucket",
    "BUCKETS": [],
  }

  const defaultProps = {
    config: defaultConfig,
    mongo_data: [],
    set_mongodata: () => {},
    booking_start: null,
    set_booking_start: () => {},
    booking_end: null,
    set_booking_end: () => {},
    bucket: null,
    set_bucket: () => {},
    item: null,
    set_item: () => {},
    email: "",
    set_email: () => {},
    auxdata: [],
    set_auxdata: () => {},
    set_complete: () => {},
    url: "",
    confirmed: false,
    set_confirmed: () => {},
    set_needreset: () => {},
  };

  return render(<ProcessData {...defaultProps} {...props} />);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

test('expect ProcessData to render', () => {
//  const {getAllByText} = renderProcessData();
  renderProcessData();
//  screen.debug();

// const iistring = '<h4>Insufficient Input</h4>';
  const iistring = 'Insufficient Input';

  const iiElement = screen.getByText(iistring);
  expect(iiElement).toBeInTheDocument();

//  const iic = "INSUFFICIENT INPUT CONFIRMED!!";
//  const all_matches = element.getAllByText(iic);
//  expect(all_matches.length).toBe(1);
//  expect(all_matches).toBe("INSUFFICIENT INPUT CONFIRMED!!");
//  expect(element).toHaveTextContent("INSUFFICIENT INPUT CONFIRMED!!");
})

// export const tomorrow_from_day = (startDateTime: Date): Date => {
describe('tomorrow_from_day should work ', () => {
  it("should increment a date by one day", async () => {
    const now = new Date("2023-08-29T14:28:57.259Z");
    const tomorrow = tomorrow_from_day(now);

    expect(tomorrow.toISOString()).toBe("2023-08-30T14:28:57.259Z");
  });
});

// export interface AuxConfigRecordType  {
//   id: string;
//   label: string;
//   dbname: string;
// }
// 
// export interface AuxDataRecordType  {
//   id: string;
//   value: string;
// }

// export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {
describe('auxdatamerge should work ', () => {
  it("should default to an blank item", async () => {
    const adt = auxdatamerge([], []);

    expect(adt.length).toBe(0);
  });

  it("should add two single item arrays", async () => {
    
// export interface AuxConfigRecordType  {
//   id: string;
//   label: string;
//   dbname: string;
    const acrt = [{"id": "42", "label": "unlimited", "dbname": "remote_id"}];

    const adrt = [{"id": "42", "value": "mystring"}];
    const adt = auxdatamerge(acrt, adrt);

    expect(adt.length).toBe(1);
  });

  it("should create a correctly merged item when adding two single items", async () => {
    const acrt = [{"id": "42", "label": "unlimited", "dbname": "remote_id"}];
    const adrt = [{"id": "42", "value": "mystring"}];
    const aert = [{"id": "42", "label": "unlimited", "dbname": "remote_id", "value": "mystring"}];

    const adt = auxdatamerge(acrt, adrt);

    expect(adt).toStrictEqual(aert);
  });
});
