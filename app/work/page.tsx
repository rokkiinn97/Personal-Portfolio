'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data/site';
import { caseStudySlugs } from '../../data/case-study-routes';
import BrandLogo from '../../components/BrandLogo';

const filters = ['ALL', 'TECHNICAL', 'INTERNATIONAL', 'LOCAL', 'CONTENT', 'AEO / GEO'];

const filterMap: Record<string, string[]> = {
  TECHNICAL: ['Technical SEO'],
  INTERNATIONAL: ['International SEO'],
  LOCAL: ['Local SEO'],
  CONTENT: ['Content'],
  'AEO / GEO': ['AEO', 'GEO'],
};

const projectSignals: Record<string, string[]> = {
  smartmove2uk: ['International search', 'Technical foundations', 'Information architecture'],
  'globalcare-health': ['Trust-sensitive search', 'Content systems', 'Local visibility'],
  eduguide: ['Course intent', 'Destination research', 'International SEO'],
  keystone: ['Property intent', 'Website strategy', 'Answer-focused search'],
  'student-housing': ['Location intent', 'Landing-page structure', 'Conversion context'],
  'lucero-panama-homes': ['Local search', 'International visibility', 'Information architecture'],
};

function ProjectGlyph({ slug }: { slug: string }) {
  const glyphs: Record<string, string> = {
    smartmove2uk: '⌁',
    'globalcare-health': '✚',
    eduguide: '◫',
    keystone: '⌂',
    'student-housing': '▦',
    'lucero-panama-homes': '⌂',
  };
  return <span className="work-page-glyph" aria-hidden="true">{glyphs[slug] || '◇'}</span>;
}

