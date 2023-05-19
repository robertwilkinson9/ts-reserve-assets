{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }
import { useState } from "react";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

{ /*
const reset = (setStartDate: React.Dispatch<React.SetStateAction<Date|null>>,
               setFloor: React.Dispatch<React.SetStateAction<number|null>>,
               setDesk: React.Dispatch<React.SetStateAction<string|null>>,
               setEmail: React.Dispatch<React.SetStateAction<string|null>>,
               setComplete: React.Dispatch<React.SetStateAction<boolean>>): void =>
{
  setStartDate(new Date());
  setFloor(0);
  setDesk(null);
  setEmail(null);
  setComplete(false);
}
*/ }

export const App = () => {
  const [startDate, setStartDate] = useState<Date|null>(new Date());
  if (startDate) {
    console.log("startDate starts at ");
    console.log(startDate.toLocaleDateString());
  }

  const [floor, setFloor] = useState<number|null>(0);
  const [desk, setDesk] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const [complete, setComplete] = useState<boolean>(false);

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  if (complete) {
    console.log("Form is complete - we can SUBMIT IT XXX");
    console.log("Date is ", startDate);
    console.log("Desk  is ", desk);
    console.log("Email is ", email);

//    reset(setStartDate, setFloor, setDesk, setEmail, setComplete); // eventually just show processdata screen for now
    return (
      <>
      <Header />
      <ProcessData start={startDate} floor={floor} desk={desk} email={email} />
      <InputForm start={startDate} datesetter={setStartDate} floor={floor} floorsetter={setFloor} desksetter={setDesk} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  } else {
    return (
      <>
      <Header />
      <InputForm start={startDate} datesetter={setStartDate} floor={floor} floorsetter={setFloor} desksetter={setDesk} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  }
}

export default App
