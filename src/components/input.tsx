import { Input, Text} from '@chakra-ui/react'

import { AuxDataRecordType } from './interfaces';

const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
  const exists = auxdata.filter((item) => {return id === item.id});

  if (exists.length) {
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

//  id: AuxIdType;
interface inputProps {
  label: string;
  id: string;
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
}

export const MyInput = (props: inputProps) => {
//  const labelfor = props.label + props.id;
  const labelfor = props.label;
  return (
    <div className="MyInput">
      <label data-testid="input_label" htmlFor={labelfor}>{labelfor}</label>
      <Text id="outlined-basic" />
      <Input onChange={(e) => onChangeFn(e.target.value, props.id, props.auxdata, props.set_auxdata)} />
    </div>
  )
}

export default MyInput
