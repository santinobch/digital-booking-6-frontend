import React from "react";
import styles from "./productHeader.module.scss";

export default function ProductHeader({productInfo}) {

    console.log(productInfo)

    return (
        <>
            <section className={styles.productHeader}>
                <div>
                    <h2>{productInfo.categoria.titulo}</h2>
                    <h1>{productInfo.titulo}</h1>
                </div>

            </section>
        </>
    )
}