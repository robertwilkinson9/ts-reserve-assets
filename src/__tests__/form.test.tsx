/**
 * @vitest-environment jsdom
 */


import { render } from '@testing-library/react';

import Form from 'react-bootstrap/Form';

import {InputFormProps} from '../components/interfaces'
import InputForm from '../components/form';

const test_config = {
  "APIPORT": "1234",
  "ITEM_NAME": "test_items_name",
  "ITEM_LABEL": "test_items_label",
  "BUCKET_NAME": "test_items",
  "BUCKETS":
  [
    {
      "name": "first",
      "prefix": "f",
      "ifirst": 1,
      "ilast": 10
    },
    {
      "name": "second",
      "prefix": "s",
      "ifirst": 11,
      "ilast": 20
    }
  ]
}

const null_setter = () => {};

function renderInputForm(props: Partial<InputFormProps> = {}) {
  const defaultProps = {
    config: test_config,
    bucket: 0,
    email: "",
  };

  return render(<InputForm  {...defaultProps} {...props} />);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('it item contents', () => {
  it("should default to an blank item", async () => {
    const { findByTestId } = renderInputForm();

    const InputFormlabel = await findByTestId("emailaddress_label");
    expect(InputFormlabel).toHaveTextContent('Email address');

    const InputFormcontrol = await findByTestId("emailaddress_control");
    expect(InputFormcontrol).toBeInTheDocument();

//   const InputForm = await findByTestId("emailaddress");
//   expect(InputForm).toContainElement(InputFormlabel);
//   expect(InputForm).toContainElement(InputFormcontrol);
  });

  it("form should contain all parts", async () => {
//grep testid form.html 
    const email = "email@domain.org";
    const itemprops = {email: email};

    const { findByTestId, queryAllByTestId } = renderInputForm(itemprops);

//        data-testid="calendar_label"
//        data-testid="calendar_datepicker"
//        data-testid="calendar_label"
//        data-testid="calendar_datepicker"

    const calendar_label_0 = await queryAllByTestId("calendar_label")[0];
    expect(calendar_label_0).toBeInTheDocument();

    const calendar_datepicker_0 = await queryAllByTestId("calendar_datepicker")[0];
    expect(calendar_datepicker_0).toBeInTheDocument();

    const calendar_label_1 = await queryAllByTestId("calendar_label")[1];
    expect(calendar_label_1).toBeInTheDocument();

    const calendar_datepicker_1 = await queryAllByTestId("calendar_datepicker")[1];
    expect(calendar_datepicker_1).toBeInTheDocument();

//        data-testid="bucket_label_div"
//            data-testid="bucket_label_label"
//        data-testid="bucket_div"

    const bucket_label_div = await findByTestId("bucket_label_div");
    expect(bucket_label_div).toBeInTheDocument();

    const bucket_label_label = await findByTestId("bucket_label_label");
    expect(bucket_label_label).toBeInTheDocument();

    const bucket_div = await findByTestId("bucket_div");
    expect(bucket_div).toBeInTheDocument();

//          data-testid="bucket_button_checked"
//              data-testid="bucket_button_checked_input"
//              data-testid="bucket_button_checked_label"
//          data-testid="bucket_button_unchecked"
//              data-testid="bucket_button_unchecked_input"
//              data-testid="bucket_button_unchecked_label"

    const bucket_button_checked = await findByTestId("bucket_button_checked");
    expect(bucket_button_checked).toBeInTheDocument();

    const bucket_button_checked_input = await findByTestId("bucket_button_checked_input");
    expect(bucket_button_checked_input).toBeInTheDocument();

    const bucket_button_checked_label = await findByTestId("bucket_button_checked_label");
    expect(bucket_button_checked_label).toBeInTheDocument();

    const bucket_button_unchecked = await findByTestId("bucket_button_unchecked");
    expect(bucket_button_unchecked).toBeInTheDocument();

    const bucket_button_unchecked_input = await findByTestId("bucket_button_unchecked_input");
    expect(bucket_button_unchecked_input).toBeInTheDocument();

    const bucket_button_unchecked_label = await findByTestId("bucket_button_unchecked_label");
    expect(bucket_button_unchecked_label).toBeInTheDocument();

//        data-testid="items_div"
//          data-testid="items_label"
//        data-testid="emailaddress"
//            data-testid="emailaddress_label"
//            data-testid="emailaddress_control"

    const items_div = await findByTestId("items_div");
    expect(items_div).toBeInTheDocument();

    const items_label = await findByTestId("items_label");
    expect(items_label).toBeInTheDocument();

    const EmailForm = await findByTestId("emailaddress");
    expect(EmailForm).toBeInTheDocument();

    const EmailFormlabel = await findByTestId("emailaddress_label");
    expect(EmailFormlabel).toBeInTheDocument();

    const EmailFormcontrol = await findByTestId("emailaddress_control");
    expect(EmailFormcontrol).toBeInTheDocument();
  });
});