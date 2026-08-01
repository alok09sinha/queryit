import { SlideType } from "./SlideType";

export interface QueryITProject {
  id: string;

  name: string;

  slug: string;

  template: string;

  vendor: string;

  category: string;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  tags: string[];

  slides: QueryITSlide[];
}

export interface QueryITSlide {
  id: number;

  type: SlideType;

  section?: string;

  title: string;

  subtitle: string;

  highlight: string;

  description: string;

  notes?: string;
}