import Navbar from "./components/navbar.tsx"
import Cursor from "./components/cursor.tsx"
import Glow from "./components/glow.tsx"
import Hero from "./components/hero-section.tsx"
import About from "./components/about.tsx"
import Skills from "./components/skills.tsx"
import Projects from "./components/projects.tsx"
import Timeline from "./components/timeline.tsx"
import Journey from "./components/journey.tsx"
import Contact from "./components/contact.tsx"
import Footer from "./components/footer.tsx"
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans antialiased">
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
