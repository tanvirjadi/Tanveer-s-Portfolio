interface GlowProps {
    color: string;
    position: "left" | "right";
}

function Glow({ color, position }: GlowProps) {
    return (
        <div 
            className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full opacity-30 blur-[100px] md:blur-[150px] z-[-10] pointer-events-none animate-pulse-glow" 
            style={{ 
                backgroundColor: color, 
                left: position === "left" ? "-100px" : "auto", 
                right: position === "right" ? "-100px" : "auto",
                top: position === "left" ? "10%" : "40%"
            }}
        />
    )
}

export default Glow
