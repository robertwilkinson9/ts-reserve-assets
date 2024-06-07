/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { FormControl } from '@chakra-ui/react'

import { AddEmailProps } from '../components/interfaces'
import { AddEmail } from '../components/addemail';

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

function renderAddEmail(props: Partial<AddEmailProps> = {}) {
  const defaultProps = {
    email: "",
    set_email: null_setter,
  };

  return render(<FormControl id="emailForm"><AddEmail {...defaultProps} {...props} /></FormControl>);
}

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('it item contents', () => {
  it("should default to an blank item", async () => {
    renderAddEmail();

    const AddEmaillabel = screen.queryByTestId("emailaddress_label");
    expect(AddEmaillabel).toHaveTextContent('Email address');

    const AddEmail = screen.queryByTestId("emailaddress");
    expect(AddEmail).toContainElement(AddEmaillabel);
  });

/* 
typescript will not permit me to set a numeric (or non-string email address), so the test can not run

  it("should be able to set email if email supplied as non-string", async () => {
    const email = 42;

    const numberProps = {
      email: email,
      set_email: null_setter,
    };

    renderAddEmail(numberProps);
//    render(<FormControl id="emailForm"><AddEmail {...numberProps} /></FormControl>);

    const AddEmaillabel = screen.queryByTestId("emailaddress_label");
    expect(AddEmaillabel).toHaveTextContent('Email address');

    const AddEmail = screen.queryByTestId("emailaddress");
    expect(AddEmail).toContainElement(AddEmaillabel);
  });
*/

  it("should be able to set email", async () => {
    const email = "email@domain.org";
    const itemprops = {email: email};

    renderAddEmail(itemprops);

    const EmailAddresslabel = screen.queryByTestId("emailaddress_label");
    expect(EmailAddresslabel).toHaveTextContent("Email address");

    const EmailAddressInput = screen.getByLabelText("Email address");
    const EmailAddressInputValue = EmailAddressInput.getAttribute("value");

    expect(EmailAddressInputValue).toBe("email@domain.org");
  });
});
