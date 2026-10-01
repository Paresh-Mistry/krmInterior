export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  features: string[];
  tag: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  location: string;
  palette: string[];
  description: string;
  dimensions: string;
  materiality: string;
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
  detail: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

