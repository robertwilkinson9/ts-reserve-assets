import { useEffect, useState } from 'react'
import './field.css'
import SimpleForm from './SimpleForm'
import InputField from './InputField'

interface FormExample1Type {
  onSubmit: (formFields: object) => void;
  onChange: (formFields: object, valid: boolean, errors: object) => void;
  initialValue: object;
};

const FormExample1 = ({ onSubmit, onChange, initialValue}: FormExample1Type) => {
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
      <h1>Multiple fields</h1>

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
          name="address1"
          onValidate={(v: string) =>
            !v || v.length < 3 ? 'Too short!' : null
          }
        />

        <InputField
          name="address2"
          onValidate={(v: string) => (v ? null : 'Required')}
        />

        <InputField
          name="address3"
          onValidate={(v: string) => (v ? null : 'Required')}
        />

        <InputField
          name="address4"
          onValidate={(v: string) => (v ? null : 'Required')}
        />

        <InputField
          name="price"
          type="number"
          onValidate={(v: string) =>
            !v || parseInt(v) < 102 ? 'Must be at least 102' : null
          }
        />

        <InputField
          name="requiredBy"
          type="date"
          onValidate={(v: string) => (v ? null : 'Required')}
        />

        <button
          onClick={() => onSubmit && onSubmit(formFields)}
          disabled={!valid}
        >
          Submit!
        </button>
      </SimpleForm>
    </div>
  )
}

export default FormExample1
