import ContentSection from "./ContentSection"
import img from "@/assets/content_3.png"

export default function Section03() {
    return (
        <ContentSection
            number="03"
            label="WHERE YOU GO IS THE KEY"
            title="Understand Your Map & Timing"
            text="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map."
            image={img}
        />
    )
}