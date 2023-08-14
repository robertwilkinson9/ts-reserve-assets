/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { Calendar } from '../components/calendar.tsx';

//const renderCalendar = ({label, selected, date_setter, date_setter2} : CalendarProps) => {
const renderCalendar = (label: string) => {
  console.log(`label is ${label}`);
  return render(<Calendar label={label} />);
}

describe('header test', () => {
  it("should contain label and datepicker elements", async () => {
    const { findByTestId } = render(<Calendar />);

    const Label = await findByTestId("calendar_label");
    expect(Label).toBeInTheDocument();

    const DatePicker = await findByTestId("calendar_datepicker");
    expect(DatePicker).toBeInTheDocument();
  });

  it("should be able to set the label", async () => {
    const test_label = "test";
    const test_date = null
    const null_setter = (input) => {};

//    const { findByTestId } = renderCalendar({test_label, test_date, null_setter});
    const { findByTestId } = renderCalendar(test_label);
    expect(screen.getByTestId('calendar_label')).toHaveTextContent(test_label);

//    const Label = await findByTestId("calendar_label");
//    expect(Label).toInclude('test');
//    expect(Label.text()).to.include('test');
//    expect(Label).toInclude('test');
//    expect(Label).toInclude('test');
//    expect(Label).toContain('test');
  });
});
