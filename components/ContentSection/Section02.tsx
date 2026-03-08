import ContentSection from "./ContentSection"
import img from "@/assets/content_2.png"

export default function Section02() {
    return (
        <ContentSection
            number="02"
            label="HIKING ESSENTIALS"
            title="Picking the right Hiking Gear!"
            text="The nice thing about beginning hiking is that you don't really need any special gear. While quality hiking gear can make a hike more enjoyable."
            image={img}
            reverse
        />
    )
}