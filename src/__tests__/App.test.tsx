/**
 * @vitest-environment jsdom
 */

// Imports
import { describe, it, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

// To Test
import App from '../App';

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<App />);
        const h1 = await screen.queryByText('Vite + React');

        // Expectations
        expect(h1).not.toBeNull();
    });
});
