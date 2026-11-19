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
  role: string;
  details: string[];
  visual: Visual;
  dark?: boolean;
}[] = [
  {
    title: "Esmart Predictive Test",
    summary:
      "An English predictive test module on a TypeScript full-stack: Express 5 + TypeORM + PostgreSQL API, React 18 + Zustand frontend, React Hook Form + Zod validation and JWT auth.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeORM"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "Backend on Node.js with Express 5, TypeORM and PostgreSQL.",
      "Frontend built with React 18, Vite, Tailwind CSS v4 and Zustand for state.",
      "Form handling and validation with React Hook Form + Zod.",
      "JWT-based authentication across the TypeScript stack.",
    ],
    visual: "test",
  },
  {
    title: "SDG News Classifier",
    summary:
      "NLP pipeline classifying Indonesian news into UN SDG categories for Universitas Sriwijaya's WCU dashboard — evolved from zero-shot XLM-RoBERTa to a multi-label LLM architecture.",
    tags: ["Python", "Groq", "Ollama", "MySQL"],
    context: "Universitas Sriwijaya",
    role: "AI/NLP Engineer",
    details: [
      "Started with a zero-shot XLM-RoBERTa classifier for Indonesian news articles.",
      "Redesigned the system into a multi-label LLM architecture (v2.0) using the Groq API and locally hosted Ollama (qwen2.5:7b).",
      "Balanced cost, latency and classification accuracy between cloud and local models.",
      "Designed the MySQL schema tracking evidence, classification logs and evaluation results for the World Class University dashboard.",
    ],
    visual: "network",
    dark: true,
  },
  {
    title: "Face-ID Attendance",
    summary:
      "Mobile attendance system with face-recognition check-in, packaged as an Android APK with CapacitorJS.",
    tags: ["SolidJS", "Express", "FastAPI"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "Employees check in from their mobile devices.",
      "SolidJS + Vite frontend with an Express.js + TypeORM backend.",
      "Integrated a Python FastAPI face-recognition service for identity verification.",
      "Packaged the web app as an Android APK with CapacitorJS.",
    ],
    visual: "mobile",
  },
  {
    title: "Motorcycle Storefront",
    summary:
      "Shopify storefront for a motorcycle retailer — custom catalogue, search, filtering and responsive layouts.",
    tags: ["Shopify", "Liquid", "SCSS"],
    context: "Vital Signals Studio",
    role: "Full-Stack AI Engineer",
    details: [
      "Customised product catalogues, search, filtering and responsive layouts for apparel, helmets and accessories.",
      "Built with Shopify Liquid, JavaScript and SCSS.",
      "Integrated REST APIs and webhooks for product, order and inventory synchronisation.",
      "Managed retail and wholesale product imports — pricing, categorisation and inventory updates.",
    ],
    visual: "store",
  },
  {
    title: "Housing Sales Platform",
    summary:
      "Property sales platform with a React + SASS frontend and an Express.js REST API backend.",
    tags: ["React", "Express", "SASS"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "React + SASS frontend for browsing and promoting housing listings.",
      "Express.js REST API backend.",
      "Coordinated development tasks with the team on GitHub to manage features and maintain code quality.",
    ],
    visual: "landing",
  },
  {
    title: "Investor Match",
    summary:
      "Dynamic platform connecting entrepreneurs with investors, with asynchronous features for a smoother UX.",
    tags: ["Laravel 10", "Blade", "SASS"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "Platform connecting entrepreneurs with investors.",
      "Built with PHP, Laravel 10, Blade and SASS.",
      "Implemented asynchronous features to improve the user experience.",
      "Collaborated with the team through a shared company GitHub repository.",
    ],
    visual: "dashboard",
    dark: true,
  },
  {
    title: "Construction Monitoring System",
    summary:
      "Internal office web system for monitoring, reporting and managing construction projects within the Construction Division.",
    tags: ["Laravel", "Inertia.js", "Vue.js"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "Internal system used by the Construction Division to monitor, report on and manage construction projects.",
      "Built with Laravel, Inertia.js and Vue.js.",
      "Fixed bugs and resolved technical issues, working in a team-based GitHub repository.",
    ],
    visual: "dashboard",
  },
  {
    title: "Architect Division Website",
    summary:
      "Landing page for the Architect Division with Astro, backed by Filament (PHP) as the admin system for dynamic content.",
    tags: ["Astro", "Filament", "PHP"],
    context: "PT Trisan Esa Cipta",
    role: "Fullstack Developer",
    details: [
      "Static-first landing page built with Astro for performance.",
      "Integrated Filament (PHP) as the admin/backend so content can be managed dynamically.",
      "Sister site to the Esmart marketing site, also built with Astro.",
    ],
    visual: "landing",
    dark: true,
  },
  {
    title: "Hardware Diagnosis App",
    summary:
      "Android expert system that diagnoses computer hardware failures, backed by a CodeIgniter 3 REST API.",
    tags: ["Kotlin", "CodeIgniter", "MySQL"],
    context: "Marco IT Solution · Thesis",
    role: "Android Developer",
    details: [
      "Kotlin Android app that diagnoses computer and laptop hardware failures with an expert system.",
      "CodeIgniter 3 REST API connects the app to the server database, keeping the app size small.",
      "Undergraduate thesis compared Bayes' theorem and Dempster-Shafer methods for the diagnosis.",
    ],
    visual: "mobile",
  },
];

export type Role = {
  role: string;
  company: string;
  place?: string;
  period: string;
  points: string[];
  more?: string[]; // revealed by "Show more"
  tags: string[];
  projects?: string[]; // project titles that open their modal
};

