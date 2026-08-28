export const site = {
  name: "Arvin Ayson",
  firstName: "Arvin",
  lastName: "Ayson",
  role: "Software Engineer",
  email: "arvinayson.dev@gmail.com",
  phone: "+63 961-263-5002",
  linkedin: "https://linkedin.com/in/arvin-ayson-888139236",
  github: "titoarvs",
  location: "Philippines",
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const

export const hero = {
  badge: "Available for work",
  firstName: site.firstName,
  lastName: site.lastName,
  role: site.role,
  headline: {
    lead: "I build secure products.",
    accent: "You focus on growth.",
  },
  support:
    "Software engineer shipping clean React and TypeScript interfaces, solid backends, and systems that stay maintainable as they scale.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "About me", href: "#about" },
  panels: [
    {
      id: "react" as const,
      label: "React interfaces",
      tone: "a" as const,
    },
    {
      id: "nestjs" as const,
      label: "NestJS APIs",
      tone: "b" as const,
    },
    {
      id: "postgresql" as const,
      label: "PostgreSQL data",
      tone: "c" as const,
    },
  ],
  trusted: [
    { id: "react" as const, label: "React" },
    { id: "typescript" as const, label: "TypeScript" },
    { id: "nextjs" as const, label: "Next.js" },
    { id: "nodejs" as const, label: "Node.js" },
    { id: "supabase" as const, label: "Supabase" },
    { id: "postgresql" as const, label: "PostgreSQL" },
    { id: "laravel" as const, label: "Laravel" },
  ],
  projects: [
    {
      id: "tito-hris",
      title: "TitoHRIS",
      url: "https://tito-hris-workspace.vercel.app/",
      stack: "React · HR workspace",
      image: "/previews/tito-hris.jpg",
    },
    {
      id: "travox",
      title: "Travox",
      url: "https://travox-app.vercel.app/",
      stack: "React · Travel",
      image: "/previews/travox.jpg",
    },
    {
      id: "idea-board",
      title: "Collaborative Idea Board",
      url: "https://collaborative-idea-board-web.vercel.app",
      stack: "React · TypeScript",
      image: "/previews/idea-board.jpg",
    },
    {
      id: "chat",
      title: "Chat Web",
      url: "https://chat-web-chi-one.vercel.app",
      stack: "React · Realtime",
      image: "/previews/chat.jpg",
    },
  ],
}

export const about = {
  label: "About",
  title: {
    lead: "Engineer by craft,",
    accent: "collaborator by habit.",
  },
  body: `I design and ship web applications that feel intentional — secure, scalable, and maintainable. My work spans React and TypeScript on the frontend through Node, Laravel, and Postgres on the backend, with a steady focus on testing, code review, and reducing friction for the people who use what I build.`,
}

export const skillGroups = {
  label: "Skills",
  title: {
    lead: "What I",
    accent: "build with.",
  },
  groups: [
    {
      title: "Frontend",
      items: [
        { id: "javascript" as const, label: "JavaScript" },
        { id: "typescript" as const, label: "TypeScript" },
        { id: "react" as const, label: "React" },
        { id: "nextjs" as const, label: "Next.js" },
      ],
    },
    {
      title: "Backend",
      items: [
        { id: "nodejs" as const, label: "Node.js" },
        { id: "nestjs" as const, label: "NestJS" },
        { id: "php" as const, label: "PHP" },
        { id: "laravel" as const, label: "Laravel" },
      ],
    },
    {
      title: "Data & platforms",
      items: [
        { id: "postgresql" as const, label: "PostgreSQL" },
        { id: "mysql" as const, label: "MySQL" },
        { id: "supabase" as const, label: "Supabase" },
        { id: "firebase" as const, label: "Firebase" },
      ],
    },
    {
      title: "Tools & craft",
      items: [
        { id: "git" as const, label: "Git" },
        { id: "jira" as const, label: "Jira" },
        { id: "ai" as const, label: "AI integrations" },
        { id: "photoshop" as const, label: "Photoshop" },
        { id: "illustrator" as const, label: "Illustrator" },
      ],
    },
  ],
}

export const experience = {
  label: "Experience",
  title: {
    lead: "Roles that",
    accent: "shaped the craft.",
  },
  roles: [
    {
      title: "Software Engineer Intern",
      company: "Tito Solutions",
      period: "July 2023 — Present",
      location: "Remote",
      summary:
        "Building and refining web products across React, Supabase, and adjacent tooling — with a focus on UI quality, collaboration, and steady delivery.",
      tags: ["React", "Supabase", "TypeScript", "Git", "Jira"],
      highlights: [
        {
          label: "Product",
          text: "Integrated React, Supabase, and 5+ other technologies across web products.",
        },
        {
          label: "Impact",
          text: "Improved user ratings by 20% and cut UI/UX issues by 60% through focused interface work.",
        },
        {
          label: "Delivery",
          text: "Shipped 10+ features that strengthened functionality and engagement.",
        },
        {
          label: "Collaboration",
          text: "Opened and managed 50+ pull requests; reviewed 1000+ lines of peer code for quality and standards.",
        },
        {
          label: "Quality",
          text: "Reduced technical debt by 25% by advocating clean, organized practices.",
        },
        {
          label: "Execution",
          text: "Delivered 95% of tasks on schedule across 300+ Jira-tracked items; hit 90% of milestones on time.",
        },
      ],
    },
  ],
}

export const education = {
  label: "Education",
  title: {
    lead: "Learning that",
    accent: "built the base.",
  },
  entries: [
    {
      level: "Bachelor’s",
      degree: "Bachelor of Science in Information Technology",
      school: "Northern Luzon Adventist College",
      period: "April 2019 — May 2024",
      focus: "Software development, systems, and applied IT foundations.",
    },
    {
      level: "Senior High",
      degree: "Information and Communication Technologies (ICT)",
      school: "New Cabalan National Senior High School",
      period: "June 2017 — April 2019",
      focus: "Early technical grounding in computing and digital systems.",
    },
  ],
}

export const github = {
  label: "GitHub",
  title: {
    lead: "Commits over",
    accent: "time.",
  },
  username: site.github,
  profileUrl: `https://github.com/${site.github}`,
}

export const contact = {
  label: "Contact",
  title: {
    lead: "Ready when",
    accent: "you are.",
  },
  body: "Open to roles and collaborations where craft, clarity, and shipping matter.",
  methods: [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      hint: "Best for opportunities",
    },
    {
      label: "LinkedIn",
      value: "arvin-ayson",
      href: site.linkedin,
      hint: "Let’s connect",
      external: true,
    },
    {
      label: "GitHub",
      value: `@${site.github}`,
      href: `https://github.com/${site.github}`,
      hint: "Code & contributions",
      external: true,
    },
    {
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      hint: "Based in the Philippines",
    },
  ],
}
