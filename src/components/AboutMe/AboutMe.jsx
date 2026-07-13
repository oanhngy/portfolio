import { useEffect, useState } from 'react'
import about from '../../data/about'
import useOnScreen from '../../hooks/useOnScreen'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './AboutMe.module.css'

function AboutMe() {
    const [typedIntro, setTypedIntro]= useState('')
    // const [sectionRef, isVisible]= useOnScreen({threshold: 0.4}) //1. gọi hook useOnScreen
    const [leftRef, leftVisible]= useOnScreen()
    const [rightRef, rightVisible]= useOnScreen()
    const [tagsRef, tagsVisible]= useOnScreen()

    useEffect(() => {
        if(!leftVisible) return //3.1 chưa tới -> k chạy effect
        let i=0
        const intervalId=setInterval(() => {
            i++
            setTypedIntro(about.intro.slice(0, i))

            if(i>= about.intro.length) {
                clearInterval(intervalId)
            }
        }, 60)

        return () => clearInterval(intervalId)
    }, [leftVisible]) //3.2 đổi dependency

    return (
        <section id="about" className={styles.section}> {/* 2. thêm ref={sectionRef} */}
            {/* 2 cols */}
            <div className={styles.container}>
                <div ref={leftRef} className={`${styles.left} ${leftVisible ? styles.visible : ''}`}>
                    <span className={styles.badge}>{about.statusBadge}</span>
                    <SectionTitle>
                        Hi, this is <span className={styles.accent}>Oanh.</span>
                    </SectionTitle>
                    <p  className={styles.intro}>{typedIntro}</p>
                </div>

                <div ref={rightRef} className={`${styles.right} ${rightVisible ? styles.visible : ''}`}>
                    <p className={styles.bio}>{about.bio}</p>
                </div>
            </div>

            {/* techtags */}
            <ul ref={tagsRef} className={`${styles.tags} ${tagsVisible ? styles.visible : ''}`}>
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