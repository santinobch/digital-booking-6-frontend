//Models
import ResponseModel from "../models/response.model";

const urlBase = process.env.REACT_APP_API_URL;


export function getLoggedUser(auth, setCookie) {

    let status = 0;

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
            console.log(data)
            setCookie('user', data);
            return new ResponseModel(status, data);
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, users.js: ' + error.message);
            return error.status;
        });
}