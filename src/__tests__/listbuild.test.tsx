/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';

import { Items } from '../components/items';
import { listbuild } from '../components/listbuild';

describe('listbuild test', () => {
  it("check list for no prefix or suffix", async () => {
    render(<Items />);
    const list = listbuild(2, 8);
    expect(list[0]).toBe("2");
  });

  it("check list for prefix", async () => {
    render(<Items />);
    const list = listbuild(2, 8, "pf_", "");
    expect(list[0]).toBe("pf_2");
  });

  it("check list for prefix and suffix", async () => {
    render(<Items />);
    const list = listbuild(2, 8, "pf_", "_sf");
    expect(list[1]).toBe("pf_3_sf");
  });
});

