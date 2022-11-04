import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import "../calendario/calendar.scss";

export default function Calendario() {
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const width = window.innerWidth;

  return (
    <>
      <section className="product--calendarLayout">
        <h2>Fechas disponibles</h2>
        <div className="product--calendarLayout-elements">
          <div className="product--calendarLayout-container">
            <Calendar
              weekDays={weekDays}
              numberOfMonths={width >= 768 ? 2 : 2}
              minDate={new Date()}
              hideYear
            />
          </div>
          <div className="product--calendarLayout-form">
            <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
            <button className="button">Iniciar reserva</button>
          </div>
        </div>
      </section>
    </>
  );
}
