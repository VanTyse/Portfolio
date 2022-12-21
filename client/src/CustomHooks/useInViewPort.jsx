import React, {useState, useEffect} from 'react'

function useInViewPort(ref) {
    const element = ref.current
    const [inView, setInView] = useState(false);
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight+element.clientHeight-120 || document.documentElement.clientHeight+element.clientHeight-120) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const scrollListener = () => {
        const isInView = isInViewport(element)
        setInView(isInView)
    }

    useEffect(() => {
        if (element)window.addEventListener('scroll', scrollListener)
        return () => window.removeEventListener('scroll', scrollListener)
    })

    useEffect(() => {
        if (inView === true){
            element.classList.add('fade-in');
        }
    }, [inView])
    
    return inView
}

export default useInViewPort