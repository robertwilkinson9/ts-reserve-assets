{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }
import { useState, useEffect } from "react";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

{ /*
const reset = (setStartDateTime: React.Dispatch<React.SetStateAction<Date|null>>,
               setFloor: React.Dispatch<React.SetStateAction<number|null>>,
               setDesk: React.Dispatch<React.SetStateAction<string|null>>,
               setEmail: React.Dispatch<React.SetStateAction<string|null>>,
               setComplete: React.Dispatch<React.SetStateAction<boolean>>): void =>
{
  setStartDateTime(new Date());
  setFloor(0);
  setDesk(null);
  setEmail(null);
  setComplete(false);
}
*/ }

interface DeskData {
  "booking_date": string;
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

export const App = () => {
  const [startDateTime, setStartDateTime] = useState<Date|null>(new Date());
  // const [endDateTime, setEndDateTime] = useState<Date|null>(startDateTime);
  const [endDateTime, setEndDateTime] = useState<Date|null>(null);
  if (startDateTime) {
    console.log("startDateTime starts at ");
    console.log(startDateTime);
    console.log(" or ");
    console.log(startDateTime.toLocaleDateString());
  }

  const [floor, setFloor] = useState<number|null>(0);
  const [desk, setDesk] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const [mongodesks, setMongodesks] = useState<string_or_null[]>([null]);

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  const API_url = 'http://localhost:5179/api/';
  const DESK_url = API_url + 'desk/';

  const add_desk_to_mongodb = (desk_booking: DeskData) => {
    console.log("ADD_DESK_TO_MONGODB and before ");
    fetch(DESK_url, {
      method: 'POST',
      body: JSON.stringify(desk_booking),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("------------add_todo returned data is");
      console.log(data);
      console.log("ADD_DESK_TO_MONGODB and desk_booking is ", JSON.stringify(desk_booking));
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

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

    const test_data = {
      "booking_date": startDateTime!.toString(),
      "expireAt": tomorrow.toString(),
      "floor": floor!,
      "desk": desk!,
      "email": email!,
    };
    add_desk_to_mongodb(test_data);

//    reset(setStartDateTime, setFloor, setDesk, setEmail, setComplete); // eventually just show processdata screen for now
    return (
      <>
      <Header />
      <ProcessData start={startDateTime} floor={floor} desk={desk} email={email} />
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
