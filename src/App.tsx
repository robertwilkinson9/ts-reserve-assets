{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }
import { useState } from "react";

import { Header } from './components/header'
import { Calendar } from './components/calendar'
import { Desks } from './components/desks'
import { AddEmail } from './components/addemail'

export const App = () => {
   const [startDate, setStartDate] = useState<Date|null>(new Date());
   if (startDate) {
     console.log("startDate starts at ");
     console.log(startDate.toLocaleDateString());
   }

   return (
     <>
     <Header />
{ /*
     <Calendar />

    console.log("startDate starts at ");
      console.log(startDate.toLocaleDateString());
     console.log(`startDate starts at {startDate}`
*/ }
     <Calendar start={startDate} setter={setStartDate} />
{ /*
     console.log("startDate is now ");
     console.log(startDate.toLocaleDateString());
*/ }
     <Desks />
     <AddEmail />
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
