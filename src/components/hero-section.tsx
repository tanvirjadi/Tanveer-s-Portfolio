import { ArrowRight, Download, Sparkles, Mail } from "lucide-react"
import Glow from "./glow"

function Hero() {
    const hours = new Date().getHours()
    const greeting = hours > 12 ? (hours > 18 ? "Evening" : "Afternoon") : (hours > 5 ? "Morning" : "Night")

    const handleScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const downloadCv = () => {
        const cv = "/resume.pdf"
        const link = document.createElement("a")
        link.href = cv
        link.download = "resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
                <div className="flex flex-col items-center text-center space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                    Available for new opportunities!
                </div>

                <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" /> Good {greeting}, my name is
                </p>

                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
                    Tanveer Qasim
                    <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">.</span>
                </h1>

                <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
                    Full Stack Developer | AI Agents Developer | Python Developer
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                    <button
                        onClick={() => downloadCv()}
                        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all cursor-pointer"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </button>
                    <button
                        onClick={() => handleScroll("contact")}
                        className="px-8 flex items-center justify-center gap-2 py-4 bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all cursor-pointer"
                    >
                        <Mail className="w-4 h-4" />
                        Contact Me!
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero