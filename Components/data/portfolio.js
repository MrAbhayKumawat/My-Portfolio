// All portfolio content lives here. Edit this file to update the site —
// the components only handle layout.

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";
const icon = (path) => `${DEVICON}/${path}.svg`;

export const profile = {
  name: "Abhay Kumawat",
  firstName: "Abhay",
  title: "Full Stack Developer",
  tagline: "MERN Stack • Next.js • TypeScript • AI-Powered Apps",
  // Rotates under the name in the hero
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Generative AI Developer",
    "AI-Integrated Developer",
  ],
  intro:
    "I build real-time, data-intensive web applications with React.js, Next.js, TypeScript, Node.js and MongoDB — and bring generative and agentic AI into them, from LLM-powered features to AI-assisted delivery.",
  summary: [
    "Full Stack Developer with 3 years of experience building scalable, production-grade web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    "I architect real-time, data-intensive interfaces with WebSocket-driven data streams, centralized state management with Redux Toolkit, and reusable component systems using Tailwind CSS, Material UI, and Shadcn UI.",
    "I work hands-on with generative and agentic AI — integrating LLMs and AI APIs into products, building AI-assisted workflows, and keeping pace with a fast-moving AI market.",
    "On the delivery side I ship with Docker, CI/CD pipelines, and cloud platforms including AWS and Vercel, collaborating in cross-functional teams.",
  ],
  status: "Currently @ Eyukti Solutions",
  currentRole: "Full Stack Developer at Eyukti Solutions",
  email: "mrabhaykumawat9@gmail.com",
  phone: "+91-7489433640",
  location: "Ujjain, Madhya Pradesh, India",
  resumeFile: "Abhay_Kumawat_Resume.pdf",
};

export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/MrAbhayKumawat" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mrabhaykumawat" },
  { name: "WhatsApp", icon: "chat", url: "https://api.whatsapp.com/send?phone=917489433640" },
  { name: "X (Twitter)", icon: "twitter", url: "https://twitter.com/MrAbhayKumawat" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/mr.abhaykumawat/" },
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/people/Abhay-Kumawat/pfbid02djvyjvBW9ED5p8JRpFhw85SngQE2zBZQoBQf2GRPGXuT7cdDxM91gGPAbm47cwwel/",
  },
];

export const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "education", label: "Education", icon: "cap" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const stats = [
  { value: "3", label: "Years of experience", icon: "briefcase" },
  { value: "~40%", label: "Faster UI delivery", icon: "zap" },
  { value: "AI", label: "Generative & agentic", icon: "sparkles" },
  { value: "MERN", label: "End-to-end stack", icon: "layers" },
];

