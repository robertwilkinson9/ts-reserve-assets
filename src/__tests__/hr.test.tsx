import { render } from '@testing-library/react';

import { Myhr } from '../components/hr.tsx'

describe('myhr test', () => {
  const { findByTestId } = render(<Myhr />);
})

//describe('myhr test', async () => {
//  const Ruler = await findByTestId("header_ruler");
//  expect(Ruler).toContainElement(null);
