import { add } from '../components/add.tsx'
import { Header } from '../components/header.tsx'
import Form from 'react-bootstrap/Form'

describe("First set", () => {
  test("first test", () => {
  })
})

describe('add test', () => {
  it("should add numbers", async () => {
    expect(add(2,3)).toBe(5);
  });
});

describe('form test', () => {
  it('should sho form', async () => {
//    expect(Form).toBe(6);
  })
})

describe('header test', () => {
  it('should sho header', async () => {
//    expect(Header).toBe(6);
    expect(Header).toBe(6);
  })
})
