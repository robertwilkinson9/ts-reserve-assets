{ /*
import Button from 'react-bootstrap/Button';
import { Testapp } from './testapp'
*/ }

import Form from 'react-bootstrap/Form';
import { Calendar } from './calendar'
import { Floor } from './floor'
import { Desks } from './desks'
import { AddEmail } from './addemail'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("PRINT event.target ");
    console.log("event -> ", event);
    console.log("event.currentTarget -> ", event.currentTarget);
    const submit_value = (event.currentTarget.elements[3] as HTMLInputElement).value; // 4th element we want the value of the submit button
    console.log("SUBMIT_VALUE -> ", submit_value);
//    console.log(`EMAIL you entered was: ${email}`)
//    alert("EMAIL you entered")
  }

{ /*
  const handleChange = (event: MouseEventHandler<HTMLButtonElement>): void => {
//  const handleChange = (event: React.MouseEventHandler<HTMLButtonElement>): void => {
//  const handleChange = (event: React.ChangeEvent<MouseEvent<Element, MouseEvent>>): void => {
//  const handleChange = (event: React.ChangeEvent<MouseEvent<Element, MouseEvent>>): void => {
//  const handleChange = (event: React.ChangeEvent<MouseEvent<HTMLButtonElement, MouseEvent>>): void => {
//    if (event.target.id === "due") {
    console.log("WHATTTTT!!");
    console.log("event -> ", event);
  };
*/ }

export interface InputFormProps {
  start: Date | null;
  datesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  floor: number | null;
  floorsetter: React.Dispatch<React.SetStateAction<number | null>>;
  desksetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const InputForm = ({start, datesetter, floor, floorsetter, desksetter, email, emailsetter}: InputFormProps) => {
  return (
    <>
{ /*
     <Form id="emailForm">
*/ }
     <Form onSubmit={handleSubmit} id="emailForm">
     <Calendar start={start} setter={datesetter} />
{ /*
     <Testapp />
*/ }
     <Floor floor={floor} floorsetter={floorsetter}/>
     <Desks floor={floor} desksetter={desksetter} />
     <AddEmail email={email} emailsetter={emailsetter} />
     <button type="submit" value="submit" form="emailForm" onClick={() => {
       console.log("AARGGHH");
       console.log(`EMAIL is #{email}`);
     }} >Book Desk</button>
{ /*
     <button type="submit" value="submit" form="emailForm" onClick={handleChange} >Book Desk</button>
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
    </>
  );
}

export default InputForm;
