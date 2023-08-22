import { useContext, useEffect, useState } from 'react'
import FormContext from './FormContext'

import './InputField.css'

const splitCamelCase = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z0-9])/g, '$1 $2')
    .replace(/^([a-z])/, (x: string) => x.toUpperCase())

type PropsType = {
  name: string;
  label?:string;
  type?:string;
  onValidate: (v: string) => string | null;
};

interface IStringIndex {
    [key: string]: any
}

const InputField = (props: PropsType) => {
  const form: IStringIndex = useContext(FormContext)
  console.log("FORM IS");
  console.log(form);

  const [error, setError] = useState('')
//  const [error, setError] = useState({})

  const { onValidate, name, label, ...otherProps } = props

  let value: string = "";
  if ((form) && (form.value)) {
    value = form.value && form.value(name)
    console.log("FORM VALUE IS");
    console.log(form.value);
  }

  useEffect(() => {
    if (onValidate) {
      const valid_value = onValidate(value);
      if (valid_value) {
        setError(valid_value);
      }
    }
  }, [onValidate, value])

//  let setInvalid;
  let setInvalid: any;
//  let setInvalid: (name: string, error: string) => boolean = null;
  if (form && (form.setInvalid)) {
    setInvalid = form.setInvalid
  }

  useEffect(() => {
    if (setInvalid) {
      setInvalid(name, error)
    }
  }, [setInvalid, name, error])

//  if (form && (!form.value)) {
//    return 'InputField should be wrapped in a form'
//  }

  let fsd : (v: string) => boolean;
  if (form && (form.setDirty)) {
    fsd = form.setDirty;
  }

  let fsv : (name: string, value: string) => boolean;
  if (form && (form.setValue)) {
    fsv = form.setValue;
  }

  let fid : any;
//  let fid : (name: string) => boolean;
  if (form && (form.isDirty)) {
    fid = form.isDirty;
  }

  return (
    <div className="InputField">
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <input
        id={name}
        onBlur={() => fsd && fsd(name)}
        value={value || ''}
        onChange={(event) => {
          fsd && fsd(name)
          fsv && fsv(name, event.target.value)
        }}
        {...otherProps}
      />{' '}
      {
        <div className="InputField-error">
          {fid && fid(name) && error ? error : <>&nbsp;</>}
        </div>
      }
    </div>
  )
}

export default InputField
