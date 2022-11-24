import AuthModel from "../models/auth.model";
import { setStoreItem, getStoreItem } from "../storage/storage";

const urlBase = process.env.REACT_APP_API_URL;


export function GetLoggedUser(setUsuario) {

    let status = 0;

    let auth = new AuthModel();

    auth = getStoreItem('auth');

    const requestOptions = {
        method: 'GET',
        headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${auth.jwt}`
        }
    };

    return fetch(`${urlBase}/users?username=${auth.username}`, requestOptions)
        .then(response => {
            status = response.status;
            return response.json()
        }).then(data => {
            setStoreItem('usuario', data);
            if (setUsuario !== undefined) {
                setUsuario(data);
            }
            return status;
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, users.js: ' + error.message);
            return error.status;
        });
}