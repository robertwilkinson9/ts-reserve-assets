/**
 * @vitest-environment jsdom
 */

import { get_non_empty_bucket } from '../components/get_non_empty_bucket';

describe('get_non_empty_buckets test', () => {
  it("check that if items available for a bucket, that bucket should be returned", async () => {
    const retval0 = get_non_empty_bucket(0, [true, false]);
    expect(retval0).toBe(0);
    const retval2 = get_non_empty_bucket(2, [true, false, true]);
    expect(retval2).toBe(2);
  });

  it("check that if items are unavailable for a bucket, the firstnon-empty  bucket should be returned", async () => {
    const retval1 = get_non_empty_bucket(0, [false, true, false, true]);
    expect(retval1).toBe(1);
    const retval2 = get_non_empty_bucket(2, [false, true, false, true]);
    expect(retval2).toBe(1);
  });
});

