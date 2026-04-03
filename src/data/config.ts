// ============================================================
// src/data/config.ts
// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update skills, projects, and experience.
// The UI automatically reflects every change — no component
// editing needed.
// ============================================================

// ─── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name:        'Kunal',
  fullName:    'Kunal Halder',
  title:       'Full-Stack Developer',
  tagline:     'I craft fast, scalable digital systems — from pixel-perfect UIs to battle-hardened infrastructure.',
  email:       'kunalhalder177@gmail.com',
  github:      'https://github.com/kunal-halder577',
  linkedin:    'https://www.linkedin.com/in/kunal-halder-338b32281/',
  resumeUrl:   '/resume.pdf',
  avatarUrl:   '/avatar.jpg', // optional
  location:    'Kolkata, India',
  availability: 'Open to full-time & freelance opportunities',
};

// ─── SKILLS ───────────────────────────────────────────────────
// Add or remove skills freely. Categories: "Frontend" | "Backend" | "DevOps" | "Language" | "Tools"
export type SkillCategory = 'Frontend' | 'Backend' | 'DevOps' | 'Language' | 'Tools';

export interface Skill {
  name:     string;
  category: SkillCategory;
  color:    string; // tailwind bg color token for the badge glow
  // SVG path data (the inner <path> d="..." of a 24x24 viewBox icon)
  icon:     string;
}

