import axios from 'axios'

import Button from 'react-bootstrap/Button';

import InputForm from './form'

import { ItemData, MongoData, ProcessDataProps } from './interfaces';

import './processdata.css';

const tomorrow_from_day = (startDateTime: Date): Date => {
  // Current date
  if (startDateTime) {
    const date = new Date(startDateTime);
    // Tomorrow's date
    const tomorrow = date.setDate(date.getDate() + 1);

    return new Date(tomorrow);
  } else {
    return new Date();
  }
}

const add_item_to_mongodb = async (url: string, item_booking: ItemData) => {
  console.log("ADDING ITEM");
  console.log(item_booking);

  try {
    const response = await axios.post(url, item_booking, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(`RDI is ${response.data.id}`);
    return response.data.id;
  } catch (error) {
    if (error.response) {
      // The client was given an error response (5xx, 4xx)
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The client never received a response, and the request was never left
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Anything else
      console.log('Error', error.message);
    }
  }

};

export const ProcessData = ({ config, mongo_data, set_mongodata, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, item, set_item, email, set_email, set_complete, url, confirmed, set_confirmed, set_needreset} : ProcessDataProps) => {
  if (booking_start && booking_end && bucket !== null && item && email) {
    const tomorrow = tomorrow_from_day(booking_start);

    const date_booking = {
      "booking_start": booking_start.toISOString(),
      "booking_end": booking_end.toISOString(),
      "expireAt": tomorrow.toISOString(),
      "bucket": bucket,
      "email": email,
    };

    let name = "Anononymous";
    if ((config.BUCKETS) && config.BUCKETS[bucket] && config.BUCKETS[bucket].name) {
      name = config.BUCKETS[bucket].name; 
    }
    const item_booking = Object.assign(date_booking, { [config.BUCKET_NAME]: name }, { [config.ITEM_LABEL]: item });

    console.log(`BUCKET_NAME is ${config.BUCKET_NAME} and name is ${name} and ITEM is ${item} and ITEM NAME is ${config.ITEM_NAME} And ITEM LABEL is ${config.ITEM_LABEL}`);

    const confirm_action = () => {
      const ITEM_url = url + config.ITEM_NAME + '/';
      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(() => {
        const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, [config.BUCKET_NAME]: name, [config.ITEM_NAME]: item};
        let tmp = mongo_data;
        tmp.push(new_record);
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
        <h4>ProcessData</h4>
        <p>{sdstr}</p>
        <p>{edstr}</p>
        <p>{fstr}</p>
        <p>{item}</p>
        <p>{email}</p>
        <Button onClick={handleConfirm}>Confirm?</Button>
        <Button onClick={handleCancel}>Cancel?</Button>
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
        set_complete={set_complete}
      />
      </>
    );
  }
};

export default ProcessData
