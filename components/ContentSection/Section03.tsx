import ContentSection from "./ContentSection"
import img from "@/assets/content_3.png"
import styles from "./Section03.module.scss"

export default function Section03() {
    return (
        <ContentSection
            number="03"
            label="WHERE YOU GO IS THE KEY"
            title="Understand Your Map & Timing"
            text="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction."
            image={img}
            className={styles.section03}
            imageClassName={styles.section03Image}
            contentClassName={styles.content}
            headingClassName={styles.section03Heading}
            paragraphClassName={styles.section03Paragraph}
        />
    )
}