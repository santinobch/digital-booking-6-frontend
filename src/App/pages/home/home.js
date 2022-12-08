import Search from "../../components/search/search";
import Categories from "../../components/categories/categories";
import Listing from "../../components/listing/listing";
import styles from "./home.module.scss";
import { useState, useEffect } from "react";
import AuthModel from "../../models/auth.model";
import { useCookies } from "react-cookie";
import { getProducts } from "../../services/index.js";


export default function Home() {
  const [filtros, setFiltros] = useState({ category: "" });
  const [hospedajes, setHospedajes] = useState([]); 
  const [cookies, setCookie, removeCookie] = useCookies();
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    getProducts(filtros)
      .then((data) => {
        setHospedajes(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [filtros]);

  // removeCookie('auth');
  // removeCookie('logged');
  // removeCookie('user');

  return (
    <main className={styles.main}>
      <Search onChange={setFiltros} />
      <Categories onCategorySeleccionada={setFiltros} />
      <Listing filtros={filtros} error={error} hospedajes={hospedajes} />
    </main>
  );
}
