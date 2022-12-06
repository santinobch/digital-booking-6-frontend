import ResponseModel from '../models/response.model';

const urlBase = process.env.REACT_APP_API_URL;

export async function postSignUp(email, username, name, surname, pass) {

    let status = 0;

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: email,
            username: username,
            nombre: name,
            apellido: surname,
            password: pass
        })
    };

    return fetch(`${urlBase}/signup`, requestOptions)
        .then(response => {
            status = response.status;
            return response.json()
        }).then(data => {
            console.log(data)
            return new ResponseModel(status, data);
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, signup.js: ' + error.message);
            return error.status;
        });
}