export const highlights = [
  {
    icon: "layers",
    title: "Production-grade MERN",
    text: "3 years of delivering production-grade MERN stack web applications.",
  },
  {
    icon: "activity",
    title: "Real-time systems",
    text: "Specialized in real-time, data-intensive applications with WebSocket-driven live updates.",
  },
  {
    icon: "zap",
    title: "~40% faster UI delivery",
    text: "Achieved through a reusable component architecture.",
  },
  {
    icon: "sparkles",
    title: "Generative & agentic AI",
    text: "Integrating LLMs and AI APIs into products, with AI-assisted delivery workflows.",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Eyukti Solutions",
    location: "Remote — Jaipur, Rajasthan",
    period: "Jan 2026 – Present",
    current: true,
    points: [
      {
        label: "Real-time delivery",
        text: "Delivered full-stack, real-time web applications with sub-second live-data updates across high-traffic features, using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB/Mongoose services secured with JWT authentication.",
      },
      {
        label: "Lower latency",
        text: "Reduced refresh latency on data-intensive features by building UI modules driven by Socket.IO/WebSocket data streams and dynamic rendering.",
      },
      {
        label: "Reusable UI",
        text: "Cut new-feature UI development time by ~40% by architecting component libraries with Tailwind CSS, Material UI, and Shadcn UI.",
      },
      {
        label: "Security",
        text: "Secured multi-step workflows and user sessions with Redux Toolkit state management, JWT-based session handling, and RBAC-driven permission logic.",
      },
      {
        label: "API reliability",
        text: "Improved performance and reliability of transaction, wallet, and user-management APIs with input validation and centralized error handling, shipped through CI/CD pipelines.",
      },
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "Socket.IO", "JWT", "Tailwind CSS", "Material UI", "Shadcn UI"],
  },
  {
    role: "Full Stack Developer",
    company: "The Lite Speed Private Limited",
    url: "https://thelitespeed.com/",
    location: "Remote — Ranchi, Jharkhand",
    period: "Sep 2024 – Dec 2025",
    points: [
      {
        label: "Mobile-first apps",
        text: "Delivered production-grade, mobile-first web applications with consistent cross-device responsiveness using React.js, JavaScript (ES6+), Tailwind CSS, and Material UI.",
      },
      {
        label: "Faster delivery",
        text: "Accelerated feature delivery across multiple client projects by designing reusable component systems and a shared design-pattern library.",
      },
      {
        label: "Role-based access",
        text: "Integrated REST APIs with RBAC-driven authorization and JWT-verified sessions for dashboards and customer-facing workflows, alongside backend and design teams.",
      },
      {
        label: "Release quality",
        text: "Shipped releases faster with fewer regressions through asset optimization, lazy loading, efficient state handling, and CI/CD-validated deployments.",
      },
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "REST APIs", "JWT", "RBAC", "CI/CD"],
  },
];

