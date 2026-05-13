import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <a href="#" className={styles.link}>Home</a>
            <a href="#" className={styles.link}>About</a>
            <a href="#" className={styles.link}>Project</a>
            <a href="#" className={styles.link}>Skill</a>
            <a href="#" className={styles.link}>Contact</a>
        </div>
    );
};

export default Header;