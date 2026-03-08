'use client'

import { useEffect, useState } from "react"
import styles from "./RightSidebar.module.scss"

export default function RightSidebar() {

    const [active, setActive] = useState("start")

    useEffect(() => {

        const handleScroll = () => {

            const scroll = window.scrollY

            const s1 = document.getElementById("section01")
            const s2 = document.getElementById("section02")
            const s3 = document.getElementById("section03")

            if (!s1 || !s2 || !s3) return

            if (scroll >= s3.offsetTop - 200) {
                setActive("03")
            } else if (scroll >= s2.offsetTop - 200) {
                setActive("02")
            } else if (scroll >= s1.offsetTop - 200) {
                setActive("01")
            } else {
                setActive("start")
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <div className={styles.sidebar}>

            <ul>

                <li className={active === "start" ? styles.active : ""}>
                    Start
                </li>

                <li className={active === "01" ? styles.active : ""}>
                    01
                </li>

                <li className={active === "02" ? styles.active : ""}>
                    02
                </li>

                <li className={active === "03" ? styles.active : ""}>
                    03
                </li>

            </ul>

        </div>

    )

}