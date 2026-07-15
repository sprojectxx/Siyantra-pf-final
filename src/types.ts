export type RoutePath =
  | '/'
  | '/about'
  | '/services'
  | '/services/web-development'
  | '/services/ai-automation'
  | '/services/crm-development'
  | '/services/saas-development'
  | '/services/digital-marketing'
  | '/portfolio'
  | '/contact'
  | string; // Support dynamic paths like /project/:slug

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  technology: string[];
  result: string;
  metrics: { label: string; value: string }[];
  problemDetails: string;
  researchDetails: string;
  developmentDetails: string;
  images: string[]; // Mock illustrations / patterns
  externalLink?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  path: RoutePath;
  features: string[];
  highlightColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
