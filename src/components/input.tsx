/**
*
* This file handles update of any auxilliary input fields
* if any auxilliary fields are defined in the config file
*
*/

import { Input, Text} from '@chakra-ui/react'

import { AuxDataRecordType } from './interfaces';
import { onChangeFn } from './onChangeFn';

//  id: AuxIdType;
interface inputProps {
  label: string;
  id: string;
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
}

export const MyInput = (props: inputProps) => {
  const labelfor = props.label;
  const testid = `${labelfor}_input`;
  console.log(`TestId is ${testid}`);
  return (
    <div className="MyInput">
      <label data-testid="input_label" htmlFor={labelfor}>{labelfor}</label>
      <Text id="outlined-basic" />
      <Input data-testid={testid} onChange={(e) => onChangeFn(e.target.value, props.id, props.auxdata, props.set_auxdata)} />
    </div>
  )
}

export default MyInput
