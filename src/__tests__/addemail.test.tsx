import React from 'react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";

import Form from 'react-bootstrap/Form';

import {todoItemProps} from './components/interfaces'
import AddEmail from '../components/addemail.tsx';

function renderAddEmail(props: Partial<AddEmailProps> = {}) {
  const defaultProps: AddEmailProps = {
    email: ""
  };

  return render(<Form id="emailForm"><AddEmail {...defaultProps} {...props} /></Form>);
}

describe('test item contents', () => {
  test("should default to an blank item", async () => {
    const { findByTestId } = renderAddEmail();

    const AddEmail = await findByTestId("addemail");
    expect(AddEmail).not.toHaveTextContent();

    const AddEmaillabel = await findByTestId("addemail_label");
    expect(AddEmaillabel).not.toHaveTextContent();

    const AddEmailcontrol = await findByTestId("addemail_control");
    expect(AddEmailcontrol).not.toHaveTextContent();
  });

  test("should be able to set email", async () => {
    const email = "email@domain.org";
    const itemprops = {email: email};

    const { findByTestId } = renderAddEmail(itemprops);

    const AddEmail = await findByTestId("addemail");
    expect(AddEmail).toHaveTextContent("1");

    const AddEmaillabel = await findByTestId("addemail_label");
    expect(AddEmaillabel).toHaveTextContent("label1");

    const AddEmailcontrol = await findByTestId("addemail_control");
    expect(AddEmailcontrol).toHaveTextContent("control1");
  });
});
