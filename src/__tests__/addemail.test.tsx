/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';

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

//  it("should be able to set email", async () => {
//    const email = "email@domain.org";
//    const itemprops = {email: email};
//
//    const { findByTestId } = renderAddEmail(itemprops);
//
//    const AddEmail = await findByTestId("emailaddress_control");
//    expect(AddEmail).toHaveTextContent("Q1");
//
//    const AddEmaillabel = await findByTestId("addemail_label");
//    expect(AddEmaillabel).toHaveTextContent("label7");
//
//    const AddEmailcontrol = await findByTestId("addemail_control");
//    expect(AddEmailcontrol).toHaveTextContent("control1");
//  });
});
