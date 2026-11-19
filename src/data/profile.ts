// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Arry Erpapalemlah",
  initials: "AE",
  role: "Fullstack Developer",
  tagline:
    "Building web platforms, mobile apps and AI pipelines with clean code, solid architecture and user-centric design.",
  email: "aerpapalemlah@gmail.com",
  city: "Palembang",
  country: "Indonesia",
  availability: "Remote / Hybrid Available",
  github: "https://github.com/ArryErpapalemlah",
  // Replace with your exact profile URL, e.g. https://www.linkedin.com/in/your-handle
  linkedin: "https://www.linkedin.com/search/results/all/?keywords=Arry%20Erpapalemlah",
  resume: "Arry-Erpapalemlah-CV.pdf",
  careerStart: "2020-12-01",
  background:
    "I build scalable web architectures and intuitive interfaces across Laravel, React, Vue, SolidJS and Node.js — and lately, NLP pipelines with LLMs. With a degree in Informatics Engineering from Universitas Sriwijaya, I bridge complex backend systems and polished frontend experiences, from Android apps to Shopify storefronts.",
  languages: ["English (Native)", "Bahasa Indonesia (Native)"],
};

export const stack = [
  { name: "Laravel", icon: "siLaravel" },
  { name: "React", icon: "siReact" },
  { name: "Vue", icon: "siVuedotjs" },
  { name: "TypeScript", icon: "siTypescript" },
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "Astro", icon: "siAstro" },
  { name: "MySQL", icon: "siMysql" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "SASS", icon: "siSass" },
  { name: "Python", icon: "siPython" },
];

export const moreTools = [
  { name: "SolidJS", icon: "siSolid" },
  { name: "Kotlin", icon: "siKotlin" },
  { name: "Shopify", icon: "siShopify" },
  { name: "Tailwind CSS", icon: "siTailwindcss" },
  { name: "FastAPI", icon: "siFastapi" },
  { name: "Ollama", icon: "siOllama" },
  { name: "Linux", icon: "siLinux" },
  { name: "GitHub", icon: "siGithub" },
];

export type Visual = "dashboard" | "mobile" | "network" | "store" | "test" | "landing";

export const projects: {
  title: string;
  summary: string;
  tags: string[];
  context: string;
  visual: Visual;
  dark?: boolean;
}[] = [
  {
    title: "Esmart Predictive Test",
    summary:
      "An English predictive test module on a TypeScript full-stack: Express 5 + TypeORM + PostgreSQL API, React 18 + Zustand frontend, React Hook Form + Zod validation and JWT auth.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeORM"],
    context: "PT Trisan Esa Cipta",
    visual: "test",
  },
  {
    title: "SDG News Classifier",
    summary:
      "NLP pipeline classifying Indonesian news into UN SDG categories for Universitas Sriwijaya's WCU dashboard — evolved from zero-shot XLM-RoBERTa to a multi-label LLM architecture.",
    tags: ["Python", "Groq", "Ollama", "MySQL"],
    context: "Universitas Sriwijaya",
    visual: "network",
    dark: true,
  },
  {
    title: "Face-ID Attendance",
    summary:
      "Mobile attendance system with face-recognition check-in, packaged as an Android APK with CapacitorJS.",
    tags: ["SolidJS", "Express", "FastAPI"],
    context: "PT Trisan Esa Cipta",
    visual: "mobile",
  },
  {
    title: "Motorcycle Storefront",
    summary:
      "Shopify storefront for a motorcycle retailer — custom catalogue, search, filtering and responsive layouts.",
    tags: ["Shopify", "Liquid", "SCSS"],
    context: "Vital Signals Studio",
    visual: "store",
  },
  {
    title: "Housing Sales Platform",
    summary:
      "Property sales platform with a React + SASS frontend and an Express.js REST API backend.",
    tags: ["React", "Express", "SASS"],
    context: "PT Trisan Esa Cipta",
    visual: "landing",
  },
  {
    title: "Investor Match",
    summary:
      "Dynamic platform connecting entrepreneurs with investors, with asynchronous features for a smoother UX.",
    tags: ["Laravel 10", "Blade", "SASS"],
    context: "PT Trisan Esa Cipta",
    visual: "dashboard",
    dark: true,
  },
  {
    title: "Hardware Diagnosis App",
    summary:
      "Android expert system that diagnoses computer hardware failures, backed by a CodeIgniter 3 REST API.",
    tags: ["Kotlin", "CodeIgniter", "MySQL"],
    context: "Marco IT Solution · Thesis",
    visual: "mobile",
  },
];

