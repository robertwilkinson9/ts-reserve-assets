/**
 * @vitest-environment jsdom
 */

import { overlap } from '../components/overlap';

describe('overlap function tests', () => {
  it("no overlap should be false", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T01:00");

    const xdate = new Date("1999-12-31T02:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(false);
  });

  it("overlap should be true : b > x and b < y", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T02:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("overlap should be true : y > a and y < b", async () => {
    const adate = new Date("1999-12-31T01:00");
    const bdate = new Date("1999-12-31T03:00");

    const xdate = new Date("1999-12-31T00:00");
    const ydate = new Date("1999-12-31T02:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should be true", async () => {
    const adate = new Date("1999-12-31T01:00");
    const bdate = new Date("1999-12-31T03:00");

    const xdate = new Date("1999-12-31T00:00");
    const ydate = new Date("1999-12-31T02:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should again be true", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T03:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T02:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should be and again true", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T02:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should be again and again be true", async () => {
    const adate = new Date("1999-12-31T00:00");
    const bdate = new Date("1999-12-31T03:00");

    const xdate = new Date("1999-12-31T01:00");
    const ydate = new Date("1999-12-31T02:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });

  it("containment should be once more be true", async () => {
    const adate = new Date("1999-12-31T01:00");
    const bdate = new Date("1999-12-31T02:00");

    const xdate = new Date("1999-12-31T00:00");
    const ydate = new Date("1999-12-31T03:00");

    const overlap_result = overlap(adate, bdate, xdate, ydate);
    expect(overlap_result).toBe(true);
  });
})
