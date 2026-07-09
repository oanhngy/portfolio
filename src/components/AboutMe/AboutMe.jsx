import { useEffect, useState } from 'react'
import about from '../../data/about'
import useOnScreen from '../../hooks/useOnScreen'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AboutMe.module.css'

function AboutMe() {
    const [typedIntro, setTypedIntro]= useState('')
    const [sectionRef, isVisible]= useOnScreen({threshold: 0.4}) //1. gọi hook useOnScreen

    useEffect(() => {
        if(!isVisible) return //3.1 chưa tới -> k chạy effect
        let i=0
        const intervalId=setInterval(() => {
            i++
            setTypedIntro(about.intro.slice(0, i))

            if(i>= about.intro.length) {
                clearInterval(intervalId)
            }
        }, 60)

        return () => clearInterval(intervalId)
    }, [isVisible]) //3.2 đổi dependency

    return (
        <section id="about" ref={sectionRef} className={styles.section}> {/* 2. thêm ref={sectionRef} */}
            {/* 2 cols */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.badge}>{about.statusBadge}</span>
                    <SectionTitle>
                        Hi, this is <span className={styles.accent}>Oanh.</span>
                    </SectionTitle>
                    <p  className={styles.intro}>{typedIntro}</p>
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