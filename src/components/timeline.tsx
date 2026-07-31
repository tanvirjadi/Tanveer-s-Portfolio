import { Calendar, GraduationCap } from "lucide-react"

function Timeline() {
    const milestones = [
        {
            title: "Grade X",
            institution: "Usman Public School",
            location: "Karachi, Pakistan",
            period: "2026 (Start) - Present",
            details: [
                "Promoted to Grade X while continuing to develop software projects.",
                "Currently exploring neural networks and modern AI technologies.",
                "Actively building projects and expanding my technical skills.",
            ]
        },
        {
            title: "AI & Backend Development",
            institution: "Udemy",
            location: "Online",
            period: "2025 - 2026",
            details: [
                "Explored AI frameworks including OpenAI Agents SDK, Microsoft Autogen, LangChain, and CrewAI.",
                "Built AI-powered applications and experimented with agentic workflows.",
                "Continued improving backend development with Python."
            ]
        },
        {
            title: "Python Development",
            institution: "Udemy",
            location: "Online",
            period: "2024 - 2025",
            details: [
                "Learned Python and its ecosystem for backend development and automation.",
                "Worked with Flask, FastAPI, Pandas, and SQLite.",
                "Built practical applications to strengthen programming fundamentals."
            ]
        },
        {
            title: "Full Stack Web Development",
            institution: "Udemy",
            location: "Online",
            period: "2023 - 2024",
            details: [
                "Completed a comprehensive Full-Stack Web Development course.",
                "Built full-stack applications using modern web technologies.",
                "Earned a Udemy certificate upon course completion.",
                "Participated in school science exhibitions and technical presentations."
            ]
        },
        {
            title: "Modern Web Development",
            institution: "Udemy",
            location: "Online",
            period: "2022 - 2023",
            details: [
                "Learned React, Node.js, Express.js, and related technologies.",
                "Built dynamic web applications and expanded frontend and backend skills.",
                "Continued developing personal projects to gain hands-on experience."
            ]
        },
        {
            title: "Web Development Fundamentals",
            institution: "Udemy",
            location: "Online",
            period: "2021 - 2022",
            details: [
                "Started learning HTML, CSS, and JavaScript.",
                "Built interactive websites and beginner web projects.",
                "Learned Git and began publishing projects on GitHub."
            ]
        }
    ]

    return (
        <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-zinc-950/40 backdrop-blur-sm border-y border-white/5 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">Qualifications</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Education & Milestones</h3>
                    <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Timeline Grid */}
                <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12 ml-4">
                    {milestones.map((item, idx) => (
                        <div key={idx} className="relative group">
                            {/* Bullet indicator */}
                            <div className="absolute -left-[35px] md:-left-[43px] top-1.5 bg-zinc-950 border-2 border-cyan-500 w-5 h-5 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>

                            <div className="p-4 sm:p-6 md:p-8 bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-cyan-500/20 rounded-2xl transition-all duration-300">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 mb-4">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {item.period}
                                </span>
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-zinc-400 text-sm font-medium mb-4">
                                    {item.institution} &bull; <span className="text-zinc-500">{item.location}</span>
                                </p>
                                <ul className="space-y-2.5">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1.5">&bull;</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
