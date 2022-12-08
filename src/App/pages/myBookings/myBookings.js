import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import ProductHeader from '../../components/productHeader/productHeader'
import Listing from "../../components/listing/listing";
import { useCookies } from "react-cookie";
import { getBookingsByUser } from "../../services/bookings";
import { getProduct } from '../../services';
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

export default function MyBookings() {
    const [cookie] = useCookies();
    const { idUser } = useParams();
    const [loading, setLoading] = useState(true);
    const [hospedajes, setHospedajes] = useState([]);

    useEffect(() => {
        getBookingsByUser(cookie.auth, idUser)        
            .then((response) => {
                let idArray = response.map(e => e.idProducto)
                let products = idArray.map(e => getProduct(e))
                Promise.all(products).then((data) => {
                    for(let i=0; i<data.length; i++){
                        data[i].booking = response[i].idReserva
                        data[i].checkIn = response[i].fechaDesde
                        data[i].checkOut = response[i].fechaHasta
                    }
                    setHospedajes(data)
                    setLoading(false)
                })
            })
        }, [])

    return(
        <main>
            <ProductHeader/>
            {!loading ? <Listing hospedajes={hospedajes} bookings={true}/> : <SpinnerLoader/>}            
        </main>
        );
}

