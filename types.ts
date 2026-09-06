
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  color: string;
  category?: string;
  // New detailed fields
  challenge: string;
  solution: string[];
  impact: { value: string; label: string }[];
  techStack: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  WORK = 'work',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact',
}
