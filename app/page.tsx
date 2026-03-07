import {Header} from "@/components/header/Header";
import Hero from '../components/hero/Hero';
import Footer from "../components/footer/Footer";
import ContentSection from "../components/ContentSection/ContentSection";

import img1 from "../assets/content_1.png";
import img2 from "../assets/content_2.png";
import img3 from "../assets/content_3.png";

export default function Home() {
    return (
        <main>
            <Header/>
            <Hero/>
            <ContentSection
                id="section-01"
                number="01"
                label="GET STARTED"
                title="What level of hiker are you?"
                text="Determining what level of hiker you are..."
                image={img1}
            />

            <ContentSection
                id="section-02"
                number="02"
                label="HIKING ESSENTIALS"
                title="Picking the right Hiking Gear!"
                text="The nice thing about beginning hiking is that you don’t really need any special gear..."
                image={img2}
                reverse
            />

            <ContentSection
                id="section-03"
                number="03"
                label="WHERE YOU GO IS THE KEY"
                title="Understand Your Map & Timing"
                text="To start, print out the hiking guide and map..."
                image={img3}
            />

            <Footer/>

        </main>
    );
}