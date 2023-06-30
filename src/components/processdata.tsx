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
  const response = await axios.post(url, item_booking);
//  console.log('ADD_ITEM_TO_MONGODB ID IS :', response.data.id)
  return response.data.id;
};

export const ProcessData = ({ config, mongo_data, set_mongodata, booking_start, set_booking_start, booking_end, set_booking_end, bucket, set_bucket, item, set_item, email, set_email, set_complete, url, confirmed, set_confirmed, set_needreset} : ProcessDataProps) => {
  if (booking_start && booking_end && bucket !== null && item && email) {
    const tomorrow = tomorrow_from_day(booking_start);

    const item_booking = {
      "booking_start": booking_start.toISOString(),
      "booking_end": booking_end.toISOString(),
      "expireAt": tomorrow.toISOString(),
      "bucket": bucket,
      "item": item,
      "email": email,
    };

    const confirm_action = () => {
      const ITEM_url = url + 'item/';
      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(() => {
        const new_record: MongoData = {"booking_start": booking_start.toISOString(), "booking_end": booking_end.toISOString(), "bucket": bucket, "item": item};
        let tmp = mongo_data;
        tmp.push(new_record);
        set_mongodata(tmp);
        set_needreset(true);
      });
    }

    const handleConfirm = () => {
      console.log("Confirm Button clicked!");
      confirm_action();
      set_confirmed(true);
    }

    const handleCancel = () => {
      console.log("Cancel Button clicked!");
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
          booking_start={booking_start} startdatesetter={set_booking_start}
          booking_end={booking_end} enddatesetter={set_booking_end}
          bucket={bucket} bucketsetter={set_bucket}
          itemsetter={set_item}
          email={email} emailsetter={set_email}
          completesetter={set_complete}
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
        booking_start={booking_start} startdatesetter={set_booking_start}
        booking_end={booking_end} enddatesetter={set_booking_end}
        bucket={bucket} bucketsetter={set_bucket}
        itemsetter={set_item}
        email={email} emailsetter={set_email}
        completesetter={set_complete}
      />
      </>
    );
  }
};

export default ProcessData
