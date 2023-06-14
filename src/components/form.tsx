import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { Items } from './items'
import { AddEmail } from './addemail'

import { InputFormProps, MongoRecordType} from './interfaces';

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
  we find all the overlapping items from mongoitems with our start date and our end date
  a to b is one date range, x to y is another date range
  we check x < a < y or x < b < y or a < x < b or a < y < b - which I think is correct?
  we want a list of all of the items which are already booked so we can filter these from the list we present
*/ }

  const before = (d1: Date, d2: Date) => {return d1 <= d2;}
  const after = (d1: Date, d2: Date) => {return d1 >= d2;}
  const overlap = (a: Date, b: Date, x: Date, y:Date) => {
    // a to b is one date range, x to y is another date range
    // we return true for overlap
    console.log(`OVERLAP A is ${a} and B is ${b} and X is ${x} and Y is ${y}`);
    return ((after(a, x) && before(a, y)) || 
            (after(b, x) && before(b, y)) || 
            (after(x, a) && before(y, a)) || 
            (after(x, b) && before(y, b)));
  };

//  const overlapv = mongoitems.filter(function(item) {return overlap(start!, end!, new Date(item.booking_start), new Date(item.booking_end));});
  const overlapv = mongoitems.filter((item) => {return overlap(start!, end!, new Date(item.booking_start), new Date(item.booking_end));});
  console.log("InputForm overlapv is");
  console.log(overlapv);

//  const get_bucket_and_item = (x: MongoRecordType) => { return {"bucket" : x.bucket, "item": x.item} };
//  const bucket_items = overlapv.map(get_bucket_and_item);
  const bucket_items = overlapv.map((x: MongoRecordType) => { return {"bucket" : x.bucket, "item": x.item} });
  console.log("InputForm bucket_items is");
  console.log(bucket_items);
  
  return (
    <>
     <Form id="emailForm">
     <Calendar label="Start DateTime" selected={start} setter={startdatesetter} />
     <Calendar label="End DateTime" selected={end} setter={enddatesetter} />
     <Bucket config={config} bucket={bucket} bucketsetter={bucketsetter}/>
     <Items config={config} bucket={bucket} bucket_items={bucket_items} itemsetter={itemsetter} />
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
