export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential: string;
}

export interface NavItem {
  id: string;
  label: string;
  size: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}