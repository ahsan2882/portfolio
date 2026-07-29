import {
  ArrowUpRight,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import GithubIcon from "../assets/github-svgrepo-com.svg";
import LinkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import PROFILE_IMAGE from "../assets/profile.jpeg";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    org: "Contour Software",
    role: "Software Developer",
    period: "Feb 2024 — Apr 2026",
    tag: "v3",
    status: "Completed",
    points: [
      "Upgraded enterprise healthcare applications from Angular 15 to Angular 18, resolving breaking changes and improving maintainability.",
      "Designed and enhanced dynamic SurveyJS-based form solutions supporting thousands of configurable forms.",
      "Redesigned user workflows, reducing navigation steps by roughly 30–40%.",
      "Leveraged AI-assisted development tools to accelerate implementation, debugging, and code review.",
    ],
  },
  {
    org: "Contour Software",
    role: "Junior Software Developer",
    period: "Feb 2022 — Feb 2024",
    tag: "v2",
    status: "Completed",
    points: [
      "Developed and maintained enterprise web applications using Angular, Next.js, and TypeScript.",
      "Implemented responsive UI components with Angular Material and Bootstrap.",
      "Integrated REST APIs and optimized frontend performance.",
    ],
  },
  {
    org: "Contour Software",
    role: "Trainee Software Developer",
    period: "Dec 2021 — Feb 2022",
    tag: "v1",
    status: "Completed",
    points: [
      "Completed structured training in Angular, React, Next.js, and JavaScript.",
      "Gained experience in Git-based version control and team workflows.",
    ],
  },
  {
    org: "House of Smart Services",
    role: "Software Developer",
    period: "Aug 2021 — Nov 2021",
    tag: "v0",
    status: "Completed",
    points: [
      "Built a drag-and-drop website builder supporting dynamic content editing and responsive layouts.",
      "Developed backend REST APIs using Express.js and reusable frontend components with Tailwind CSS.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    name: "Frontend",
    items: [
      "Angular (8–18)",
      "React",
      "Next.js",
      "RxJS",
      "NGXS",
      "Tailwind CSS",
      "Angular Material",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Skaffold",
      "Firebase",
      "MongoDB",
      "Redis",
      "Azure DevOps",
    ],
  },
  {
    name: "Architecture",
    items: [
      "Microservices",
      "Event-driven design",
      "NATS JetStream",
      "SOLID principles",
    ],
  },
];

const PROJECTS = [
  {
    name: "VenuePass",
    blurb:
      "Microservices event-ticketing platform with independent auth, orders, tickets, and payments services, built to production standards.",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "NATS JetStream",
      "Stripe",
      "Kubernetes",
    ],
    href: "https://github.com/ahsan2882/ticketing_app",
  },
  {
    name: "React Website Builder",
    blurb:
      "Drag-and-drop website builder with reusable components and dynamic page editing.",
    stack: ["React", "Express.js", "Tailwind CSS", "Node.js"],
    href: "https://github.com/ahsan2882/React-website-builder",
  },
  //   {
  //     name: "Inventory Management System",
  //     blurb:
  //       "Inventory tracking system with real-time data sync and role-based access.",
  //     stack: ["Express.js", "TypeScript", "Firebase", "Angular"],
  //     href: "https://github.com/ahsan2882",
  //   },
  {
    name: "Air Quality & Weather Monitoring",
    blurb:
      "IoT-based environmental monitoring system with a mobile interface for live sensor data.",
    stack: ["Flutter", "IoT sensors"],
    href: "https://github.com/ahsan2882/envirosense_fyp",
  },
  //   {
  //     name: "Automated Meter Reading",
  //     blurb:
  //       "System to automate meter reading collection with dashboards for usage analysis.",
  //     stack: ["Dashboards", "Data visualization"],
  //     href: "https://github.com/ahsan2882",
  //   },
  //   {
  //     name: "Automaton Converter",
  //     blurb: "Tool for converting between finite automaton representations.",
  //     stack: ["Python"],
  //     href: "https://github.com/ahsan2882/automaton-converter",
  //   },
];

