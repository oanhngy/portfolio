import about from '../../data/about'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <section id="about" className={styles.section}>
            {/* 2 cols */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.badge}>{about.statusBadge}</span>
                    <SectionTitle>
                        Hi, this is <span className={styles.accent}>Oanh.</span>
                    </SectionTitle>
                    <p  className={styles.intro}>{about.intro}</p>
                </div>

                <div className={styles.right}>
                    <p className={styles.bio}>{about.bio}</p>
                </div>
            </div>

            {/* techtags */}
            <ul className={styles.tags}>
                {about.tools.map(tool => (
                    <li key={tool.skill} className={styles.tag}>
                        {tool.skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AboutMe