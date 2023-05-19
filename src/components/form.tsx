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

// const handleBRClick = (event: React.MouseEvent<HTMLElement>, myText: string, completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
const handleBRClick = (completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
//  console.log(myText);
  completesetter(true);
//  console.log(event);
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
  const buttonText = "Book Desk";
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
*/ }
     <Floor floor={floor} floorsetter={floorsetter}/>
     <Desks floor={floor} desksetter={desksetter} />
     <AddEmail email={email} emailsetter={emailsetter} />
{ /*
       type="submit" 
       variant="primary"
       size="lg"
       value="submit"
       form="emailForm"
         handleBRClick(e, buttonText, completesetter);
       onClick={(e) => {
*/ }
     <Button 
       onClick={() => {
         handleBRClick(completesetter);
       }}
     >
      {buttonText}
     </Button>
    </Form>
    </>
  );
}

export default InputForm;
