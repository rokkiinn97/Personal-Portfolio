import { projects } from './site';

// These are the projects with full case-study content in app/work/[slug]/page.tsx.
export const caseStudySlugs = ['eduguide', 'student-housing'] as const;

export const caseStudyProjects = projects.filter((project) =>
  caseStudySlugs.includes(project.slug as (typeof caseStudySlugs)[number]),
);
