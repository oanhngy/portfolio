import styles from './SectionTitle.module.css'

function SectionTitle({children, accent}) {
    return <h2 className={`${styles.title} ${accent ? styles.style: ''}`}>{children}</h2>
}

export default SectionTitle