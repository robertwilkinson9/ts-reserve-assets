import { useState } from "react";

import axios from 'axios'

import Button from 'react-bootstrap/Button';

import App from '../App'

import { ItemData, ProcessDataProps } from './interfaces';

import './processdata.css';

const reset = (
  setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setBucket: React.Dispatch<React.SetStateAction<number|null>>,
  setItem: React.Dispatch<React.SetStateAction<string|null>>,
  setEmail: React.Dispatch<React.SetStateAction<string|null>>,
  setComplete: React.Dispatch<React.SetStateAction<boolean>>,
  setDatasent: React.Dispatch<React.SetStateAction<boolean>>,
): void =>
{
  console.log("RESET invoked");
  setStartDateTime(new Date());
  setEndDateTime(null);
  setBucket(0);
  setItem(null);
  setEmail(null);
  setComplete(false);
  setDatasent(false);
}

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
  console.log('ADD_ITEM_TO_MONGODB ID IS :', response.data.id)
  return response.data.id;
};

export const ProcessData = ({ config, start, sdt, end, edt, bucket, sb, item, si, email, se, sc, url, sd} : ProcessDataProps) => {
  const [confirmed, setConfirmed] = useState<boolean>(false);

  console.log(`start is ${start}, end is ${end}, bucket is ${bucket}, item is ${item} and email is ${email}`);

  if (start && end && bucket !== null && item && email) {
    const tomorrow = tomorrow_from_day(start);

    const item_booking = {
      "booking_start": start.toString(),
      "booking_end": end.toString(),
      "expireAt": tomorrow.toString(),
      "bucket": bucket,
      "item": item,
      "email": email,
    };

    const confirm_action = () => {
      const ITEM_url = url + 'item/';
      const id = add_item_to_mongodb(ITEM_url, item_booking);
      id.then(function(value) {
        console.log(`RESULT NEWID is ${value}`);
        sd(true);
      });
    }

    const handleConfirm = () => {
      console.log("Confirm Button clicked!");
      confirm_action();
      setConfirmed(true);
    }

    let sdstr = "No start date available"
    if (start) {
      sdstr = `start date is ${start}`;
    }
    let edstr = "No end date available"
    if (end) {
      edstr = `end date is ${end}`;
    }
    let fstr = `No ${config.BUCKET_NAME}`;
    if (bucket === 0 || bucket === 1 || bucket === 2) {
      fstr = `${config.BUCKETS[bucket].name} ${config.BUCKET_NAME}`;
    }

    const handleCancel = () => {
      console.log("Cancel Button clicked!");
      reset(sdt, edt, sb, si, se, sc, sd);
    }

    if (confirmed) {
      const istring = `${config.ITEM_NAME} ${item} booked!`;
      return (
        <>
        <h4>{istring}</h4>
        <App />
        </>
      );
    } else {
      return (
        <>
        <h4>ProcessData</h4>
        <p>{sdstr}</p>
        <p>{edstr}</p>
        <p>{fstr}</p>
        <p>{item}</p>
        <p>{email}</p>
        <Button
           onClick={handleConfirm}
        >
        Confirm?
        </Button>

        <Button
           onClick={handleCancel}
        >
        Cancel?
        </Button>

        </>
      );
    }
  } else {
    return (
      <>
      <h4>Insufficient Input</h4>
      <App />
      </>
    );
  }
};

export default ProcessData
