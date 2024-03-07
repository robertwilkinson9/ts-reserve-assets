/**
 * @vitest-environment jsdom
 */

import { tomorrow_from_day } from '../components/tomorrow_from_day';

describe('tomorrow_from_day should work ', () => {
  it("should increment a date by one day", async () => {
    const now = new Date("2023-08-29T14:28:57.259Z");
    const tomorrow = tomorrow_from_day(now);

    expect(tomorrow.toISOString()).toBe("2023-08-30T14:28:57.259Z");
  });
});
