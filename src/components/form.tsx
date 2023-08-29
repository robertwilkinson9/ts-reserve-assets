import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { Input } from './input'
import { Items } from './items'
import { AddEmail } from './addemail'

import { InputFormProps } from './interfaces';

import 'bootstrap/dist/css/bootstrap.min.css';

const handleBRClick = (set_complete: React.Dispatch<React.SetStateAction<boolean>>) => {set_complete(true);};

export const InputForm = ({config, mongo_data, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete}: InputFormProps) => {
  const buttonText = `Reserve ${config.ITEM_NAME}`;

  if (booking_end) {
    if (booking_start) {
      { /*
        we find all the overlapping items from mongo_data with our start date and our end date
        a to b is one date range, x to y is another date range
        we check x < a < y or x < b < y or a < x < b or a < y < b - which I think is correct?
        we want a list of all of the items which are already booked so we can filter these from the list we present
      */ }

      const before = (d1: Date, d2: Date) => {return d1 <= d2;}
      const after = (d1: Date, d2: Date) => {return d1 >= d2;}
      const overlap = (a: Date, b: Date, x: Date, y:Date) => {
        // a to b is one date range, x to y is another date range
        // we return true for overlap
        return ((after(a, x) && before(a, y)) ||
                (after(b, x) && before(b, y)) ||
                (after(x, a) && before(y, a)) ||
                (after(x, b) && before(y, b)));
      };
//      console.log("MONGO DATAS before OVERLAPV");
//      console.log(mongo_data);
//      const overlapv = mongo_data.filter((it) => {console.log("IT is "); console.log(it); return overlap(booking_start, booking_end, new Date(it.booking_start), new Date(it.booking_end));});
      const overlapv = mongo_data.filter((it) => {return overlap(booking_start, booking_end, new Date(it.booking_start), new Date(it.booking_end));});
//      console.log("OVERLAPV");
//      console.log(overlapv);

      return (
        <>
          <Form id="emailForm">
            <Calendar label="Start DateTime" selected={booking_start} date_setter={set_booking_start} />
            <Calendar label="End DateTime" selected={booking_end} date_setter={set_booking_end} />
            <Bucket config={config} bucket={bucket} set_bucket={set_bucket} />
            <Items config={config} bucket={bucket} allocated_items={overlapv} set_item={set_item} />
            <AddEmail email={email} set_email={set_email} />
            {config.AUXILLIARY?.map( (x) => <Input label={x.label} key={x.id} id={x.id} auxdata={auxdata} set_auxdata={set_auxdata} /> )}
            <Button onClick={() => {handleBRClick(set_complete);}} >{buttonText} </Button>
          </Form>
        </>
      );
    } else {
      return (
        <>
          <Form id="emailForm">
            <Calendar label="Start DateTime" selected={booking_start} date_setter={set_booking_start} />
            <Calendar label="End DateTime" selected={booking_end} date_setter={set_booking_end} />
            <Bucket config={config} bucket={bucket} set_bucket={set_bucket} />
            <Items config={config} bucket={bucket} set_item={set_item} />
            <AddEmail email={email} set_email={set_email} />
            {config.AUXILLIARY?.map( (x) => <Input label={x.label} key={x.id} id={x.id} auxdata={auxdata} set_auxdata={set_auxdata} /> )}
            <Button onClick={() => {handleBRClick(set_complete);}} >{buttonText}</Button>
          </Form>
        </>
      );
    }
  } else {
    return (
      <>
        <Form id="emailForm">
          <Calendar label="Start DateTime" selected={booking_start} date_setter={set_booking_start} date_setter2={set_booking_end} />
          <Calendar label="End DateTime" selected={booking_end} date_setter={set_booking_end} />
          <Bucket config={config} bucket={bucket} set_bucket={set_bucket} />
          <Items config={config} bucket={bucket} set_item={set_item} />
          <AddEmail email={email} set_email={set_email} />
          {config.AUXILLIARY?.map( (x) => <Input label={x.label} key={x.id} id={x.id} auxdata={auxdata} set_auxdata={set_auxdata} /> )}
          <Button onClick={() => {handleBRClick(set_complete);}} >{buttonText} </Button>
        </Form>
      </>
    );
  }
}

export default InputForm;
