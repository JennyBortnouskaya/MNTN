'use client';

import { useState, useEffect } from 'react';
import styles from './RightSidebar.module.scss';

export default function RightSidebar() {
    const [activeSection, setActiveSection] = useState('start');

    useEffect(() => {
        const sections = ['01', '02', '03'];

        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3; // чуть выше середины
            let current = 'start';

            for (let i = 0; i < sections.length; i++) {
                const el = document.getElementById(`section-${sections[i]}`);
                if (el && scrollPos >= el.offsetTop) {
                    current = sections[i];
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // при загрузке
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={activeSection === 'start' ? styles.active : ''}>Start</li>
                <li className={activeSection === '01' ? styles.active : ''}>01</li>
                <li className={activeSection === '02' ? styles.active : ''}>02</li>
                <li className={activeSection === '03' ? styles.active : ''}>03</li>
            </ul>
        </div>
    );
}