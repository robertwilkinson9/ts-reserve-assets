/**
* we process the form data, allow a confirmation or cancellation
* then save the item to the backend data store on confirmation with expiration
* of the record set for the day after the booking
*/

import axios, { AxiosResponse, AxiosError, isAxiosError } from 'axios'

import { Button, ChakraProvider } from '@chakra-ui/react'

import InputForm from './form'

import { AuxConfigRecordType, AuxDataRecordType, AuxType, ItemData, MongoData, ProcessDataProps } from './interfaces';

import './processdata.css';

export const tomorrow_from_day = (passed_date: Date): Date => {
//  const tomorrow = new Date(passed_date);
  const tomorrow = passed_date;
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {
  const merged = aux_config.map((c) => {const data = aux_data.filter((d) => {return d.id == c.id}); return {id: c.id, label: c.label, dbname: c.dbname, value: data[0].value} });
  return merged;
};

const add_item_to_mongodb = async (url: string, item_booking: ItemData) => {
  console.log("ADDING ITEM");
  console.log(item_booking);
  console.log(`SENDING TO URL ${url}`); 

  try {
    const response: AxiosResponse<ItemData> = await axios.post<ItemData>(url, item_booking, {headers: [ {'Content-Type': 'application/json'}, {"Origin": url}, {'Access-Control-Allow-Origin': url}  ] } )
//    const response: AxiosResponse<ItemData> = await axios.post<ItemData>(url, item_booking, {headers: {'Content-Type': 'application/json'}})
    console.log("POST Response is ");
    console.log(response);
    console.log("POST Response DATA is ");
    console.log(response.data);
    console.log(`RDI is ${response.data.id}`);
    return response.data.id;
  } catch (error: unknown | AxiosError) {
    if (isAxiosError(error)) {
      if (error.response) {
        // The client was given an error response (5xx, 4xx)
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        // Anything else
        console.log('Axios Error', error.message);
      }
    } else {
      // Any non-axios error
      console.log('Non-Axios Error');
      console.log(error);
    }
  }

};

export const ProcessData = ({ config, mongo_data, set_mongodata, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, item, set_item, email, set_email, auxdata, set_auxdata, set_complete, url, confirmed, set_confirmed, set_needreset} : ProcessDataProps) => {
 
  if (booking_start && booking_end && bucket !== null && item && email) {
    const tomorrow = tomorrow_from_day(booking_start);

    const date_booking : ItemData = {
      "booking_start": booking_start.toISOString(),
      "booking_end": booking_end.toISOString(),
      "expireAt": tomorrow.toISOString(),
      "bucket": bucket,
      [config.ITEM_NAME]: item,
      "email": email,
    };

    let aux_merged = new Map<string, string>();
    const ac = config.AUXILLIARY;
    if (ac) {
      const merged = auxdatamerge(ac,  auxdata);
      merged.map((item) => {return aux_merged.set(item.dbname || item.label, item.value);})
    }
    let aux_string = "";
    aux_merged.forEach((item, key) => {date_booking[key] = item; aux_string += `KEY is ${key} and ITEM is ${item}\n`; console.log(aux_string);});
   
    let name = "Anononymous";
    if ((config.BUCKETS) && config.BUCKETS[bucket] && config.BUCKETS[bucket].name) {
      name = config.BUCKETS[bucket].name; 
    }
    const item_booking = Object.assign(date_booking, { [config.BUCKET_NAME]: name });

    console.log(`BUCKET_NAME is ${config.BUCKET_NAME} and name is ${name} and ITEM is ${item} and ITEM NAME is ${config.ITEM_NAME} And ITEM LABEL is ${config.ITEM_LABEL}`);

    const confirm_action = () => {
      const ITEM_url: string = url + config.LCCOLLECTION + '/';

      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(() => {
        const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item};
        let tmp = mongo_data;
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
        fstr = `${config.BUCKETS[bucket].name} ${config.BUCKET_NAME}`;
      }

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
            <p>{aux_string}</p>
            <Button onClick={handleConfirm}>Confirm?</Button>
            <Button onClick={handleCancel}>Cancel?</Button>
          </ChakraProvider>
        </div>
        </>
      );
    }
  } else {
    console.log("INSUFFICIENT INPUT CONFIRMED!!");
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
