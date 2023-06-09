import { useState } from "react";

import axios from 'axios'

import Button from 'react-bootstrap/Button';

import App from '../App'

const reset = (
  setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setEndDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
  setFloor: React.Dispatch<React.SetStateAction<number|null>>,
  setDesk: React.Dispatch<React.SetStateAction<string|null>>,
  setEmail: React.Dispatch<React.SetStateAction<string|null>>,
  setComplete: React.Dispatch<React.SetStateAction<boolean>>,
): void =>
{
  setStartDateTime(new Date());
  setEndDateTime(null);
  setFloor(0);
  setDesk(null);
  setEmail(null);
  setComplete(false);
}

export interface ProcessDataProps {
   start: Date | null;
   sdt: React.Dispatch<React.SetStateAction<Date|null>>,
   end: Date | null;
   edt: React.Dispatch<React.SetStateAction<Date|null>>,
   floor: number | null;
   sf: React.Dispatch<React.SetStateAction<number|null>>,
   desk: string | null;
   sd: React.Dispatch<React.SetStateAction<string|null>>,
   email: string | null;
   se: React.Dispatch<React.SetStateAction<string|null>>,
   sc: React.Dispatch<React.SetStateAction<boolean>>,
   url: string;
}

const tomorrow_from_day = (startDateTime: Date): Date => {
  // Current date
  const date = new Date(startDateTime!);
  // Tomorrow's date
  const tomorrow = date.setDate(date.getDate() + 1);

  return new Date(tomorrow);
}

interface DeskData {
  "booking_start": string;
  "booking_end": string;
  "expireAt": string;
  "floor": number;
  "desk": string;
  "email": string
}

const add_desk_to_mongodb = async (url: string, desk_booking: DeskData) => {
  const response = await axios.post(url, desk_booking);
  console.log('ADD_DESK_TO_MONGODB ID IS :', response.data.id)
  return response.data.id;
};

export const ProcessData = ({ start, sdt, end, edt, floor, sf, desk, sd, email, se, sc, url} : ProcessDataProps) => {
  const [datasent, setDatasent] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const tomorrow = tomorrow_from_day(start!);
  console.log("tomorrow is ", tomorrow);

  const desk_booking = {
    "booking_start": start!.toString(),
    "booking_end": end!.toString(),
    "expireAt": tomorrow.toString(),
    "floor": floor!,
    "desk": desk!,
    "email": email!,
  };

  const confirm_action = () => {
    const DESK_url = url + 'desk/';
    const id = add_desk_to_mongodb(DESK_url, desk_booking);
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
  const Floor = ["Ground", "First", "Second"];
  let fstr = "No Floor";
  if (floor === 0 || floor === 1 || floor === 2) {
    fstr = Floor[floor] + " floor";
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
      <h4>Desk {desk} booked</h4>
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
      <p>{desk}</p>
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