export const experience: Role[] = [
  {
    role: "Fullstack Developer",
    company: "PT Trisan Esa Cipta",
    place: "Palembang · On-site",
    period: "Sep 2023 — Present",
    points: [
      "Built a platform connecting entrepreneurs with investors using Laravel 10, Blade and SASS, adding asynchronous features to make the experience smoother.",
      "Built a housing sales platform with a React + SASS frontend and an Express.js REST API backend.",
    ],
    more: [
      "Built an attendance system employees use from their phones, with a Python FastAPI face-recognition service for identity checks, packaged as an Android APK with CapacitorJS.",
      "Delivered Esmart features end to end: an English predictive test module (Express 5, TypeORM, PostgreSQL, React 18, Tailwind v4, JWT) plus parent report and financial systems.",
      "Created static-first landing pages with Astro — for the Architect Division (with Filament as the CMS) and for Esmart.",
      "Fixed bugs and resolved technical issues in the internal construction-project monitoring system (Laravel, Inertia.js, Vue.js).",
      "Contributed to a semi single-page landing page with React, SASS and Laravel (Inertia.js), improving responsiveness and transitions.",
      "Worked in shared GitHub repositories throughout, using version control and code reviews.",
    ],
    tags: ["Laravel", "Inertia.js", "Vue", "React", "Astro", "Filament", "Express", "TypeORM", "PostgreSQL", "SolidJS", "FastAPI", "CapacitorJS"],
    projects: [
      "Investor Match",
      "Housing Sales Platform",
      "Face-ID Attendance",
      "Esmart Predictive Test",
      "Architect Division Website",
      "Construction Monitoring System",
    ],
  },
  {
    role: "Full-Stack AI Engineer",
    company: "Vital Signals Studio",
    period: "Feb 2026 — Present",
    points: [
      "Developed responsive Shopify storefronts with Liquid, JavaScript and SCSS, integrating REST APIs and webhooks to sync products, orders and inventory.",
      "Building a storefront for a motorcycle retailer with custom catalogues, search, filtering and responsive layouts for apparel, helmets and accessories.",
    ],
    more: [
      "Supported data migration, SEO and testing.",
      "Managed retail and wholesale product imports and catalogue management — product data, pricing, categorisation and inventory updates.",
    ],
    tags: ["Shopify", "Liquid", "JavaScript", "SCSS", "REST APIs", "Webhooks"],
    projects: ["Motorcycle Storefront"],
  },
  {
    role: "AI/NLP Engineer",
    company: "Universitas Sriwijaya",
    place: "Remote · Contract",
    period: "Jan 2026 — Jul 2026",
    points: [
      "Built an NLP pipeline that automatically classifies Indonesian news articles into UN SDG categories for the university's World Class University dashboard.",
      "Started with a zero-shot XLM-RoBERTa classifier, then redesigned it into a multi-label LLM architecture (v2.0) using the Groq API and locally hosted Ollama (qwen2.5:7b), balancing cost, latency and accuracy.",
    ],
    more: [
      "Designed the MySQL schema that tracks evidence, classification logs and evaluation results.",
    ],
    tags: ["Python", "XLM-RoBERTa", "Groq", "Ollama", "MySQL"],
    projects: ["SDG News Classifier"],
  },
  {
    role: "Linux System Administrator",
    company: "Marco Digital Partner",
    place: "Palembang",
    period: "Jul 2022 — Nov 2023",
    points: [
      "Rebuilt, maintained and backed up the company server's web files every day.",
      "Maintained the company database and fixed bugs on WordPress and PHP-based websites.",
    ],
    tags: ["Linux", "MySQL", "PHP", "WordPress"],
  },
  {
    role: "CMS Developer",
    company: "Marco Digital Partner",
    place: "Palembang",
    period: "Apr 2022 — Nov 2023",
    points: ["Developed custom WordPress templates matched to each client's site design and branding."],
    tags: ["WordPress", "PHP", "MySQL"],
  },
  {
    role: "Android Developer",
    company: "Marco IT Solution",
    place: "Palembang · Contract",
    period: "Sep 2021 — Aug 2022",
    points: [
      "Developed a Kotlin app that diagnoses computer and laptop hardware failures using an expert-system technique.",
      "Built the CodeIgniter 3 REST API that connects the app to the server database, keeping the app small.",
    ],
    tags: ["Kotlin", "Android", "CodeIgniter 3", "MySQL"],
    projects: ["Hardware Diagnosis App"],
  },
  {
    role: "Multimedia Intern",
    company: "Universitas Sriwijaya",
    place: "Indralaya · Internship",
    period: "Feb 2022 — Jul 2022",
    points: ["Six months at the Office of Cooperation and International Services, editing and designing posters in Photoshop."],
    tags: ["Photoshop"],
  },
  {
    role: "Web Developer",
    company: "Dezainla",
    place: "Palembang · Contract",
    period: "Dec 2020 — Jun 2021",
    points: ["Designed and built an employee and payroll information system with CodeIgniter 3 and deployed it on a VPS (OpenVZ)."],
    tags: ["CodeIgniter 3", "MySQL", "CSS", "VPS"],
  },
  {
    role: "UI Designer",
    company: "Marco Digital Partner",
    place: "Palembang · Internship",
    period: "Dec 2020 — Jan 2021",
    points: ["Learned to design and develop websites with WordPress."],
    tags: ["WordPress", "UI Design"],
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
