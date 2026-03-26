import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/assets/logo-nuevo.jpg" alt="ZAPHIR" style={{ maxHeight: '50px', width: 'auto' }} />
                </Link>
                <div className={styles.links}>
                    <Link href="#services">Servicios</Link>
                    <Link href="#gallery">Galería</Link>
                    <Link href="#contact">Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
