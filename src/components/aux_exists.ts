/**
*
* This file handles update of any auxilliary input fields
* if any auxilliary fields are defined in the config file
*
*/

import { AuxDataRecordType } from './interfaces';

export const aux_exists = (id: string, auxdata: AuxDataRecordType[]) => {return auxdata.find(o => o.id === id);};

export default aux_exists;
