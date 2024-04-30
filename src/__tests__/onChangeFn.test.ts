/**
 * @vitest-environment jsdom
 */

import { onChangeFn } from '../components/onChangeFn';

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

// onChangeFn(e.target.value, props.id, props.auxdata, props.set_auxdata)
describe('onChangeFn should work', () => {
  
  const pres = [
    {id: "1234", value: "Jimmy Carter"},
    {id: "5678", value: "Ronald Reagan"},
    {id: "9012", value: "Bill Clinton"}
  ] ;

  it("with auxdata and missing id should return an empty dictionary", async () => {
    const retval = onChangeFn("42", "42", pres, null_setter);

    expect(retval).toStrictEqual({});
  });

  it(" with auxdata and missing id should return a non-empty dictionary", async () => {
    const retval = onChangeFn("42", "5678", pres, null_setter);

    expect(retval).toStrictEqual({"id": "5678", "value": "Ronald Reagan"});
  });
});
