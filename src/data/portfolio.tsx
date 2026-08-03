import { Award, FileBadge2, GraduationCap, Mail, MapPin, Compass, Rocket, Sparkle, Sparkles, Code2, Server, Wrench, Key, Database as DB } from "lucide-react"

const stats = [
    { icon: <Award className="w-6 h-6 text-cyan-400" />, label: "Status", value: "Grade X Student" },
    { icon: <FileBadge2 className="w-6 h-6 text-violet-400" />, label: "Certificates", value: "3+" },
    { icon: <GraduationCap className="w-6 h-6 text-blue-400" />, label: "Learning Path", value: "Self-Taught Dev" },
]

const projectList = [
    {
        title: "School Management System - Private SaaS",
        description: "A full-stack school management platform that streamlines communication and academic workflows through role-based dashboards, attendance tracking, homework management, report cards, announcements, complaints, fees, leave requests, and real-time messaging.",
        tech: ["React", "Python", "FastAPI", "PostgreSQL", "Vite", "Session Authentication", "TypeScript"],
        github: false,
        live: false,
        privateProject: true
    },
    {
        title: "ConreviaAI (In Progress)",
        description: "An AI-powered customer support platform that helps businesses automate conversations, capture leads, manage appointments, and provide instant assistance across websites.",
        tech: ["Not Public Yet"],
        github: false,
        live: false,
        privateProject: true
    }
]

const contactMethods = [
    {
        icon: <Mail className="w-5 h-5 text-cyan-400" />,
        label: "Send an Email",
        value: "tanveerqasim2011@gmail.com",
        href: "mailto:tanveerqasim2011@gmail.com"
    },
    {
        icon: <MapPin className="w-5 h-5 text-violet-400" />,
        label: "Location",
        value: "Karachi, Pakistan",
        href: "https://maps.google.com/?q=Karachi,Pakistan"
    },
    {
        icon: (
            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        label: "LinkedIn Professional",
        value: "linkedin.com/in/tanveer-qasim-852a8a376",
        href: "https://www.linkedin.com/in/tanveer-qasim-852a8a376"
    },
    {
        icon: (
            <svg className="w-5 h-5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
        label: "GitHub Repository",
        value: "github.com/tanvirjadi",
        href: "https://github.com/tanvirjadi"
    }
]

const journeySteps = [
    {
        year: "2021",
        icon: <Compass className="w-5 h-5 text-cyan-400" />,
        title: "The Beginning",
        description: "Started learning the basics of web development with HTML, CSS, and JavaScript. Built simple websites and discovered how much I enjoyed creating things with code."
    },
    {
        year: "2024",
        icon: <Rocket className="w-5 h-5 text-emerald-400" />,
        title: "Python & Beyond",
        description: "Started learning Python and explored backend frameworks like Flask and FastAPI. Built projects to strengthen problem-solving and programming skills."
    },
    {
        year: "2025",
        icon: <Sparkle className="w-5 h-5 text-pink-400" />,
        title: "Exploring AI",
        description: "Began working with AI technologies, experimenting with OpenAI APIs, LangChain, and AI agents while continuing to build full-stack applications."
    },
    {
        year: "2026 & Beyond",
        icon: <Sparkles className="w-5 h-5 text-pink-400" />,
        title: "What's Next",
        description: "Currently studying in Grade X while building full-stack and AI-powered projects. My focus is on creating software that solves real problems and continuously improving as a developer."
    }
]

const skillCategories = [
    {
        title: "Frontend Engineering",
        icon: <Code2 className="w-6 h-6 text-cyan-400" />,
        skills: [
            "React.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML5 / CSS3",
        ]
    },
    {
        title: "Backend & APIs",
        icon: <Server className="w-6 h-6 text-violet-400" />,
        skills: [
            "Node.js",
            "Express.js",
            "Flask",
            "FastAPI",
            "REST APIs",
            "OpenAI API",
        ]
    },
    {
        title: "Databases",
        icon: <DB className="w-6 h-6 text-blue-400" />,
        skills: [
            "PostgreSQL",
            "SQLite",
        ]
    },
    {
        title: "Authentication",
        icon: <Key className="w-6 h-6 text-orange-400" />,
        skills: [
            "OAuth",
            "Passport.js",
            "Google OAuth",
            "Authentication & Authorization",
            "Sessions & Cookies",
            "JWT"
        ]
    },
    {
        title: "Tools & Workflow",
        icon: <Wrench className="w-6 h-6 text-blue-400" />,
        skills: [
            "Git / GitHub",
            "Terminal / Bash",
            "Antigravity IDE",
            "Figma",
            "Vite"
        ]
    },
    {
        title: "AI Agents & Automation",
        icon: <Sparkles className="w-6 h-6 text-amber-400" />,
        skills: [
            "OpenAI Agents SDK",
            "CrewAI",
            "LangChain",
            "Microsoft Autogen (Learning)",
            "MCP (Learning)",
            "Neural Networks (Learning)"
        ]
    }
]

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

export { stats, projectList, contactMethods, journeySteps, skillCategories, milestones }