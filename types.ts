
export interface Skill {
  name: string;
  category: 'Backend' | 'Database' | 'Frontend' | 'Tools';
  icon: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
