import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { Items } from './items'
import { AddEmail } from './addemail'

import 'bootstrap/dist/css/bootstrap.min.css';

import { InputFormProps } from './interfaces';

const handleBRClick = (completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  completesetter(true);
};

export const InputForm = ({config, start, startdatesetter, end, enddatesetter, bucket, bucketsetter, itemsetter, email, emailsetter, completesetter}: InputFormProps) => {
  console.log(`config is ${config}`);
{ /*
  console.log(`config.SERVER_URL is ${config.SERVER_URL}`);
*/ }

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
