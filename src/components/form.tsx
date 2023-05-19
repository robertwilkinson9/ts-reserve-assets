{ /*
import { Testapp } from './testapp'
*/ }

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Calendar } from './calendar'
import { Floor } from './floor'
import { Desks } from './desks'
import { AddEmail } from './addemail'

import 'bootstrap/dist/css/bootstrap.min.css';

{ /*
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
*/ }

{ /*
const clickHandler = (completesetter: any) => {
const clickHandler = (completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  console.log("ZZZZZAARGGHH - submitting");
  console.log("completesetter is a ", typeof(completesetter));
  completesetter(true);
};
*/ }

//const handleBRClick = (event: React.MouseEvent<HTMLElement>, myText: string) => {
const handleBRClick = (event: React.MouseEvent<HTMLElement>, myText: string, completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  console.log(myText);
  console.log("completesetter is a ", typeof(completesetter));
  completesetter(true);
  console.log(event);
};

export interface InputFormProps {
  start: Date | null;
  datesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  floor: number | null;
  floorsetter: React.Dispatch<React.SetStateAction<number | null>>;
  desksetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
  completesetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputForm = ({start, datesetter, floor, floorsetter, desksetter, email, emailsetter, completesetter}: InputFormProps) => {
  console.log("completesetter is ",completesetter);
//  const buttonText = "Book Desk";
  const buttonText = "Bork Desk";
  return (
    <>
{ /*
     <Form id="emailForm">
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form onSubmit={handleSubmit} id="emailForm">
*/ }
     <Form id="emailForm">
     <Calendar start={start} setter={datesetter} />
{ /*
     <Testapp />
       type="submit" 
       variant="primary"
       size="lg"
       value="submit"
       form="emailForm"
*/ }
     <Floor floor={floor} floorsetter={floorsetter}/>
     <Desks floor={floor} desksetter={desksetter} />
     <AddEmail email={email} emailsetter={emailsetter} />
     <Button 
       onClick={(e) => {
         handleBRClick(e, buttonText, completesetter);
       }}
     >
      {buttonText}
     </Button>
{ /*
     <Button type="submit" variant="primary" size="lg" value="submit" form="emailForm" onClick={() => {console.log("WOWSER")}} >Book Desk</Button>
     <Button type="submit" variant="primary" size="lg" value="submit" form="emailForm" onClick={() => {clickHandler(completesetter)}} >Book Desk</Button>
     </Form.Group>
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
