export type PageView = 'home' | 'about' | 'experience' | 'work' | 'contact' | 'case-study';

export interface CaseStudyStorytelling {
  brief: {
    heading: string;
    description: string;
    points: string[];
  };
  challenge: {
    heading: string;
    description: string;
    points: string[];
  };
  strategy: {
    heading: string;
    description: string;
    points: string[];
  };
  idea: {
    heading: string;
    description: string;
    points: string[];
    quote?: string;
  };
  execution: {
    heading: string;
    description: string;
    deliverables: string[];
    steps: {
      title: string;
      details: string;
    }[];
  };
  takeaway: {
    heading: string;
    description: string;
    learnings: string[];
  };
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  type: string;
  category: string;
  role: string;
  year: string;
  image: string;
  overview: string;
  oneLineDescription: string;
  tags: string[];
  storytelling: CaseStudyStorytelling;
}

export interface ExperiencePillarDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  focus: string;
  shortDescription: string;
  icon3DType: 'restaurants' | 'real-estate' | 'campaigns' | 'influencer';
  workItems: string[];
  detailedBreakdown: {
    heading: string;
    description: string;
    deliverables: string[];
  }[];
  creativeHighlights: string[];
  tags: string[];
}

export interface InternshipExperience {
  company: string;
  role: string;
  duration: string;
  dates: string;
  location: string;
  summary: string;
  pillars: ExperiencePillarDetail[];
  keyLearnings: string[];
  toolsUsed: string[];
}

export interface InterestItem {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  iconName: string;
  description: string;
  tags: string[];
}