export const skills: Skill[] = [
  // ── Frontend ──
  {
    name: 'React',
    category: 'Frontend',
    color: '#61DAFB',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z',
  },
  {
    name: 'Astro',
    category: 'Frontend',
    color: '#FF5D01',
    icon: 'M12.001 2L4.5 19.5h3.5l1.5-4h5l1.5 4h3.5L12.001 2zm-1.25 10.5l1.25-3.5 1.25 3.5h-2.5z',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    icon: 'M3 3h18v18H3V3zm10.5 13.5v-1.5h-3v-1.5h3v-3h-4.5V12h4.5v1.5h-3v1.5h4.5V16.5H13.5z',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: '#38BDF8',
    icon: 'M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.73 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.73 7.2 14.27 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.73 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.73 13.2 9.27 12 7 12z',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    color: '#ffffff',
    icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.087-.694-.166-1.757.035-2.512.181-.688 1.208-4.576 1.208-4.576s-.308-.617-.308-1.53c0-1.434.832-2.508 1.866-2.508.88 0 1.306.66 1.306 1.452 0 .885-.564 2.209-.856 3.437-.243 1.027.514 1.864 1.526 1.864 1.83 0 3.239-1.929 3.239-4.716 0-2.463-1.77-4.185-4.295-4.185-2.926 0-4.642 2.194-4.642 4.461 0 .883.34 1.83.764 2.347.084.102.096.19.071.293-.078.322-.25 1.027-.285 1.171-.046.19-.153.229-.352.138-1.318-.614-2.142-2.545-2.142-4.098 0-3.334 2.422-6.397 6.987-6.397 3.669 0 6.52 2.613 6.52 6.105 0 3.641-2.296 6.571-5.483 6.571-1.071 0-2.079-.557-2.424-1.213l-.658 2.458c-.239.918-.881 2.07-1.311 2.772C10.682 21.91 11.332 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z',
  },
  // ── Backend ──
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#68A063',
    icon: 'M12 1.85L3 6.5v9.32l9 5.33 9-5.33V6.5L12 1.85zM12 4l6.5 3.5L12 11 5.5 7.5 12 4zM5 9.18L11 12.5v6.32l-6-3.5V9.18zM13 18.82V12.5l6-3.32v6.14l-6 3.5z',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    color: '#4169E1',
    icon: 'M12 2C6.48 2 2 5.58 2 10c0 2.87 1.68 5.39 4.24 6.89L6 20l3.5-2c.81.13 1.64.2 2.5.2s1.69-.07 2.5-.2L18 20l-.24-3.11C20.32 15.39 22 12.87 22 10c0-4.42-4.48-8-10-8zm0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z',
  },
  {
    name: 'Redis',
    category: 'Backend',
    color: '#DC382D',
    icon: 'M2 14l10 4 10-4-10-4-10 4zm0-4l10 4 10-4-10-4-10 4zm10-8L2 6l10 4 10-4-10-4z',
  },
  
  // ── DevOps ──
  {
    name: 'Docker',
    category: 'DevOps',
    color: '#2496ED',
    icon: 'M13.5 9H12V7.5h1.5V9zm0 2.5H12V10h1.5v1.5zM11 9H9.5V7.5H11V9zm0 2.5H9.5V10H11v1.5zM8.5 9H7V7.5h1.5V9zm0 2.5H7V10h1.5v1.5zm8 0h-1.5V10H16.5v1.5zm0-2.5H15V7.5h1.5V9zm2.17 3.77A3.15 3.15 0 0 1 18 13a3.37 3.37 0 0 1-2.5-1H3.86A4.07 4.07 0 0 0 8 16h9c2.77 0 4.76-2.46 3.67-5.73z',
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    color: '#F05033',
    icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3.5-8.5L11 7l-1.5 1.5 3 3-3 3L11 16l4.5-4.5z',
  },
  // ── Tools ──
  {
    name: 'Git',
    category: 'Tools',
    color: '#F05032',
    icon: 'M21.007 11.292L12.708 3a1 1 0 0 0-1.414 0l-1.768 1.768 2.122 2.122a1.25 1.25 0 0 1 1.58 1.59l2.04 2.04a1.25 1.25 0 1 1-.748.748l-1.903-1.902v5a1.25 1.25 0 1 1-1 0V9.28a1.25 1.25 0 0 1-.662-1.642L8.837 5.533 3 11.37a1 1 0 0 0 0 1.414l8.3 8.3a1 1 0 0 0 1.414 0l8.3-8.3a1 1 0 0 0-.007-1.492z',
  },
  {
    name: 'Linux',
    category: 'Tools',
    color: '#FCC624',
    icon: 'M12 2a5 5 0 0 1 5 5c0 1.54-.7 2.91-1.79 3.83L16 14H8l.79-3.17A5 5 0 0 1 7 7a5 5 0 0 1 5-5zm-2 16h4l1 4H9l1-4z',
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
export interface Project {
  id:           string;
  name:         string;
  description:  string;
  longDesc:     string;
  tags:         string[];
  liveUrl:      string;
  githubUrl:    string;
  featured:     boolean;
  status:       'live' | 'wip' | 'archived';
  gradient:     string; // CSS gradient string for card accent
}

export const projects: Project[] = [
  {
    id:          'nexus',
    name:        'Nexus',
    description: 'A scalable social media application',
    longDesc:    'Nexus is a full-stack social platform built to handle millions of concurrent users. It features real-time feeds, end-to-end encrypted messaging, a distributed media pipeline, and a microservices architecture deployed on Kubernetes.',
    tags:        ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'Kubernetes', 'AWS'],
    liveUrl:     'https://nexus-app.example.com',
    githubUrl:   'https://github.com/evelyn-carter/nexus',
    featured:    true,
    status:      'live',
    gradient:    'from-blue-600/20 via-indigo-600/10 to-violet-600/20',
  },
  // ── Add more projects below ──
  // {
  //   id:          'my-project',
  //   name:        'My Project',
  //   description: 'Short one-liner description',
  //   longDesc:    'Longer description shown on hover / expanded.',
  //   tags:        ['React', 'GraphQL'],
  //   liveUrl:     'https://...',
  //   githubUrl:   'https://...',
  //   featured:    false,
  //   status:      'wip',
  //   gradient:    'from-emerald-600/20 via-teal-600/10 to-cyan-600/20',
  // },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
export interface ExperienceItem {
  id:          string;
  title:       string;
  org:         string;
  period:      string;
  description: string;
  bullets:     string[];
  type:        'work' | 'education' | 'project' | 'focus';
  icon:        'code' | 'graduation' | 'rocket' | 'star';
}

export const experience: ExperienceItem[] = [
  {
    id:          'focus',
    title:       'Actively Building & Exploring Opportunities',
    org:         'Current Focus',
    period:      '2024 – Present',
    description: 'Channelling every hour into shipping products, deepening system-design skills, and connecting with great teams.',
    bullets:     [
      'Building production-grade full-stack applications end-to-end',
      'Studying distributed systems, cloud architecture & platform engineering',
      'Contributing to open-source infrastructure tooling',
      'Actively interviewing for full-time roles and select freelance projects',
    ],
    type: 'focus',
    icon: 'star',
  },
  {
    id:          'independent',
    title:       'Independent Full-Stack Development',
    org:         'Self-Directed',
    period:      '2022 – Present',
    description: 'Designed, built, and shipped multiple production applications, owning every layer of the stack from database design to CI/CD pipelines.',
    bullets:     [
      'Built Nexus, a real-time social platform serving concurrent users with a distributed microservices backend',
      'Developed the Meeting Automation Agent — cut per-meeting overhead by 80% with an LLM transcription pipeline',
      'Architected containerised deployments on AWS ECS and Kubernetes with Terraform-managed infrastructure',
      'Implemented monitoring, alerting, and zero-downtime deployment strategies',
    ],
    type: 'work',
    icon: 'code',
  }
];

// ─── NAVIGATION ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume',     href: '#resume'     },
  { label: 'Contact',    href: '#contact'    },
];

// ─── SEO / META ───────────────────────────────────────────────
export const seo = {
  title:       'Kunal Halder — Full-Stack Developer & DevOps Engineer',
  description: 'Personal portfolio of Kunal Halder. I build fast, scalable web systems and automation pipelines — from React frontends to Kubernetes-backed microservices.',
  keywords:    'full-stack developer, devops engineer, react developer, nodejs, portfolio, kunal halder',
  ogImage:     '/og-image.png',
  twitterHandle: '@iamKunal_26',
  siteUrl:     'https://kunalhalder.site',
};
