import styles from "./home.module.scss";

import Buscador from "../../components/buscador/buscador";
import Categorias from "../../components/categorias/categorias"
import Listado from "../../components/listado/listado";

export default function Home() {
    return (
        <main>
            <Buscador/>
            <Categorias/>
            <Listado/>

            <div style={{height: "58px"}}></div>
        </main>
    );
}