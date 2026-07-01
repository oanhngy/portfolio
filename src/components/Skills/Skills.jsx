import skills from '../../data/skills'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Skills.module.css'

function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <SectionTitle accent>My Skills</SectionTitle>
            <div className={styles.gridContainer}>
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