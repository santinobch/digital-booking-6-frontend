import { config } from "../Constants";

export function getBookings(idProduct) {
    return fetch(`${config.API_URL}/bookings/product/${idProduct}`).then(res => res.json());
}

export function postBooking(arrivalTime, auth, user, product, fechas){

    let fechaDesde = fechas.fechaCheckIn.split("/").reverse().join("-")
    let fechaHasta = fechas.fechaCheckOut.split("/").reverse().join("-")

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.jwt}`
       },
        body: JSON.stringify({ 
            username:user.username,
            idProducto:product.idProducto,
            hora: `${arrivalTime ? arrivalTime : "10:00"}:00`,
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta
        })
    }

    return fetch(`${config.API_URL}/bookings/`, requestOptions)
    .then(response => response.status)
}

export function getBookingsByUser(auth, idUser) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.jwt}`
       }
    }

    return fetch(`${config.API_URL}/users/${idUser}/bookings`, requestOptions).then(res => res.json());
}