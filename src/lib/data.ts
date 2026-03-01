import type {
  NavLink,
  Project,
  SkillCategory,
  SocialLink,
  Experience,
} from '@/types';

export const siteConfig = {
  name: 'Shaheer Hassan',
  role: 'Full Stack Developer',
  email: 'hassanshaheerw@gmail.com',
  bio: 'I build modern web applications with clean code and thoughtful design. Passionate about creating seamless user experiences that make complex things feel simple.',
  shortBio: 'Developer, designer, and lifelong learner based in San Francisco.',
  avatarUrl: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/hscasper', icon: 'FiGithub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hassanshaheer/', icon: 'FiLinkedin' },
  { name: 'Email', url: 'mailto:hassanshaheerw@gmail.com', icon: 'FiMail' },
];

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'LearningModeAI',
    period: '2024 — 2025',
    description:
      'Leading the frontend team building a SaaS platform used by 50k+ users. Architected the component library and design system.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'Go' },
      { name: 'SQL' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: '.NET' },
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Spring Boot' },
      { name: 'FastAPI' },
    ],
  },
  {
    name: 'Tools & Infrastructure',
    skills: [
      { name: 'Linux' },
      { name: 'Azure' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'RESTful APIs' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'sakeen-ai',
    title: 'Sakeen AI',
    description:
      'A mobile wellness app designed for students, using AI to provide personalized mental health support and daily check-ins.',
    image: '/images/projects/sakeen-ai.svg',
    tags: ['Python', 'FastAPI', 'React Native', 'AI/ML', 'PostgreSQL'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'air-traffic-control',
    title: 'Air Traffic Control System',
    description:
      'A simulation system for managing air traffic, featuring real-time flight tracking, collision avoidance, and scheduling algorithms.',
    image: '/images/projects/air-traffic-control.svg',
    tags: ['C++', 'Java', 'Multithreading', 'Data Structures', 'OOP'],
    category: 'Systems',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'dev-link',
    title: 'Dev Link',
    description:
      'A Reddit-like community platform for developers to share posts, discuss topics, upvote content, and collaborate.',
    image: '/images/projects/dev-link.svg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'parking-spot-detector',
    title: 'Parking Spot Detector',
    description:
      'A computer vision application that detects available parking spots in real-time using video feed analysis.',
    image: '/images/projects/parking-spot-detector.svg',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
    featured: true,
  },
  /*
  {
    id: 'cloud-dash',
    title: 'CloudDash',
    description:
      'A real-time analytics dashboard for monitoring cloud infrastructure with live metrics and alerting.',
    image: '/images/projects/project-1.jpg',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'WebSocket'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-flow',
    title: 'TaskFlow',
    description:
      'A minimal project management tool with drag-and-drop boards, real-time sync, and team workspaces.',
    image: '/images/projects/project-2.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
  },
  {
    id: 'pixel-perfect',
    title: 'PixelPerfect',
    description:
      'An AI-powered design feedback tool that analyzes UI screenshots and suggests accessibility improvements.',
    image: '/images/projects/project-3.jpg',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI', 'Tailwind'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
  },
  {
    id: 'dev-blog',
    title: 'DevBlog',
    description:
      'A performant static blog built with MDX, featuring code syntax highlighting and dark mode.',
    image: '/images/projects/project-4.jpg',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    githubUrl: 'https://github.com',
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description:
      'A lightweight API gateway service with rate limiting, caching, and request transformation.',
    image: '/images/projects/project-5.jpg',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'TypeScript'],
    category: 'Backend',
    githubUrl: 'https://github.com',
  },

  */
];

export const projectCategories = [
  'All',
  ...new Set(projects.map((p) => p.category)),
];
