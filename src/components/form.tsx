import { Button, ChakraProvider, FormControl, FormLabel, FormHelperText, Stack } from '@chakra-ui/react'

import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { MyInput } from './input'
import { Items } from './items'
import { AddEmail } from './addemail'
import { overlap } from './overlap';

import { MongoData, Ifp, InputFormProps } from './interfaces';

const handleBRClick = (set_complete: React.Dispatch<React.SetStateAction<boolean>>) => {set_complete(true);};

interface Frp extends Ifp {
  overlapv: MongoData[];
  buttonText: string;
  ordinal: string;
  label: string;
}

const form_contents = ({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label}: Frp) => {
  return (
    <>
      <ChakraProvider resetCSS={false}>
        <FormControl>
        <FormLabel data-testid={label} >interesting Form {ordinal}</FormLabel>
        <FormHelperText>We'll never share your Form {ordinal} data.</FormHelperText>
          <Stack spacing="20px" direction="column">
            {
              booking_end
              ? <Calendar label="Start DateTime" selected={booking_start} date_setter={set_booking_start} />
              : <Calendar label="Start DateTime" selected={booking_start} date_setter={set_booking_start} date_setter2={set_booking_end} />
            }
            <Calendar label="End DateTime" selected={booking_end} date_setter={set_booking_end} />
            <Bucket config={config} bucket={bucket} set_bucket={set_bucket} />
            {
              overlapv.length
              ? <Items config={config} bucket={bucket} allocated_items={overlapv} set_item={set_item} />
              : <Items config={config} bucket={bucket} set_item={set_item} />
            }
            <AddEmail email={email} set_email={set_email} />
            {config.AUXILLIARY?.map( (x) => <MyInput label={x.label} key={x.id} id={x.id} auxdata={auxdata} set_auxdata={set_auxdata} /> )}
            <Button data-testid="form_submit_button" onClick={() => {handleBRClick(set_complete);}} >{buttonText} </Button>
          </Stack>
        </FormControl>
      </ChakraProvider>
    </>
  );
}

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

      const overlapv = mongo_data.filter((it) => {return overlap(booking_start, booking_end, new Date(it.booking_start), new Date(it.booking_end));});

      const ordinal = "One";
      const label = "formlabel_1";
      return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label});
    } else {
      const overlapv: MongoData[] = [];
      const ordinal = "Two";
      const label = "formlabel_2";
      return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label});
    }
  } else {
    const overlapv: MongoData[] = [];
    const ordinal = "Three";
    const label = "formlabel_3";
    return form_contents({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label});
  }
}

export default InputForm;
