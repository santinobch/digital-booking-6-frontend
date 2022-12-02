//Cookies
import { render } from '@testing-library/react';
import { useCookies } from 'react-cookie';

//Model
import AuthModel from "../models/auth.model";
import ResponseModel from '../models/response.model';

const urlBase = process.env.REACT_APP_API_URL;

export async function PostAuth(email, pass, setCookie) {

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

    return fetch(`${urlBase}/auth/`, requestOptions)
        .then(response => {
            status = response.status;
            return response.json()
        }).then(data => {
            setCookie('auth', data);
            return new ResponseModel(status, data);
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, auth.js: ' + error.message);
            return error.status;
        });
}