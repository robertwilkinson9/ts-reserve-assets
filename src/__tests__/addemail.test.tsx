/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

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
    const { queryByTestId } = renderAddEmail();

    const AddEmaillabel = screen.queryByTestId("emailaddress_label");
    expect(AddEmaillabel).toHaveTextContent('Email address');

    const AddEmail = screen.queryByTestId("emailaddress");
    expect(AddEmail).toContainElement(AddEmaillabel);
  });

  it("should be able to set email", async () => {
    const user = userEvent.setup()
    const email = "email@domain.org";
    const itemprops = {email: email};

    const { queryByTestId } = renderAddEmail(itemprops);

    const EmailAddressdiv = screen.queryByTestId("emailaddress");

    const EmailAddresslabel = screen.queryByTestId("emailaddress_label");
    expect(EmailAddresslabel).toHaveTextContent("Email address");

    const EmailAddressInput = screen.getByLabelText("Email address");
    const EmailAddressInputValue = EmailAddressInput.getAttribute("value");

    expect(EmailAddressInputValue).toBe("email@domain.org");
  });
});
