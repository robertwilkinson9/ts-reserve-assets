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

export const ProcessData = ({ config, mongo_data, start, ssdt, end, sedt, bucket, setbucket, item, setitem, email, setemail, setcomplete, url, confirmed, set_confirmed, setmongodata, setneedreset} : ProcessDataProps) => {
  if (start && end && bucket !== null && item && email) {
    const tomorrow = tomorrow_from_day(start);

    const item_booking = {
      "booking_start": start.toISOString(),
      "booking_end": end.toISOString(),
      "expireAt": tomorrow.toISOString(),
      "bucket": bucket,
      "item": item,
      "email": email,
    };

    const confirm_action = () => {
      const ITEM_url = url + 'item/';
      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(() => {
        const new_record: MongoData = {"booking_start": start.toISOString(), "booking_end": end.toISOString(), "bucket": bucket, "item": item};
        let tmp = mongo_data;
        tmp.push(new_record);
        setmongodata(tmp);
        setneedreset(true);
      });
    }

    const handleConfirm = () => {
      console.log("Confirm Button clicked!");
      confirm_action();
      set_confirmed(true);
    }

    const handleCancel = () => {
      console.log("Cancel Button clicked!");
      setneedreset(true);
    }

    if (confirmed) {
      const istring = `${config.ITEM_NAME} ${item} booked!`;

      return (
        <>
        <h4>{istring}</h4>
        <InputForm
          config={config}
          mongoitems={mongo_data}
          start={start} startdatesetter={ssdt}
          end={end} enddatesetter={sedt}
          bucket={bucket} bucketsetter={setbucket}
          itemsetter={setitem}
          email={email} emailsetter={setemail}
          completesetter={setcomplete}
        />
        </>
      );
    }  else {
      let sdstr = "No start date available"
      if (start) {
        sdstr = `start date is ${start}`;
      }
      let edstr = "No end date available"
      if (end) {
        edstr = `end date is ${end}`;
      }
      let fstr = `No ${config.BUCKET_NAME}`;
      if (bucket === 0 || bucket === 1 || bucket === 2) { // EEK NO! - need to test for number! XXX
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
        mongoitems={mongo_data}
        start={start} startdatesetter={ssdt}
        end={end} enddatesetter={sedt}
        bucket={bucket} bucketsetter={setbucket}
        itemsetter={setitem}
        email={email} emailsetter={setemail}
        completesetter={setcomplete}
      />
      </>
    );
  }
};

export default ProcessData
