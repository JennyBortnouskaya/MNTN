import styles from "./Section02.module.scss";
import Image from "next/image";
import contentImg from "../../assets/content_2.png";

export default function Section02() {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.wrapper}>

                    <div className={styles.image}>
                        <Image
                            src={contentImg}
                            alt="Hiking essentials"
                            width={500}
                            height={700}
                        />
                    </div>

                    <div className={styles.textBlock}>

                        <span className={styles.number}>02</span>

                        <span className={styles.label}>HIKING ESSENTIALS</span>

                        <h2>
                            Picking the right <br />
                            Hiking Gear!
                        </h2>

                        <p>
                            The nice thing about beginning hiking is that you don’t really need
                            any special gear, you can probably get away with things you already
                            have. Let’s start with clothing. A typical mistake hiking beginners
                            make is wearing jeans and regular clothes, which will get heavy
                            and chafe if they get sweaty or wet.
                        </p>

                        <a href="#">read more →</a>

                    </div>

                </div>

            </div>
        </section>
    );
}