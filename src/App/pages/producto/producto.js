import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "../../components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducto, getReservas } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";



export default function Producto() {
    const { idProducto } = useParams();

    const [producto, setProducto] = useState([]);
    const [reservas, setReservas] = useState();

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

            <ProductTop reservas={reservas} producto={producto}></ProductTop>
            <ProductBottom producto={producto}></ProductBottom>
            
        </main>
    );
}