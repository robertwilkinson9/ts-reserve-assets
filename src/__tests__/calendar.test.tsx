/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { CalendarProps } from '../components/interfaces';
import { Calendar } from '../components/calendar';

const renderCalendar = (props : CalendarProps) => {
  return render(<Calendar label={props.label} selected={props.selected} date_setter={props.date_setter} date_setter2={props.date_setter2} />);
}

const null_date = null
/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

describe('header test', () => {
  it("should contain label and datepicker elements", async () => {
    const test_label = "element_test";
    renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});

    const Label = screen.queryByTestId("calendar_label");
    expect(Label).toBeInTheDocument();

    const DatePicker = screen.queryByTestId("calendar_datepicker");
    expect(DatePicker).toBeInTheDocument();
  });

  it("should be able to set the label", async () => {
    const test_label = "label_test";
    renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});
    expect(screen.getByTestId('calendar_label')).toHaveTextContent(test_label);
  });

  it("should contain a datepicker object ", async () => {
    const test_label = "datepicker_test";

    renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});
    expect(screen.getByTestId('calendar_datepicker')).toBeInTheDocument;
  });

  it("datepicker object selected should be displayed as a value for the input", async () => {
    const test_label = "date_test";
    const test_date_string = "31/12/1999 11:59 PM";
    const test_date = new Date("1999-12-31T23:59");

    renderCalendar({label: test_label, selected: test_date, date_setter: null_setter, date_setter2: null_setter});

    const input_box = screen.getByRole('textbox');
    expect(input_box).toHaveAttribute("value", test_date_string);
  });
});
