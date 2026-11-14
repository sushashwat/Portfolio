export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-solid fa-display",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Zustand", "Tailwind CSS", "React Router", "JavaScript (ES6+)", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    items: ["Node.js", "Express.js", "NestJS", "MongoDB", "Mongoose", "Socket.io", "JWT Auth", "REST APIs"],
  },
  {
    title: "Tools & Deployment",
    icon: "fa-solid fa-toolbox",
    items: ["Git & GitHub", "Vercel", "Render", "MongoDB Atlas", "Thunder Client", "Vite"],
  },
];

export const projects = [
  {
    name: "Boardroom",
    description:
      "A real-time collaborative Kanban board with drag-and-drop task management, live multi-user sync, and role-based access control, using board-scoped Socket.io rooms.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    live: "https://kanban-plum-rho.vercel.app/dashboard",
    github: "https://github.com/sushashwat/Kanban",
  },
  {
    name: "Tantra – B2B Textile Marketplace",
    description:
      "A role-based B2B marketplace where multi-supplier carts auto-split at checkout using MongoDB transactions, with a database-grounded AI shopping assistant and supplier dashboards.",
    tech: ["React", "Tailwind CSS", "Zustand", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://text-tile-market-place-theta.vercel.app/",
    github: "http://github.com/sushashwat/TextTile_MarketPlace"
  },
  {
    name: "AI Coding Agent",
    description:
      "An autonomous agent that explores a repo, plans changes, edits code through LLM tool calling, and summarizes them as a Git diff. Includes sandboxed file access, a command allowlist, and rate-limit retries.",
    tech: ["Python", "Gemini API", "Tool Calling", "Git"],
    live: "https://ai-agent-nine-liard.vercel.app/",
    github: "https://github.com/sushashwat/Ai_Agent"
  },
  {
    name: "AbleSpace – Task Management App",
    description:
      "A Jira/Linear-style task manager with a drag-and-drop Kanban board, subtasks, audit-log tracking, and role-based access. Includes Guest and Google OAuth login, built from a Figma design.",
    tech: ["Next.js", "TypeScript", "NestJS", "MongoDB", "Zustand", "Tailwind CSS", "JWT"],
    live: "https://able-space-alpha.vercel.app/login",
    github: "https://github.com/sushashwat/Able_Space",
  },
  {
    name: "Wire – Realtime Chat",
    description:
      "A real-time chat app with instant Socket.io messaging, typing indicators, live online presence, and persistent chat history in MongoDB. Built with a clean routes → controllers → models backend.",
    tech: ["React", "Vite", "Node.js", "Express", "Socket.io", "MongoDB"],
    live: "https://wire-eosin.vercel.app/",
    github: "https://github.com/sushashwat/Wire",
  },
  {
    name: "Langfuse Tracing for QuickVoice",
    status: "open-source",
    description:
      "Built a LangfuseTracer handler for the LiveKit Agents pipeline of an open-source voice AI platform, giving full traces of each call in the Langfuse dashboard.",
    tech: ["Python", "LiveKit", "Langfuse", "Docker", "Go"],
    github:"https://github.com/sushashwat/QuickVoice"
  },
  {
    name: "n8n HackerNews Alerts + QA Report",
    status: "completed",
    description:
      "An n8n workflow that ranks top HackerNews stories, filters them by a points threshold, and alerts Discord via webhook. Also includes a QA report with 11 issues found on a live demo app.",
    tech: ["n8n", "REST APIs", "Webhooks", "Lighthouse", "QA"],
    github: "https://github.com/sushashwat/automation-qa-assessment",
  },
  {
    name: "YouTube Clone",
    description:
      "A full-stack video platform built as a capstone project — video feed, channels, search, auth and dark mode, backed by a REST API with a proper MVC structure.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    live: "https://youutubee.vercel.app/",
    github: "https://github.com/sushashwat/Youutubee",
  },
  {
    name: "ShoppyGlobe",
    description:
      "A full-stack e-commerce app with product browsing, cart management, and JWT-protected routes — built end to end with a seeded database and a tested REST API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    live: "https://shoppy-globe-amber.vercel.app/",
    github: "https://github.com/sushashwat/Shoppy-Globe",
  },
];

export const certifications = [
  {
    title: "N.S.D.C",
    subtitle: "Skill India Certificate",
    file: "/assets/Certificate_CAN_Course.jpg",
  },
  {
    title: "Frontend Developer (React)",
    subtitle: "HackerRank Certification",
    file: "/assets/HackerRank_React_Certificate.png",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Internshala Certificate",
    file: "/assets/Certificate_Placement_Course.jpg",
  },
];

export const contactLinks = [
  {
    href: "mailto:guptashashwat155@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "guptashashwat155@gmail.com",
  },
  {
    href: "tel:+916386996239",
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+91 63869 96239",
  },
  {
    href: "https://www.linkedin.com/in/shashwat-gupta-4288a3321/",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: "shashwat-gupta",
  },
  {
    href: "https://github.com/sushashwat",
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "sushashwat",
  },
];

export const navItems = [
  { id: "about", idx: "01", label: "about" },
  { id: "skills", idx: "02", label: "stack" },
  { id: "projects", idx: "03", label: "projects" },
  { id: "certifications", idx: "04", label: "certs" },
  { id: "contact", idx: "05", label: "contact" },
];
