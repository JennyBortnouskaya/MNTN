'use client'

import styles from './ContentSection.module.scss'
import Image, {StaticImageData} from 'next/image'
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

type Props = {
    id?: string
    number: string
    label: string
    title: string
    text: string
    image: StaticImageData
    reverse?: boolean
    className?: string
    imageClassName?: string
    contentClassName: string
    headingClassName: string
    paragraphClassName: string
}

export default function ContentSection({
                                           id,
                                           number,
                                           label,
                                           title,
                                           text,
                                           image,
                                           reverse,
                                           className,
                                           imageClassName,
                                           contentClassName,
                                           headingClassName,
                                           paragraphClassName,
                                       }: Props) {
    return (
        <section id={id} className={className}>
            <div className="container">

                <div className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>

                    <div className={`${styles.content} ${contentClassName}`}>

                        <span className={styles.number}>{number}</span>

                        <span className={styles.label}>
                            <span className={styles.line}></span>
                            {label}
                        </span>

                        <h2 className={headingClassName}>{title}</h2>

                        <p className={paragraphClassName}>{text}</p>

                        <a href="#" className={styles.link}>
                            read more
                            <SouthOutlinedIcon className={styles.arrow} />
                        </a>

                    </div>

                    <div className={styles.image}>
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={700}
                            className={imageClassName}
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}