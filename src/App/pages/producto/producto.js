import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "./components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducto } from "../../services";
import { Spinner } from "react-bootstrap";



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
        return <Spinner/>
    }

    return (
        <main className={styles.main}>

            <ProductTop producto={producto}></ProductTop>
            <ProductBottom producto={producto}></ProductBottom>
            
        </main>
    );
}