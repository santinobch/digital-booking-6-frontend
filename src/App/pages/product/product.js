import styles from "./product.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "../../components/productBottom/productBottom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct, getBookings } from "../../services/products";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";



export default function Product() {
    const { idProduct } = useParams();

    const [product, setProduct] = useState([]);
    const [bookings, setBookings] = useState();

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

            <ProductTop bookings={bookings} product={product}></ProductTop>
            <ProductBottom product={product}></ProductBottom>
            
        </main>
    );
}