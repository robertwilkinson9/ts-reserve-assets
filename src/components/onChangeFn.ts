import { AuxDataRecordType } from './interfaces';
import { get_matching_aux_record } from './get_matching_aux_record';

export const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
  console.log("onChangeFn");
  console.log("auxdata");
  console.dir(auxdata);
  const matching_record = get_matching_aux_record(id, auxdata);
  console.log("onChangeFn");
  console.log("matching_record");
  console.dir(matching_record);
  if (matching_record === undefined) {
    const new_list = [ ...auxdata, {id: id, value: evalue }];
    console.log("onChangeFn");
    console.log("new_list");
    console.dir(new_list);
    set_auxdata(new_list);
    return {};
  } else {
    console.log("XXX onChangeFn");
    set_auxdata(
      auxdata.map((auxdata) =>
        auxdata.id === id
        ? { ...auxdata, value: evalue }
        : { ...auxdata }
      )
    );
    console.log("onChangeFn");
    console.log("matching_record");
    console.dir(matching_record);
    return matching_record;
  }
};

export default onChangeFn;
