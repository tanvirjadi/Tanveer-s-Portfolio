import axios from "axios"
import { useState, useRef, useEffect } from "react"

interface Message {
    id: number
    sender: "user" | "bot"
    text: string
    time: string
}

function getTime() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

const BotAvatar = () => (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/30">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white" />
        </svg>
    </div>
)

const SparkleIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L13.5 9H19.5L14.7 12.9L16.2 18.9L12 15.6L7.8 18.9L9.3 12.9L4.5 9H10.5L12 3Z" fill="white" />
    </svg>
)

const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
)

const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const TypingDots = () => (
    <div className="flex items-end gap-1 pl-1 py-1">
        {[0, 1, 2].map((i) => (
            <span
                key={i}
                className="w-2 h-2 rounded-full bg-violet-400 animate-typing-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
            />
        ))}
    </div>
)

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            sender: "bot",
            text: "Hey there! 👋 I'm Tanveer's AI assistant. Ask me anything about his skills, projects, or experience!",
            time: getTime(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const bottomRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    // const baseURL = (import.meta as any).env.VITE_API_URL

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!inputValue.trim() || isLoading) return

        const userMsg: Message = {
            id: Date.now(),
            sender: "user",
            text: inputValue.trim(),
            time: getTime(),
        }
        setMessages((prev) => [...prev, userMsg])
        setInputValue("")
        setIsLoading(true)
        setIsTyping(true)

        try {
            const response = await axios.post(`/api/chat`, {
                message: userMsg.text,
            })
            const output = response.data.output
            setIsTyping(false)
            if (output.scroll_to) {
                const targetElement = document.getElementById(output.scroll_to)
                if (targetElement) {
                    targetElement.scrollIntoView()
                }
            }
            const botMsg: Message = {
                id: Date.now() + 1,
                sender: "bot",
                text: output.text,
                time: getTime(),
            }
            setMessages((prev) => [...prev, botMsg])
        } catch {
            setIsTyping(false)
            const errMsg: Message = {
                id: Date.now() + 1,
                sender: "bot",
                text: "Oops, something went wrong. Please try again!",
                time: getTime(),
            }
            setMessages((prev) => [...prev, errMsg])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* FAB Toggle Button */}
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle chat"
                className={`fixed cursor-pointer z-[99999] bottom-8 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_8px_32px_rgba(124,58,237,0.5)] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 ${isOpen ? "" : "animate-fab-pulse"}`}
            >
                <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
                    {isOpen ? <CloseIcon /> : <SparkleIcon />}
                </div>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed z-[99998] bottom-28 left-8 w-[370px] rounded-2xl overflow-hidden glass-widget animate-widget-fadein shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(139,92,246,0.15)]">

                    {/* Header */}
                    <div className="px-4 py-3.5 flex items-center gap-3 bg-gradient-to-br from-violet-700/90 to-cyan-500/75 border-b border-white/[0.08]">
                        <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0 backdrop-blur-sm">
                            <SparkleIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-white font-semibold text-sm leading-tight">Tanveer's AI Assistant</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <p className="text-white/70 text-xs">Always online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Close chat"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex flex-col gap-3 px-3 py-4 overflow-y-auto chat-scrollbar h-[340px]">
                        {messages.map((msg) => {
                            const isUser = msg.sender === "user"
                            return (
                                <div
                                    key={msg.id}
                                    className={`flex items-end gap-2 animate-msg-slidein ${isUser ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    {!isUser && <BotAvatar />}
                                    <div className={`flex flex-col gap-1 max-w-[78%] ${isUser ? "items-end" : "items-start"}`}>
                                        <div
                                            className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                                                isUser
                                                    ? "rounded-br-sm text-white bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_4px_16px_rgba(124,58,237,0.35)]"
                                                    : "rounded-bl-sm text-zinc-100 bg-white/[0.07] border border-white/[0.08]"
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <span className="text-zinc-600 text-[10px] px-1">{msg.time}</span>
                                    </div>
                                </div>
                            )
                        })}

                        {isTyping && (
                            <div className="flex items-end gap-2 animate-msg-slidein">
                                <BotAvatar />
                                <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-white/[0.07] border border-white/[0.08]">
                                    <TypingDots />
                                </div>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>

                    {/* Input Bar */}
                    <form
                        onSubmit={handleSubmit}
                        className="px-3 py-3 flex items-center gap-2 border-t border-white/[0.07] bg-black/30"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask me anything…"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isLoading}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 input-glow transition-all duration-200 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            aria-label="Send message"
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_4px_16px_rgba(124,58,237,0.4)] flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <SendIcon />
                        </button>
                    </form>

                    {/* Bottom branding strip */}
                    <div className="text-center py-1.5 text-zinc-600 text-[10px] bg-black/20">
                        Powered by OpenAI ✦
                    </div>
                </div>
            )}
        </>
    )
}

export default ChatWidget