import { ReactElement, useCallback, useEffect, useState } from 'react'
import FormContext from './FormContext'
import './SimpleForm.css'

interface IStringIndex {
    [key: string]: any
}

type SimpleFormType = {
  children: ReactElement[] | null;
  value: IStringIndex;
  onChange: (formFields: IStringIndex) => void;
  onValid: any;
};

const SimpleForm = ({ children, value, onChange, onValid }: SimpleFormType) => {
  const [values, setValues] = useState<IStringIndex>(value || {})
  const [dirtyFields, setDirtyFields] = useState<string[]>([])
  const [invalidFields, setInvalidFields] = useState<IStringIndex>({})

  useEffect(() => {
    setValues(value || {})
  }, [value])

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [onChange, values])

  useEffect(() => {
    if (onValid) {
//      if ((Object.keys(invalidFields).length) && (invalidFields.length)) {
      if (Object.keys(invalidFields).length) {
      onValid(
        Object.keys(invalidFields).every((i) => !invalidFields[i]),
        invalidFields
      )
      }
    }
  }, [onValid, invalidFields])

  const setValue = useCallback(
    (field: string, v: string) => setValues((vs: IStringIndex) => ({ ...vs, [field]: v })),
    [setValues]
  )
  const getValue = useCallback((field: string) => values[field], [values])
  const setDirty = useCallback(
    (field: string) => setDirtyFields((df) => ({ ...df, [field]: true })),
    [setDirtyFields]
  )
  const getDirty = useCallback(
    (field: string) => Object.keys(dirtyFields).includes(field),
    [dirtyFields]
  )
  const setInvalid = useCallback(
    (field: string, error: string) => {
      setInvalidFields((i) => ({
        ...i,
        [field]: error ? error : undefined,
      }))
    },
    [setInvalidFields]
  )
  const form = {
    setValue: setValue,
    value: getValue,

    setDirty: setDirty,
    isDirty: getDirty,

    setInvalid: setInvalid
  }

  return (
    <div className="SimpleForm-container">
      <FormContext.Provider value={form}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default SimpleForm
