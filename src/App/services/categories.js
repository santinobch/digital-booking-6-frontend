import { config } from "../Constants";

export function getCategories() {
    return fetch(`${config.API_URL}/categories/`).then((respuesta) =>
      respuesta.json()
    ); 
}