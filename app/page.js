"use client"

import styles from "./page.module.css"
import { Switch } from "antd"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Header from "./layout/header"
import Lenis from "lenis"

export default function Home() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // LENIS SMOOTH SCROLL
        const lenis = new Lenis({
            duration: 1.7,        // makin besar = makin halus & lambat
            lerp: 0.05,           // makin kecil = makin smooth
            smoothWheel: true,
            wheelMultiplier: 0.7, // scroll lebih “soft”
            smoothTouch: true,    // touch device juga smooth
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    const onChange = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.topBar}>
                <Switch checked={isDark} onChange={onChange} />
            </div>

            <h1 className={styles.judul}>Judul teks</h1>

            <p>Text ini otomatis berubah warna</p>

            <div>awdawdawawdawd</div>

            <div className={styles.card}>
                Ini card dengan border theme
            </div>

            {/* tambahan biar keliatan scroll */}
            <div style={{ height: "150vh" }} />
        </div>
    )
}

// Install next-themes,lenis and antd!!!