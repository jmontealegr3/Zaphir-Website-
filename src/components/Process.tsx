"use client";

import styles from './Process.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
    {
        number: "01",
        title: "Idea & Boceto",
        description: "Nos cuentas tu idea y creamos los primeros bocetos conceptuales."
    },
    {
        number: "02",
        title: "Diseño 3D",
        description: "Modelamos tu joya en software especializado para que veas cómo quedará."
    },
    {
        number: "03",
        title: "Impresión & Fundición",
        description: "Imprimimos el prototipo en cera y lo fundimos en el metal de tu elección."
    },
    {
        number: "04",
        title: "Acabado Final",
        description: "Engaste de piedras, pulido y brillo para entregar una pieza única."
    }
];

const Process = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <section className={styles.process}>
            <div className="container">
                <div ref={headerRef} className={headerVisible ? 'animate-visible fade-in-up' : 'animate-hidden'}>
                    <h2 className={styles.heading}>Nuestro Proceso Creativo</h2>
                </div>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <ProcessStep key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, index }: { step: any, index: number }) => {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const delayClass = `delay-${index * 100}`;

    return (
        <div
            ref={ref}
            className={`${styles.step} ${isVisible ? `animate-visible fade-in-up ${delayClass}` : 'animate-hidden'}`}
        >
            <span className={styles.number}>{step.number}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
        </div>
    );
};

export default Process;
