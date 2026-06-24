import about from '../../data/about'
import styles from './Contact.module.css'

function Contact() {
    return (
        <section id="contact">
            <div className={styles.container}>
                <h2 className={styles.cta}>Let's work together</h2>

                <a href={`mailto:${about.email}`} className={styles.email}>
                    {about.email}
                </a>

                <ul className={styles.socials}>
                    {about.socials.map(social => (
                        <li key={social.label}>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Contact