export const featuredProjects = [
  {
    title: "Real-Time Data Platform",
    role: "Full Stack Developer",
    period: "Sep 2024 – Present",
    cover: "realtime",
    points: [
      "Designed and developed a real-time, high-traffic web platform with multi-module Redux Toolkit state management, keeping live data, user sessions, and account balances in sync.",
      "Integrated real-time data APIs and built admin tools for managing platform data, users, and operational workflows.",
    ],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Node.js", "Tailwind CSS", "WebSocket"],
  },
  {
    title: "Shree Amritashya — E-Commerce",
    role: "Independent project",
    cover: "commerce",
    points: [
      "Architected and deployed a production-grade monorepo e-commerce platform with dedicated Web and Admin applications.",
      "Implemented product catalog, cart, checkout, and booking workflows, with automated CI/CD on GitHub Actions and deployment on Vercel.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "TypeScript", "TurboRepo", "MongoDB", "GitHub Actions", "Vercel"],
  },
  {
    title: "Debt Free — FinTech Platform",
    role: "Frontend Developer",
    period: "Sep 2024 – Nov 2024",
    cover: "fintech",
    link: "https://godebtfree.in/",
    points: [
      "Built the complete frontend of a debt-settlement platform and integrated APIs for customer onboarding and loan settlement workflows.",
      "Delivered fully responsive, cross-device interfaces with performance-optimized, intuitive design.",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Medius Finance System",
    role: "Frontend Developer",
    period: "Aug 2023 – Sep 2023",
    cover: "portals",
    points: [
      "Contributed to a multi-portal finance system (Admin, Panel, and Agent portals) with role-based access control and permission-driven navigation.",
      "Integrated multiple REST APIs for data management, transaction tracking, and reporting dashboards.",
    ],
    tech: ["React.js", "JavaScript", "Material UI", "REST APIs"],
  },
];

export const sideProjects = [
  {
    title: "Todo App",
    icon: "check",
    link: "https://todoappbyabhay.netlify.app/login",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Blogging Website",
    icon: "pen",
    link: "https://akbloggingandreamoore.netlify.app/",
    tech: ["React.js", "React Hook Form", "Firebase", "Material UI"],
  },
  {
    title: "Music Website",
    icon: "music",
    link: "https://musifyrington.netlify.app/",
    tech: ["React.js", "React Hooks", "Material UI", "Spotify API"],
  },
];

// `invert` keeps dark logos visible on the dark background
export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    wide: true,
    skills: [
      { name: "React.js", icon: icon("react/react-original") },
      { name: "Next.js", icon: icon("nextjs/nextjs-original"), invert: true },
      { name: "TypeScript", icon: icon("typescript/typescript-original") },
      { name: "JavaScript (ES6+)", icon: icon("javascript/javascript-original") },
      { name: "Redux Toolkit", icon: icon("redux/redux-original") },
      { name: "Context API" },
      { name: "HTML5", icon: icon("html5/html5-original") },
      { name: "CSS3", icon: icon("css3/css3-original") },
      { name: "Tailwind CSS", icon: icon("tailwindcss/tailwindcss-original") },
      { name: "SASS", icon: icon("sass/sass-original") },
      { name: "Material UI", icon: icon("materialui/materialui-original") },
      { name: "Bootstrap", icon: icon("bootstrap/bootstrap-original") },
      { name: "Shadcn UI" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: icon("nodejs/nodejs-original") },
      { name: "Express.js", icon: icon("express/express-original"), invert: true },
      { name: "Fastify", icon: icon("fastify/fastify-original"), invert: true },
      { name: "REST APIs" },
      { name: "WebSocket" },
      { name: "Socket.IO", icon: icon("socketio/socketio-original"), invert: true },
      { name: "JWT Authentication" },
      { name: "RBAC" },
      { name: "API Security" },
      { name: "Error Handling" },
      { name: "Input Validation" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: icon("mongodb/mongodb-original") },
      { name: "Mongoose", icon: icon("mongoose/mongoose-original") },
      { name: "Redis", icon: icon("redis/redis-original") },
      { name: "Schema Design" },
      { name: "Query & Index Optimization" },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: "cloud",
    skills: [
      { name: "Docker", icon: icon("docker/docker-original") },
      { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark"), invert: true },
      { name: "Nginx", icon: icon("nginx/nginx-original") },
      { name: "Linux", icon: icon("linux/linux-original") },
      { name: "CI/CD" },
      { name: "GitHub Actions", icon: icon("githubactions/githubactions-original") },
      { name: "Vercel", icon: icon("vercel/vercel-original"), invert: true },
      { name: "Netlify", icon: icon("netlify/netlify-original") },
      { name: "Git", icon: icon("git/git-original") },
      { name: "GitHub", icon: icon("github/github-original"), invert: true },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: [
      { name: "Postman", icon: icon("postman/postman-original") },
      { name: "Firebase", icon: icon("firebase/firebase-original") },
      { name: "Vite", icon: icon("vitejs/vitejs-original") },
      { name: "npm", icon: icon("npm/npm-original-wordmark") },
      { name: "VS Code", icon: icon("vscode/vscode-original") },
      { name: "Webhooks" },
      { name: "Agile/Scrum" },
    ],
  },
  {
    title: "AI & Generative Tech",
    icon: "sparkles",
    wide: true,
    skills: [
      { name: "Generative AI" },
      { name: "Agentic AI" },
      { name: "AI Agents" },
      { name: "LLM Integration" },
      { name: "RAG" },
      { name: "AI API Integration" },
      { name: "Claude API" },
      { name: "OpenAI API" },
      { name: "Gemini API" },
      { name: "Prompt Engineering" },
      { name: "AI-Assisted Development" },
      { name: "Claude Code" },
      { name: "Cursor" },
      { name: "Antigravity" },
      { name: "MCP" },
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    location: "Bhopal, Madhya Pradesh",
    period: "Jun 2021 – Jul 2025",
    link: "https://www.rgpv.ac.in/",
    linkLabel: "University website",
  },
  {
    degree: "Frontend Web Development Program",
    school: "Devsnest",
    location: "Online",
    period: "Aug 2019 – Jul 2020",
    link: "https://devsnest.in/certificate/y6nbIVQ9fHk",
    linkLabel: "View certificate",
  },
];
