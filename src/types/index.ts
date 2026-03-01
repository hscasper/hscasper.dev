export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
