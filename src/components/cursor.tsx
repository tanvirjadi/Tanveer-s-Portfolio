import { useEffect, useRef } from "react"

function Cursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null)
    const mousePosition = useRef({ x: 0, y: 0 })
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY }
        }

        const updateCursor = () => {
            const el = cursorRef.current
            if (el) {
                el.style.left = `${mousePosition.current.x}px`
                el.style.top = `${mousePosition.current.y}px`
            }
            frameRef.current = requestAnimationFrame(updateCursor)
        }

        document.addEventListener("mousemove", handleMouseMove)
        frameRef.current = requestAnimationFrame(updateCursor)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="fixed pointer-events-none z-[9999] w-32 h-32 rounded-full bg-cyan-500/15 blur-3xl -translate-x-1/2 -translate-y-1/2"
            style={{ left: "0px", top: "0px" }}
        />
    )
}

export default Cursor