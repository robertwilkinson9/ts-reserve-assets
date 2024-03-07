/**
*
* This file handles update of any auxilliary input fields
* if any auxilliary fields are defined in the config file
*
*/

import { AuxDataRecordType } from './interfaces';
import { aux_exists } from './aux_exists';

export const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
  if (aux_exists.length) {
    set_auxdata(
      auxdata.map((auxdata) =>
        auxdata.id === id
        ? { ...auxdata, value: evalue }
        : { ...auxdata }
      )
    );
  } else {
    const new_list = [ ...auxdata, {id: id, value: evalue }];
    set_auxdata(new_list);
  }
};

export default onChangeFn;
