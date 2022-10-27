import "react-multi-date-picker/styles/colors/teal.css";
import DatePicker from "react-multi-date-picker";
import "./datepicker.scss";
import { useRef } from "react";
import Button from "../button/button";

export default function Datepicker() {
  const datePickerRef = useRef();
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
  const width = window.innerWidth;

  return (
    <DatePicker
      ref={datePickerRef}
      weekDays={weekDays}
      numberOfMonths={width >= 768 ? 2 : 1}
      disableMonthPicker
      disableYearPicker
      format="D MMM"
      range
      minDate={new Date()}
      hideYear
      placeholder= "📅 Check in - Check out"
    >
      <Button
        style="dark"
        width="100%"
        onClick={() => datePickerRef.current.closeCalendar()}
      >
        Aplicar
      </Button>
    </DatePicker>
  );
}