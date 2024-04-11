/**
 * @vitest-environment jsdom
 */

import { capitalizeFirstLetter } from '../components/capitalizeFirstLetter';


describe('capitalise first letter test', () => {
  it("should return Apple for input of apple", async () => {
    const cfl_apple = capitalizeFirstLetter("apple");
    expect(cfl_apple).toBe("Apple");
  });
  it("should return APPLE for input of APPLE", async () => {
    const cfl_apple = capitalizeFirstLetter("APPLE");
    expect(cfl_apple).toBe("APPLE");
  });
  it("should return empty string for input of empty string", async () => {
    const cfl_empty = capitalizeFirstLetter("");
    expect(cfl_empty).toBe("");
  });
});
