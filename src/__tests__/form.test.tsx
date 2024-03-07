/**
 * @vitest-environment jsdom
 */


import { render, screen } from '@testing-library/react';

import {InputFormProps} from '../components/interfaces'
import { InputForm } from '../components/form';
import { overlap } from '../components/overlap';

const test_config = {
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


/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

function renderInputForm(props: Partial<InputFormProps> = {}) {
  const defaultProps = {
    id: "default",
    key: "default",
    config: test_config,
    bucket: 0,
    email: "",
    auxdata: [],
    mongo_data: [],
    booking_start: new Date("2099-12-31T23:30"),
    set_booking_start: null_setter,
    booking_end: new Date("2099-12-31T23:45"),
    set_booking_end: null_setter,
    set_bucket: null_setter,
    set_item: null_setter,
    set_email: null_setter,
    set_auxdata: null_setter,
    set_complete: null_setter,
  };

  return render(<InputForm  {...defaultProps} {...props} />);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('overlap function tests', () => {
  it("no overlap should be false", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T01:00");

    const xdate = new Date("1999-12-31T02:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(false);
  });

  it("overlap should be true", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T02:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should be true", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T03:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T02:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });
})

describe('it item contents', () => {
  it("should default to an blank item", async () => {
    renderInputForm();

    const InputFormlabel = screen.queryByTestId("emailaddress_label");
    expect(InputFormlabel).toHaveTextContent('Email address');

    const InputForm = screen.queryByTestId("emailaddress");
    expect(InputForm).toContainElement(InputFormlabel);
  });

  it("form should contain all parts", async () => {
    const email = "email@domain.org";
    const itemprops = {email: email};

    renderInputForm(itemprops);

    const calendar_label_0 = screen.queryAllByTestId("calendar_label")[0];
    expect(calendar_label_0).toBeInTheDocument();

    const calendar_datepicker_0 = screen.queryAllByTestId("calendar_datepicker")[0];
    expect(calendar_datepicker_0).toBeInTheDocument();

    const calendar_label_1 = screen.queryAllByTestId("calendar_label")[1];
    expect(calendar_label_1).toBeInTheDocument();

    const calendar_datepicker_1 = screen.queryAllByTestId("calendar_datepicker")[1];
    expect(calendar_datepicker_1).toBeInTheDocument();

    const bucket_label_div = screen.queryByTestId("bucket_label_div");
    expect(bucket_label_div).toBeInTheDocument();

    const bucket_label_label = screen.queryByTestId("bucket_label_label");
    expect(bucket_label_label).toBeInTheDocument();

    const bucket_div = screen.queryByTestId("bucket_div");
    expect(bucket_div).toBeInTheDocument();

    const bucket_button_checked = screen.queryByTestId("bucket_button_checked");
    expect(bucket_button_checked).toBeInTheDocument();

    const bucket_button_checked_input = screen.queryByTestId("bucket_button_checked_input");
    expect(bucket_button_checked_input).toBeInTheDocument();

    const bucket_button_checked_label = screen.queryByTestId("bucket_button_checked_label");
    expect(bucket_button_checked_label).toBeInTheDocument();

    const bucket_button_unchecked = screen.queryByTestId("bucket_button_unchecked");
    expect(bucket_button_unchecked).toBeInTheDocument();

    const bucket_button_unchecked_input = screen.queryByTestId("bucket_button_unchecked_input");
    expect(bucket_button_unchecked_input).toBeInTheDocument();

    const bucket_button_unchecked_label = screen.queryByTestId("bucket_button_unchecked_label");
    expect(bucket_button_unchecked_label).toBeInTheDocument();

    const items_div = screen.queryByTestId("items_div");
    expect(items_div).toBeInTheDocument();

    const items_label = screen.queryByTestId("items_label");
    expect(items_label).toBeInTheDocument();

    const EmailForm = screen.queryByTestId("emailaddress");
    expect(EmailForm).toBeInTheDocument();

    const EmailFormlabel = screen.queryByTestId("emailaddress_label");
    expect(EmailFormlabel).toBeInTheDocument();
  });

  it("first bucket should contain 10 items", async () => {
    const itemprops = {bucket: 0};
    renderInputForm(itemprops);

    const OptionsText = screen.queryAllByRole('option');
    expect(OptionsText.length).toBe(11); // 10 options and one label
  });

  it("second bucket should contain 5 items", async () => {
    const itemprops = {bucket: 1};
    renderInputForm(itemprops);

    const OptionsText = screen.queryAllByRole('option');
    expect(OptionsText.length).toBe(6); // 5 options and one label
  });
});
