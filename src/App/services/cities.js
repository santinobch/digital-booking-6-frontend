import { config } from "../Constants";

export function getCiudades() {
    return fetch(`${config.API_URL}/cities/`).then((respuesta) => respuesta.json());
}