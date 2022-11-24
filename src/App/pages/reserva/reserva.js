import styles from "./reserva.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import CalendarioReserva from "./components/calendarioReserva/calendarioReserva"
import DetalleReserva from "./components/detalleReserva/detalleReserva";
import { getProducto, getReservas } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reserva() {

    const { idProducto } = useParams();

    const [producto, setProducto] = useState([]);
    const [reservas, setReservas] = useState();
    const [fechasReserva, setFechasReserva] = useState({
        fechaCheckIn: null,
        fechaCheckOut: null
    });

    const getDataProducto = async() => {
        await getProducto(idProducto).then((data) => setProducto(data))
    }

    const getDataReservas = async() => {
        await getReservas(idProducto).then((data) => {
            setReservas(data)
        })
    }
    useEffect(() => {
        getDataProducto()
        getDataReservas()
    }, [])

    useEffect(() => {
        console.log(fechasReserva)
    }, [fechasReserva])


    // const bookingData = async() => {
    //     await GetBooking(idProducto).then((data) => setBooking(data))
    // }

    //GetBooking();

    // useEffect(() => {
    //     bookingData()
    // }, [])

    if(producto.length === 0){
        return (
            <SpinnerLoader/>
        )
    }

    return (
        <main className={styles.main}>
            <ProductHeader productInfo={producto} />

            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <DataInput 
                        // nombre={booking.usuario.nombre} 
                        // apellido={booking.usuario.apellido} 
                        // email={booking.usuario.email} 
                        // ciudad={booking.usuario.ciudad}
                        />
                    <CalendarioReserva reservas={reservas} fechasReserva={fechasReserva} setFechasReserva={setFechasReserva}/>
                    <Llegada />
                </div>
                
                <DetalleReserva producto={producto} fechas={fechasReserva} />
            </div>

            <ProductBottom />
        </main>
    );
}
