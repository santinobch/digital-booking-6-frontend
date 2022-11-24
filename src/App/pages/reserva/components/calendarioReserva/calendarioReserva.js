import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendarioReserva.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import "../../../../components/datepicker/datepicker.scss";
import { useState, useEffect } from "react";
import SpinnerLoader from "../../../../components/spinnerLoader/spinnerLoader";

export default function CalendarioReserva({reservas}) {
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

  const size = useWindowSize();

  const [fechasReservadas, setFechasReservadas] = useState();

  const getFechasReservadas = () => {
        reservas?.map(i => {
          let dates = []
          
          let fechaInicio = new Date(i.fechaDesde);
          let fechaFin = new Date(i.fechaHasta);

          let currentDate = fechaInicio
      
          while(currentDate < fechaFin){
            dates.push(new Date(currentDate).toDateString())
            currentDate.setDate(currentDate.getDate() + 1)
          }
          setFechasReservadas(dates)
        })
    }

    useEffect(() => {
      getFechasReservadas()
  }, [reservas])

  if(reservas === undefined){
    return (
      <SpinnerLoader/>
  )
  }

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
              mapDays={ ({date})  => {
                let props = {}
                if(fechasReservadas.includes(date.toDate().toDateString())) props.disabled = true
                return props
              }}
              />
          </div>
        </div>
      </section>
    </div>
  );
}
