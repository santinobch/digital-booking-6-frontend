import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendarioReserva.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import "../../../../components/datepicker/datepicker.scss";
import { useState, useEffect } from "react";

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
      
          while(fechaInicio < fechaFin){
            dates.push(`${fechaInicio.getFullYear()}-${fechaInicio.getMonth()}-${fechaInicio.getDate()}` )
            fechaInicio.setDate(fechaInicio.getDate()+1)
          }
          setFechasReservadas(dates)
        })
    }

    useEffect(() => {
      getFechasReservadas()
  }, [reservas])

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
                let day = `${date.day}/${date.month}/${date.year}`   
                console.log(day)
              }}
              />
          </div>
        </div>
      </section>
    </div>
  );
}