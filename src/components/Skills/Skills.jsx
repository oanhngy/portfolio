import skills from '../../data/skills'
import useOnScreen from '../../hooks/useOnScreen'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Skills.module.css'

function Skills() {
    const [ref, isVisible]= useOnScreen()

    return (
        <section ref={ref} id="skills" className={styles.section}>
            <SectionTitle accent animate visible={isVisible}>My Skills</SectionTitle>
            <div className={`${styles.gridContainer} ${isVisible ? styles.visible : ''}`}>
                {skills.map(skill => (
                    <div key={skill.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <img src={skill.iconUrl} alt={skill.title} className={styles.icon}/>
                        <h3 className={styles.title}>{skill.title}</h3>
                        </div>
                        <p className={styles.desc}>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills