import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ProductHeader from '../../components/productHeader/productHeader'
import Listing from "../../components/listing/listing";
import { useCookies } from "react-cookie";
import { getBookingsByUser } from "../../services/bookings";
import { getProduct } from '../../services';
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";
import Button from '../../components/button/button';

export default function MyBookings() {
    const navigate = useNavigate();
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
            }).catch(() => {
                setHospedajes()
                setLoading(false)
            })
        }, [])

    return(
        <main>
            <ProductHeader/>
            {!loading && hospedajes && (
                <Listing hospedajes={hospedajes} bookings={true}/>
            )}
            {!loading && !hospedajes && (
                      <div>
                            <h4>Aún no has efectuado ninguna reserva</h4>
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

