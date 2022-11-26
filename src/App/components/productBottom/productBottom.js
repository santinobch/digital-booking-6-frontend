import styles from "./productBottom.module.scss";

export default function ProductBottom() {
    return (
        <>
            <section className={styles.productBottom}>
                <h1>
                    Qué tenés que saber
                </h1>

                <hr/>

                <div className={styles.normasContainer}>
                    <div className={styles.norma}>
                        <h2>
                            Normas de la casa
                        </h2>

                        <p>Check-out: 10:00</p>
                        <p>No se permiten fiestas</p>
                        <p>No fumar</p>
                    </div>

                    <div className={styles.norma}>
                        <h2>
                            Salud y seguridad
                        </h2>

                        <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
                        <p>Detector de humo</p>
                        <p>Depósito de seguridad</p>
                    </div>

                    <div className={styles.norma}>
                        <h2>
                            Política de cancelación
                        </h2>

                        <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</p>
                    </div>
                </div>

            </section>
        </>
    );
}