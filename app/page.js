"use client"

import styles from "./page.module.css"
import { Switch } from "antd"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Home() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const onChange = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    return (
        <div className={styles.page}>
            <Switch
                checked={theme === "dark"}
                onChange={onChange}
            />

            <h1 className={styles.judul}>Judul teks</h1>
            <p>Text ini otomatis berubah warna</p>
            <div>awdawdawawdawd</div>
        </div>
    )
}


// Install next-themes and antd!!!