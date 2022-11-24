import styles from "./dataInput.module.scss";
import Input from "../../../../components/inputs/text/input";

export default function DataInput() {

  return (
    <div>
        <h3 className={styles.title}>Completá tus datos</h3>
        <div className={styles.inputContainer}>
            <Input label="Nombre" />
            <Input label="Apellido" />
            <Input label="Correo electrónico" />
            <Input label="Ciudad" />
        </div>
    </div>
  );
}
