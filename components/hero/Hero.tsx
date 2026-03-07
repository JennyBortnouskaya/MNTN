'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import bg from '../../assets/main_bg.png';

export default function Hero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY * 0.3);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero}>
            <Image
                src={bg}
                alt="Mountain background"
                fill
                priority
                style={{ transform: `translateY(${offset}px)` }}
                className={styles.bg}
            />
            <div className={styles.overlay} />
            <div className="container">
                <div className={styles.follow}>
                    <span>Follow us</span>
                </div>
                <div className={styles.content}>
                    <span className={styles.label}>A Hiking Guide</span>
                    <h1>
                        Be Prepared For The <br />
                        Mountains And Beyond!
                    </h1>
                    <div className={styles.scroll}>
                        <span>scroll down</span>
                        <div className={styles.arrow}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}