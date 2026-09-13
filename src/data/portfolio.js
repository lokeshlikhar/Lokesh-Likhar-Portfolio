import {
  Code2,
  Database,
  Layers3,
  Server,
  TerminalSquare,
  UserRound,
} from "lucide-react";

export const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Services",
  "Contact",
];
export const skillGroups = [
  [
    "Frontend",
    Code2,
    [
      "JavaScript ES6+",
      "React.js",
      "Redux Toolkit",
      "Bootstrap",
      "CSS3",
      "HTML5",
    ],
  ],
  [
    "Backend",
    Server,
    [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MVC Architecture",
    ],
  ],
  ["Databases", Database, ["MongoDB", "MongoDB Atlas", "MySQL", "PostgreSQL"]],
  ["Languages", TerminalSquare, ["Java", "JavaScript", "SQL"]],
  [
    "Tools & Platforms",
    Layers3,
    [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "CI/CD",
      "Kubernetes basics",
      "Claude",
      "Cursor",
    ],
  ],
  [
    "Professional",
    UserRound,
    ["Problem Solving", "Analytical Thinking", "Communication", "Adaptability"],
  ],
];
export const projects = [
  {
    name: "HireLens AI",
    featured: true,
    description:
      "AI-powered interview preparation that turns a resume and job description into a personalized, day-wise preparation plan.",
    stack: ["React", "Node", "Express", "MongoDB", "Groq API"],
    features: [
      "Resume and job description analysis",
      "Match score and skill-gap analysis",
      "Day-wise preparation plan",
      "JWT auth and report storage",
    ],
    github: "https://github.com/lokeshlikhar/HireLens-AI",
    live: "https://hirelens-ai-1-s7v4.onrender.com/",
  },
  {
    name: "WanderLust",
    description:
      "A full-stack hotel and listing platform with secure accounts, listing management, reviews, and map discovery.",
    stack: ["Node", "Express", "MongoDB", "EJS", "Mapbox"],
    features: [
      "Secure authentication",
      "Listing CRUD and image uploads",
      "Reviews and location search",
      "MVC architecture",
    ],
    github: "https://github.com/lokeshlikhar/WanderLust",
    live: "https://wanderlust-assl.onrender.com/",
  },
  {
    name: "AI Chat Assistant",
    ai: true,
    description:
      "A generative AI chat application with persistent history and predictable client-side state management.",
    stack: ["React", "Redux", "Node", "Express", "MongoDB", "Groq API"],
    features: [
      "AI conversations",
      "Live model responses",
      "REST communication",
      "Persistent chat history",
    ],
    github: "https://github.com/lokeshlikhar/AI-Chat-Assistant",
    live: "https://ai-chat-assistant-ckt5.onrender.com/",
  },
];
