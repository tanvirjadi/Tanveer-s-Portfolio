import { useState, FormEvent } from "react"
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react"
import {ToastContainer, toast } from "react-toastify"
import { contactMethods } from "../data/portfolio"


function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            try {
                const { name, email, subject, message } = formState
                const mailtoURL = `mailto:tanveerqasim2011@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Tanveer,\n\nYou received a new email from your website!\n\nName: ${encodeURIComponent(name)}\nEmail: ${encodeURIComponent(email)}\nSubject: ${encodeURIComponent(subject)}\n\nMessage:\n${encodeURIComponent(message)}`)}`
                window.open(mailtoURL, "_self")
                toast.success("Opening your default mail client...", {theme: "colored", position: "bottom-right"})
            } catch (error) {
                console.error("Error sending message:", error)
                toast.error("Something went wrong! Try again later.", {theme: "colored", position: "bottom-right"})
            } finally {
                setFormState({ name: "", email: "", subject: "", message: "" })
                setIsLoading(false)
            }
        }, 5000)
    }

    return (
        <>
        <ToastContainer/>
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-zinc-950/40 backdrop-blur-sm border-t border-white/5 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-3">Get In Touch</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Let's Work Together</h3>
                    <div className="h-1 w-12 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                    <div className="lg:col-span-5 space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-2">Contact Details</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Have an exciting project idea, a position to fill, or just want to say hi? Feel free to reach out through any of these channels or drop a message in the form!
                        </p>

                        <div className="space-y-4">
                            {contactMethods.map((method, idx) => (
                                <a 
                                    key={idx} 
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-5 bg-zinc-900/50 hover:bg-zinc-900/90 border border-white/5 hover:border-cyan-500/20 rounded-xl transition-all duration-300 hover:translate-x-2 group"
                                >
                                    <div className="p-3 bg-white/5 group-hover:bg-white/10 rounded-lg">
                                        {method.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{method.label}</p>
                                        <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors truncate">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 bg-zinc-900/40 border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Your Name</label>
                                        <input 
                                            id="name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Address</label>
                                        <input 
                                            id="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2 sm:col-span-2">
                                        <label htmlFor="subject" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Subject</label>
                                        <input 
                                            id="subject"
                                            type="text"
                                            required
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all"
                                            placeholder="e.g. Python Developer needed"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Message Content</label>
                                    <textarea 
                                        id="message"
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-zinc-950 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button 
                                    disabled={isLoading}
                                    type="submit"
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 active:scale-98 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all cursor-pointer"
                                >
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                    {isLoading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact
