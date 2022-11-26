import styles from "./dataInput.module.scss";
import Input from "../../../../components/inputs/text/input";

export default function DataInput({nombre, apellido, email, ciudad}) {

  return (
    <div>
        <h3 className={styles.title}>Completá tus datos</h3>
        <div className={styles.inputContainer}>
            <Input label="Nombre" value={nombre} disabled />
            <Input label="Apellido" value={apellido} disabled />
            <Input label="Correo electrónico" value={email} disabled />
            <Input label="Ciudad" value={ciudad} />
        </div>
    </div>
  );
}
