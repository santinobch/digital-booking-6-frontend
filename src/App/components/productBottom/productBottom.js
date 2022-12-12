import styles from "./productBottom.module.scss";

export default function ProductBottom({product}) {
    return (
        <>
            <section className={styles.productBottom}>
                <h1> Qué tenés que saber </h1>

                <hr/>

                <div className={styles.normasContainer}>
                    <div className={styles.norma}>
                        <h2>Normas de la casa</h2>
                        <p> {product.houseRulesPolicy}  </p>
                    </div>

                    <div className={styles.norma}>
                        <h2>Salud y seguridad</h2>
                        <p> {product.healthAndSecurityPolicy}  </p>
                    </div>

                    <div className={styles.norma}>
                        <h2> Política de cancelación </h2>
                        <p>{product.cancellationPolicy}</p>
                    </div>
                </div>

            </section>
        </>
    );
}