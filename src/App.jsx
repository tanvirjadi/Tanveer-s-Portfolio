import Navbar from "./components/navbar.tsx"
import Cursor from "./components/cursor.tsx"
import Glow from "./components/glow.tsx"
import Hero from "./sections/hero-section.tsx"
import About from "./sections/about-section.tsx"
import Skills from "./sections/skills-section.tsx"
import Projects from "./sections/projects-section.tsx"
import Timeline from "./sections/timeline-section.tsx"
import Journey from "./sections/journey-section.tsx"
import Contact from "./sections/contact-section.tsx"
import Footer from "./components/footer.tsx"
import { Analytics } from '@vercel/analytics/react'
import ChatWidget from "./components/agent-widget.tsx"

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans antialiased">

      <ChatWidget />

      <Analytics />
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Journey />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
