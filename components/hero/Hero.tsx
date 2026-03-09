'use client'

import styles from "./Hero.module.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'

export default function Hero() {
    return (
        <section className={styles.hero}>



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
                        <SouthOutlinedIcon className={styles.arrow} />
                    </div>
                </div>
            </div>

        </section>
    )
}