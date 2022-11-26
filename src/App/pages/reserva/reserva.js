import styles from "./reserva.module.scss";

import ProductHeader from "../../components/productHeader/productHeader";
import ProductBottom from "../../components/productBottom/productBottom"

import DataInput from "./components/dataInput/dataInput";
import Llegada from "./components/llegada/llegada";
import CalendarioReserva from "./components/calendarioReserva/calendarioReserva"
import DetalleReserva from "./components/detalleReserva/detalleReserva";
import { getProducto, getReservas } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";
import {UsuarioContext, AuthContext} from "../../services/context";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

export default function Reserva() {

    const {auth} = useContext(AuthContext);

    const { idProducto } = useParams();
    const { usuario } = useContext(UsuarioContext)
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
        await getReservas(idProducto).then((data) => Array.isArray(data) ? setReservas(data) : "" )
    }
    useEffect(() => {
        getDataProducto()
        getDataReservas()
    }, [])

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
                        nombre={usuario ? usuario.nombre : ""} 
                        apellido={usuario ? usuario.apellido : ""} 
                        email={usuario ? usuario.email : ""} 
                        ciudad={usuario ? usuario.ciudad : ""}
                        />
                    <CalendarioReserva reservas={reservas} fechasReserva={fechasReserva} setFechasReserva={setFechasReserva}/>
                    <Llegada />
                </div>
                
                <DetalleReserva auth={auth} producto={producto} fechas={fechasReserva} usuario={usuario} />
            </div>

            <ProductBottom />
        </main>
    );
}
