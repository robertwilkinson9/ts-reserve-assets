/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { CalendarProps } from '../components/interfaces';
import { Calendar } from '../components/calendar';

const renderCalendar = (props : CalendarProps) => {
  console.log(`in renderCalendar - props.label is ${props.label}`);
  console.log(`in renderCalendar - props.selected is ${props.selected}`);
  return render(<Calendar label={props.label} selected={props.selected} date_setter={props.date_setter} date_setter2={props.date_setter2} />);
}

const null_date = null
const null_setter = () => {};

describe('header test', () => {
  it("should contain label and datepicker elements", async () => {
    const test_label = "element_test";
    const { findByTestId } = renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});

    const Label = await findByTestId("calendar_label");
    expect(Label).toBeInTheDocument();

    const DatePicker = await findByTestId("calendar_datepicker");
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

//    const dp_html = `<div
//  data-testid="calendar_datepicker"
//>
//  <div
//    class="react-datepicker-wrapper"
//  >
//    <div
//      class="react-datepicker__input-container "
//    >
//      <span
//        aria-live="polite"
//        class="react-datepicker__aria-live"
//        role="alert"
//      />
//      <input
//        class=""
//        type="text"
//        value=""
//      />
//    </div>
//  </div>
//</div>`;

  it("datepicker object should contain a react-datepicker-wrapper object", async () => {
    const test_label = "react-datepicker-wrapper_test";
    const { container } =  renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});

    const react_datepicker_wrapper = container.querySelector('[class="react-datepicker-wrapper"]')
    expect(react_datepicker_wrapper).toBeInTheDocument();
  });


  it("datepicker object should contain a react-datepicker__input-container object", async () => {
    const test_label = "react-datepicker__input-container";
    const { container } =  renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});

    const react_datepicker_input_container = container.querySelector('[class="react-datepicker__input-container "]')
    expect(react_datepicker_input_container).toBeInTheDocument();
  });

  it("datepicker object should contain a react-datepicker__aria-live object", async () => {
    const test_label = "react-datepicker__aria-live";
    const { container } =  renderCalendar({label: test_label, selected: null_date, date_setter: null_setter, date_setter2: null_setter});

    const react_datepicker_aria_live = container.querySelector('[class="react-datepicker__aria-live"]')
    expect(react_datepicker_aria_live).toBeInTheDocument();
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
