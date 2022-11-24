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