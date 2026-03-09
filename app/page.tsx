import Hero from "@/components/hero/Hero";
import Section01 from '@/components/ContentSection/Section01';
import Section02 from "@/components/ContentSection/Section02";
import Section03 from "@/components/ContentSection/Section03";
import styles from "@/components/hero/Hero.module.scss";

export default function Home() {
    return (
        <>
            <div className={styles.bg} />
            <Hero />
            <div className={styles.separator}/>
            <Section01 />
            <Section02 />
            <Section03 />

        </>
    );
}