import styles from "./detalleReserva.module.scss";

import star from "../../../../../imgs/icons/star.png";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postBooking } from "../../../../services/bookings";

import Button from "../../../../components/button/button";

export default function DetalleReserva({auth, producto, fechas, usuario}) {

    return (
        <div className={styles.inputContainer}>

            <h3 className={styles.title}>Detalle de la reserva</h3>

            <div className={styles.tabletContainer}>
                <img src={producto.imagenes[0].url} className={styles.cuartoImg}></img>

                <div className={styles.bottomContainer}>
                    <h4>{producto.categoria.titulo}</h4>
                    <h3>{producto.titulo}</h3>
                    <div className={styles.stars}>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                    </div>

                    <div className={styles.ubication}>
                        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} />
                        <p>Av. Colón 1643, Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
                    </div>
                    
                    <hr />

                    <div className={styles.dateInput}>
                        <p>Check in</p>
                        <p className={styles.date}>{fechas.fechaCheckIn}</p>
                    </div>

                    <hr />

                    <div className={styles.dateInput}>
                        <p>Check out</p>
                        <p className={styles.date}>{fechas.fechaCheckOut}</p>
                    </div>

                    <hr />

                    <Button styleBtn="dark" onClick={() => postBooking(auth, usuario, producto, fechas)}>Confirmar reserva</Button>
                </div>
            </div>
            
        </div>
    );
}
