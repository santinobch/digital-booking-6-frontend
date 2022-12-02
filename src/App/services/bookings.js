const urlBase = process.env.REACT_APP_API_URL;

export function getBookings(idProduct) {
    return fetch(`${urlBase}/bookings/product/${idProduct}`);
}

export function postBooking(auth, user, product, fechas){

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
            idProduct:product.idProduct,
            hora: "10:00:00",
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta
        })
    }

    return fetch(`${urlBase}/bookings/`, requestOptions)
    .then(response => response.status)



}