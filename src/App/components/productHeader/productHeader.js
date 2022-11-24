import React from "react";
import styles from "./productHeader.module.scss";
import avatar from "../../../imgs/icons/backArrow.png"

import { useNavigate } from 'react-router-dom';

export default function ProductHeader({productInfo}) {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.productHeader}>
                <div>
                    <h2>{productInfo.categoria.titulo}</h2>
                    <h1>{productInfo.titulo}</h1>
                </div>
                <div onClick={() => navigate(-1)} className={styles.backArrow}>
                    <img src={avatar} alt="" />
                </div>

            </section>
        </>
    )
}