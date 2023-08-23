import TextField from '@mui/material/TextField';
// import { TextField } from '@mui/material';

// const onSubmit = (v: object) => alert('Submit value: ' + JSON.stringify(v, null, 2))

interface inputMandatoryProps {
  label: string;
}

interface inputOptionalProps {
  count: number;
}

interface inputProps extends inputMandatoryProps, inputOptionalProps {}

const defaultProps: inputOptionalProps = {
  count: 0,
}

export const Input = (props: inputProps) => {
  const labelfor = props.label + props.count;
  return (
    <div className="Input">
      <label data-testid="input_label" htmlFor={labelfor}>{labelfor}</label>
      <TextField id="outlined-basic" label={props.label} variant="outlined" />
    </div>
  )
}

Input.defaultProps = defaultProps;

export default Input
