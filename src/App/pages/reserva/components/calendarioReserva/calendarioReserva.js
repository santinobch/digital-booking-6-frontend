import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendarioReserva.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import "../../../../components/datepicker/datepicker.scss"

export default function CalendarioReserva() {
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const dates = ["2022/11/25"];
  const size = useWindowSize();

  return (
    <div className={styles.calendarSection}>
      <section className={styles.calendarLayout}>
        <h4>Seleccioná tu fecha de reserva</h4>
        <div className={styles.elements}>
          <div className={styles.container}>
            <Calendar
              weekDays={weekDays}
              months={months}
              numberOfMonths={size.width >= 768 ? 2 : 1}
              minDate={new Date()}
              hideYear
              range
              mapDays={({ date }) => {
                let props = {}
                if ([25,26,27].includes(date.day)) props.disabled= true
                return props
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
