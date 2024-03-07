/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { MyInput } from '../components/input';
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

/*
// const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
describe('onChangeFn test', () => {
  const jc_pres = {id: "1234", value: "Jimmy Carter"};
  const pres = [
    {id: "1234", value: "Jimmy Carter"},
    {id: "5678", value: "Ronald Reagan"},
    {id: "9012", value: "Bill Clinton"}
  ] ;
  const evalue = "apple pie";
  const id = "3456";
  const null_setter = () => {};

  const matching_id_string = "1234";
  it("onChangeFn: an item with a matching id should return true", async () => {
    expect(onChangeFn(evalue, id, pres, null_setter)).toStrictEqual(jc_pres);
  });

  const non_matching_id_string = "234";
  it("an item with a non matching id should return false", async () => {
    expect(onChangeFn(evalue, id, pres, null_setter)).toBeFalsy;
  });
});
*/

const renderInput = () => {
  return render(<MyInput />);
}

describe('myinput test', () => {
  it("should contain a label with testid input_label", async () => {
    renderInput();
    screen.debug();

    const input_label = screen.queryByTestId("input_label");
    console.log("input_label");
    screen.debug(input_label);

    expect(input_label).toBeInTheDocument();
  });
});

