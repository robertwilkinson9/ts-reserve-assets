{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }

import DatePicker from "react-datepicker";

import { registerLocale, getDefaultLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export interface CalendarProps {
   start: Date | null;
   setter: any;
}

export const Calendar = (props: CalendarProps) => {
//  const [startDate, setStartDate] = useState<Date|null>(new Date());
//  console.log("startDate starts at ");
//  console.log(startDate.toLocaleDateString());

registerLocale('en-GB', enGB)

console.log("BEFORE ... ");
console.log(getDefaultLocale);

setDefaultLocale('en-GB');
console.log("FTER ... ");
console.log(getDefaultLocale);
 return (
    <>
    <h4> Calendar </h4>
    <DatePicker locale="en-GB" dateFormat="P" selected={props.start} onChange={(date) => props.setter(date)} />
    </>
  );
};

export default Calendar
