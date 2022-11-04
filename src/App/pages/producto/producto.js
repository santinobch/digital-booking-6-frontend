import styles from "./producto.module.scss";

import ProductTop from "./components/productTop/productTop";


export default function Producto() {
    return (
        <main className={styles.main}>
            <ProductTop></ProductTop>
        </main>
    );
}