/**
 * @vitest-environment jsdom
 */

import { aux_exists } from '../components/aux_exists';

describe('aux_exists test', () => {
  const jc_pres = {id: "1234", value: "Jimmy Carter"};
  const pres = [
    {id: "1234", value: "Jimmy Carter"},
    {id: "5678", value: "Ronald Reagan"},
    {id: "9012", value: "Bill Clinton"}
  ] ;

  const matching_id_string = "1234";
  it("aux_exists: an item with a matching id should return true", async () => {
    expect(aux_exists(matching_id_string, pres)).toStrictEqual(jc_pres);
  });

  const non_matching_id_string = "234";
  it("an item with a non matching id should return false", async () => {
    expect(aux_exists(non_matching_id_string, pres)).toBeFalsy;
  });
});
