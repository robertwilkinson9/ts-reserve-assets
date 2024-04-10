import { AuxDataRecordType } from './interfaces';

export const aux_exists = (id: string, auxdata: AuxDataRecordType[]) => {
  if (typeof auxdata === 'undefined') {
    return false;
  } else {
    return auxdata.find(o => o.id === id);
  }
};

export default aux_exists;
