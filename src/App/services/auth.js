import { config } from '../Constants';

//Model
import ResponseModel from '../models/response.model';

export async function postAuth(email, pass, setCookie) {

    let status = 0;

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: email,
            password: pass
        })
    };

    return fetch(`${config.API_URL}/auth/`, requestOptions)
        .then(response => {
            status = response.status;
            return response.json()
        }).then(data => {
            setCookie('auth', data);
            return new ResponseModel(status, data);
        })
        .catch( error => {
            console.log(error)
            console.log('Hubo un problema con la petición Fetch, auth.js: ' + error.message);
            return error.status;
        });
}