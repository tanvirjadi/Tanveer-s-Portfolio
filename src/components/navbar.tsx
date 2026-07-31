import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import { Menu, X } from "lucide-react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const links = [
        { title: "About", id: "about" },
        { title: "Skills", id: "skills" },
        { title: "Projects", id: "projects" },
        { title: "Experience", id: "experience" },
        { title: "Journey", id: "journey" },
        { title: "Contact", id: "contact" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? "backdrop-blur-md bg-[#0A0A0A]/70 border-b border-white/5 py-4" 
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo */}
                <a 
                    href="#top" 
                    onClick={(e) => {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="flex items-center hover:scale-105 transition-transform duration-300"
                >
                    <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={`#${link.id}`} 
                                    onClick={(e) => handleScrollToSection(e, link.id)}
                                    className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="#contact"
                        onClick={(e) => handleScrollToSection(e, "contact")}
                        className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 cursor-pointer"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`lg:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/5 py-8 px-6 transition-all duration-350 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-6 mb-8 text-left">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={`#${link.id}`} 
                                onClick={(e) => handleScrollToSection(e, link.id)}
                                className="text-zinc-400 hover:text-cyan-400 text-lg font-medium block py-2 transition-colors"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center">
                    <a 
                        href="#contact"
                        onClick={(e) => handleScrollToSection(e, "contact")}
                        className="w-full text-center px-6 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-base rounded-xl transition-colors shadow-md shadow-cyan-500/10 cursor-pointer"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar