"use client";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import styles from "@/app/page.module.css";
import { useTheme } from "next-themes";

const Theme = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Button
            className={styles.floatButton}
            shape="circle"
            onClick={toggleTheme}
        >
            {isDark ? "🌙" : "☀️"}
        </Button>
    );
};

export default Theme;