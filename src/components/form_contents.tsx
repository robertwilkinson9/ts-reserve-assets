import { Button, ChakraProvider, FormControl, FormLabel, FormHelperText, Stack } from '@chakra-ui/react'

import { Calendar } from './calendar'
import { Bucket } from './bucket'
import { MyInput } from './input'
import { Items } from './items'
import { AddEmail } from './addemail'
import { get_non_empty_bucket } from './get_non_empty_bucket'

import { MongoData, Ifp } from './interfaces';

const handleBRClick = (set_complete: React.Dispatch<React.SetStateAction<boolean>>) => {set_complete(true);};

interface Frp extends Ifp {
  overlapv: MongoData[];
  buttonText: string;
  ordinal: string;
  label: string;
}

export const form_contents = ({config, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, set_item, email, set_email, auxdata, set_auxdata, set_complete, overlapv, buttonText, ordinal, label}: Frp) => {
  const items_available = [];
  for (let i = 0; i < config.BUCKETS.length; i++) {
    if (config.BUCKETS[i]) {
      const bucket_reserved = overlapv.filter((it) => {return it.bucket === i;})
      let num_items;
      if (('ITEMS' in config.BUCKETS[i]) && (config.BUCKETS[i].ITEMS)) {
        const items = config.BUCKETS[i].ITEMS || [];
        num_items = items.length;
      } else if (('IFIRST' in config.BUCKETS[i]) && config.BUCKETS[i].IFIRST && ('ILAST' in config.BUCKETS[i]) && config.BUCKETS[i].ILAST) {
        const first = config.BUCKETS[i].IFIRST || 1;
        const last = config.BUCKETS[i].ILAST || 0;
        num_items = last - first + 1;
      } else {
        num_items = 0;
        console.log(`BAD BUCKET at ${i}`);
      }
      const bucket_items_available = num_items !== bucket_reserved.length
      items_available.push(bucket_items_available);
    }
  }

  let items_in_bucket = false;
  if (bucket != null) {items_in_bucket = items_available[bucket]; }

  let bucket_items_available = false;
  if (bucket != null) {
    if (!items_in_bucket) {
      const new_bucket = get_non_empty_bucket(bucket, items_available);
      if (new_bucket != null) {
        set_bucket(new_bucket);
        bucket = new_bucket;
      }
    }

    if (config.BUCKETS[bucket]) {
      if (('ITEMS' in config.BUCKETS[bucket]) && (config.BUCKETS[bucket].ITEMS)) {
        const new_items = config.BUCKETS[bucket].ITEMS || [];
        const num_items = new_items.length;
        const bucket_reserved = overlapv.filter((it) => {return it.bucket === bucket;})
        bucket_items_available = (num_items !== bucket_reserved.length);
      } else if (('IFIRST' in config.BUCKETS[bucket]) && config.BUCKETS[bucket].IFIRST && ('ILAST' in config.BUCKETS[bucket]) && config.BUCKETS[bucket].ILAST) {
        const first = config.BUCKETS[bucket].IFIRST || 1;
        const last = config.BUCKETS[bucket].ILAST || 0;
        const num_items = last - first + 1;
        const bucket_reserved = overlapv.filter((it) => {return it.bucket === bucket;})
        bucket_items_available = (num_items !== bucket_reserved.length);
      } else {
        console.log(`+++ BROKEN is ${bucket}`);
        bucket_items_available = true;
      }
    }
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
            <Bucket config={config} bucket={bucket} set_bucket={set_bucket} items_available={items_available} />
            {
              bucket_items_available && overlapv.length
              ? <Items config={config} bucket={bucket} allocated_items={overlapv} set_item={set_item} />
              : bucket_items_available
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

export default form_contents;
