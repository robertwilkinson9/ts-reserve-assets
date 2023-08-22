import { useState } from 'react'
import './field.css'
import FormExample0 from './FormExample0'
import FormExample1 from './FormExample1'
import ShowData from './ShowData'

const onSubmit = (v: object) =>
  alert('Submit value: ' + JSON.stringify(v, null, 2))

export const Field = () => {
//  const [formFields, setFormFields] = useState({})
//  const [formFields, setFormFields] = useState<string[]>([""])
  const [formFields, setFormFields] = useState<object>({})
  const [errors, setErrors] = useState<object>({})
  const [valid, setValid] = useState<boolean>(true)
  const [firstForm, setFirstForm] = useState(true)

  console.log(`App VALID is ${valid}`);
  return (
    <div className="App">
      <nav>
        <select
          onChange={(evt) =>
            setFirstForm(evt.target.value === 'first')
          }
        >
          <option value="first">Single field</option>
          <option value="second">Multiple fields</option>
        </select>
      </nav>
      <main>
        {firstForm ? (
          <FormExample0
//            onChange={(ff: string[], v: boolean, e: object) => {
            onChange={(ff: object, v: boolean, e: object) => {
              setFormFields(ff)
              if (typeof v !== 'undefined') {
                setValid(v)
              }
              setErrors(e)
            }}
            onSubmit={onSubmit}
            initialValue={{
              field1: 'Some stuff',
            }}
          />
        ) : (
          <FormExample1
//            onChange={(ff: string[], v: boolean, e: object) => {
            onChange={(ff: object, v: boolean, e: object) => {
              setFormFields(ff)
              if (typeof v !== 'undefined') {
                setValid(v)
              }
              setErrors(e)
            }}
            onSubmit={onSubmit}
            initialValue={{
              address1: '1 Main Street',
            }}
          />
        )}

        <ShowData
          formFields={formFields}
          errors={errors}
          valid={valid}
        />
      </main>
    </div>
  )
}

export default Field
