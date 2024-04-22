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

const get_non_empty_bucket = (bucket: number, items_to_reserve: boolean []) => {
  if (items_to_reserve[bucket]) {
    console.log(`in get_non_empty_bucket and bucket is ${bucket}`);
    return bucket;
  }

//      const next = (bucket + 1) % items_to_reserve.length;
// or just start at 0 and return the first available ...
  for (let i = 0; i < items_to_reserve.length; i++) {
    if (items_to_reserve[i]) {
      return i;
    }
  }
};

const form_contents = ({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label}: Frp) => {
//  console.log(`in form_contents and OVERLAPV is`);
//  console.dir(overlapv);
  const num_buckets = config.BUCKETS.length;
//  console.log(`num buckets is ${num_buckets}`);
  const items_to_reserve = [];
  for (let i = 0; i < num_buckets; i++) {
    const has_items0 = 'ITEMS' in config.BUCKETS[i];
    console.log(`has_items0 is ${has_items0}`);
//    if (has_items0) {
    if ((config.BUCKETS[i]) && ('ITEMS' in config.BUCKETS[i]) && (config.BUCKETS[i].ITEMS)) {
      const items = config.BUCKETS[i].ITEMS || [];
//      const num_items = config.BUCKETS[i].ITEMS.length;
      const num_items = items.length;
////    console.log(`NUM items[${i}] IS ${num_items}`);
      const bucket_reserved = overlapv.filter((it) => {return it.bucket === i;})
///*
//    console.log(`in form_contents and bucket_reserved is`);
//    console.dir(bucket_reserved);
//    console.log(`LENGGTH OF BUCKETS_RESERVED IS ${bucket_reserved.length}`);
//*/
      const items_available = num_items !== bucket_reserved.length
      console.log(`ITEMS_AVAILABLE IS ${items_available}`);
      items_to_reserve.push(items_available);
    } else {
      items_to_reserve.push(true);
    }
  }
  console.log(`ITEMS_TO_RESERVE is`);
  console.dir(items_to_reserve);

  let has_items = false;
  let items_in_bucket = false;
  if (bucket != null) {
    items_in_bucket = items_to_reserve[bucket];
    console.log(`items_in_bucket is ${items_in_bucket} and bucket is ${bucket}`);

    has_items = 'ITEMS' in config.BUCKETS[bucket];
    console.log(`has_items is ${has_items}`);
  }

  let items_available = false;
  if ((bucket != null) && (has_items)) {
    if (!items_in_bucket) {
      const new_bucket = get_non_empty_bucket(bucket, items_to_reserve);
      console.log(`NEW_BUCKET is ${new_bucket}`);
//      set_bucket
    }

    if ((config.BUCKETS[bucket]) && ('ITEMS' in config.BUCKETS[bucket]) && (config.BUCKETS[bucket].ITEMS)) {
      const new_items = config.BUCKETS[bucket].ITEMS || [];
      const num_items = new_items.length;
//      const num_items = config.BUCKETS[bucket].ITEMS.length;
      const bucket_reserved = overlapv.filter((it) => {return it.bucket === bucket;})
      items_available = (num_items !== bucket_reserved.length);
    }
  } else {
    items_available = true;
  }

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
              items_available && overlapv.length
              ? <Items config={config} bucket={bucket} allocated_items={overlapv} set_item={set_item} />
              : items_available
              ? <Items config={config} bucket={bucket} set_item={set_item} />
              : null
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
