'use client'

import styles from "./Hero.module.scss"
import Image from "next/image"
import bg from "@/assets/main_bg.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Hero() {
    return (
        <section className={styles.hero}>

            <Image
                src={bg}
                alt="mountains"
                fill
                priority
                className={styles.bg}
            />

            <div className={styles.overlay}></div>

            <div className={styles.leftSidebar}>
                <span className={styles.followLabel}>Follow us</span>
                <div className={styles.socialIcons}>
                    <span className={styles.icon}><InstagramIcon/></span>
                    <span className={styles.icon}><TwitterIcon/></span>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
      <span className={styles.label}>
        <span className={styles.line}></span>
        A HIKING GUIDE
      </span>
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
    )
}