export const experience = [
  {
    role: "Fullstack Developer",
    company: "PT Trisan Esa Cipta",
    place: "Palembang · On-site",
    period: "Sep 2023 — Present",
    points: [
      "Built and maintained internal and external platforms — housing sales, investor matching and Esmart products — with Laravel, React, Vue and Express.js.",
      "Built Astro landing pages with Filament (PHP) as the CMS, and an Android attendance app with SolidJS, TypeORM and FastAPI face recognition.",
    ],
  },
  {
    role: "Full-Stack AI Engineer",
    company: "Vital Signals Studio",
    place: "Remote",
    period: "Feb 2026 — Present",
    points: [
      "Developed responsive Shopify storefronts with Liquid, JavaScript and SCSS, integrating REST APIs and webhooks for product, order and inventory sync.",
    ],
  },
  {
    role: "AI/NLP Engineer",
    company: "Universitas Sriwijaya",
    place: "Remote · Contract",
    period: "Jan 2026 — Jul 2026",
    points: [
      "Built an SDG news-classification pipeline using Groq and locally hosted Ollama (qwen2.5:7b), balancing cost, latency and accuracy.",
    ],
  },
  {
    role: "Linux System Administrator",
    company: "Marco Digital Partner",
    place: "Palembang",
    period: "Jul 2022 — Nov 2023",
    points: ["Maintained company servers, databases and daily backups; fixed WordPress and PHP sites."],
  },
  {
    role: "CMS Developer",
    company: "Marco Digital Partner",
    place: "Palembang",
    period: "Apr 2022 — Nov 2023",
    points: ["Developed custom WordPress templates aligned with each client's design and branding."],
  },
  {
    role: "Android Developer",
    company: "Marco IT Solution",
    place: "Palembang · Contract",
    period: "Sep 2021 — Aug 2022",
    points: ["Built a Kotlin expert-system app for hardware diagnosis with a CodeIgniter 3 REST API."],
  },
  {
    role: "Multimedia Intern",
    company: "Universitas Sriwijaya",
    place: "Indralaya · Internship",
    period: "Feb 2022 — Jul 2022",
    points: ["Designed posters for the Office of Cooperation and International Services."],
  },
  {
    role: "Web Developer",
    company: "Dezainla",
    place: "Palembang · Contract",
    period: "Dec 2020 — Jun 2021",
    points: ["Built an employee and payroll information system with CodeIgniter 3, deployed on a VPS."],
  },
  {
    role: "UI Designer",
    company: "Marco Digital Partner",
    place: "Palembang · Internship",
    period: "Dec 2020 — Jan 2021",
    points: ["Designed and developed websites with WordPress."],
  },
];

export const education = [
  {
    title: "Bachelor of Computer Science",
    school: "Universitas Sriwijaya",
    badge: "2018 — 2022",
    dark: true,
    text: "Informatics Engineering. Thesis: an Android expert system comparing Bayes' theorem and Dempster-Shafer for diagnosing computer hardware failures.",
  },
  {
    title: "High School · NCEA Level 1–3",
    school: "Hillcrest High School, Hamilton NZ",
    badge: "2012 — 2017",
    text: "National Certificate of Educational Achievement Levels 1–3, including literacy and numeracy.",
  },
];

export const certifications = [
  "Basic Programming with Python — Dicoding",
  "Journal publication — Jurnal Obsesi, Vol 7 No 1",
  "ICONISCSE 2021 — 2nd Intl. Conference on Information System, Computer Science and Engineering",
];
