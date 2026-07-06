import projects from '../../data/projects'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Projects.module.css'

function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <SectionTitle style>My Projects</SectionTitle>
            <div className={styles.gridContainer}>
                {projects.map(project => (
                    <a
                        key={project.id}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <img src={project.img} alt={project.title} className={styles.img} />
                        <h3 className={styles.title}>{project.title}</h3>
                        
                        <div className={styles.cardBottom}>
                            <div className={styles.tags}>
                            {project.tech.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                            </div>
                            <div className={styles.showProject}>
                                <span>Show Project →</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects