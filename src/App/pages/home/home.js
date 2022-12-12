import Search from "../../components/search/search";
import Categories from "../../components/categories/categories";
import Listing from "../../components/listing/listing";
import styles from "./home.module.scss";
import { useState, useEffect } from "react";
import AuthModel from "../../models/auth.model";
import { useCookies } from "react-cookie";
import { getProducts } from "../../services/products";


export default function Home() {
  const [filtros, setFiltros] = useState({ category: "" });
  const [hospedajes, setHospedajes] = useState([]); 
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    getProducts(filtros)
      .then((data) => {
        setHospedajes(data);
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false)
      });
  }, [filtros]);

  // removeCookie('auth');
  // removeCookie('logged');
  // removeCookie('user');

  return (
    <main className={styles.main}>
      <Search onChange={setFiltros} setLoading={setLoading} />
      <Categories onCategorySeleccionada={setFiltros} />
      <Listing loading={loading} filtros={filtros} error={error} hospedajes={hospedajes} />
    </main>
  );
}
