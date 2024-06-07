/**
 * @vitest-environment jsdom
 */

import { get_matching_aux_record } from '../components/get_matching_aux_record';

describe('get_matching_aux_record test', () => {
  const jc_pres = {id: "1234", value: "Jimmy Carter"};
  const pres = [
    {id: "1234", value: "Jimmy Carter"},
    {id: "5678", value: "Ronald Reagan"},
    {id: "9012", value: "Bill Clinton"}
  ] ;

  const matching_id_string = "1234";
  it("get_matching_aux_record: an item with a matching id should return true", async () => {
    expect(get_matching_aux_record(matching_id_string, pres)).toStrictEqual(jc_pres);
  });

  const non_matching_id_string = "234";
  it("an item with a non matching id should return false", async () => {
    expect(get_matching_aux_record(non_matching_id_string, pres)).toBeFalsy;
  });

  it("an item with an undefined list should return false", async () => {
    expect(get_matching_aux_record(non_matching_id_string, [])).toBeFalsy;
  });
});
