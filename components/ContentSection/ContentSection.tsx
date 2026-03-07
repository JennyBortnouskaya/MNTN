'use client';

import { useState, useEffect, useRef } from 'react';
import styles from "./ContentSection.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
    id?: string;
    number: string;
    label: string;
    title: string;
    text: string;
    image: StaticImageData;
    reverse?: boolean;
};

export default function ContentSection({ id, number, label, title, text, image, reverse }: Props) {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // только один раз
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${styles.section} ${visible ? styles.visible : styles.hidden}`}
        >
            <div className="container">
                <div className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>
                    <div className={styles.textBlock}>
                        <span className={styles.number}>{number}</span>
                        <span className={styles.label}>{label}</span>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <a href="#">read more →</a>
                    </div>

                    <div className={styles.image}>
                        <Image src={image} alt={title} width={500} height={700} />
                    </div>
                </div>
            </div>
        </section>
    );
}