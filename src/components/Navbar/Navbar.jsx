import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen]= useState(false);

    return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <a href="#home" className={styles.logo}>Oanh Ng.</a>
            {/* web only */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                <li><a href="#home">// Home</a></li>
                <li><a href="#about">// About</a></li>
                <li><a href="#skills">// Skills</a></li>
                <li><a href="#projects">// Projects</a></li>
                <li><a href="#contact">// Contact</a></li>
            </ul>

            {/* mobile only */}
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'x' : '☰'}</button>
        </div>
    </nav>
    )
}

export default Navbar