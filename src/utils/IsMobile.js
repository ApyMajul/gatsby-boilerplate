import { useEffect, useState } from "react"

function useDetectMobile() {
    if (typeof window !== "undefined") {
        const [width, setWidth] = useState(window.innerWidth)
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth)
        }

        useEffect(() => {
            window.addEventListener("resize", handleWindowSizeChange)
            return () => {
                window.removeEventListener("resize", handleWindowSizeChange)
            }
        }, [])

        return (width <= 872)
    }
}

export default useDetectMobile
