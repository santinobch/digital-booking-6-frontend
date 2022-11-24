const urlBase = process.env.REACT_APP_API_URL;


// export function GetBooking(user, pass) {

//     usuario.nombre = "asdasdsa";

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     fetch(`${urlBase}/bookings/`, requestOptions)
//         .then(response => {
//             usuario.username = response.usuario.username;
//             usuario.nombre = response.usuario.nombre;
//             usuario.apellido = response.usuario.apellido;
//             usuario.email = response.usuario.email;
//         });
// }

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
            hora: "10:00:00",
            fechaDesde: fechaDesde,
            fechaHasta: fechaHasta,
            producto:{
                id: product.id
            },
            usuario:{
                id: user.id
            }
        })
    }

    return fetch(`${urlBase}/bookings/`, requestOptions)
    .then(response => response.status)



}