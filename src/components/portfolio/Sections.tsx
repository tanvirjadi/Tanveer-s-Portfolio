import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Lock, FlaskConical, Hammer, Download, Check } from "lucide-react";
import { HeroOrb } from "./HeroOrb";
import { Reveal, SplitWords, Magnetic, Counter } from "./fx";
import { profile, navLinks, skills, projects, services, journey, certificates, type SkillCategory, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const btn = {
  primary:
    "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-shadow hover:glow",
  ghost:
    "group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary",
};

function Eyebrow({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-primary">{n}</span>
      <span className="h-px w-12 bg-border" />
      {children}
    </div>
  );
}

/* ---------------- NAV ---------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
        { rootMargin: "-45% 0px -50% 0px" },
      );
      navLinks.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) io?.observe(el);
      });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass border-b border-border py-3" : "py-6")}>
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          TQ<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn("relative px-4 py-2 text-sm transition-colors", active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                {active === l.id && <motion.span layoutId="nav-dot" className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex">
          <Download className="h-3.5 w-3.5" /> Resume
        </a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="glass overflow-hidden border-b border-border md:hidden">
            <ul className="flex flex-col px-6 py-6">
              {[...navLinks].map((l, i) => (
                <motion.li key={l.id} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-3 font-display text-3xl font-semibold">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative flex min-h-svh items-center overflow-hidden pt-28">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div aria-hidden className="absolute -right-40 top-1/4 h-[40rem] w-[40rem] rounded-full bg-primary-glow/20 blur-[140px]" />
      <motion.div style={{ y }} className="absolute inset-y-0 right-0 w-full opacity-60 md:w-[60%] md:opacity-100">
        <HeroOrb />
      </motion.div>
      <motion.div style={{ opacity: op }} className="relative mx-auto w-full max-w-7xl px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Independent developer <span className="text-primary">•</span> Building digital experiences
        </motion.p>
        <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
          {["Turning", "ideas", "into"].map((w, i) => (
            <span key={w} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span className="inline-block pr-[0.25em]" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                {w === "ideas" ? <span className="text-gradient">{w}</span> : w}
              </motion.span>
            </span>
          ))}
          <br />
          {["digital", "reality."].map((w, i) => (
            <span key={w} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span className="inline-block pr-[0.25em]" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.55 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                {w === "reality." ? <span className="italic text-gradient">{w}</span> : w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-10 max-w-xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm Tanveer, a Full-Stack Web Developer and AI Agents Developer. I build scalable web applications and intelligent systems that solve real problems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#work" className={btn.primary}>
                Explore My Work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className={btn.ghost}>Let's Talk</a>
            </Magnetic>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to opportunities · {profile.location}
          </div>
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex">
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-2">
          <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-primary" />
        </span>
        Scroll
      </a>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
      <Eyebrow n="01">About</Eyebrow>
      <div className="grid gap-16 md:grid-cols-12">
        <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:col-span-6 md:text-7xl">
          <SplitWords text="More than just" />
          <br />
          <SplitWords text="writing code." className="text-gradient" delay={0.2} />
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="text-foreground">
              I'm a self-driven developer with three years of hands-on experience exploring software development, building applications, and learning how technology works under the hood.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>My interests span full-stack development and AI engineering. I enjoy understanding complex technical concepts, experimenting with new technologies, and turning ideas into working products.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>I believe great software isn't just about writing code. It's about understanding problems, engineering thoughtful solutions, and continuously improving.</p>
          </Reveal>
        </div>
      </div>
      <div className="mt-24 grid border-y border-border sm:grid-cols-3">
        {[
          { v: <Counter to={3} suffix="+" />, l: "Years of hands-on coding" },
          { v: <Counter to={certificates.length} />, l: "Verified certificates" },
          { v: <>Full&nbsp;Stack</>, l: "Development focus" },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="border-border py-10 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0">
            <div className="font-display text-6xl font-bold tracking-tight">{s.v}</div>
            <div className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {certificates.map((c) => (
          <a key={c.url} href={c.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 border border-border p-5 transition-colors hover:border-primary">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{c.issuer} · Certificate</div>
              <div className="mt-2 text-sm font-medium leading-snug">{c.title}</div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
const cats: ("All" | SkillCategory)[] = ["All", "Frontend", "Backend", "AI Engineering", "Data & Tools"];
export function Skills() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = skills.filter((s) => cat === "All" || s.category === cat);
  return (
    <section id="skills" className="border-t border-border bg-card/40 py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow n="02">Toolkit</Eyebrow>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            <SplitWords text="The stack I" /> <br />
            <SplitWords text="build with." className="text-gradient" delay={0.15} />
          </h2>
          <div role="tablist" aria-label="Filter skills" className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={cn("relative rounded-full border px-4 py-2 text-xs font-medium transition-colors", cat === c ? "border-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")}
              >
                {cat === c && <motion.span layoutId="skill-pill" className="absolute inset-0 -z-10 rounded-full bg-primary" />}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>
        <motion.ul layout className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {list.map((s) => (
              <motion.li
                layout
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-background p-5"
              >
                <span aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-glow/0 transition-all duration-500 group-hover:from-primary/10 group-hover:to-primary-glow/5" />
                <span className="relative flex h-10 w-10 items-center justify-center border border-border font-mono text-sm text-primary transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-primary group-hover:glow">
                  {s.glyph}
                </span>
                <div className="relative">
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.category}</div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
const statusIcon = { Private: Lock, Experimental: FlaskConical, "In development": Hammer, Completed: Check };

function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const Icon = statusIcon[p.status];
  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
      <Reveal className={cn("md:col-span-7", flip && "md:order-2")}>
        <motion.div
          data-cursor
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
            rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
          }}
          onMouseLeave={() => {
            rx.set(0);
            ry.set(0);
          }}
          className="group relative overflow-hidden border border-border bg-card"
        >
          <img src={p.image} alt={`${p.name} preview`} loading="lazy" width={1600} height={1008} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
            <Icon className="h-3 w-3 text-primary" /> {p.status}
          </div>
        </motion.div>
      </Reveal>
      <div className={cn("md:col-span-5", flip && "md:order-1")}>
        <Reveal>
          <div className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">{p.index}</span> {p.category}
          </div>
          <h3 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{p.name}</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
          <ul className="mt-6 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm">
                <span className="mt-2 h-px w-4 shrink-0 bg-primary" /> {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-primary">
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-primary">
                Live demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {p.note && <span className="font-mono text-xs text-muted-foreground">{p.note}</span>}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-32 md:py-48">
      <Eyebrow n="03">Selected work</Eyebrow>
      <h2 className="mb-24 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
        <SplitWords text="Things I've" /> <br />
        <SplitWords text="been building." className="text-gradient" delay={0.15} />
      </h2>
      <div className="space-y-32 md:space-y-48">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  return (
    <section id="services" className="border-t border-border py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow n="04">What I do</Eyebrow>
        <div className="border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="group relative grid gap-6 overflow-hidden border-b border-border py-12 md:grid-cols-12 md:items-center">
                <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-primary/5 transition-transform duration-700 ease-out group-hover:scale-y-100" />
                <span className="relative font-mono text-sm text-primary md:col-span-1">{s.n}</span>
                <h3 className="relative font-display text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-5xl">{s.title}</h3>
                <p className="relative text-muted-foreground md:col-span-4">{s.text}</p>
                <div className="relative flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 50%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="journey" className="border-t border-border bg-card/40 py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6">
        <Eyebrow n="05">My journey</Eyebrow>
        <h2 className="mb-20 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          <SplitWords text="Still" /> <SplitWords text="learning." className="text-gradient" delay={0.1} />
        </h2>
        <div ref={ref} className="relative pl-10 md:pl-0">
          <div className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2" />
          <motion.div style={{ height: h }} className="absolute left-3 top-0 w-px bg-primary md:left-1/2" />
          <ol className="space-y-20">
            {journey.map((j, i) => (
              <li key={j.title} className={cn("relative md:grid md:grid-cols-2 md:gap-16", i % 2 && "md:[&>div]:col-start-2")}>
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
                <Reveal className={cn(i % 2 ? "" : "md:text-right")}>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">{j.phase}</div>
                  <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{j.title}</h3>
                  <p className="mt-3 text-muted-foreground">{j.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
type Errors = Partial<Record<"name" | "email" | "message", string>>;
export function validateContact(v: { name: string; email: string; message: string }): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (v.message.trim().length < 10) e.message = "Tell me a little more (10+ characters).";
  return e;
}

export function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validateContact(v);
    setErrors(e);
    if (Object.keys(e).length) return;
    const subject = encodeURIComponent(`Project inquiry from ${v.name}`);
    const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const field = "w-full border-0 border-b border-border bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";
  const socials = [
    { label: "GitHub", href: profile.github, Icon: Github },
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  ];
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-32 md:py-48">
      <div aria-hidden className="absolute -left-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-primary-glow/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <Eyebrow n="06">Contact</Eyebrow>
          <h2 className="font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl">
            <SplitWords text="Have an idea?" />
            <br />
            <SplitWords text="Let's build it." className="text-gradient" delay={0.2} />
          </h2>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Whether you need a website, an AI-powered solution, or want to discuss an interesting project, I'd love to hear about it.
          </p>
          <div className="mt-10">
            <Magnetic>
              <a href={`mailto:${profile.email}`} className={btn.primary}>
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </Magnetic>
          </div>
          <ul className="mt-10 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                {(

                  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="space-y-8 md:col-span-5 md:col-start-8 md:pt-24">
          {(["name", "email", "message"] as const).map((k) => (
            <div key={k}>
              <label htmlFor={k} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {k === "name" ? "Your name" : k === "email" ? "Your email" : "Your project"}
              </label>
              {k === "message" ? (
                <textarea id={k} rows={4} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} placeholder="Tell me about it…" className={cn(field, "resize-none")} aria-invalid={!!errors[k]} />
              ) : (
                <input id={k} type={k === "email" ? "email" : "text"} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} placeholder={k === "name" ? "Jane Doe" : "jane@company.com"} className={field} aria-invalid={!!errors[k]} />
              )}
              {errors[k] && <p role="alert" className="mt-2 text-sm text-destructive">{errors[k]}</p>}
            </div>
          ))}
          <button type="submit" className={btn.primary}>
            Send message <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </button>
          {sent && <p className="text-sm text-muted-foreground">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="font-display text-[clamp(4rem,14vw,11rem)] font-bold leading-none tracking-tighter">
              TQ<span className="text-primary">.</span>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">Designed with curiosity. Built with code.</p>
          </div>
          <div className="flex gap-16 text-sm">
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}><a href={`#${l.id}`} className="text-muted-foreground hover:text-foreground">{l.label}</a></li>
              ))}
            </ul>
            <ul className="space-y-2">
              <li><a href={profile.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
              <li><a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground">Email</a></li>
              <li><a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex justify-between border-t border-border pt-6 font-mono text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} Tanveer Qasim</span>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-foreground">Back to top <ArrowDown className="h-3 w-3 rotate-180" /></a>
        </div>
      </div>
    </footer>
  );
}
