import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "./components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



export default function Producto() {
    const { idProducto } = useParams();

    useEffect(() => {
        
    })

    return (
        <main className={styles.main}>
            <ProductTop></ProductTop>
            <ProductBottom></ProductBottom>
            
        </main>
    );
}