/**
 * @vitest-environment jsdom
 */

import { auxdatamerge } from '../components/auxdatamerge';

// export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {
describe('auxdatamerge should work ', () => {
  it("should default to an blank item", async () => {
    const adt = auxdatamerge([], []);

    expect(adt.length).toBe(0);
  });

  it("should add two single item arrays", async () => {
    const acrt = [{"id": "42", "label": "unlimited", "dbname": "remote_id"}];
    const adrt = [{"id": "42", "value": "mystring"}];
    const adt = auxdatamerge(acrt, adrt);
    expect(adt.length).toBe(1);
    const adt_hash = adt[0];
    expect(adt_hash['label']).toBe("unlimited");
    expect(adt_hash['value']).toBe("mystring");
  });

  it("should create a correctly merged item when adding two single items", async () => {
    const acrt = [{"id": "42", "label": "unlimited", "dbname": "remote_id"}];
    const adrt = [{"id": "42", "value": "mystring"}];
    const aert = [{"id": "42", "label": "unlimited", "dbname": "remote_id", "value": "mystring"}];

    const adt = auxdatamerge(acrt, adrt);

    expect(adt).toStrictEqual(aert);
  });
});
