import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ProductHeader from '../../components/productHeader/productHeader'
import Listing from "../../components/listing/listing";
import { useCookies } from "react-cookie";
import { getBookingsByUser } from "../../services/bookings";
import { getProduct } from '../../services/products';
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";
import Button from '../../components/button/button';
import notFound from '../../../imgs/icons/not-found.png'
import styles from './myBookings.module.scss'

export default function MyBookings() {
    const navigate = useNavigate();
    const [cookie] = useCookies();
    const { idUser } = useParams();
    const [loading, setLoading] = useState(true);
    const [hospedajes, setHospedajes] = useState([]);

    useEffect(() => {
        getBookingsByUser(cookie.auth, idUser)        
            .then((response) => {
                console.log(response);
                let idArray = response.map(e => e.idProducto)
                let products = idArray.map(e => getProduct(e))
                Promise.all(products).then((data) => {
                    for(let i=0; i<data.length; i++){
                        data[i].booking = response[i].idReserva
                        data[i].checkIn = response[i].fechaDesde
                        data[i].checkOut = response[i].fechaHasta
                        data[i].hora = response[i].hora
                    }
                    setHospedajes(data)
                    setLoading(false)
                })
            }).catch(() => {
                setHospedajes()
                setLoading(false)
            })
        }, [])

    return(
        <main>
            <ProductHeader titulo="Mis Reservas"/>
            {!loading && hospedajes && (
                <Listing hospedajes={hospedajes} bookings={true}/>
            )}
            {!loading && !hospedajes && (
                      <div className={styles.notFound}>
                            <img src={notFound} alt='No bookings'/>
                            <h5>Aún no has efectuado ninguna reserva</h5>
                            <Button
                            onClick={() => navigate("/home")}
                            styleBtn="dark"
                            width="200px"
                            type="submit"
                            >
                            Volver a página principal
                            </Button>
                    </div>
            )}
            {loading && <SpinnerLoader/>}            
        </main>
        );
}

