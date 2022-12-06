import styles from "./booking.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import CalendarBooking from "./components/calendarBooking/calendarBooking"
import DetalleBooking from "./components/detalleBooking/detalleBooking";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

import { getProduct } from "../../services/products";
import { getBookings } from "../../services/bookings";
import { useEffect } from "react";

export default function Booking() {
    const [cookie] = useCookies();

    const { idProduct } = useParams();
    
    const [product, setProduct] = useState([]);
    const [bookings, setBookings] = useState();
    const [fechasBooking, setFechasBooking] = useState({
        fechaCheckIn: null,
        fechaCheckOut: null
    });

    // const getDataProduct = async() => {
    //     await getProduct(idProduct).then((data) => setProduct(data))
    // }

    // const getDataBookings = async() => {
    //     await getBookings(idProduct).then((data) => Array.isArray(data) ? setBookings(data) : "" )
    // }

    useEffect(() => {
        getProduct(idProduct)
        .then((response) => {
            setProduct(response);
        });
    getBookings(idProduct)
        .then((response) => {
            if (Array.isArray(response)) { setBookings(response) }
        });
    }, [idProduct])

    if(product === undefined && bookings === undefined){
        return (
            <SpinnerLoader/>
        )
    }

    return (
        <main className={styles.main}>
            <ProductHeader productInfo={product} />

            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <DataInput 
                        nombre={cookie.user.nombre} 
                        apellido={cookie.user.apellido} 
                        email={cookie.user.email} 
                        ciudad={cookie.user.ciudad}
                        />
                    <CalendarBooking bookings={bookings} fechasBooking={fechasBooking} setFechasBooking={setFechasBooking}/>
                    <Llegada />
                </div>
                
                <DetalleBooking auth={cookie.auth} product={product} fechas={fechasBooking} usuario={cookie.user} />
            </div>

            <ProductBottom product={product}/>
        </main>
    );
}
