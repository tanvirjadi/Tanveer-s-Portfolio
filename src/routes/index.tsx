import { createFileRoute } from "@tanstack/react-router";
import { Nav, Hero, About, Skills, Work, Services, Journey, Contact, Footer } from "@/components/portfolio/Sections";
import { Cursor } from "@/components/portfolio/fx";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Tanveer Qasim — Full-Stack & AI Agents Developer" },
      { name: "description", content: "Portfolio of Tanveer Qasim, a Karachi-based full-stack web developer and AI agents developer building web apps and intelligent systems." },
      { property: "og:title", content: "Tanveer Qasim — Full-Stack & AI Agents Developer" },
      { property: "og:description", content: "Turning ideas into digital reality: web applications, AI agents and backend systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Services />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
