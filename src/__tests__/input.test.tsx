/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { MyInput } from '../components/input';

const renderInput = () => {
  return render(<MyInput />);
}

describe('myinput test', () => {
  it("should contain a label with testid input_label", async () => {
    renderInput();
//    screen.debug();

    const input_label = screen.queryByTestId("input_label");
//    console.log("input_label");
//    screen.debug(input_label);

    expect(input_label).toBeInTheDocument();
  });
});

