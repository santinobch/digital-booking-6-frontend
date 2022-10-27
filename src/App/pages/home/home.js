import Drawer from "../../components/drawer/drawer";
import Button from "../../components/button/button";
import Buscador from "../../components/buscador/buscador";
import Categorias from "../../components/categorias/categorias"
import Listado from "../../components/listado/listado";


export default function Home() {
    return (
        <main>
            {/* <Buscador/>
            <Categorias/>
            <Drawer></Drawer>
            <Button style="light" width="300px">Light</Button>
            <Button style="dark" width="300px">Light</Button> */}
            <Listado/>
        </main>
    );
}