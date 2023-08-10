import { add } from '../components/add.tsx'

describe('add test', () => {
  it("should add numbers", async () => {
    expect(add(2,3)).toBe(5);
  });
});
