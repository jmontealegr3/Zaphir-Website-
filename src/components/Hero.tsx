import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>Alta Joyería y Diseño Exclusivo</h1>
                <p className={styles.subtitle}>
                    Descubre la elegancia del oro, la plata y las piedras preciosas. Diseños personalizados y modelado 3D.
                </p>
                <Link href="#contact" className={styles.cta}>
                    Agendar Cita
                </Link>
            </div>
            <div className={styles.background} style={{ backgroundImage: "url('/assets/hero-main.png')" }}></div>
        </section>
    );
};

export default Hero;