export default function WorkPage() {
  const [active, setActive] = useState('ALL');

  const visibleProjects = useMemo(() => {
    if (active === 'ALL') return projects;
    const terms = filterMap[active] || [];
    return projects.filter((project) => project.tags.some((tag) => terms.includes(tag)));
  }, [active]);

  return (
    <main className="work-page">
      <nav className="nav work-page-nav">
        <a className="brand brand-logo-link" href="/"><BrandLogo variant="wordmark" /></a>
        <div className="nav-center">SEARCH / DIGITAL GROWTH</div>
        <div className="nav-links">
          <a href="/work" className="nav-active" aria-current="page">Work</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <header className="work-page-hero">
        <div className="work-page-grid" aria-hidden="true" />
        <div className="work-page-meta"><span>01 / WORK</span><span>SEARCH / SYSTEMS / GROWTH</span></div>
        <div className="work-page-hero-grid">
          <div className="work-page-index">SELECTED<br/>PROJECTS<br/><b>06</b></div>
          <div className="work-page-title-wrap">
            <span className="work-page-kicker">SEARCH IN DIFFERENT ENVIRONMENTS</span>
            <h1>Work that<br/><em>starts with context.</em></h1>
            <p>Every project starts somewhere different: a relocation journey, a healthcare decision, a course search, a property question or a place to live. The work is finding the system underneath that search.</p>
          </div>
          <div className="work-page-side">
            <div><span>APPROACH</span><strong>PROBLEM → SYSTEM → SIGNAL</strong></div>
            <div><span>DISCIPLINES</span><strong>TECHNICAL / CONTENT / LOCAL / INTERNATIONAL / DATA</strong></div>
            <div><span>STATUS</span><strong>SELECTED WORK / EVIDENCE-LED</strong></div>
          </div>
        </div>
        <div className="work-page-hero-foot"><span>INDIA · WORKING GLOBALLY</span><span>SCROLL TO EXPLORE ↓</span></div>
      </header>

      <section className="work-page-index-section">
        <div className="work-page-section-head">
          <div><span className="blue-label">02 / PROJECT INDEX</span><h2>Six environments.<br/><em>One discipline.</em></h2></div>
          <p>Not a list of services. A record of the kinds of search systems I have worked inside — and the questions that shaped the work.</p>
        </div>

        <div className="work-page-filters" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button key={filter} type="button" role="tab" aria-selected={active === filter} className={active === filter ? 'is-active' : ''} onClick={() => setActive(filter)}>{filter}<span>{filter === 'ALL' ? projects.length : visibleCount(filter)}</span></button>
          ))}
        </div>

        <div className="work-page-projects">
          {visibleProjects.map((project, index) => {
            const hasCaseStudy = caseStudySlugs.includes(project.slug as (typeof caseStudySlugs)[number]);
            const cardContent = (
              <>
              <div className="work-project-visual">
                <div className="work-project-image" style={{ backgroundImage: `linear-gradient(0deg, rgba(8,10,14,.72), rgba(8,10,14,.02) 68%), url(${project.image})` }} />
                <div className="work-project-top"><span>{project.number} / 06</span><ProjectGlyph slug={project.slug} /></div>
                <div className="work-project-bottom"><span>SEARCH ENVIRONMENT</span><b>{project.type.split(' · ')[0]}</b></div>
              </div>
              <div className="work-project-copy">
                <div className="work-project-meta"><span>{project.type}</span><span>{project.tags.length} SIGNALS</span></div>
                <h3>{project.title}</h3>
                <p>{project.note}</p>
                <div className="work-project-signals">
                  {(projectSignals[project.slug] || project.tags.slice(0, 3)).map((signal, i) => <span key={signal}><i>0{i + 1}</i>{signal}</span>)}
                </div>
                <div className="work-project-footer"><span>{hasCaseStudy ? 'CASE STUDY / BUILDING WITH VERIFIED PROJECT EVIDENCE' : 'PROJECT OVERVIEW / CASE STUDY NOT PUBLISHED'}</span><b>↗</b></div>
              </div>
              </>
            );

            return hasCaseStudy ? (
              <Link href={`/work/${project.slug}`} className={`work-project ${index === 0 ? 'is-featured' : ''}`} key={project.slug} aria-label={`View ${project.title} case study`}>
                {cardContent}
              </Link>
            ) : (
              <article className={`work-project ${index === 0 ? 'is-featured' : ''}`} key={project.slug}>
                {cardContent}
              </article>
            );
          })}
        </div>

        {visibleProjects.length === 0 && <div className="work-page-empty">No project in the current set uses that signal.</div>}
      </section>

      <section className="work-page-evidence">
        <div className="work-page-evidence-label"><span>03 / EVIDENCE</span><span>NO INVENTED METRICS</span></div>
        <div className="work-page-evidence-grid">
          <div><span className="blue-label">THE NEXT LAYER</span><h2>Show the<br/><em>work behind it.</em></h2></div>
          <div className="work-evidence-copy">
            <p>Detailed case studies will turn these project environments into documented stories: the problem, the investigation, the intervention and the measurable outcome.</p>
            <div className="work-evidence-flow"><span>01 / PROBLEM</span><i/><span>02 / DIAGNOSIS</span><i/><span>03 / CHANGE</span><i/><span>04 / OUTCOME</span></div>
            <small>GSC · GA4 · CRAWL REPORTS · SERP EVIDENCE · DASHBOARDS · BEFORE / AFTER</small>
          </div>
        </div>
      </section>

      <section className="work-page-close">
        <span>04 / WHAT CONNECTS THEM</span>
        <h2>Different businesses.<br/><em>Different users.<br/>The same question:</em></h2>
        <p>What needs to become easier to discover, understand and act on?</p>
        <a href="/contact">Start a conversation <b>↗</b></a>
      </section>

      <footer className="work-page-footer"><span>TEJAS KAMBLE · SEO ANALYST / SEARCH GROWTH STRATEGIST</span><span>INDIA · WORKING GLOBALLY · <a className="linkedin-link" href="https://www.linkedin.com/in/kambletejas/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></span></footer>
    </main>
  );
}

function visibleCount(filter: string) {
  if (filter === 'ALL') return projects.length;
  const terms = filterMap[filter] || [];
  return projects.filter((project) => project.tags.some((tag) => terms.includes(tag))).length;
}
