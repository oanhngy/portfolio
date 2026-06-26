import about from '../../data/about';
import styles from './Home.module.css';

function Home() {
    return ( 
            <section id="home" className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.name}>{about.name}</h1>
                    <p className={styles.title}>{about.title}</p>
                    <a href={about.cvUrl} target="_blank" rel="noopener noreferrer" className={styles.btnCv}>
                        View CV
                    </a>
                </div>
            </section>
        )
}

export default Home