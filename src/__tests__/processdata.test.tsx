/**
 * @vitest-environment jsdom
 */

//import { render } from '@testing-library/react';
//import { render, screen } from '@testing-library/react';

// import {ProcessDataProps} from '../components/interfaces'
// import { ProcessData, auxdatamerge, tomorrow_from_day} from '../components/processdata';
import { tomorrow_from_day } from '../components/tomorrow_from_day';
import { auxdatamerge } from '../components/auxdatamerge';

// export const tomorrow_from_day = (startDateTime: Date): Date => {
// export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {

/*
function renderProcessData(props: Partial<ProcessDataProps> = {}) {
  const defaultConfig = {
    "APIPORT": 7345,
    "COLLECTION": "test",
    "ITEM_NAME": "test_item",
    "ITEM_LABEL": "test_label",
    "BUCKET_NAME": "test_bucket",
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

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

/*
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
*/

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
