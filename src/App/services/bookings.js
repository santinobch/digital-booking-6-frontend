import UsuarioModel from "../models/usuario.model";
import {UsuarioContext} from "../services/context";

import {useContext} from 'react'

const urlBase = process.env.REACT_APP_API_URL;


export function GetBooking(user, pass) {
    const usuario = useContext(UsuarioContext) ;

    usuario.nombre = "asdasdsa";

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${urlBase}/bookings/`, requestOptions)
        .then(response => {
            usuario.username = response.usuario.username;
            usuario.nombre = response.usuario.nombre;
            usuario.apellido = response.usuario.apellido;
            usuario.email = response.usuario.email;
        });
}

export function postBooking(auth, user, product, fechas){
    let fechaDesde = fechas.fechaCheckIn.split("/").reverse().join("-")
    console.log(fechaDesde)
    let fechaHasta = fechas.fechaCheckOut.split("/").reverse().join("-")
    console.log(fechaHasta)

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
    .then(response => console.log(response.status))



}