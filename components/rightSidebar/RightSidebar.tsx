'use client'

import {useCallback, useEffect, useRef, useState, type MouseEvent} from "react"
import styles from "./RightSidebar.module.scss"

const NAV = [
    {id: "start", href: "hero", label: "Start"},
    {id: "01", href: "section01", label: "01"},
    {id: "02", href: "section02", label: "02"},
    {id: "03", href: "section03", label: "03"},
] as const

type NavId = (typeof NAV)[number]["id"]

export default function RightSidebar() {
    const [active, setActive] = useState<NavId>("start")
    const [indicator, setIndicator] = useState({top: 0, height: 0})
    const sidebarRef = useRef<HTMLElement>(null)
    const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})
    const activeRef = useRef<NavId>(active)

    useEffect(() => {
        activeRef.current = active
    }, [active])

    const updateIndicator = useCallback((id: NavId) => {
        const sidebar = sidebarRef.current
        const item = itemRefs.current[id]
        if (!sidebar || !item) return

        const sidebarRect = sidebar.getBoundingClientRect()
        const itemRect = item.getBoundingClientRect()

        setIndicator({
            top: itemRect.top - sidebarRect.top,
            height: itemRect.height,
        })
    }, [])

    useEffect(() => {
        updateIndicator(active)
    }, [active, updateIndicator])

    useEffect(() => {
        const handleScroll = () => {
            const marker = window.innerHeight * 0.4
            let current: NavId = "start"

            for (const item of NAV) {
                const section = document.getElementById(item.href)
                if (!section) continue
                if (section.getBoundingClientRect().top <= marker) {
                    current = item.id
                }
            }

            setActive(current)
        }

        const handleResize = () => updateIndicator(activeRef.current)

        handleScroll()
        window.addEventListener("scroll", handleScroll, {passive: true})
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [updateIndicator])

    const scrollTo = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        document.getElementById(href)?.scrollIntoView({behavior: "smooth", block: "start"})
    }

    return (
        <nav className={styles.sidebar} ref={sidebarRef} aria-label="Page sections">
            <ul className={styles.list}>
                {NAV.map((item) => (
                    <li
                        key={item.id}
                        ref={(el) => {
                            itemRefs.current[item.id] = el
                        }}
                        className={`${styles.item} ${active === item.id ? styles.active : ""}`}
                    >
                        <a className={styles.link} href={`#${item.href}`} onClick={scrollTo(item.href)}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={styles.track} aria-hidden="true">
                <span className={styles.line} />
                <span
                    className={styles.indicator}
                    style={{top: indicator.top, height: indicator.height}}
                />
            </div>
        </nav>
    )
}
