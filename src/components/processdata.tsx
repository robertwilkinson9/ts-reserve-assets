import { useState } from "react";

import axios from 'axios'

import Button from 'react-bootstrap/Button';

import App from '../App'

import { ItemData, ProcessDataProps } from './interfaces';

const reset = (
  setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setBucket: React.Dispatch<React.SetStateAction<number|null>>,
  setItem: React.Dispatch<React.SetStateAction<string|null>>,
  setEmail: React.Dispatch<React.SetStateAction<string|null>>,
  setComplete: React.Dispatch<React.SetStateAction<boolean>>,
): void =>
{
  setStartDateTime(new Date());
  setEndDateTime(null);
  setBucket(0);
  setItem(null);
  setEmail(null);
  setComplete(false);
}

const tomorrow_from_day = (startDateTime: Date): Date => {
  // Current date
  const date = new Date(startDateTime!);
  // Tomorrow's date
  const tomorrow = date.setDate(date.getDate() + 1);

  return new Date(tomorrow);
}

const add_item_to_mongodb = async (url: string, item_booking: ItemData) => {
  const response = await axios.post(url, item_booking);
  console.log('ADD_DESK_TO_MONGODB ID IS :', response.data.id)
  return response.data.id;
};

export const ProcessData = ({ start, sdt, end, edt, bucket, sf, item, sd, email, se, sc, url} : ProcessDataProps) => {
  const [datasent, setDatasent] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const tomorrow = tomorrow_from_day(start!);
//  console.log("tomorrow is ", tomorrow);

  const item_booking = {
    "booking_start": start!.toString(),
    "booking_end": end!.toString(),
    "expireAt": tomorrow.toString(),
    "bucket": bucket!,
    "item": item!,
    "email": email!,
  };

  const confirm_action = () => {
    const DESK_url = url + 'item/';
    const id = add_item_to_mongodb(DESK_url, item_booking);
    id.then(function(value) {
      console.log(`RESULT ${value}`);
      setDatasent(true);
      console.log(`INSIDE 1. SET_DATASENT - jj is ${id}, DATASENT IS ${datasent}`)
    });
  }

  let sdstr = "No start date available"
  if (start) {
    sdstr = `start date is ${start}`;
  }
  let edstr = "No end date available"
  if (end) {
    edstr = `end date is ${end}`;
  }
  const Bucket = ["Ground", "First", "Second"];
  let fstr = "No Bucket";
  if (bucket === 0 || bucket === 1 || bucket === 2) {
    fstr = Bucket[bucket] + " bucket";
  }

  const handleConfirm = () => {
    console.log("Confirm Button clicked!");
    confirm_action();
    setConfirmed(true);
  }

  const handleCancel = () => {
    console.log("Cancel Button clicked!");
    reset(sdt, edt, sf, sd, se, sc);
  }

  if (confirmed) {
    return (
      <>
      <h4>Item {item} booked</h4>
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
};

export default ProcessData
