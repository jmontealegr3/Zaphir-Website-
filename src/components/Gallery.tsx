"use client";

import styles from './Gallery.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const images = [
    { src: "/assets/gallery-1.jpg", alt: "Anillo Exclusivo en Oro", span: "row-span-2 col-span-2" }, // Featured item
    { src: "/assets/gallery-2.jpg", alt: "Colección Zaphir", span: "row-span-1 col-span-1" },
    { src: "/assets/gallery-3.jpg", alt: "Detalle Artesanal", span: "row-span-1 col-span-1" },
    { src: "/assets/gallery-4.jpg", alt: "Diseño Personalizado", span: "row-span-2 col-span-1" }, // Tall item
    { src: "/assets/gallery-5.jpg", alt: "Alta Joyería", span: "row-span-1 col-span-2" }, // Wide item
    { src: "/assets/gallery-6.jpg", alt: "Anillos de Compromiso", span: "row-span-1 col-span-1" },
    { src: "/assets/gallery-7.jpg", alt: "Joyas Únicas", span: "row-span-1 col-span-1" },
    { src: "/assets/gallery-8.jpg", alt: "Arte en Oro", span: "row-span-1 col-span-1" },
];

const Gallery = () => {
    return (
        <section id="gallery" className={styles.gallery}>
            <div className={`container ${styles.container}`}>
                <AnimatedHeading />
                <div className={styles.grid}>
                    {images.map((img, index) => (
                        <AnimatedItem key={index} img={img} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AnimatedHeading = () => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <div ref={ref} className={`${isVisible ? 'animate-visible fade-in-up' : 'animate-hidden'}`}>
            <h2 className={styles.heading}>Nuestra Colección</h2>
            <p className={styles.subheading}>Cada pieza cuenta una historia de elegancia y perfección.</p>
        </div>
    );
};

const AnimatedItem = ({ img, index }: { img: any, index: number }) => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const delayClass = `delay-${(index % 4) * 100}`;

    return (
        <div
            ref={ref}
            className={`${styles.item} ${styles[img.span] || ''} ${isVisible ? `animate-visible fade-in-up ${delayClass}` : 'animate-hidden'}`}
        >
            <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
            <div className={styles.overlay}>
                <span className={styles.label}>{img.alt}</span>
            </div>
        </div>
    );
};

export default Gallery;
