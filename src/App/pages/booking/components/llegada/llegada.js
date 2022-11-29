import styles from "./llegada.module.scss";
import Input from "../../../../components/inputs/text/input";

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Llegada() {

  return (
    <div>
        <h3 className={styles.title}>Tu horario de llegada</h3>
        <div className={styles.inputContainer}>
            <div className={styles.checkIn}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "4px" }} />
                <h4>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</h4>
            </div>

            <Input label="Indicá tu horario estimado de llegada" />
        </div>
    </div>
  );
}
