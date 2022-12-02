import Search from "../../components/search/search";
import Categories from "../../components/categories/categories";
import Listing from "../../components/listing/listing";
import styles from "./home.module.scss";
import { useState } from "react";
import AuthModel from "../../models/auth.model";
import { useCookies } from "react-cookie";


export default function Home() {
  const [filtros, setFiltros] = useState({ category: "" });

 
  const [cookies, setCookie, removeCookie] = useCookies();

  // removeCookie('auth');
  // removeCookie('logged');
  // removeCookie('user');

  return (
    <main className={styles.main}>
      <Search onChange={setFiltros} />
      <Categories onCategorySeleccionada={setFiltros} />
      <Listing filtros={filtros} />
    </main>
  );
}
