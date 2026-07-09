import { useEffect, useRef, useState } from 'react'

function useOnScreen({threshold=0.2, rootMargin="0px", once=true} = {}) {
    const ref= useRef(null)
    const [isVisible, setIsVisible]= useState(false)

    useEffect(() => {
        const node= ref.current
        if(!node) return

        const observer=new IntersectionObserver (
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true)

                    if(once) {
                        observer.unobserve(node)
                    }
                } else if(!once) {
                    setIsVisible(false)
                }
            },
            {threshold, rootMargin}
        )
        observer.observe(node)

        return () => observer.disconnect()
    }, [threshold, rootMargin, once])
    
    return [ref, isVisible]
}

export default useOnScreen