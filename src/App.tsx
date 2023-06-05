import { useState, useEffect } from "react";

import axios from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

{ /*
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
*/ }

interface DeskData {
  "booking_start": string;
  "booking_end": string;
  "expireAt": string;
  "floor": number; 
  "desk": string;
  "email": string
}

type string_or_null = string | null;

const tomorrow_from_day = (startDateTime: Date): Date => {
  // Current date
  const date = new Date(startDateTime!);
  // Tomorrow's date
  const tomorrow = date.setDate(date.getDate() + 1);

  return new Date(tomorrow);
}

const add_desk_to_mongodb = async (url: string, desk_booking: DeskData) => {
  console.log("ADD_DESK_TO_MONGODB and BEFORE desk_booking is ", JSON.stringify(desk_booking));
  const response = await axios.post(url, desk_booking);
  console.log('STATUS:', response.status)
  console.log('DATA IS :', response.data)
};

export const App = () => {
  const [startDateTime, setStartDateTime] = useState<Date|null>(new Date());
  if (startDateTime) {
    console.log("startDateTime starts at ");
    console.log(startDateTime);
    console.log(" or ");
    console.log(startDateTime.toLocaleDateString());
  }

  // const [endDateTime, setEndDateTime] = useState<Date|null>(startDateTime);
  const [endDateTime, setEndDateTime] = useState<Date|null>(null);
  if (endDateTime) {
    console.log("endDateTime ends at ");
    console.log(endDateTime);
    console.log(" or ");
    console.log(endDateTime.toLocaleDateString());
  }

  const [floor, setFloor] = useState<number|null>(0);
  const [desk, setDesk] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const [datasent, setDatasent] = useState<boolean>(false);
  const [mongodesks, setMongodesks] = useState<string_or_null[]>([null]);

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  const API_url = 'http://localhost:5179/api/';
  const DESK_url = API_url + 'desk/';

  const get_mongodesks = () => {
    // Change this endpoint to whatever local or online address you have
    const DESKS_url = API_url + 'desks/';

    fetch(DESKS_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("IN useEffect and DATA.DATA is ", JSON.stringify(data.data));
        setMongodesks(data.data);
      });
    };

    useEffect(() => {
        get_mongodesks();
    }, []);

  console.log("after useEffect App and DESKS are ", JSON.stringify(mongodesks));

  if (complete) {
    console.log("Form is complete - we can SUBMIT IT XXX");
    console.log(`StartDateTime is ${startDateTime}, EndDateTime is ${endDateTime}, Floor is ${floor}, Desk is ${desk}, Email is ${email}`);
    
    const tomorrow = tomorrow_from_day(startDateTime!);
    console.log("tomorrow is ", tomorrow);

    const desk_booking = {
      "booking_start": startDateTime!.toString(),
      "booking_end": endDateTime!.toString(),
      "expireAt": tomorrow.toString(),
      "floor": floor!,
      "desk": desk!,
      "email": email!,
    };
    if (!datasent) {
      add_desk_to_mongodb(DESK_url, desk_booking);
      console.log(`0. SET_DATASENT - DATASENT IS ${datasent}`)
      setDatasent(true);
      console.log(`1. SET_DATASENT - DATASENT IS ${datasent}`)
    }

//    reset(setStartDateTime, setEndDateTime, setFloor, setDesk, setEmail, setComplete); // eventually just show processdata screen for now
    return (
      <>
      <Header />
      <ProcessData start={startDateTime} end={endDateTime} floor={floor} desk={desk} email={email} />
      <InputForm start={startDateTime} startdatesetter={setStartDateTime} end={endDateTime} enddatesetter={setEndDateTime} floor={floor} floorsetter={setFloor} desksetter={setDesk} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  } else {
    return (
      <>
      <Header />
      <InputForm start={startDateTime} startdatesetter={setStartDateTime} end={endDateTime} enddatesetter={setEndDateTime} floor={floor} floorsetter={setFloor} desksetter={setDesk} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  }
}

export default App
