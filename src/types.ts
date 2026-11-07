export interface Project {
  id: string;
  title: string;
  category: 'python' | 'ai' | 'automation' | 'web';
  description: string;
  technologies: string[];
  demoType?: 'interactive-vote-python' | 'skillpath-ai' | 'n8n-automation';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  codeSnippet?: {
    python?: string;
    json?: string;
    prompt?: string;
    html?: string;
    js?: string;
    css?: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Programming' | 'AI & Learning';
  levelDescription: string;
  iconName: string;
  topics: string[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  iconName: string;
  tag: string;
  metric?: string;
}

export type JourneyStep = AchievementItem;
