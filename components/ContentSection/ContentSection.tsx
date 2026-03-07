import styles from "./ContentSection.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
    number: string;
    label: string;
    title: string;
    text: string;
    image: StaticImageData;
    reverse?: boolean;
};

export default function ContentSection({
                                           number,
                                           label,
                                           title,
                                           text,
                                           image,
                                           reverse,
                                       }: Props) {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}>

                    <div className={styles.textBlock}>

                        <span className={styles.number}>{number}</span>

                        <span className={styles.label}>{label}</span>

                        <h2>{title}</h2>

                        <p>{text}</p>

                        <a href="#">read more →</a>

                    </div>

                    <div className={styles.image}>
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={700}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}