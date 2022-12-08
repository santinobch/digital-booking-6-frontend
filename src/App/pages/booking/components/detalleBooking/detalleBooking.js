import Button from "../../../../components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerLoader from "../../../../components/spinnerLoader/spinnerLoader";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { postBooking } from "../../../../services/bookings";
import star from "../../../../../imgs/icons/star.png";
import styles from "./detalleBooking.module.scss";
import { useNavigate } from "react-router-dom";

export default function DetalleBooking({ auth, product, fechas, usuario }) {
  const navigate = useNavigate();

  const handleConfirmarBooking = () => {
    postBooking(auth, usuario, product, fechas).then((status) => {
      if (status > 200 && status < 300) {
        navigate("/succesfull?page=reserva-exitosa");
      }
    });
  };

  if (product.length === 0) {
    return <SpinnerLoader />;
  } else {
    return (
      <div className={styles.inputContainer}>
        <h3 className={styles.title}>Detalle de la booking</h3>

        <div className={styles.tabletContainer}>
          <img
            src={product.imagenes[0].imagenUrl}
            className={styles.cuartoImg}
            alt=""
          ></img>

          <div className={styles.bottomContainer}>
            <h4>{product.categoryNombre}</h4>
            <h3>{product.titulo}</h3>
            <div className={styles.stars}>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
            </div>

            <div className={styles.ubication}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "4px" }}
              />
              <p>
                {product.ciudadNombre}, {product.ciudadPais}
              </p>
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

                <Button styleBtn="dark" onClick={handleConfirmarBooking}>Confirmar reserva</Button>
            </div>
        </div>
    </div>
    );
  }
}
