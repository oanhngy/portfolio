import { useEffect, useState } from 'react'

function useScrollSpy(sectionIds, options= {}) {
    const{rootMargin='-30% 0px -30% 0px'}=options
    const [activeId, setActiveId]= useState(sectionIds[0])

    useEffect(() => {
        const observer=new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {rootMargin, threshold: 0}
        )

        sectionIds.forEach((id) => {
            const el= document.getElementById(id)
            if(el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sectionIds, rootMargin])

    return activeId
}

export default useScrollSpy