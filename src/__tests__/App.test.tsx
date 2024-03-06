// import { describe, it, expect, test } from 'vitest';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { App } from '../App';

const renderApp = () => {
  return render(<App />);
}

describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
      const app_string = await renderToString(<App />);
//      console.log("app_string");
//      console.log(app_string);
      expect(app_string).toMatchSnapshot();
    });
});
