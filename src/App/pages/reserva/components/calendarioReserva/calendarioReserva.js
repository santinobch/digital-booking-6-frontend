import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendarioReserva.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import "../../../../components/datepicker/datepicker.scss";
import { useState, useEffect } from "react";
import SpinnerLoader from "../../../../components/spinnerLoader/spinnerLoader";

export default function CalendarioReserva({reservas,fechasReserva, setFechasReserva}) {
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

  const [fechasReservadas, setFechasReservadas] = useState([]);

  const getFechasReservadas = () => {
    if(reservas){
      console.log(reservas)
      let fechasReservadas = []
      reservas?.map(i => {
        
        let fechaInicio = new Date(i.fechaDesde);
        let fechaFin = new Date(i.fechaHasta);
        
        let currentDate = fechaInicio
        
        while(currentDate <= fechaFin){
          fechasReservadas.push(new Date(currentDate).toDateString())
          currentDate.setDate(currentDate.getDate() + 1)
        }

        if(fechasReservadas.length > 0) {setFechasReservadas(fechasReservadas)}
      })
    }
  }
    
    useEffect(() => {
      getFechasReservadas()
  }, [reservas])

  const handleSelectDates = (value) => {
    let isoDatesArr = value.map(i => {
      console.log(i.toDate().getDate().toString().length === 1)
      let day = i.toDate().getDate().toString().length === 1 ? `0${i.toDate().getDate()}` : i.toDate().getDate()
      let month = (i.toDate().getMonth()+1).toString().length === 1 ? `0${i.toDate().getMonth()+1}` : i.toDate().getMonth()+1
      console.log(`${day}/${month}/${i.toDate().getFullYear()}`)
      return `${day}/${month}/${i.toDate().getFullYear()}`
    })
  
    if(isoDatesArr.length===1){
      setFechasReserva(() => ({
        fechaCheckIn: isoDatesArr[0],
        fechaCheckOut: null})
      )} else if(isoDatesArr.length===2){
        setFechasReserva(() => ({
          fechaCheckIn: isoDatesArr[0],
        fechaCheckOut: isoDatesArr[1]})
        )}

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
              onChange={handleSelectDates}
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
