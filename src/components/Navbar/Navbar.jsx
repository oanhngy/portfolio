import { useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];
function Navbar() {
    const [isOpen, setIsOpen]= useState(false);
    const activeId= useScrollSpy(SECTION_IDS)

    return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <a href="#home" className={styles.logo}>Oanh Ng.</a>
            {/* web only */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                <li><a href="#home" className={activeId==='home'? styles.active:''}>// Home</a></li>
                <li><a href="#about" className={activeId==='about'? styles.active:''}>// About</a></li>
                <li><a href="#skills" className={activeId==='skills'? styles.active:''}>// Skills</a></li>
                <li><a href="#projects" className={activeId==='projects'? styles.active:''}>// Projects</a></li>
                <li><a href="#contact" className={activeId==='contact'? styles.active:''}>// Contact</a></li>
            </ul>

            {/* mobile only */}
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'x' : '☰'}</button>
        </div>
    </nav>
    )
}

export default Navbar