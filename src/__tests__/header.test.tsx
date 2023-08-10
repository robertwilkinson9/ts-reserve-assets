/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';

import { Header } from '../components/header.tsx';

const renderHeader = () => {
  return render(<Header />);
}

describe('header test', () => {
  it("should contain a hr element", async () => {
    const { findByTestId } = renderHeader();

    const Ruler = await findByTestId("ruler");
    expect(Ruler).toContainElement(null);
  });
});
