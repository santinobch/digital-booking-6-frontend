import "react-multi-date-picker/styles/colors/teal.css";
import DatePicker, {DateObject} from "react-multi-date-picker";
import "../datepicker/datepicker.css";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import { useRef } from "react";

export default function Datepicker() {
  const datePickerRef = useRef();
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

  return (
    <DatePicker
      weekDays={weekDays}
      ref={datePickerRef}
      calendarPosition="bottom-center"
      inputClass="input-calendar"
      className="teal"
      numberOfMonths={2}
      disableMonthPicker
      disableYearPicker
      range
      minDate={new DateObject()}
      hideYear
      placeholder="Check in - Check out"
      animations={[opacity(), transition({ from: 35, duration: 800 })]}
    >
      <button
        className="CalendarButton"
        onClick={() => datePickerRef.current.closeCalendar()}
      >
        Aplicar
      </button>
    </DatePicker>
  );
}