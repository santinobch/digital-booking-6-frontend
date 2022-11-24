import styles from "./reserva.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import DetalleReserva from "./components/detalleReserva/detalleReserva";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { GetBooking } from "../../services/bookings";

export default function Reserva() {

    const { idProducto } = useParams();

    const [booking, setBooking] = useState([]);

    // const bookingData = async() => {
    //     await GetBooking(idProducto).then((data) => setBooking(data))
    // }

    GetBooking();

    // useEffect(() => {
    //     bookingData()
    // }, [])

    return (
        <main className={styles.main}>
            <ProductHeader />

            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <DataInput 
                        // nombre={booking.usuario.nombre} 
                        // apellido={booking.usuario.apellido} 
                        // email={booking.usuario.email} 
                        // ciudad={booking.usuario.ciudad}
                        />
                    <Llegada />
                </div>
                
                <DetalleReserva />
            </div>

            <ProductBottom />
        </main>
    );
}
