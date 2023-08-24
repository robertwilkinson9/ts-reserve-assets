import TextField from '@mui/material/TextField';
// import { AuxIdType, AuxDataRecordType } from './interfaces';
import { AuxDataRecordType } from './interfaces';

// const onSubmit = (v: object) => alert('Submit value: ' + JSON.stringify(v, null, 2))
//const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>, id: AuxIdType) => {
//const onChangeFn = (e, id, auxdata, set_auxdata) : (React.ChangeEvent<HTMLInputElement>, AuxIdType, AuxDataRecordType[], React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
// const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>, id: AuxIdType, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
const onChangeFn = (evalue: string, id: string, auxdata: AuxDataRecordType[], set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>) => {
//  console.log(`id is ${id}, evalue is ${evalue}`);
//  console.log("AUXDATA OUTSIDE");
//  console.log(auxdata);
//  auxdata = {..auxdata, {id: id, value: evalue}
//  const exists = auxdata.filter((item) => {console.log(`id is ${id}, item.id is ${item.id}`); return id === item.id});
  const exists = auxdata.filter((item) => {return id === item.id});
//  console.log(`EXISTS FOLLOWS and length is ${exists.length}`);
//  console.log(exists);
  if (exists.length) {
//    console.log(`EXISTS.LENGTH is true`);
    set_auxdata(
      auxdata.map((auxdata) =>
        auxdata.id === id
        ? { ...auxdata, value: evalue }
        : { ...auxdata }
      )
    );
  } else {
//    console.log(`EXISTS.LENGTH is false`);
//    console.log("AUXDATA INSIDE");
//    console.log(auxdata);
    const new_list = [ ...auxdata, {id: id, value: evalue }];
//    console.log("NEW_LIST");
//    console.log(new_list);
    set_auxdata(new_list);
  }
//  console.log("AUXDATA OUTSIDE");
//  console.log(auxdata);
};

//  id: AuxIdType;
interface inputProps {
  label: string;
  id: string;
  auxdata: AuxDataRecordType[];
  set_auxdata: React.Dispatch<React.SetStateAction<AuxDataRecordType[]>>;
}

export const Input = (props: inputProps) => {
  const labelfor = props.label + props.id;
  return (
    <div className="Input">
      <label data-testid="input_label" htmlFor={labelfor}>{labelfor}</label>
      <TextField id="outlined-basic" label={props.label} variant="outlined" onChange={(e) => onChangeFn(e.target.value, props.id, props.auxdata, props.set_auxdata)} />
{ /*
      <TextField id="outlined-basic" label={props.label} variant="outlined" onChange={onChangeFn(e, props.id, props.auxdata, props.set_auxdata)} />
      <TextField id="outlined-basic" label={props.label} variant="outlined" value={props.value} onChange={onChangeFn(e, props.id, props.auxdata, props.set_auxdata)} />
      <TextField id="outlined-basic" label={props.label} variant="outlined" value={props.value} />
*/ }
    </div>
  )
}

export default Input
