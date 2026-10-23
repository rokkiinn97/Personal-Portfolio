'use client';
import { useState } from 'react';

type Project = { title: string; type: string; tags: string[]; slug: string; number: string; image: string; note: string };

const iconFor = (title: string) => {
  if (title.toLowerCase().includes('health')) return '✚';
  if (title.toLowerCase().includes('edu')) return '◫';
  if (title.toLowerCase().includes('smart')) return '⌁';
  if (title.toLowerCase().includes('keystone')) return '⌂';
  if (title.toLowerCase().includes('housing')) return '▦';
  return '◇';
};

export default function ProjectCard({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  return (
    <article className={`project-card-v6 project-${project.slug} ${hover ? 'is-hovered' : ''}`} data-cursor-zone="VIEW CASE" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="project-visual-v6">
        <div className="project-browser-v6"><span>PROJECT VISUAL</span><i/><b>{project.title.toUpperCase()}</b></div>
        <img className="project-image-v6" src={project.image} alt={`${project.title} project visual`} loading="lazy" decoding="async" />
        <div className="project-overlay-v6"><span>{project.number} / CASE STUDY</span><span className="project-icon">{iconFor(project.title)}</span></div>
        <div className="project-scan-v6"><span>SEARCH SIGNAL</span><i/><b>↗</b></div><div className="project-hover-system" aria-hidden="true"><span>INTENT</span><i/><span>STRUCTURE</span><i/><span>SIGNAL</span></div>
      </div>
      <div className="project-copy-v6">
        <div className="project-topline-v6"><span>{project.type}</span><span>{project.number.padStart(2,'0')} / 06</span></div>
        <h3>{project.title}</h3>
        <div className="project-detail-label">SEARCH CONTEXT</div><p>{project.note}</p><div className="project-hover-detail"><span>INTERACTION</span><strong>Explore the search system</strong><small>{project.tags.slice(0,2).join(' · ')}</small></div>
        <div className="tag-row-v6">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-open-v6"><span>Case study / evidence to follow</span><b>EXPLORE ↗</b></div>
      </div>
    </article>
  );
}
