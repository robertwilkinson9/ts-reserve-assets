{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export interface CalendarProps {
   start: Date | null;
   setter: any;
}

export const Calendar = (props: CalendarProps) => {
//  const [startDate, setStartDate] = useState<Date|null>(new Date());
  return (
    <>
    <h4> Calendar </h4>
    <DatePicker selected={props.start} onChange={(date) => props.setter(date)} />
    </>
  );
};

export default Calendar
