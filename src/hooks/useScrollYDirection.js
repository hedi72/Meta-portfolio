import { useEffect, useState } from "react"

const useScrollYDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up")
    let previousPos = 0
    let isScrollUpdated = false


    const handleScroll = () => {

        if (isScrollUpdated) {
            return
        } else {
            isScrollUpdated = true
            setTimeout(() => {
                if (window.scrollY > previousPos) {
                    setScrollDirection("down")
                    previousPos = window.scrollY
                }
                else {
                    setScrollDirection("up")
                    previousPos = window.scrollY
                }
                isScrollUpdated = false;
            }, 300);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return scrollDirection

}

export default useScrollYDirection