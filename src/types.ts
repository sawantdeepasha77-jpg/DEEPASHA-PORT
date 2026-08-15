export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  type: string;
  role: string;
  year: string;
  image: string;
  overview: string;
  tags: string[];
  keyHighlights: {
    heading: string;
    details: string;
  }[];
  deliverables: string[];
  breakdown: {
    sectionTitle: string;
    description: string;
    points?: string[];
    quote?: string;
  }[];
  metricsOrTakeaway: string;
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

export interface ExperiencePillar {
  title: string;
  focus: string;
  description: string;
  tags: string[];
}

export interface InternshipExperience {
  year: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
  pillars: ExperiencePillar[];
  keyLearnings: string[];
}
