import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>ZAPHIR</h2>
                    <p className={styles.tagline}>Alta Joyería y Diseño</p>
                </div>

                <div className={styles.links}>
                    <h3>Enlaces</h3>
                    <Link href="/">Inicio</Link>
                    <Link href="#services">Servicios</Link>
                    <Link href="#gallery">Galería</Link>
                </div>

                <div className={styles.social}>
                    <h3>Síguenos</h3>
                    <a href="https://www.instagram.com/zaphir_tienda/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        Instagram (@zaphir_tienda)
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        TikTok
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61588321125587" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        Facebook
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Zaphir Joyería. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
