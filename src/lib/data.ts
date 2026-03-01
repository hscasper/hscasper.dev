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
  bio: 'I craft performant web applications that turn complex problems into clean, intuitive experiences from database to pixel.',
  shortBio: 'Developer, problem-solver, and perpetual learner.',
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
    period: '2024 - 2025',
    description:
      'Led the frontend team for a SaaS platform reaching 50k+ users. Architected the component library and design system from the ground up, improving development velocity by 40%.',
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
    longDescription: 'Built to address rising mental health challenges on campus. The AI engine adapts to each student\'s needs over time.',
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
    longDescription: 'Explored concurrent programming and real-time systems by simulating a full ATC environment with multithreaded flight management.',
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
    longDescription: 'Wanted to understand the full lifecycle of a social platform, from auth and feeds to real-time voting and moderation.',
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
    longDescription: 'Dove into computer vision to solve an everyday frustration, finding parking. Uses OpenCV for frame-level analysis.',
    image: '/images/projects/parking-spot-detector.svg',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  ...new Set(projects.map((p) => p.category)),
];
