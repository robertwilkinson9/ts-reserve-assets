/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { Header } from '../components/header';

const renderHeader = () => {
  return render(<Header />);
}

describe('header test', () => {
  it("should contain a hr element", async () => {
    renderHeader();
    const Ruler = screen.queryByTestId("header_ruler");
    expect(Ruler).toBeInTheDocument();
  });
});
