import profile from "../assets/profile.png"
import { stats } from "../data/portfolio"

function About() {
    return (
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">About Me</h2>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-white">Who is Tanveer Qasim?</h3>
                <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                <div className="lg:col-span-5 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-zinc-900 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 shadow-lg shadow-cyan-500/20">
                            <img src={profile} className="w-full h-full -scale-x-100 rounded-full" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Tanveer Qasim</h4>
                        <p className="text-cyan-400 text-sm font-medium mb-4">Self-Taught Developer & Student</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Focused on building real-world applications, exploring AI, and continuously improving as a developer.
                        </p>
                    </div>
                </div>
        
                <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        Learning and building with passion and purpose.
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        I'm a full-stack developer who enjoys turning ideas into real products. I like building web applications that are fast, practical, and easy to use. Lately, I've been exploring AI and backend technologies to create software that solves real problems. I'm always learning, experimenting, and looking for new challenges that help me grow as a developer.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        Even though I am currently in school, coding is my daily passion. I spend my spare time learning advanced backend and frontend principles, exploring API integrations, and building side projects to grow my software engineering skills.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
                        {stats.map((stat, idx) => (
                            <div 
                                key={idx} 
                                className="p-4 sm:p-5 bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 rounded-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="mb-2 sm:mb-3 p-2 bg-white/5 w-fit rounded-lg">{stat.icon}</div>
                                <h5 className="text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-1">{stat.label}</h5>
                                <p className="text-lg font-bold text-white">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
