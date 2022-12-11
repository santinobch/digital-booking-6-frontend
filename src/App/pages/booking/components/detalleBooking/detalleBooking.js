import Button from "../../../../components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerLoader from "../../../../components/spinnerLoader/spinnerLoader";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { postBooking } from "../../../../services/bookings";
import star from "../../../../../imgs/icons/star.png";
import styles from "./detalleBooking.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function DetalleBooking({ arrivalTime, auth, product, fechas, usuario }) {
  const [validations, setValidations] = useState('')
  const navigate = useNavigate();

  const validate = e => {
    let isValid = true
    if(!fechas.fechaCheckIn && !fechas.fechaCheckOut){
      setValidations("Debe seleccionar un rango de fechas para su reserva")
      isValid = false
    } else if (!fechas.fechaCheckOut){
      setValidations("Por favor, elija una fecha de check out")
      isValid=false
    }
    return isValid
}

  const handleConfirmarBooking = () => {
    const isValid = validate()
    if(!isValid){
      return false
    }

    postBooking(arrivalTime, auth, usuario, product, fechas).then((status) => {
      if (status > 200 && status < 300) {
        navigate("/succesfull?page=reserva-exitosa");
      }
    });
  };

  if (product.length === 0) {
    return <SpinnerLoader />;
  } else {
    return (
      <>
        <div className={styles.inputContainer}>
          <div className={styles.detalleHeader}>
            <h3 className={styles.title}>Detalle de la reserva</h3>
            <div className={styles.errorDiv}>
              <p>{validations}</p>
            </div>
          </div>

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
    </>
    );
  }
}
