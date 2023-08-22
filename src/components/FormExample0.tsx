import { useEffect, useState } from 'react'
import './field.css'
// import SimpleForm from './SimpleForm'
import InputField from './InputField'

//  onSubmit: (formFields: object) => void;
interface FormExample0Type {
  onChange: (formFields: object, valid: boolean, errors: object) => void;
  initialValue: object;
};

const FormExample0 = ({ onChange, initialValue}: FormExample0Type) => {
// const FormExample0 = ({ onSubmit, onChange, initialValue}: FormExample0Type) => {
  const [formFields, setFormFields] = useState<object>(initialValue)
  const [valid, setValid] = useState<boolean>(true)
  const [errors, setErrors] = useState<object>({})

  const label = "Single field";

  console.log(setFormFields);
  console.log(setValid);
  console.log(setErrors);

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors)
    }
  }, [onChange, formFields, valid, errors])

  return (
    <div className="TheForm">
      
{ /*
      <h1>Single field</h1>
*/ }
      <label data-testid="fe0_label" >{label}</label>

{ /*
      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={({v, errs}: {v: boolean, errs: object}) => {
          if (typeof v !== 'undefined') {
            setValid(v)
          }
          setErrors(errs)
        }}
      >
*/ }
        <InputField
          name="field1"
          onValidate={(v: string) =>
            !v || v.length < 3 ? 'Too short!' : null
          }
        />

{ /*
        <button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
        >
          FormExample0Submit!
        </button>
      </SimpleForm>
*/ }
    </div>
  )
}

export default FormExample0
