import UsuarioModel from "../models/usuario.model";
import { AuthContext, UsuarioContext } from "../services/context";

import {useContext} from 'react'

const urlBase = process.env.REACT_APP_API_URL;


export function GetLoggedUser(auth, usuario) {

    let status = 0;

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    console.log(auth);

    return fetch(`${urlBase}/users?username=${auth.username}`, requestOptions)
        .then(response => {
            status = response.status;
            return response.json()
        }).then(data => {
            usuario = data;
            return status;
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, users.js: ' + error.message);
            return error.status;
        });
}