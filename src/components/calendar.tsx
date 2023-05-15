import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export interface CalendarProps {
   start: Date | null;
   setter: React.Dispatch<React.SetStateAction<Date | null>>
}

export const Calendar = (props: CalendarProps) => {
 return (
    <>
    <h4> Calendar </h4>
    <DatePicker locale="en-GB" dateFormat="P" selected={props.start} onChange={(date) => props.setter(date)} />
    </>
  );
};

export default Calendar
