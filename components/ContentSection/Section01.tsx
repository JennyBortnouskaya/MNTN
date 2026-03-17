import ContentSection from "./ContentSection"
import img from "@/assets/content_1.png"

export default function Section01() {
    return (
        <ContentSection
            number="01"
            label="GET STARTED"
            title="What level of hiker are you?"
            text="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
            image={img}
        />
    )
}