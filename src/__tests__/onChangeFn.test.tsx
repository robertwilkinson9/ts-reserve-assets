import { onChangeFn } from '../components/onChangeFn';
describe('onChangeFn test', () => {
  const jc_pres = {id: "1234", value: "Jimmy Carter"};
  const pres = [
    {id: "1234", value: "Jimmy Carter"},
    {id: "5678", value: "Ronald Reagan"},
    {id: "9012", value: "Bill Clinton"}
  ] ;
  const evalue = "apple pie";
/* eslint-disable */
  const null_setter = () => {};
/* eslint-enable */


  const matching_id_string = "1234";
  it("onChangeFn: an item with a matching id should return true", async () => {
    expect(onChangeFn(evalue, matching_id_string, pres, null_setter)).toStrictEqual(jc_pres);
  });

  const non_matching_id_string = "4321";
  it("an item with a non matching id should return false", async () => {
    expect(onChangeFn(evalue, non_matching_id_string, pres, null_setter)).toBeFalsy;
  });
});
