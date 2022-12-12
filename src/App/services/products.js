import { config } from "../Constants";

export function getProducts(busqueda) {
    const { ciudad, category, fechaInicio, fechaFin } = busqueda || {};
    // const query = new URLSearchParams({});

    let url = "";

    if (category) {
        url = `category/${category}`;
    }
    if (ciudad) {
        url = `city/${ciudad}`;
    }
    if (fechaInicio && fechaFin) {
        url = `dates?from=${fechaInicio}&to=${fechaFin}`;
    }
    if (fechaInicio && fechaFin && ciudad) {
        url = `city/${ciudad}/dates?from=${fechaInicio}&to=${fechaFin}`;
    }

    return fetch(`${config.API_URL}/products/${url}`).then((respuesta) => respuesta.json());
}

export function getProduct(id){
    return fetch(`${config.API_URL}/products/${id}`).then(response => response.json());
}

export function createProduct(data, token) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(`${config.API_URL}/products/`, requestOptions).then((respuesta) => respuesta.json());
}
