import schoolImg from "@/assets/project-school.jpg";
import evoImg from "@/assets/project-evopilot.jpg";
import conreviaImg from "@/assets/project-conrevia.jpg";
import resume from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Tanveer Qasim",
  title: "Full-Stack Web Developer & AI Agents Developer",
  location: "Karachi, Pakistan",
  email: "tanveerqasim2011@gmail.com",
  github: "https://github.com/tanvirjadi",
  linkedin: "https://www.linkedin.com/in/tanveer-qasim-852a8a376",
  resumeUrl: resume.url,
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export type SkillCategory = "Frontend" | "Backend" | "AI Engineering" | "Data & Tools";
export const skills: { name: string; category: SkillCategory; glyph: string }[] = [
  { name: "React", category: "Frontend", glyph: "Re" },
  { name: "TypeScript", category: "Frontend", glyph: "Ts" },
  { name: "JavaScript", category: "Frontend", glyph: "Js" },
  { name: "HTML", category: "Frontend", glyph: "<>" },
  { name: "CSS", category: "Frontend", glyph: "{}" },
  { name: "Tailwind CSS", category: "Frontend", glyph: "Tw" },
  { name: "Vite", category: "Frontend", glyph: "Vi" },
  { name: "Node.js", category: "Backend", glyph: "No" },
  { name: "Express.js", category: "Backend", glyph: "Ex" },
  { name: "Python", category: "Backend", glyph: "Py" },
  { name: "FastAPI", category: "Backend", glyph: "Fa" },
  { name: "Flask", category: "Backend", glyph: "Fl" },
  { name: "REST APIs", category: "Backend", glyph: "/:" },
  { name: "OpenAI API", category: "AI Engineering", glyph: "Oa" },
  { name: "OpenAI Agents SDK", category: "AI Engineering", glyph: "Ag" },
  { name: "LangChain", category: "AI Engineering", glyph: "Lc" },
  { name: "CrewAI", category: "AI Engineering", glyph: "Cr" },
  { name: "MCP", category: "AI Engineering", glyph: "Mc" },
  { name: "PostgreSQL", category: "Data & Tools", glyph: "Pg" },
  { name: "SQLite", category: "Data & Tools", glyph: "Sq" },
  { name: "Git", category: "Data & Tools", glyph: "Gt" },
  { name: "Authentication", category: "Data & Tools", glyph: "Au" },
  { name: "OAuth", category: "Data & Tools", glyph: "Oh" },
];

export type ProjectStatus = "Private" | "Experimental" | "In development" | "Completed";
export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  note?: string;
}

// Add new projects to this list — the showcase renders them automatically.
export const projects: Project[] = [
  {
    id: "school",
    index: "01",
    name: "School Management System",
    category: "Full-Stack SaaS",
    status: "Private",
    description:
      "A full-stack school platform with dedicated dashboards for administrators, teachers, students and parents.",
    highlights: [
      "Attendance, homework, report cards and fees",
      "Announcements, complaints and leave requests",
      "Role-based access and real-time chat",
    ],
    tech: ["React", "FastAPI", "PostgreSQL"],
    image: schoolImg,
    note: "Private codebase — walkthrough available on request.",
  },
  {
    id: "evopilot",
    index: "02",
    name: "EvoPilot",
    category: "Machine Learning",
    status: "Private",
    description:
      "An experimental self-driving car simulation exploring neural networks, sensor inputs and autonomous driving behaviour.",
    highlights: ["Ray-cast sensor inputs", "Neural network decision making", "Built from scratch with Pygame"],
    tech: ["Python", "Pygame", "Neural Networks"],
    image: evoImg,
    note: "Private — not deployed yet.",
  },
  {
    id: "conrevia",
    index: "03",
    name: "Conrevia AI",
    category: "AI Systems",
    status: "In development",
    description:
      "An AI customer interaction and automation SaaS concept that helps businesses launch website assistants trained on their own knowledge bases.",
    highlights: ["Knowledge-base grounded answers", "Lead capture and appointments", "Embeddable website assistant"],
    tech: ["Python", "FastAPI", "OpenAI Agents SDK", "Node.js", "PostgreSQL"],
    image: conreviaImg,
    note: "Not public yet — concept visual shown.",
  },
];

export const services = [
  {
    n: "01",
    title: "Full-Stack Web Development",
    text: "Modern, responsive, and functional web applications built with scalable frontend and backend technologies.",
    tags: ["React", "TypeScript", "Node.js", "FastAPI"],
  },
  {
    n: "02",
    title: "AI Agents & Automation",
    text: "Intelligent AI agents and automation systems designed to streamline workflows and solve business problems.",
    tags: ["Agents SDK", "LangChain", "CrewAI", "MCP"],
  },
  {
    n: "03",
    title: "API & Backend Engineering",
    text: "Reliable backend systems, REST APIs, database architecture, and authentication systems.",
    tags: ["REST", "PostgreSQL", "OAuth", "Sessions"],
  },
];

// Edit freely — no dates are stated on purpose.
export const journey = [
  { phase: "Chapter 01", title: "The first lines of code", text: "Started exploring programming and how software works under the hood." },
  { phase: "Chapter 02", title: "Python & the full stack", text: "Expanded into Python and full-stack web development." },
  { phase: "Chapter 03", title: "Shipping complete apps", text: "Began building complete applications with frontend, backend and databases." },
  { phase: "Chapter 04", title: "Into AI engineering", text: "Explored AI engineering, neural networks and AI agents." },
  { phase: "Now", title: "Building & deepening", text: "Currently building projects and deepening my engineering knowledge." },
];

export const certificates = [
  { title: "AI Engineer Agentic Track: The Complete Agent & MCP Course", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-1046b365-3c4a-4206-ae1b-1e50b3909ad4/" },
  { title: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-be33ef64-fced-4e85-848c-79f1343c7b58/" },
  { title: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-3a9e26cc-ec57-41c2-9a9d-70d509cd5a38/" },
];
