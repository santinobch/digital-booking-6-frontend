import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "../../components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducto } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";



export default function Producto() {
    const { idProducto } = useParams();

    const [producto, setProducto] = useState([]);

    const getDataProducto = async() => {
        await getProducto(idProducto).then((data) => setProducto(data))
    }

    useEffect(() => {
        getDataProducto()
    }, [])

    if(producto.length === 0){
        return (
            <SpinnerLoader/>
        )
    }
    
    return (
        <main className={styles.main}>

            <ProductTop producto={producto}></ProductTop>
            <ProductBottom producto={producto}></ProductBottom>
            
        </main>
    );
}