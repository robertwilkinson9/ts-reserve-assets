/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';

import Form from 'react-bootstrap/Form';

import {AddEmailProps} from '../components/interfaces'
import AddEmail from '../components/addemail.tsx';

function renderAddEmail(props: Partial<AddEmailProps> = {}) {
  const defaultProps = {
    email: "",
    set_email: () => {},
  };

  return render(<Form id="emailForm"><AddEmail {...defaultProps} {...props} /></Form>);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('it item contents', () => {
  it("should default to an blank item", async () => {
    const { findByTestId } = renderAddEmail();

    const AddEmaillabel = await findByTestId("emailaddress_label");
    expect(AddEmaillabel).toHaveTextContent('Email address');

    const AddEmailcontrol = await findByTestId("emailaddress_control");
    expect(AddEmailcontrol).toBeInTheDocument();

   const AddEmail = await findByTestId("emailaddress");
   expect(AddEmail).toContainElement(AddEmaillabel);
   expect(AddEmail).toContainElement(AddEmailcontrol);
  });

  it("should be able to set email", async () => {
//    const email = "email@domain.org";
//    const itemprops = {email: email};
//
//    const { findByTestId } = renderAddEmail(itemprops);
//
//    const AddEmail = await findByTestId("addemail");
//    expect(AddEmail).toHaveTextContent("1");
//
//    const AddEmaillabel = await findByTestId("addemail_label");
//    expect(AddEmaillabel).toHaveTextContent("label1");
//
//    const AddEmailcontrol = await findByTestId("addemail_control");
//    expect(AddEmailcontrol).toHaveTextContent("control1");
  });
});
