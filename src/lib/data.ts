export const personalInfo = {
  name: "Luqman Malik",
  location: "Kuala Lumpur, Malaysia",
  email: "hakim19jan@gmail.com",
  github: "https://github.com/lqmkim",
  linkedin: "https://www.linkedin.com/in/lqmkim/",
};

export const workExperience = [
  {
    company: "Forthify Technologies",
    location: "Kuala Lumpur, Malaysia",
    position: "Founder & CEO",
    period: "Nov 2021 - Present",
    achievements: [
      "Built and scaled ProReg, a SaaS platform for course planning and productivity, gaining significant traction among IIUM students.",
      "Led migration of core systems from Firestore to PostgreSQL with Node.js backend, significantly improving query performance and cost efficiency.",
      "Integrated Firebase Authentication with custom server authorization for enhanced security.",
      "Designed and implemented a roadmap for monetization via ads, in-app purchases, and future data-driven features.",
      "Drove the expansion of the platform to include productivity tools like to-do lists, group collaboration, and assignment tracking.",
    ],
  },
  {
    company: "Freelancer / Independent Developer",
    location: "Remote",
    position: "Software Developer",
    period: "2020 - Present",
    achievements: [
      "Delivered various mobile and web applications for clients, focusing on custom business logic and clean UI/UX.",
      "Worked autonomously to build tools and prototypes, often challenging conventional solutions.",
    ],
  },
];

export const education = [
  {
    institution: "International Islamic University Malaysia (IIUM)",
    location: "Kuala Lumpur, Malaysia",
    degree: "Bachelor of Computer Science (Data Science) — In Progress",
    period: "2021 - Present",
    achievements: [
      "Developed ProReg as FYP, incorporating data science and machine learning concepts.",
      "Active participant in hackathons and technical competitions.",
      "Regularly organize and contribute to student-led tech initiatives.",
    ],
  },
];

export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript", "Python", "C++"],
  frontendDevelopment: [
    "Next.js",
    "React.js",
    "React Native",
    "Shadcn UI",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Node.js", "Express.js"],
  databaseAndStorage: ["PostgreSQL", "Firebase Firestore"],
  cloudAndDevOps: ["AWS", "Vercel", "Cloudflare"],
  toolsAndServices: [
    "Sanity (CMS)",
    "Zoho Books",
    "Mixpanel",
    "Sentry",
    "Zod",
    "Trigger.dev",
  ],
};

export const projects = [
  {
    title: "ProReg — Course Viewer and Planner App",
    github: "https://github.com/lqmkim", // Update if repo is public
    description: [
      "A productivity SaaS for IIUM students to view, plan, and manage their academic schedules.",
      "Features course planner, group collaboration, to-do lists, and assignment tracking.",
      "Backend powered by Node.js and PostgreSQL, with Firebase Authentication.",
      "Designed with scalability and user-driven feedback loops in mind.",
    ],
  },
  {
    title: "Tournamyx — Event & Tournament Management System",
    github: "", // Add if you’ve published it
    description: [
      "A platform to simplify organizing tournaments and events, offering registration, bracket generation, and result tracking.",
      "Built with Next.js and Node.js, focusing on clean UI/UX and efficient backend logic.",
      "Explored ways to enhance community engagement through gamified features.",
    ],
  },
];

export const awards = [
  {
    name: "Top Coders 2024 (IIUM)",
    issuer: "Data Science Association & IIUM",
    date: "2024",
    type: "University",
    position: "2nd Place",
  },
  {
    name: "Top Coders 2024 (National)",
    issuer: "Data Science Association",
    date: "2024",
    type: "National",
    position: "5th Place",
  },
];