function StatusDot({ tone = "teal" }) {
  const toneClass = tone === "amber" ? "bg-amber-400" : "bg-teal-400";
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${toneClass}`}
      aria-hidden="true"
    />
  );
}

function ServiceMap() {
  const nodes = [
    { id: "about", label: "About", x: 90, y: 40 },
    { id: "experience", label: "Experience", x: 250, y: 100 },
    { id: "skills", label: "Skills", x: 90, y: 160 },
    { id: "projects", label: "Projects", x: 250, y: 220 },
    { id: "contact", label: "Contact", x: 90, y: 280 },
  ];
  const hub = { x: 175, y: 160 };

  return (
    <svg
      viewBox="0 0 340 320"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="service-map-title service-map-desc"
    >
      <title id="service-map-title">
        Site map rendered as a service topology
      </title>
      <desc id="service-map-desc">
        A central node connected to About, Experience, Skills, Projects, and
        Contact, each shown as an active service.
      </desc>
      {nodes.map((n) => (
        <line
          key={n.id}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="currentColor"
          className="text-slate-700"
          strokeWidth="1"
        />
      ))}
      <circle cx={hub.x} cy={hub.y} r="6" className="fill-teal-400" />
      {nodes.map((n) => (
        <a key={n.id} href={`#${n.id}`} aria-label={`Go to ${n.label} section`}>
          <g className="group cursor-pointer outline-none">
            <circle
              cx={n.x}
              cy={n.y}
              r="10"
              className="fill-transparent stroke-transparent transition-colors duration-150 group-hover:fill-amber-400/10 group-focus-visible:fill-amber-400/10 group-focus-visible:stroke-teal-400"
              strokeWidth="1.5"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="4"
              className="fill-amber-400 transition-transform duration-150 origin-center group-hover:scale-150 group-focus-visible:scale-150 motion-reduce:group-hover:scale-100"
            />
            <text
              x={n.x + (n.x < hub.x ? -14 : 14)}
              y={n.y + 4}
              textAnchor={n.x < hub.x ? "end" : "start"}
              className="fill-slate-300 font-mono-custom transition-colors duration-150 group-hover:fill-teal-400 group-focus-visible:fill-teal-400 underline decoration-transparent group-hover:decoration-teal-400/60 group-focus-visible:decoration-teal-400/60 underline-offset-4"
              style={{ fontSize: "11px" }}
            >
              {n.label}
            </text>
          </g>
        </a>
      ))}
    </svg>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono-custom { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.001ms !important; animation-duration: 0.001ms !important; }
        }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-teal-400 focus:px-4 focus:py-2 focus:text-slate-900 font-body focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-slate-900 font-body text-slate-200">
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
          >
            <a
              href="#main-content"
              className="font-display text-lg font-bold text-slate-100"
            >
              Ahsan Shahid
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono-custom text-sm text-slate-400 transition-colors hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="hidden items-center gap-2 rounded-full border border-slate-700 px-3 py-1 font-mono-custom text-xs text-slate-300 md:flex">
              <StatusDot />
              Available for work
            </p>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="rounded p-2 text-slate-300 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-teal-400 md:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>

          {menuOpen && (
            <ul
              id="mobile-nav"
              className="flex flex-col gap-1 border-t border-slate-800 px-6 py-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 font-mono-custom text-sm text-slate-300 hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </header>

        <main id="main-content">
          <section
            aria-labelledby="hero-heading"
            className="mx-auto max-w-5xl px-6 py-16 md:py-24"
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <figure className="mb-6 inline-block rounded-md border border-slate-700 bg-slate-800/40 p-2">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Portrait of Muhammad Ahsan Shahid"
                    className="h-28 w-28 rounded-sm object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                  <figcaption className="mt-2 font-mono-custom text-[10px] text-slate-500">
                    component: profile.jpg ·{" "}
                    <span className="text-teal-400">status: ok</span>
                  </figcaption>
                </figure>
                <p className="mb-3 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                  Software engineer · full-stack
                </p>
                <h1
                  id="hero-heading"
                  className="font-display text-4xl font-bold leading-tight text-slate-50 md:text-5xl"
                >
                  Muhammad Ahsan Shahid
                </h1>
                <p className="mt-4 max-w-md text-slate-400">
                  4+ years building enterprise web applications and
                  self-directed distributed systems projects with Angular,
                  React, Next.js, and Node.js.
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono-custom text-sm text-slate-500">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Lahore, Pakistan
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded border border-teal-400 px-5 py-2.5 font-mono-custom text-sm text-teal-400 transition-colors hover:bg-teal-400 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    View projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded border border-slate-700 px-5 py-2.5 font-mono-custom text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <ServiceMap />
            </div>
          </section>

          <section
            id="about"
            aria-labelledby="about-heading"
            className="border-t border-slate-800 bg-slate-900/60"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <p className="mb-2 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                01 · Profile
              </p>
              <h2
                id="about-heading"
                className="font-display text-2xl font-bold text-slate-50"
              >
                About
              </h2>
              <p className="mt-4 max-w-2xl text-slate-400">
                I design and build enterprise web applications, currently
                working on healthcare ERP systems at Contour Software, and
                improve my backend and distributed-systems skills through
                production-quality personal projects. I'm comfortable owning a
                feature end to end, from frontend architecture down to
                event-driven backend services, and I use AI-assisted tooling
                deliberately to move faster without cutting corners on quality.
              </p>
            </div>
          </section>

          <section
            id="experience"
            aria-labelledby="experience-heading"
            className="border-t border-slate-800"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <p className="mb-2 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                02 · Deploy history
              </p>
              <h2
                id="experience-heading"
                className="font-display text-2xl font-bold text-slate-50"
              >
                Experience
              </h2>
              <ol className="mt-8 space-y-6">
                {EXPERIENCE.map((job) => (
                  <li key={job.role + job.period}>
                    <article className="rounded-lg border border-slate-800 bg-slate-800/40 p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-slate-100">
                          {job.role}{" "}
                          <span className="text-slate-500">— {job.org}</span>
                        </h3>
                        <p className="flex items-center gap-2 font-mono-custom text-xs text-slate-400">
                          <span className="rounded border border-slate-700 px-2 py-0.5">
                            {job.tag}
                          </span>
                          <StatusDot />
                          {job.status}
                        </p>
                      </div>
                      <p className="mt-1 font-mono-custom text-xs text-slate-500">
                        {job.period}
                      </p>
                      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>

              <p className="mt-8 flex items-center gap-2 font-mono-custom text-sm text-slate-500">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Bachelor of Electrical Engineering — NUST-PNEC, 2017–2021
              </p>
            </div>
          </section>

          <section
            aria-labelledby="skills-heading"
            className="border-t border-slate-800 bg-slate-900/60"
            id="skills"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <p className="mb-2 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                03 · Registered services
              </p>
              <h2
                id="skills-heading"
                className="font-display text-2xl font-bold text-slate-50"
              >
                Skills
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                  <li key={group.name}>
                    <article className="h-full rounded-lg border border-slate-800 p-5">
                      <h3 className="font-mono-custom text-sm font-medium text-teal-400">
                        {group.name}
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded border border-slate-700 px-2.5 py-1 font-mono-custom text-xs text-slate-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="border-t border-slate-800"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <p className="mb-2 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                04 · Running instances
              </p>
              <h2
                id="projects-heading"
                className="font-display text-2xl font-bold text-slate-50"
              >
                Projects
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                  <li key={project.name}>
                    <article className="flex h-full flex-col rounded-lg border border-slate-800 bg-slate-800/40 p-6">
                      <h3 className="font-display text-base font-bold text-slate-100">
                        <a
                          href={project.href}
                          className="inline-flex items-center gap-1 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                        >
                          {project.name}
                          <ArrowUpRight
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-slate-400">
                        {project.blurb}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded border border-slate-700 px-2 py-0.5 font-mono-custom text-xs text-slate-400"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            aria-labelledby="contact-heading"
            className="border-t border-slate-800 bg-slate-900/60"
            id="contact"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <p className="mb-2 font-mono-custom text-sm uppercase tracking-wide text-teal-400">
                05 · Reach the endpoint
              </p>
              <h2
                id="contact-heading"
                className="font-display text-2xl font-bold text-slate-50"
              >
                Contact
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                Open to new roles and freelance work. The fastest way to reach
                me is email.
              </p>
              <address className="mt-6 flex flex-wrap gap-4 not-italic">
                <a
                  href="mailto:ahsanshahid2882@gmail.com"
                  className="flex items-center gap-2 rounded border border-slate-700 px-4 py-2 font-mono-custom text-sm text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  ahsanshahid2882@gmail.com
                </a>
                <a
                  href="https://github.com/ahsan2882"
                  className="flex items-center gap-2 rounded border border-slate-700 px-4 py-2 font-mono-custom text-sm text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  <img
                    src={GithubIcon}
                    alt="GitHub"
                    aria-hidden="true"
                    width={20}
                  />
                  github.com/ahsan2882
                </a>
                <a
                  href="https://www.linkedin.com/in/ahsan-shahid-a7a25b161/"
                  className="flex items-center gap-2 rounded border border-slate-700 px-4 py-2 font-mono-custom text-sm text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  <img
                    src={LinkedinIcon}
                    alt="Linkedin"
                    aria-hidden="true"
                    width={20}
                  />
                  {/* <Linkedin className="h-4 w-4" aria-hidden="true" /> */}
                  LinkedIn
                </a>
              </address>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 font-mono-custom text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Muhammad Ahsan Shahid</p>
            <a
              href="#main-content"
              className="hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-teal-400"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
