import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { CalendarProps } from './interfaces';

export const Calendar = ({label, selected, setter, setter2} : CalendarProps) => {
 return (
    <>
      <label>{label}</label>
      <DatePicker
        locale="en-GB"
        dateFormat="d/MM/yyyy hh:mm aa"
        selected={selected}
        showTimeSelect
        onChange={(date) => {setter(date); setter2 ? setter2(date) : "" } }
      />
    </>
  );
};

export default Calendar
