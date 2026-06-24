import Contact from '../Contact/Contact'
import styles from './Footer.module.css'

function Footer() {
    function scrollToTop() {
        window.scrollTo({ top:0, behavior: 'smooth'})
    }

    return (
        <footer className={styles.footer}>
            <Contact />
            <div className={styles.bottom}>
                <p className={styles.copyright}>©2026. Made by Oanh Nguyen. All right reserved.</p>
            </div>
            <button className={styles.scrollToTop} onClick={scrollToTop}>↑</button>
            <span className={styles.bigName}>OA</span>
        </footer>
    )
}

export default Footer