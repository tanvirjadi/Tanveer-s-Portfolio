import { ExternalLink, Folder } from "lucide-react"

function Projects() {
    const projectList = [
        {
            title: "School Management System - Private SaaS",
            description: "A full-stack school management platform that streamlines communication and academic workflows through role-based dashboards, attendance tracking, homework management, report cards, announcements, complaints, fees, leave requests, and real-time messaging.",
            tech: ["React", "Python", "FastAPI", "PostgreSQL", "Vite", "Session Authentication", "TypeScript"],
            github: false,
            live: false
        },
        {
            title: "ConreviaAI (In Progress)",
            description: "An AI-powered customer support platform that helps businesses automate conversations, capture leads, manage appointments, and provide instant assistance across websites.",
            tech: ["Not Public Yet"],
            github: false,
            live: false
        }
    ]

    return (
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">Portfolio</h2>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Recent Projects</h3>
                <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projectList.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-zinc-900/40 hover:bg-zinc-900/70 border border-white/5 hover:border-cyan-500/20 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5"
                    >
                        <div>
                            {/* Card Header Icons */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300">
                                    <Folder className="w-6 h-6" />
                                </div>
                                <div className="flex gap-4 text-zinc-400">
                                    <a 
                                        href={project.github || "/projects"}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`hover:text-white transition-colors ${!project.github && "text-gray-400 cursor-not-allowed opacity-50"}`}
                                        title="View GitHub Repository"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                    </a>
                                    <a 
                                        href={project.live || "/projects"} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`hover:text-cyan-400 transition-colors ${!project.live && "text-gray-400 cursor-not-allowed opacity-50"}`}
                                        title="View Live Site"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Card Title & Desc */}
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h4>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tag, tIdx) => (
                                <span 
                                    key={tIdx} 
                                    className="px-2.5 py-1 text-xs font-semibold bg-zinc-800/40 text-zinc-300 border border-white/5 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
