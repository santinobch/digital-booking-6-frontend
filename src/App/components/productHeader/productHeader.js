import React from "react";
import styles from "./productHeader.module.scss";

export default function ProductHeader() {

    return (
        <>
            <section className={styles.productHeader}>
                <div>
                    <h2>Top text</h2>
                    <h1>Bottom text</h1>
                </div>

            </section>
        </>
    )
}