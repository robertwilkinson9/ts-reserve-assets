/**
* process the form data, allow a confirmation or cancellation
* then save the item to the backend data store on confirmation with expiration
* of the record set for the day after the booking
*/

import { Button, ChakraProvider } from '@chakra-ui/react'

import InputForm from './form'

import { ItemData, ProcessDataProps } from './interfaces';

import { auxdatamerge } from './auxdatamerge';
import { tomorrow_from_day } from './tomorrow_from_day';
import { handleConfirm } from './handleConfirm';
import { handleCancel } from './handleCancel';
import './processdata.css';

export const ProcessData = ({ config, mongo_data, set_mongodata, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, item, set_item, email, set_email, auxdata, set_auxdata, set_complete, url, confirmed, set_confirmed, set_needreset} : ProcessDataProps) => {
  if (booking_start && booking_end && bucket !== null && item && email) {
	  console.log(`IN PD and booking start is ${booking_start}, BOOKING END IS ${booking_end}, BUCKET is ${bucket}, ITEM is ${item} and EMAIL is ${email}`);
    const tomorrow = tomorrow_from_day(booking_start);

    const date_booking : ItemData = {
      "booking_start": booking_start.toISOString(),
      "booking_end": booking_end.toISOString(),
      "expireAt": tomorrow.toISOString(),
      "bucket": bucket,
      [config.ITEM_NAME]: item,
      "email": email,
    };

    const aux_merged = new Map<string, string>();
    const ac = config.AUXILLIARY;

    if (ac) {
      const merged = auxdatamerge(ac, auxdata);
      merged.map((item) => {return aux_merged.set(item.dbname || item.label, item.value);})
    }

    aux_merged.forEach((item, key) => {date_booking[key] = item;});
   
    let name = "Anononymous";
    if ((config.BUCKETS) && config.BUCKETS[bucket] && config.BUCKETS[bucket].NAME) {
      name = config.BUCKETS[bucket].NAME;
    }
    const item_booking = Object.assign(date_booking, { [config.BUCKET_NAME]: name });

    console.log(`BUCKET_NAME is ${config.BUCKET_NAME} and name is ${name} and ITEM is ${item} and ITEM NAME is ${config.ITEM_NAME} And ITEM LABEL is ${config.ITEM_LABEL}`);

    const confirm_action = () => {
      console.log(`confirm_action given booking_start of ${booking_start}`);
      const ITEM_url: string = url + config.LCCOLLECTION + '/';
      console.log(`POST ITEM_url is ${ITEM_url}`);
      console.log("POST item_booking is ");
      console.dir(item_booking);

      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(() => {
//        const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item};
        const new_record: MongoData = {"booking_start": booking_start, "booking_end": booking_end, "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item};
        const tmp = mongo_data;
        tmp.push(new_record);
        console.log("SETTING MONGO DATA");
        set_mongodata(tmp);
        set_needreset(true);
      });
    }

    const handleConfirm = () => {
      confirm_action();
      set_confirmed(true);
    }

    const handleCancel = () => {
      set_needreset(true);
    }

    if (confirmed) {
      const istring = `${config.ITEM_NAME} ${item} booked!`;

      return (
        <>
        <h4>{istring}</h4>
        <InputForm
          config={config}
          mongo_data={mongo_data}
          booking_start={booking_start} set_booking_start={set_booking_start}
          booking_end={booking_end} set_booking_end={set_booking_end}
          bucket={bucket} set_bucket={set_bucket}
          set_item={set_item}
          email={email} set_email={set_email}
          auxdata={auxdata} set_auxdata={set_auxdata}
          set_complete={set_complete}
        />
        </>
      );
    }  else {
      let sdstr = "No start date available"
      if (booking_start) {
        sdstr = `start date is ${booking_start}`;
      }
      let edstr = "No end date available"
      if (booking_end) {
        edstr = `end date is ${booking_end}`;
      }
      let fstr = `No ${config.BUCKET_NAME}`;
      if ((typeof bucket === 'number') && Number.isInteger(bucket)) {
        fstr = `${config.BUCKETS[bucket].NAME} ${config.BUCKET_NAME}`;
      }

      const ITEM_url: string = url + config.LCCOLLECTION + '/';
      return (
        <>
          <div id="key1" key="key1">
          <ChakraProvider resetCSS={false}>
            <h4>ProcessData</h4>
            <p>{sdstr}</p>
            <p>{edstr}</p>
            <p>{fstr}</p>
            <p>{item}</p>
            <p>{email}</p>
            <Button onClick={handleConfirm(ITEM_url, mongo_data, set_confirmed, date_booking, booking_start, booking_end, bucket, config, set_mongodata, set_needreset)}>Confirm?</Button>
            <Button onClick={handleCancel(set_needreset)}>Cancel?</Button>
          </ChakraProvider>
        </div>
        </>
      );
    }
  } else {
    return (
      <>
      <h4>Insufficient Input</h4>
      <InputForm
        config={config}
        mongo_data={mongo_data}
        booking_start={booking_start} set_booking_start={set_booking_start}
        booking_end={booking_end} set_booking_end={set_booking_end}
        bucket={bucket} set_bucket={set_bucket}
        set_item={set_item}
        email={email} set_email={set_email}
        auxdata={auxdata} set_auxdata={set_auxdata}
        set_complete={set_complete}
      />
      </>
    );
  }
};

export default ProcessData
