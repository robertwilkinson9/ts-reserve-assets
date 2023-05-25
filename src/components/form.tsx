import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Calendar } from './calendar'
import { Floor } from './floor'
import { Desks } from './desks'
import { AddEmail } from './addemail'

import 'bootstrap/dist/css/bootstrap.min.css';

const handleBRClick = (completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  completesetter(true);
};

export interface InputFormProps {
  start: Date | null;
  startdatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  end: Date | null;
  enddatesetter: React.Dispatch<React.SetStateAction<Date | null>>;
  floor: number | null;
  floorsetter: React.Dispatch<React.SetStateAction<number | null>>;
  desksetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
  completesetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputForm = ({start, startdatesetter, end, enddatesetter, floor, floorsetter, desksetter, email, emailsetter, completesetter}: InputFormProps) => {
  const buttonText = "Book Desk";
  if (end) {
  return (
    <>
     <Form id="emailForm">
     <Calendar label="Start DateTime" selected={start} setter={startdatesetter} />
     <Calendar label="End DateTime" selected={end} setter={enddatesetter} />
     <Floor floor={floor} floorsetter={floorsetter}/>
     <Desks floor={floor} desksetter={desksetter} />
     <AddEmail email={email} emailsetter={emailsetter} />
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
  } else {
  return (
    <>
     <Form id="emailForm">
     <Calendar label="Start DateTime" selected={start} setter={startdatesetter} setter2={enddatesetter} />
     <Calendar label="End DateTime" selected={end} setter={enddatesetter} />
     <Floor floor={floor} floorsetter={floorsetter}/>
     <Desks floor={floor} desksetter={desksetter} />
     <AddEmail email={email} emailsetter={emailsetter} />
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
}

export default InputForm;
