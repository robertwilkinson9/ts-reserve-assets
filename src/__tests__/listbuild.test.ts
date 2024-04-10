/**
 * @vitest-environment jsdom
 */

import { listbuild } from '../components/listbuild';

describe('listbuild test', () => {
  it("check list for no prefix or suffix", async () => {
    const list = listbuild(2, 8);
    expect(list[0]).toBe("2");
  });

  it("check list for prefix", async () => {
    const list = listbuild(2, 8, "pf_", "");
    expect(list[0]).toBe("pf_2");
  });

  it("check list for prefix and suffix", async () => {
    const list = listbuild(2, 8, "pf_", "_sf");
    expect(list[1]).toBe("pf_3_sf");
  });
});

