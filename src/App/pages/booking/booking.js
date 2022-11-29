import styles from "./booking.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import CalendarBooking from "./components/calendarBooking/calendarBooking"
import DetalleBooking from "./components/detalleBooking/detalleBooking";
import { getProduct, getBookings } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getStoreItem } from "../../utils/storage";

export default function Booking() {
    const auth = getStoreItem('auth');
    const usuario = getStoreItem('usuario');

    const { idProduct } = useParams();
    
    const [product, setProduct] = useState([]);
    const [bookings, setBookings] = useState();
    const [fechasBooking, setFechasBooking] = useState({
        fechaCheckIn: null,
        fechaCheckOut: null
    });

    const getDataProduct = async() => {
        await getProduct(idProduct).then((data) => setProduct(data))
    }

    const getDataBookings = async() => {
        await getBookings(idProduct).then((data) => Array.isArray(data) ? setBookings(data) : "" )
    }
    useEffect(() => {
        getDataProduct()
        getDataBookings()
    }, [])

    if(product.length === 0){
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
                        nombre={usuario ? usuario.nombre : ""} 
                        apellido={usuario ? usuario.apellido : ""} 
                        email={usuario ? usuario.email : ""} 
                        ciudad={usuario ? usuario.ciudad : ""}
                        />
                    <CalendarBooking bookings={bookings} fechasBooking={fechasBooking} setFechasBooking={setFechasBooking}/>
                    <Llegada />
                </div>
                
                <DetalleBooking auth={auth} product={product} fechas={fechasBooking} usuario={usuario} />
            </div>

            <ProductBottom />
        </main>
    );
}
