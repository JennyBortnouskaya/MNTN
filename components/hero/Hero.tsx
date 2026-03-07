import styles from './Hero.module.scss';
import Image from 'next/image';
import bg from '../../assets/main_bg.png';

export default function Hero() {
    return (
        <section className={styles.hero}>

            {/* фон */}
            <Image
                src={bg}
                alt="Mountain background"
                fill
                priority
                className={styles.bg}
            />

            <div className={styles.overlay} />

            <div className="container">

                {/* Follow sidebar */}
                <div className={styles.follow}>
                    <span>Follow us</span>
                </div>

                {/* Основной контент */}
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