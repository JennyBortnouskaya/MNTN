'use client'

import styles from './ContentSection.module.scss'
import Image, {StaticImageData} from 'next/image'

type Props = {
    number: string
    label: string
    title: string
    text: string
    image: StaticImageData
    reverse?: boolean
    className?: string
    imageClassName?: string
    headingClassName: string
    paragraphClassName: string
}

export default function ContentSection({
                                           number,
                                           label,
                                           title,
                                           text,
                                           image,
                                           reverse,
                                           className,
                                           imageClassName,
                                           headingClassName,
                                           paragraphClassName,
                                       }: Props) {
    return (
        <section className={className}>
            <div className="container">

                <div className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>

                    <div className={styles.textBlock}>

                        <span className={styles.number}>{number}</span>

                        <span className={styles.label}>
              {label}
            </span>

                        <h2 className={headingClassName}>{title}</h2>

                        <p className={paragraphClassName}>{text}</p>

                        <a href="#" className={styles.link}>
                            read more →
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