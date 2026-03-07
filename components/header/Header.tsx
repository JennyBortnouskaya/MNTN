import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>MNTN</div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#section1">About</a></li>
                    <li><a href="#section2">Features</a></li>
                    <li><a href="#section3">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};