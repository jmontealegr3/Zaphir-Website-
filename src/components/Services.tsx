"use client";

import styles from './Services.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
    {
        title: "Relojería",
        description: "Contamos con los profesionales más capacitados del país para reparar o darle mantenimiento a tu reloj, manejamos todo tipo de marca desde media alta hasta plus luxury. Baterías, pulsos, cristales, coronas, tijas, hebillas, pasadores, etc. Todo para tu reloj.",
        image: "/assets/logo-box.jpg"
    },
    {
        title: "Piedras Preciosas",
        description: "Tenemos al alcance, esmeraldas, diamantes, moissanitas, rubíes, zafiros, etc. Dinos lo que necesitas, estaremos para ti.",
        image: "/assets/emerald-ring.jpg"
    },
    {
        title: "Modelado 3D",
        description: "Personalizamos cualquier tipo de pieza que desees desde cero, diseñamos a tu gusto y medida en 3D para que los detalles sean perfectos. Recuerda: >> tu solo imagina, nosotros hacemos el resto <<",
        image: "/assets/pendant-s.jpg"
    },
    {
        title: "Reparación y Limpieza",
        description: "Trae tus piezas que se encuentren rotas, sucias o en mal estado, nosotros le daremos vida nuevamente.",
        image: "/assets/halo-helmet.jpg"
    },
    {
        title: "Venta de Joyas",
        description: "Trabajamos con los más altos estándares de calidad, te ofrecemos joyas en plata 925 en adelante, oro de 18k en adelante, paladio, platino y todos sus derivados.",
        image: "/assets/emerald-pendant.png"
    }
];

const Services = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.container}`}>
                <div ref={headerRef} className={headerVisible ? 'animate-visible fade-in-up' : 'animate-hidden'}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
                            En <strong>Z A P H I R</strong> no solo hacemos piezas personalizadas en joyería, también contamos historias... déjanos ser parte de la tuya.
                            <br/><br/>
                            <em>En <strong>Z A P H I R</strong> tu solo imagina, nosotros hacemos el resto.</em>
                        </p>
                    </div>
                    <h2 className={styles.heading}>Nuestros Servicios</h2>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const delayClass = `delay-${(index % 4) * 100}`;

    return (
        <div
            ref={ref}
            className={`${styles.card} ${isVisible ? `animate-visible fade-in-up ${delayClass}` : 'animate-hidden'}`}
        >
            <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
            </div>
        </div>
    );
};

export default Services;
