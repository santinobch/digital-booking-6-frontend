import "./header.scss";

import logo from "../../../imgs/logos/logo+frase.png";

export default function Header() {
    return (
        <header>
            <div class="logo">
                <img src={logo} alt=""></img>
            </div>
            <div class="login-buttons">
                <button></button>
                <button></button>
            </div>
        </header>
    );
}