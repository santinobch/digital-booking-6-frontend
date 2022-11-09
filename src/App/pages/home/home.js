import Buscador from "../../components/buscador/buscador";
import Categorias from "../../components/categorias/categorias";
import Listado from "../../components/listado/listado";
import styles from "./home.module.scss";
import { useState } from "react";

export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({ categoria: "" });

  return (
    <main className={styles.main}>
      <Buscador onChange={setBusqueda} />
      <Categorias onCategoriaSeleccionada={setFiltros} />
      <Listado busqueda={busqueda} filtros={filtros} />
    </main>
  );
}
