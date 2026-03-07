// @ts-ignore
import styles from './Section03.module.scss';
// @ts-ignore
import Image from 'next/image';
// @ts-ignore
import contentImg from '../../assets/content_3.png'; // замените на своё изображение

// @ts-ignore
export default function Section03() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.text}>
                    <h2>Embrace the Adventure</h2>
                    <p>
                        Take your mountain experience to the next level. Learn new skills,
                        explore hidden trails, and enjoy unforgettable moments with our
                        community.
                    </p>
                </div>
                <div className={styles.image}>
                    <Image src={contentImg} alt="Mountain Experience" width={600} height={400}/>
                </div>
            </div>
        </section>
    );
}