//Cookies
import { useCookies } from 'react-cookie';

//Model
import AuthModel from "./models/auth.model";
import UsuarioModel from "./models/usuario.model";

function Cookies() {

    const cookieOptions = {
        //Accesable in all the site
        path: "/",
        //One week expiration
        expires: 'expiration'
    }

    const [cookie, setCookie] = useCookies();

    setCookie('logged', false);
}

export default Cookies;
