import { AuxDataRecordType } from './interfaces';

export const get_matching_aux_record = (id: string, auxdata: AuxDataRecordType[]) => {
  if ((typeof auxdata !== 'undefined') && (Array.isArray(auxdata)) && auxdata.length) {
    return auxdata.find(o => o.id === id);
  }
};

export default get_matching_aux_record;
