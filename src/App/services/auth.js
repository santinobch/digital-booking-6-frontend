const urlBase = process.env.REACT_APP_API_URL;


export async function PostAuth(email, pass, handleAuth) {

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
            handleAuth(data);
            return status;
        })
        .catch( error => {
            console.log('Hubo un problema con la petición Fetch, auth.js: ' + error.message);
            return error.status;
        });
}