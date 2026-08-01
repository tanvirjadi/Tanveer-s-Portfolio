import { skillCategories } from "../data/portfolio.tsx"
import { Sparkles } from "lucide-react"

function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-zinc-950/40 backdrop-blur-sm border-y border-white/5 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-wider text-violet-400 uppercase mb-3">Skills</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Technical Toolkit</h3>
                    <div className="h-1 w-12 bg-violet-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-zinc-900/60 border border-white/5 hover:border-violet-500/30 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/5 group"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx} 
                                        className="px-3.5 py-2 text-sm font-medium bg-zinc-950/60 border border-white/5 hover:border-cyan-500/30 text-zinc-300 rounded-xl transition-all duration-300 hover:scale-105 cursor-default hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <span className="text-zinc-400 text-sm flex items-center gap-2 mr-2">
                        <Sparkles className="w-4 h-4 text-amber-400" /> Also working with:
                    </span>
                    {["EJS", "Microcontrollers", "Supabase", "Bootstrap", "WebSockets", "Vercel", "Postman"].map((item, idx) => (
                        <span 
                            key={idx} 
                            className="px-3  py-1 text-xs font-semibold bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 border border-white/5 hover:border-white/10 rounded-full cursor-default transition-colors"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
