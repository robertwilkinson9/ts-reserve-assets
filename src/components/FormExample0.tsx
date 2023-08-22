import { useEffect, useState } from 'react'
import './field.css'
import SimpleForm from './SimpleForm'
import InputField from './InputField'

interface FormExample0Type {
  onSubmit: (formFields: object) => void;
  onChange: (formFields: object, valid: boolean, errors: object) => void;
  initialValue: object;
};

const FormExample0 = ({ onSubmit, onChange, initialValue}: FormExample0Type) => {
  const [formFields, setFormFields] = useState<object>(initialValue)
  const [valid, setValid] = useState<boolean>(true)
  const [errors, setErrors] = useState<object>({})

  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors)
    }
  }, [onChange, formFields, valid, errors])

  return (
    <div className="TheForm">
      <h1>Single field</h1>

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
        <InputField
          name="field1"
          onValidate={(v: string) =>
            !v || v.length < 3 ? 'Too short!' : null
          }
        />

        <button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
        >
          FormExample0Submit!
        </button>
      </SimpleForm>
    </div>
  )
}

export default FormExample0
