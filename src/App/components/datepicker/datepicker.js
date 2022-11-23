import "react-multi-date-picker/styles/colors/teal.css";
import "./datepicker.scss";

import Button from "../button/button";
import DatePicker from "react-multi-date-picker";
import { useRef } from "react";
import {AiOutlineArrowUp} from "react-icons/ai"

export default function Datepicker({ value, onChange }) {
  const datePickerRef = useRef();
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
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
      placeholder="📅 Check in - Check out"
      onChange={(value) => onChange({ name: "fecha", value })}
      value={value}
    >
      <Button
        styleBtn="dark"
        width="100%"
        onClick={() => datePickerRef.current.closeCalendar()}
      >
        Aplicar
      </Button>
    </DatePicker>
  );
}
