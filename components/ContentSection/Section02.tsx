import ContentSection from "./ContentSection"
import img from "@/assets/content_2.png"
import styles from "./Section02.module.scss"

export default function Section02() {
    return (
        <ContentSection
            id="section02"
            number="02"
            label="HIKING ESSENTIALS"
            title="Picking the right Hiking Gear!"
            text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
            image={img}
            reverse
            className={styles.section02}
            imageClassName={styles.section02Image}
            contentClassName={styles.content}
            headingClassName={styles.section02Heading}
            paragraphClassName={styles.section02Paragraph}
        />
    )
}