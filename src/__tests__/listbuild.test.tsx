/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';

import { Items } from '../components/items';
import { listbuild } from '../components/listbuild';

describe('listbuild test', () => {
  it("check list for prefix show No SELECT items", async () => {
    render(<Items />);
    const list = listbuild(2, 8, "pf_", "");
    expect(list[0]).toBe("pf_2");
  });

  it("check list for suffix show No SELECT items", async () => {
    render(<Items />);
    const list = listbuild(2, 8, "pf_", "_sf");
    expect(list[1]).toBe("pf_3_sf");
  });
});

