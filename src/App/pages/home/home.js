import styles from "./home.module.scss";

import Drawer from "../../components/drawer/drawer";
import Buscador from "../../components/buscador/buscador";
import Categorias from "../../components/categorias/categorias"
import Listado from "../../components/listado/listado";



export default function Home() {
    return (
        <main>
            <Buscador/>
            <Categorias/>
            <Listado/>
            
            {/* <Drawer></Drawer> */}
        </main>
    );
}