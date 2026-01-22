"use client";

import styles from './Services.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
    {
        title: "Venta de Joyas",
        description: "Piezas exclusivas en Oro de 18k y Plata Ley 925.",
        image: "/assets/hero-main.png"
    },
    {
        title: "Modelado 3D",
        description: "Diseño y renderizado de joyas personalizadas a tu medida.",
        image: "/assets/service-3d.png"
    },
    {
        title: "Piedras Preciosas",
        description: "Diamantes, Esmeraldas y gemas certificadas de alta pureza.",
        image: "/assets/service-gems.png"
    },
    {
        title: "Relojería",
        description: "Mantenimiento y venta de relojes de marcas prestigiosas.",
        image: "/assets/service-watch.png"
    }
];

const Services = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.container}`}>
                <div ref={headerRef} className={headerVisible ? 'animate-visible fade-in-up' : 'animate-hidden'}>
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
