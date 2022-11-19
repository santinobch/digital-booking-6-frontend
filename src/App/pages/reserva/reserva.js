import styles from "./reserva.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import DetalleReserva from "./components/detalleReserva/detalleReserva";

export default function Reserva() {

  return (
    <main className={styles.main}>
        <ProductHeader />

        <div className={styles.content}>
            <div className={styles.leftContainer}>
                <DataInput />
                <Llegada />
            </div>
            
            <DetalleReserva />
        </div>

        <ProductBottom />
    </main>
  );
}
