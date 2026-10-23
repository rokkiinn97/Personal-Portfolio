import type { MetadataRoute } from 'next';
import { caseStudyProjects } from '../data/case-study-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tj-portfolio-nine.vercel.app';
  const paths = ['', '/work', '/about', '/contact', ...caseStudyProjects.map((project) => `/work/${project.slug}`)];
  return paths.map((path) => ({
    url: path ? `${base}${path}` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
