import { AuxDataRecordType } from './interfaces';
import { aux_exists } from './aux_exists';

export const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
  const matching_record = aux_exists(id, auxdata);
  if (matching_record !== undefined) {
    set_auxdata(
      auxdata.map((auxdata) =>
        auxdata.id === id
        ? { ...auxdata, value: evalue }
        : { ...auxdata }
      )
    );
    return matching_record;
  } else {
    const new_list = [ ...auxdata, {id: id, value: evalue }];
    set_auxdata(new_list);
    return {};
  }
};

export default onChangeFn;
