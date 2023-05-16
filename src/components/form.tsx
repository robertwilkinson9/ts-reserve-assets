{ /*
import Button from 'react-bootstrap/Button';
*/ }

import Form from 'react-bootstrap/Form';
import { Calendar } from './calendar'
import { Floor } from './floor'
import { Desks } from './desks'
import { Testapp } from './testapp'
import { AddEmail } from './addemail'

export interface InputFormProps {
   start: Date | null;
   datesetter: React.Dispatch<React.SetStateAction<Date | null>>
   floorsetter: React.Dispatch<React.SetStateAction<number | null>>
}

export const InputForm = ({start, datesetter, floorsetter}: InputFormProps) => {
  return (
    <Form>
     <Calendar start={start} setter={datesetter} />
     <Testapp />
     <Floor floorsetter={floorsetter}/>
     <Desks />
     <AddEmail />
{ /*
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
*/ }
    </Form>
  );
}

export default InputForm;
