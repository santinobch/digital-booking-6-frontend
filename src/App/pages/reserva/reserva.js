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

    const getDataProducto = async() => {
        await getProducto(idProducto).then((data) => setProducto(data))
    }

    const getDataReservas = async() => {
        await getReservas(idProducto).then((data) => {
            setReservas(data)
        })
    }

    function convertDateToUTC(date) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); }

    // const getFechasReservadas = () => {
    //     reservas?.map(i => {
    //       let dates = []
          
    //       let fechaInicio = new Date(i.fechaDesde);
    //       fechaInicio = convertDateToUTC(fechaInicio)
    //       let fechaFin = new Date(i.fechaHasta);
    //       fechaFin = convertDateToUTC(fechaFin)
      
    //       while(fechaInicio < fechaFin){
    //         dates.push(`${fechaInicio.getFullYear()}-${fechaInicio.getMonth()}-${fechaInicio.getDate()}` )
    //         fechaInicio.setDate(fechaInicio.getDate()+1)
    //       }
    //       console.log(dates)
    //       return setFechasReservadas(dates)
    //     })
    // }

    useEffect(() => {
        getDataProducto()
        getDataReservas()
    }, [])


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
                    <CalendarioReserva reservas={reservas}/>
                    <Llegada />
                </div>
                
                <DetalleReserva />
            </div>

            <ProductBottom />
        </main>
    );
}
