import "react-multi-date-picker/styles/colors/teal.css";
import { Calendar } from "react-multi-date-picker";
import styles from "./calendar.module.scss";
import Button from "../../../../components/button/button";

export default function Calendario() {
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const width = window.innerWidth;

  return (
    <>
      <section className={styles.calendarLayout}>
        <h1>Fechas disponibles</h1>
        <div className={styles.elements}>
          <div className={styles.container}>
            <Calendar
              weekDays={weekDays}
              numberOfMonths={width >= 768 ? 2 : 1}
              minDate={new Date()}
              hideYear
            />
          </div>
          <div className={styles.form}>
            <h3 className={styles.h3}>Agregá tus fechas de viaje para obtener precios exactos</h3>
            <Button className={styles.button} style="dark"> Iniciar reserva </Button>
          </div>
        </div>
      </section>
    </>
  );
}
