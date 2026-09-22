export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ai';
  description: string;
  technologies: string[];
  demoType?: 'interactive-grade' | 'interactive-vote' | 'ai-showcase';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  codeSnippet?: {
    html: string;
    js: string;
    css: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Programming' | 'AI & Learning';
  levelDescription: string;
  iconName: string;
  topics: string[];
}

export interface JourneyStep {
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  iconName: string;
  tag: string;
}
