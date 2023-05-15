{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }
import { useState } from "react";

import { registerLocale, getDefaultLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import { Header } from './components/header'
import { Calendar } from './components/calendar'
import { Desks } from './components/desks'
import { AddEmail } from './components/addemail'
import { ProcessData } from './components/processdata'

export const App = () => {
  const [startDate, setStartDate] = useState<Date|null>(new Date());
  if (startDate) {
    console.log("startDate starts at ");
    console.log(startDate.toLocaleDateString());
  }

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');
  let newlocale = getDefaultLocale();
  console.log("FTER ... ");
  console.log(newlocale);

   return (
     <>
     <Header />
     <Calendar start={startDate} setter={setStartDate} />
     <Desks />
     <AddEmail />
     <ProcessData start={startDate}/>
     </>
   );
}

{ /* 
import { BasicExample }  from './components/form'

export const App = () => {
   return (
     <>
     <BasicExample />
     </>
   );
}
*/ }

export default App
