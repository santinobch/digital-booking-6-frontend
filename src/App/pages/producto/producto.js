import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";
import ProductBottom from "./components/productBottom/productBottom";


export default function Producto() {
    return (
        <main className={styles.main}>
            <ProductTop></ProductTop>

            <ProductBottom></ProductBottom>
            
        </main>
    );
}