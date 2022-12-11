import styles from "./product.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "../../components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useState } from "react";
//import { getProduct, getBookings } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

import { getProduct } from "../../services/products";
import { getBookings } from "../../services/bookings";
import { useEffect } from "react";

export default function Product() {
    const { idProduct } = useParams();

    const [product, setProduct] = useState();
    const [bookings, setBookings] = useState();

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

            <ProductTop bookings={bookings} product={product}></ProductTop>
            <ProductBottom product={product}></ProductBottom>
            
        </main>
    );
}