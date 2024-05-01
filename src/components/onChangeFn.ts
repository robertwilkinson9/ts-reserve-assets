import { AuxDataRecordType } from './interfaces';
import { get_matching_aux_record } from './get_matching_aux_record';

export const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
  const matching_record = get_matching_aux_record(id, auxdata);
  if (matching_record === undefined) {
    const new_list = [ ...auxdata, {id: id, value: evalue }];
    set_auxdata(new_list);
    return {};
  } else {
    set_auxdata(
      auxdata.map((auxdata) =>
        auxdata.id === id
        ? { ...auxdata, value: evalue }
        : { ...auxdata }
      )
    );
    return matching_record;
  }
};

export default onChangeFn;
