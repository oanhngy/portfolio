import styles from './SectionTitle.module.css'

function SectionTitle({children, accent, animate, visible}) {
    return <h2 className={`${styles.title} ${accent ? styles.style : ''} ${animate ? styles.animate : ''} ${animate && visible ? styles.visible : ''}`}>{children}</h2>
}

export default SectionTitle