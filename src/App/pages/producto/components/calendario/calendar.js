import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendar.module.scss";
import Button from "../../../../components/button/button";
import useWindowSize from "../../../../hooks/useWindowSize";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from "react";
import "./calendar.scss"

export default function Calendario({productInfo, reservas}) {

  const [fechasReservadas, setFechasReservadas] = useState([]);

  useEffect(() => {
    getFechasReservadas()
}, [reservas])

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

  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];

  const size = useWindowSize();

  const navigate = useNavigate();

  return (
    <div className="calendarSection">
      <section className={styles.calendarLayout}>
        <h1>Fechas disponibles</h1>
        <div className={styles.elements}>
          <div className={styles.container}>
            <Calendar
              weekDays={weekDays}
              numberOfMonths={size.width >= 768 ? 2 : 1}
              minDate={new Date()}
              hideYear
              mapDays={ ({date})  => {
                let props = {}
                if(fechasReservadas.includes(date.toDate().toDateString())) props.disabled = true
                return props
              }}
            />
          </div>
          <div className={styles.form}>
            <h3 className={styles.h3}>Agregá tus fechas de viaje para obtener precios exactos</h3>
            <Button width={size.width >= 768 && size.width <= 1280 ? "50%" : "100%"} styleBtn="dark" onClick={() => navigate(`/producto/${productInfo.id}/reserva`)}> Iniciar reserva </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
