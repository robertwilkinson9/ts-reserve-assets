import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { Items } from './items'
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
  bucket: number | null;
  bucketsetter: React.Dispatch<React.SetStateAction<number | null>>;
  itemsetter: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
  emailsetter: React.Dispatch<React.SetStateAction<string | null>>;
  completesetter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputForm = ({start, startdatesetter, end, enddatesetter, bucket, bucketsetter, itemsetter, email, emailsetter, completesetter}: InputFormProps) => {
  const buttonText = "Book Item";
  if (end) {
  return (
    <>
     <Form id="emailForm">
     <Calendar label="Start DateTime" selected={start} setter={startdatesetter} />
     <Calendar label="End DateTime" selected={end} setter={enddatesetter} />
     <Bucket bucket={bucket} bucketsetter={bucketsetter}/>
     <Items bucket={bucket} itemsetter={itemsetter} />
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
     <Bucket bucket={bucket} bucketsetter={bucketsetter}/>
     <Items bucket={bucket} itemsetter={itemsetter} />
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
