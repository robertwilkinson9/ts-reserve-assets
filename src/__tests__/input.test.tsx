/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { inputProps } from '../components/interfaces';

import { MyInput } from '../components/input';

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

const renderInput = (props: Partial<inputProps> = {}) => {
  const defaultProps = {
    label: "default",
    id: "default",
    auxdata: [],
    set_auxdata: null_setter,
  };

  return render(<MyInput  {...defaultProps} {...props} />);
}

describe('myinput test', () => {
  it("should contain a label with testid input_label", async () => {
    renderInput();
    const input_label = screen.queryByTestId("input_label");
    expect(input_label).toBeInTheDocument();
  });
});
