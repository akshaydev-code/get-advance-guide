export type ResourceType = 'Guide' | 'Roadmap' | 'Cheatsheet' | 'Template' | 'Video';
export type ResourceCategory = 'All' | 'Web Development' | 'System Design' | 'Data Science' | 'UI/UX Design' | 'Cloud & DevOps' | 'Career & Interviews';
export type ResourceLevel = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export interface ResourceAuthor {
  name: string;
  role: string;
  company: string;
  avatar: string;
  mentorId?: string;
}

export interface RoadmapMilestone {
  title: string;
  duration: string;
  skills: string[];
  description: string;
  recommendedGuides?: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: ResourceType;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  author: ResourceAuthor;
  summary: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  downloads: number;
  isFeatured?: boolean;
  isPopular?: boolean;
  isTrending?: boolean;
  publishedDate: string;
  videoDuration?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  downloadFileName?: string;
  downloadFileSize?: string;
  milestones?: RoadmapMilestone[];
}
