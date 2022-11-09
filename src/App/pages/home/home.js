import styles from "./home.module.scss";

import Buscador from "../../components/buscador/buscador";
import Categorias from "../../components/categorias/categorias"
import Listado from "../../components/listado/listado";


export default function Home() {

    return (
        <main className={styles.main}>
            
            <Buscador/>
            <Categorias/>
            <Listado/>
        </main>
    );
}