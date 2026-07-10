export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-solid fa-display",
    items: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "REST APIs"],
  },
  {
    title: "Tools & Deployment",
    icon: "fa-solid fa-toolbox",
    items: ["Git & GitHub", "Vercel", "Render", "MongoDB Atlas", "Thunder Client", "Vite"],
  },
];

export const projects = [
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
    title: "Frontend Developer (React)",
    subtitle: "HackerRank Certification",
    file: "public/assets/HackerRank_React_Certificate.png",
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
