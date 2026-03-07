import styles from "./Section01.module.scss";
import Image from "next/image";
import contentImg from "../../assets/content_1.png";

export default function Section01() {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.wrapper}>

                    <div className={styles.textBlock}>

                        <span className={styles.number}>01</span>

                        <span className={styles.label}>GET STARTED</span>

                        <h2>
                            What level of hiker <br />
                            are you?
                        </h2>

                        <p>
                            Determining what level of hiker you are can be an important tool when planning
                            future hikes. This hiking level guide will help you plan hikes according to
                            different hike ratings set by various websites like All Trails and Modern Hiker.
                            What type of hiker are you – novice, moderate, advanced moderate, expert, or
                            expert backpacker?
                        </p>

                        <a href="#">read more →</a>

                    </div>

                    <div className={styles.image}>
                        <Image
                            src={contentImg}
                            alt="Hiking"
                            width={500}
                            height={700}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}