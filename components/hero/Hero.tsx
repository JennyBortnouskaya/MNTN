'use client'

import styles from "./Hero.module.scss"
import Image from "next/image"

import bg from "@/assets/main_bg.png"

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

            <div className="container">

                <div className={styles.content}>

          <span className={styles.label}>
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