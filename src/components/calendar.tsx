import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export interface CalendarProps {
   label: string;
   selected: Date | null;
   setter: React.Dispatch<React.SetStateAction<Date | null>>
   setter2?: React.Dispatch<React.SetStateAction<Date | null>>
}

export const Calendar = ({label, selected, setter, setter2} : CalendarProps) => {
 return (
    <>
      <label> {label} Calendar </label>
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
