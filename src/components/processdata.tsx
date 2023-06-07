import { useState } from "react";

import Button from 'react-bootstrap/Button';

import axios from 'axios'

export interface ProcessDataProps {
   start: Date | null;
   end: Date | null;
   floor: number | null;
   desk: string | null;
   email: string | null;
   url: string;
   ids: string[];
   setIds: React.Dispatch<React.SetStateAction<string[]>>;
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
//  console.log('ADD_DESK_TO_MONGODB STATUS:', response.status) // XXX need to handle non success ?
  console.log('ADD_DESK_TO_MONGODB ID IS :', response.data.id)
  return response.data.id;
};

export const ProcessData = ({ start, end, floor, desk, email, url, ids, setIds } : ProcessDataProps) => {
  const [datasent, setDatasent] = useState<boolean>(false);
//  const [ids, setIds] = useState<string[]>([]);

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

  if (datasent) {
    console.log("IDS are ", ids); 
  } else {
    const DESK_url = url + 'desk/';
    const id = add_desk_to_mongodb(DESK_url, desk_booking);
    id.then(function(value) {
      console.log(`RESULT ${value}`);
      setIds([...ids, value])
      console.log("INSIDE NOW IDS are ", ids); 
      setDatasent(true);
      console.log(`INSIDE 1. SET_DATASENT - jj is ${id}, DATASENT IS ${datasent}`)
    });
    console.log("OUTSIDE NOW IDS are ", ids); 
    setDatasent(true);
    console.log(`OUTSIDE 1. SET_DATASENT - jj is ${id}, DATASENT IS ${datasent}`)
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

  const handleClick = () => {
    console.log("Another Button clicked!");
  }

  return (
    <>
    <h4>ProcessData</h4>
    <p>{sdstr}</p>
    <p>{edstr}</p>
    <p>{fstr}</p>
    <p>{desk}</p>
    <p>{email}</p>
    <Button
       onClick={handleClick}
    >
    Another?
    </Button>
    </>
  );
};

export default ProcessData
