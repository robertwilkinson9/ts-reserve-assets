import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { Items } from './items'
import { AddEmail } from './addemail'

import { InputFormProps } from './interfaces';

import 'bootstrap/dist/css/bootstrap.min.css';

const handleBRClick = (completesetter: React.Dispatch<React.SetStateAction<boolean>>) => {
  completesetter(true);
};

export const InputForm = ({config, mongoitems, start, startdatesetter, end, enddatesetter, bucket, bucketsetter, itemsetter, email, emailsetter, completesetter}: InputFormProps) => {
  console.log("InputForm config is");
  console.log(config);
  console.log("InputForm mongoitems is");
  console.log(mongoitems);
  const buttonText = `Book ${config.ITEM_NAME}`;

  if (end) {
{ /*
  we find all the items in mongoitems with a start date before our end date, and with an end date after our start date
  we want a list of all of the items wich are already booked so we can filter these from the list we present
*/ }

  before = mongoitems.filter(booking_start < end);
  console.log("InputForm mongoitems is");
  console.log(mongoitems);

{ /*
  booked = before.filter(booking_end > start);
  console.log("InputForm booked is");
  console.log(booked);
*/ }
  
  return (
    <>
     <Form id="emailForm">
     <Calendar label="Start DateTime" selected={start} setter={startdatesetter} />
     <Calendar label="End DateTime" selected={end} setter={enddatesetter} />
     <Bucket config={config} bucket={bucket} bucketsetter={bucketsetter}/>
     <Items config={config} bucket={bucket} itemsetter={itemsetter} />
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
     <Bucket config={config} bucket={bucket} bucketsetter={bucketsetter}/>
     <Items config={config} bucket={bucket} itemsetter={itemsetter} />
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
