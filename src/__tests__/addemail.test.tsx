/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

//import Form from 'react-bootstrap/Form';
// import { Button, ChakraProvider, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import { FormControl } from '@chakra-ui/react'

import {AddEmailProps} from '../components/interfaces'
import AddEmail from '../components/addemail.tsx';

function renderAddEmail(props: Partial<AddEmailProps> = {}) {
  const defaultProps = {
    email: "",
    set_email: () => {},
  };

  return render(<FormControl id="emailForm"><AddEmail {...defaultProps} {...props} /></FormControl>);
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

   const AddEmail = await findByTestId("emailaddress");
   expect(AddEmail).toContainElement(AddEmaillabel);
  });

  it("should be able to set email", async () => {
    const user = userEvent.setup()
    const email = "email@domain.org";
    const itemprops = {email: email};

    const { findByTestId } = renderAddEmail(itemprops);
//    screen.debug()

    const EmailAddressdiv = await findByTestId("emailaddress");

    const EmailAddresslabel = await findByTestId("emailaddress_label");
    expect(EmailAddresslabel).toHaveTextContent("Email address");

    const EmailAddressInput = screen.getByLabelText("Email address");
//    console.log("EmailAddressInput");
//    screen.debug(EmailAddressInput);
//    expect(EmailAddressInput).textContent.toBe("enter Email address");
//    expect(EmailAddressInput).toBe("enter Email address");

    const EmailAddressInputValue = screen.getByLabelText("Email address").getAttribute("value");
//    console.log("EmailAddressInputValue");
//    console.log(EmailAddressInputValue);
    expect(EmailAddressInputValue).toBe("email@domain.org");

//    const clicked = await user.click(EmailAddressInput);
//    console.log("Clicked");
//    screen.debug(clicked);

//    expect(
//    const email_input = screen.
//    const EmailAddress = await user.click('input');
//    expect(EmailAddress).toBe("Email address");
  });
});
