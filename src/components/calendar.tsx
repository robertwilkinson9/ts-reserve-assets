import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { CalendarProps } from './interfaces';

export const Calendar = ({label, selected, date_setter, date_setter2} : CalendarProps) => {
 return (
    <>
      <label data-testid="calendar_label" >{label}</label>
      <div data-testid="calendar_datepicker">
      <DatePicker
        dateFormat="d/MM/yyyy hh:mm aa"
        selected={selected}
        showTimeSelect
        onChange={(date) => {date_setter(date); date_setter2 ? date_setter2(date) : "" } }
      />
      </div>
    </>
  );
};

export default Calendar
