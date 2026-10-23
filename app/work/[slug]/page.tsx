import Link from 'next/link';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BrandLogo from '../../../components/BrandLogo';
import { projects } from '../../../data/site';
import { caseStudyProjects } from '../../../data/case-study-routes';

const caseStudies: Record<string, any> = {
  eduguide: {
    eyebrow: 'EDUCATION / INTERNATIONAL SEARCH',
    title: 'Building a search architecture for study-abroad discovery.',
    intro: 'EduGuide had recently gone live. The SEO work focused on establishing a scalable structure for organic growth — connecting courses, destinations, universities, comparison intent and counselling journeys.',
    question: 'How should a study-abroad search move from discovery to a useful next step?',
    context: 'A new study-abroad website needed a search structure before it could scale.',
    problem: 'The foundation needed to support new courses, destinations, cities, universities and resources without treating every page as an isolated SEO task.',
    stats: [
      ['PROJECT', 'EduGuide'],
      ['FOCUS', 'International Search'],
      ['ROLE', 'SEO / IA / Technical / Content'],
      ['STATUS', 'Recently launched'],
    ],
    system: [
      ['01', 'COURSE', 'What should I study?'],
      ['02', 'DESTINATION', 'Where should I study?'],
      ['03', 'UNIVERSITY', 'Where can I study it?'],
      ['04', 'APPLICATION', 'What happens next?'],
    ],
    architecture: ['Homepage', 'Study Abroad / Destinations', 'Courses / Individual Courses', 'Universities / Compare', 'Services / Resources / Blogs', 'Counselling / Application'],
    interventions: [
      ['01', 'Architecture', 'Search-intent-led website structure across study abroad, destinations, courses and universities.'],
      ['02', 'Course system', 'Courses Hub and a repeatable framework for dedicated course pages, beginning with MBA and Computer Science.'],
      ['03', 'Destination layer', 'Country and city pathways connected to relevant study options and student journeys.'],
      ['04', 'Content system', 'Informational and commercial content planned around admissions, scholarships, IELTS, SOP/LOR, costs, visas and study-abroad planning.'],
      ['05', 'Technical foundation', 'XML sitemap, robots.txt, canonicals, FAQ and Organization schema, plus GSC and GA4 configuration.'],
    ],
    next: [
      'Expand priority course clusters using search demand, student intent and business relevance.',
      'Scale destination and city landing pages and connect them to courses and universities.',
      'Expand university pages and comparison functionality.',
      'Strengthen counselling, scholarships, education-loan and other high-intent service pages.',
      'Continue search-intent-led informational content and post-launch technical validation.',
    ],
  },
  'student-housing': {
    eyebrow: 'STUDENT ACCOMMODATION / SEARCH GROWTH',
    kicker: 'STUDENT HOUSING / SEARCH SYSTEM',
    previewDomain: 'studenthousing.co.in',
    title: 'Turning student accommodation search into a connected discovery system.',
    intro: 'The work connected technical SEO, property listings, location and college intent, content, local visibility and conversion paths across a growing student-accommodation website.',
    question: 'How can students move from “where should I live?” to the right property with fewer disconnected search paths?',
    context: 'Student accommodation search is not one query. It is a chain of location, college, property and decision intent.',
    problem: 'The work focused on making those entry points more useful together: strengthening listing pages, expanding location and college pathways, connecting supporting content, and improving the technical and local foundations underneath them.',
    contextShift: 'From isolated listings → to a connected accommodation discovery system.',
    stats: [
      ['PROJECT', 'Student Housing'],
      ['FOCUS', 'Organic + Local Search'],
      ['ROLE', 'SEO / Technical / Content / Local'],
      ['STATUS', 'Ongoing / 2026'],
    ],
    systemTitle: <>One accommodation journey.<br/><em>Multiple search entry points.</em></>,
    systemIntro: 'Students can enter through a location, a college, a property, a problem they are researching, or a local business profile. The SEO system needs to connect those paths rather than treat them as separate surfaces.',
    system: [
      ['01', 'LOCATION', 'Where do I want to live?'],
      ['02', 'COLLEGE', 'What is close to my campus?'],
      ['03', 'PROPERTY', 'Which listing fits me?'],
      ['04', 'DECISION', 'How do I enquire or book?'],
    ],
    architectureLabel: 'PAGE DEVELOPMENT ECOSYSTEM',
    architectureSub: 'DISCOVERY → COMPARISON → PROPERTY → ACTION',
    architecture: ['Homepage', 'Locations Hub', 'Near Location', 'Near College', 'Property Listings', 'Blogs / Resources'],
    interventionsTitle: <>Fix the surfaces.<br/><em>Strengthen the connections.</em></>,
    interventionsIntro: 'The project combined technical cleanup, listing-page optimization, content expansion, internal linking and local SEO so that search visibility and the user journey could reinforce each other.',
    interventions: [
      ['01', 'Listing system', 'Improved priority hostel listing pages with stronger property information, amenities, imagery, CTAs and listing-specific relevance.'],
      ['02', 'Search architecture', 'Planned location and college pathways to address high-intent accommodation searches while reducing overlap between page types.'],
      ['03', 'Technical SEO', 'Implemented or reviewed LodgingBusiness schema, canonical signals, XML sitemap, OG tags, X/Twitter cards and image optimization.'],
      ['04', 'Local visibility', 'Published and maintained Google Business Profile activity for properties including Elita, Avenue and Atlantis, alongside profile recovery work.'],
      ['05', 'Content network', 'Expanded student-focused blogs and strengthened blog → location → college → listing relationships for discovery and internal linking.'],
    ],
    evidenceIntro: 'The July 2026 report provides the documented baseline. The evidence layer separates reported outcomes from the source interfaces, so the portfolio can show the actual GSC and GA4 views without turning reported figures into unsupported attribution.',
    evidence: [
      ['01', 'Organic content signal', '10 recently published and indexed blogs generated 900 organic clicks and 97,262 search impressions in the report.'],
      ['02', 'Search visibility', 'The report records overall GSC movement from 4.83K to 7.56K clicks and 257K to 283K impressions for the compared period.'],
      ['03', 'AI search visibility', 'The selected reporting period records 136K AI Search impressions across the site, with multiple student-accommodation resources appearing among the leading pages.'],
      ['04', 'Local search layer', 'July GBP reporting records activity across Elita, Avenue and Atlantis, while noting that Atlantis was recently approved and Arcadia was suspended at that point.'],
    ],
    scaleTitle: <>Search is the surface.<br/><em>The journey is the system.</em></>,
    scaleIntro: 'The next stage is to make the relationships between discovery surfaces increasingly explicit: query → location → college → property → enquiry.',
    scale: [
      ['01', 'DISCOVER', 'Search by location, college, accommodation type or student problem'],
      ['02', 'CONNECT', 'Link locations, colleges, listings and supporting content'],
      ['03', 'COMPARE', 'Use property details, amenities, pricing and context to support evaluation'],
      ['04', 'ACT', 'Move the student toward enquiry, visit, call or booking'],
    ],
    nextTitle: <>Build the next<br/><em>search layer.</em></>,
    nextIntro: 'The July roadmap identifies further work across accommodation templates, location and college pages, the Life at Student Housing experience, blogs and website-wide technical optimization. These are roadmap items, not completed outcomes.',
    next: [
      'Continue optimization across priority hostel listings and remaining property templates.',
      'Expand Hostel Near Location and Hostel Near College pages using search-demand insights.',
      'Strengthen location → college → listing internal-linking pathways and hub architecture.',
      'Continue schema, image, Core Web Vitals, sitemap, robots and Next.js technical optimization.',
      'Replace the source-interface frames with the original GSC and GA4 captures when the final image assets are supplied.',
    ],
    closeLabel: 'STUDENT HOUSING / CASE STUDY',
  }
};

export const dynamicParams = false;

export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project || !caseStudies[slug]) return { robots: { index: false, follow: false } };

  return { alternates: { canonical: `/work/${slug}` } };
}

function SystemNode({ num, label, text, last }: { num: string; label: string; text: string; last?: boolean }) {
  return <div className="case3-node">
    <span className="case3-node-index">{num}</span>
    <div className="case3-node-main"><CaseIcon name={label.toLowerCase()} /><strong>{label}</strong><small>{text}</small></div>
    {!last && <span className="case3-node-arrow">→</span>}
  </div>;
}


function CaseIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    college: <><path d="M3 9 12 4l9 5-9 5-9-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M21 10v6"/></>,
    property: <><path d="m4 10 8-6 8 6v10H4Z"/><path d="M9 20v-6h6v6M8 10h.01M12 10h.01M16 10h.01"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    chart: <><path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/></>,
    ai: <><path d="m12 3 1.2 5.8L19 10l-5.8 1.2L12 17l-1.2-5.8L5 10l5.8-1.2L12 3Z"/><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/></>,
    local: <><path d="M4 18V9l8-5 8 5v9"/><path d="M8 18v-5h8v5M3 20h18"/></>,
    analytics: <><path d="M4 19V9M10 19V5M16 19v-8M22 19H2"/></>,
  };
  return <span className="case3-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.search}</svg></span>;
}

function EvidenceVisual({ type, data }: { type: string; data?: string[][] }) {
  if (type.startsWith('student-')) {
    const index = Number(type.split('-')[1]) - 1;
    const item = data?.[index];
    const labels = ['ORGANIC CONTENT SIGNAL', 'GSC VISIBILITY', 'AI SEARCH VISIBILITY', 'LOCAL SEARCH LAYER'];
    const values = ['900', '7.56K', '136K', '3 PROFILES'];
    const units = ['CLICKS', 'CLICKS', 'IMPRESSIONS', 'REPORTED'];
    return <div className={`case3-art case3-art-student case3-art-student-${index + 1}`}>
      <div className="case3-art-caption">{labels[index]}</div>
      <div className="case3-student-visual">
        <div className="case3-student-metric"><b>{values[index]}</b><span>{units[index]}</span></div>
        <div className="case3-student-bars">{[28, 42, 35, 58, 49, 72, 63, 86].map((height, i) => <i key={i} style={{height: `${height}%`}} />)}</div>
        <div className="case3-student-source"><span>JULY 2026 REPORT</span><b>{item?.[1] || labels[index]}</b></div>
      </div>
    </div>;
  }
  if (type === 'architecture') return <div className="case3-art case3-art-architecture">
    <div className="case3-art-caption">SEARCH-INTENT ARCHITECTURE</div>
    <div className="case3-arch-root">STUDY ABROAD</div>
    <div className="case3-arch-line" />
    <div className="case3-arch-row"><span>DESTINATION</span><span>COURSE</span><span>UNIVERSITY</span></div>
    <div className="case3-arch-subrow"><span>COUNTRY / CITY</span><span>COURSE PAGE</span><span>PROFILE / COMPARE</span></div>
    <div className="case3-arch-foot"><span>DISCOVERY</span><i>→</i><span>DECISION</span><i>→</i><span>APPLICATION</span></div>
  </div>;
  if (type === 'course') return <div className="case3-art case3-art-course">
    <div className="case3-art-caption">COURSE PAGE FRAMEWORK</div>
    <div className="case3-course-top"><span>COURSE</span><b>MBA</b><em>01 / 02</em></div>
    <div className="case3-course-grid">
      {['Overview','Eligibility','Top Universities','Career Scope','Fees & Costs','Scholarships','Intakes','FAQs'].map((x, i) => <span key={x}><i>{String(i + 1).padStart(2,'0')}</i>{x}</span>)}
    </div>
    <div className="case3-course-path"><span>COURSE</span><b>→</b><span>DESTINATION</span><b>→</b><span>UNIVERSITY</span></div>
  </div>;
  if (type === 'technical') return <div className="case3-art case3-art-tech">
    <div className="case3-art-caption">TECHNICAL FOUNDATION</div>
    <div className="case3-tech-status"><span className="case3-status-dot" /> POST-LAUNCH FOUNDATION</div>
    <div className="case3-tech-grid">
      {['XML SITEMAP','ROBOTS.TXT','CANONICALS','GSC','GA4','SCHEMA'].map((x, i) => <div key={x}><span>{String(i + 1).padStart(2,'0')}</span><b>{x}</b><small>VALIDATED / CONFIGURED</small></div>)}
    </div>
  </div>;
  return <div className="case3-art case3-art-content">
    <div className="case3-art-caption">CONTENT SYSTEM</div>
    <div className="case3-content-orbit"><span>SEARCH INTENT</span><b>CONTENT</b><span>CONVERSION</span></div>
    <div className="case3-content-list">
      <span>ADMISSIONS</span><span>SCHOLARSHIPS</span><span>IELTS</span><span>SOP / LOR</span><span>COSTS</span><span>VISAS</span>
    </div>
  </div>;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = project ? caseStudies[project.slug] : undefined;
  if (!project || !study) notFound();

  return (
    <main className="case3-page" data-case-study={slug}>
      <nav className="nav case3-nav">
        <Link className="brand brand-logo-link" href="/"><BrandLogo variant="wordmark" /></Link>
        <div className="nav-center">SEARCH / DIGITAL GROWTH</div>
        <div className="nav-links"><Link href="/work" className="nav-active">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      </nav>

      <header className="case3-hero">
        <div className="case3-meta"><span>{project.number} / CASE STUDY</span><span>{study.eyebrow}</span><span>2026</span></div>
        <div className="case3-hero-grid">
          <div className="case3-hero-copy">
            <span className="case3-kicker">{study.kicker || `${study.eyebrow} / CASE STUDY`}</span>
            <h1>{study.title}</h1>
            <p>{study.intro}</p>
          </div>
          <aside className="case3-hero-aside"><div className="case3-hero-number">{project.number}</div><span>THE QUESTION</span><strong>{study.question}</strong></aside>
        </div>
        {project.slug === 'student-housing' ? <div className="case3-hero-art" aria-label="Student Housing search architecture">
          <div className="case3-art-head"><span>SEARCH ARCHITECTURE / LIVE MODEL</span><span>DISCOVERY → DECISION</span></div>
          <div className="case3-art-network">
            <div className="case3-art-line l1"/><div className="case3-art-line l2"/><div className="case3-art-line l3"/><div className="case3-art-line l4"/>
            <div className="case3-art-node root"><small>SEARCH</small><b>STUDENT<br/>HOUSING</b></div>
            <div className="case3-art-node n1"><small>01</small><b>LOCATION</b><em>Vile Parle / Andheri</em></div>
            <div className="case3-art-node n2"><small>02</small><b>COLLEGE</b><em>NMIMS / ATLAS</em></div>
            <div className="case3-art-node n3"><small>03</small><b>PROPERTY</b><em>Elita / Atlantis</em></div>
            <div className="case3-art-node n4"><small>04</small><b>DECISION</b><em>Compare / Enquire</em></div>
          </div>
          <div className="case3-art-footer"><span>QUERY</span><b>student housing mumbai</b><i>→</i><span>DISCOVERY LAYER</span><b>location · college · property · content</b></div>
        </div> : <div className="case3-live-preview" data-cursor-zone="EXPLORE">
          <div className="case3-browserbar"><span className="browser-dots"><i/><i/><i/></span><span>{study.previewDomain || 'eduguide.co'}</span><span>LIVE SITE / HOMEPAGE</span></div>
          <div className="case3-browserstage">
            <div className="case3-site-preview">
              <div className="preview-nav"><b>{project.title.toUpperCase()}</b><span>Home</span><span>Our Services</span><span>Resources</span><strong>Check Eligibility</strong></div>
              <div className="preview-hero-copy"><small>{project.title.toUpperCase()} / SEARCH SURFACE</small><h3>Secure admissions<br/>and scholarships.</h3><p>At the world's top universities.</p><button>Discover the opportunity <span>↗</span></button></div>
              <div className="preview-stat-row"><div><b>130,000+</b><span>Courses</span></div><div><b>$1B+</b><span>Scholarship Funds</span></div><div><b>510K</b><span>International Seats</span></div></div>
            </div>
            <div className="case3-preview-note"><span>LIVE SITE</span><b>Homepage as the starting surface.</b><small>Visual reference only — the case study focuses on the search system underneath it.</small></div>
          </div>
        </div>}
        <div className="case3-hero-signal"><span>SCROLL / INVESTIGATE</span><i /></div>
      </header>

      {project.slug === 'student-housing' && <nav className="case3-spine" aria-label="Case study sections">
        <span className="case3-spine-label">INDEX</span>
        <a href="#context"><span>01</span><b>CONTEXT</b></a>
        <a href="#system"><span>02</span><b>SYSTEM</b></a>
        <a href="#intervention"><span>03</span><b>INTERVENTION</b></a>
        <a href="#evidence"><span>04</span><b>EVIDENCE</b></a>
        <a href="#insight"><span>05</span><b>CONCLUSION</b></a>
      </nav>}

      <section className="case3-facts">{study.stats.map(([label, value]: string[]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}</section>

      <section id="context" className="case3-context case3-reveal-section">
        <div className="case3-section-top"><span>01 / CONTEXT</span><span>THE STARTING POINT</span></div>
        <div className="case3-context-grid"><h2>{study.context}</h2><div><p>{study.problem}</p><div className="case3-context-note"><span>THE SHIFT</span><b>{study.contextShift || 'From individual pages → to a connected search system.'}</b></div></div></div>
      </section>

      <section id="system" className="case3-system case3-reveal-section">
        <div className="case3-section-top"><span>02 / SEARCH SYSTEM</span><span>INTENT → STRUCTURE → JOURNEY</span></div>
        <div className="case3-system-head"><div><span className="case3-kicker">THE SEARCH MODEL</span><h2>{study.systemTitle || <>One journey.<br/><em>Multiple entry points.</em></>}</h2></div><p>{study.systemIntro || 'Search entry points become connected rather than isolated page types.'}</p></div>
        <div className="case3-system-map">{study.system.map(([num, label, text]: string[], i: number) => <SystemNode key={label} num={num} label={label} text={text} last={i === study.system.length - 1} />)}</div>
        <div className="case3-architecture"><div className="case3-architecture-head"><span>{study.architectureLabel || 'PAGE DEVELOPMENT ECOSYSTEM'}</span><span>{study.architectureSub || 'FROM DISCOVERY TO APPLICATION'}</span></div><div className="case3-architecture-track">{study.architecture.map((item: string, i: number) => <div key={item}><small>{String(i + 1).padStart(2, '0')}</small><b>{item}</b></div>)}</div></div>
      </section>

      <section id="intervention" className="case3-interventions case3-reveal-section">
        <div className="case3-section-top"><span>03 / INTERVENTION</span><span>WHAT CHANGED</span></div>
        <div className="case3-intervention-head"><div><span className="case3-kicker">THE BUILD</span><h2>{study.interventionsTitle || <>Build the foundation.<br/><em>Then make it scalable.</em></>}</h2></div><p>{study.interventionsIntro || 'The work combined information architecture, technical SEO, content structure and measurement into one launch foundation.'}</p></div>
        {project.slug === 'student-housing' ? <div className="case3-intervention-grid">{study.interventions.map(([num, title, text]: string[], i: number) => <article key={num}>
  <div className="case3-intervention-icon"><CaseIcon name={['property','search','chart','local','arrow'][i] || 'search'} /></div>
  <div className="case3-intervention-meta"><span>{num}</span><small>{['SURFACE','ARCHITECTURE','FOUNDATION','LOCAL','NETWORK'][i]}</small></div>
  <div className="case3-intervention-body"><h3>{title}</h3><p>{text}</p></div>
  <div className="case3-intervention-line" />
</article>)}</div> : <div className="case3-intervention-grid">{study.interventions.map(([num, title, text]: string[]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>}
      </section>


      <section id="evidence" className="case3-evidence case3-reveal-section">
        <div className="case3-section-top"><span>04 / EVIDENCE</span><span>SEARCH → VISIBILITY → VISIT</span></div>
        <div className="case3-evidence-head">
          <div><span className="case3-kicker">DOCUMENTED PROJECT MATERIAL</span><h2>Search visibility<br/><em>became measurable.</em></h2></div>
          <p>The evidence is presented in three layers: reported search performance, the queries and content surfaces generating visibility, and the downstream visit data. Source interfaces remain clearly separated from interpreted figures.</p>
        </div>

        {project.slug === 'student-housing' ? (
          <div className="sh-evidence-premium">
            <div className="sh-proof-intro">
              <div className="sh-proof-index">04</div>
              <div className="sh-proof-copy"><span>DOCUMENTED SIGNALS / JULY 2026</span><p>Not a dashboard recreation. A visual reading of the evidence: how search visibility expanded across queries, content surfaces, AI search and local discovery.</p></div>
            </div>

            <article className="sh-proof-gsc">
              <div className="sh-proof-topline"><span>01 / GOOGLE SEARCH CONSOLE</span><small>REPORTED COMPARISON</small></div>
              <div className="sh-proof-gsc-main">
                <div className="sh-proof-kpi"><div className="sh-proof-kpi-label"><CaseIcon name="chart"/><small>CLICKS</small></div><div><strong>7.56K</strong><em>+56.5%</em></div><span>from 4.83K in the previous period</span></div>
                <div className="sh-proof-spark" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><b/></div>
                <div className="sh-proof-kpi secondary"><div className="sh-proof-kpi-label"><CaseIcon name="search"/><small>IMPRESSIONS</small></div><div><strong>283K</strong><em>+10.1%</em></div><span>from 257K in the previous period</span></div>
              </div>
              <div className="sh-proof-foot"><span>READ THE SIGNAL</span><p>The reported comparison shows movement in both search clicks and visibility — the two core GSC signals presented in the July report.</p></div>
              <div className="sh-evidence-placeholder sh-evidence-placeholder-gsc">
                <div><span>SCREENSHOT SLOT / GSC OVERVIEW</span><strong>Add original Google Search Console performance screenshot here</strong><p>Use the GSC capture showing the clicks + impressions trend and the comparison period. Recommended: full-width crop of the Performance overview, with the date range visible.</p><code>/public/case/student-housing/gsc-overview.png</code></div>
              </div>
            </article>

            <article className="sh-proof-ai">
              <div className="sh-proof-topline"><span>02 / AI SEARCH VISIBILITY</span><small>SELECTED REPORTING PERIOD</small></div>
              <div className="sh-proof-ai-head"><div className="sh-proof-ai-number"><CaseIcon name="ai"/><strong>136K</strong></div><div><span>AI SEARCH IMPRESSIONS</span><p>Blog content formed the dominant visibility layer in the report, with 9 of the top 10 visible pages being blog articles.</p></div></div>
              <div className="sh-proof-ai-list">
                <div className="lead"><b>34,370</b><span>Hostel vs PG vs Apartment</span><i style={{width:'100%'}} /></div>
                <div><b>19,881</b><span>Hostel Packing Checklist</span><i style={{width:'58%'}} /></div>
                <div><b>16,209</b><span>Student Housing homepage</span><i style={{width:'47%'}} /></div>
                <div><b>13,451</b><span>Student Hostel Cost in Mumbai</span><i style={{width:'39%'}} /></div>
              </div>
            </article>

            <article className="sh-proof-queries">
              <div className="sh-proof-topline"><span>03 / SEARCH QUERY EXPLORER</span><small>GSC / JULY 2026</small></div>
              <div className="sh-query-intro"><h3>Different intents.<br/><em>One connected system.</em></h3><p>The query set shows discovery happening through location, property and generic accommodation intent.</p></div>
              <div className="sh-query-premium-list">
                <div className="sh-q-row sh-q-head"><span>INTENT / QUERY</span><b>CLICKS</b><b>IMPR.</b></div>
                <div className="sh-q-row"><span><i className="sh-q-icon"><CaseIcon name="pin" /></i><em>LOCATION</em> student housing mumbai</span><b>999</b><b>2,016</b></div>
                <div className="sh-q-row"><span><i className="sh-q-icon"><CaseIcon name="property" /></i><em>PROPERTY</em> elita by student housing</span><b>408</b><b>2,638</b></div>
                <div className="sh-q-row"><span><i className="sh-q-icon"><CaseIcon name="property" /></i><em>PROPERTY</em> atlantis by student housing</span><b>246</b><b>949</b></div>
                <div className="sh-q-row"><span><i className="sh-q-icon"><CaseIcon name="property" /></i><em>PROPERTY</em> avenue by student housing</span><b>174</b><b>1,473</b></div>
                <div className="sh-q-row"><span><i className="sh-q-icon"><CaseIcon name="search" /></i><em>GENERIC</em> student hostels in mumbai</span><b>55</b><b>471</b></div>
              </div>
              <div className="sh-evidence-placeholder sh-evidence-placeholder-query">
                <div><span>OPTIONAL SCREENSHOT SLOT / GSC QUERIES</span><strong>Add original Search Console query screenshot here</strong><p>Use this only if you want stronger proof of query-level performance. Show the Queries table with the same reporting period and the relevant branded + generic queries.</p><code>/public/case/student-housing/gsc-queries.png</code></div>
              </div>
            </article>

            <article className="sh-proof-ga4">
              <div className="sh-proof-topline"><span>04 / FROM SEARCH → TO VISIT</span><small>GA4 / SOURCE CAPTURE</small></div>
              <div className="sh-ga4-composition">
                <div className="sh-ga4-copy"><span className="sh-ga4-kicker">DOWNSTREAM BEHAVIOUR</span><h3>Search visibility is only the first signal.</h3><p>The companion GA4 capture shows how traffic arrives through Organic Search, Direct and Paid Search, giving the case study a second measurement layer.</p><div className="sh-ga4-statline"><div><CaseIcon name="analytics"/><b>113</b><span>ACTIVE USERS</span></div><div><CaseIcon name="arrow"/><b>125</b><span>SESSIONS</span></div><div><CaseIcon name="chart"/><b>48</b><span>ENGAGED</span></div></div></div>
                <div className="sh-ga4-frame"><div className="sh-ga4-chrome"><span>● ● ●</span><b>GOOGLE ANALYTICS 4</b><small>ORIGINAL SOURCE IMAGE</small></div><div className="sh-ga4-placeholder"><span>SCREENSHOT SLOT / GA4</span><strong>Add original GA4 traffic acquisition screenshot here</strong><p>Use the actual GA4 capture showing Organic Search / Direct / Paid Search and the traffic metrics for the selected period. Keep the Google Analytics UI visible enough to establish source authenticity.</p><code>/public/case/student-housing/ga4-traffic-acquisition.png</code></div></div>
              </div>
            </article>

            <div className="sh-proof-conclusion">
              <div><span>05 / WHAT THE DATA REVEALED</span><h3>The result is not one number.<br/><em>It is a network of entry points.</em></h3></div>
              <div className="sh-proof-findings"><p><b>CONTENT</b> 10 newly published and indexed blogs generated 900 organic clicks and 97,262 impressions.</p><p><b>PROPERTY</b> Named listings appeared as measurable branded search destinations.</p><p><b>SEARCH</b> Traditional and AI-powered search became visible layers in the reporting.</p><p><b>LOCAL</b> July reporting included activity across Elita, Avenue and Atlantis profiles.</p></div>
            </div>
          </div>
        ) : (
          <div className="case3-evidence-grid">
            {study.evidence ? study.evidence.map(([num, title, text]: string[], i: number) => <figure key={num} className={i === 0 ? 'case3-evidence-feature' : i === 3 ? 'case3-evidence-wide' : ''}><EvidenceVisual type={`student-${i + 1}`} data={study.evidence} /><figcaption><span>{num}</span><div><b>{title}</b><p>{text}</p></div></figcaption></figure>) : <>
              <figure className="case3-evidence-feature"><EvidenceVisual type="architecture" /><figcaption><span>01</span><div><b>Search-intent architecture</b><p>Website structure organized around study-abroad discovery, destination, course and university intent.</p></div></figcaption></figure>
              <figure><EvidenceVisual type="course" /><figcaption><span>02</span><div><b>Course-page system</b><p>A repeatable framework for dedicated course pages, beginning with MBA and Computer Science.</p></div></figcaption></figure>
              <figure><EvidenceVisual type="technical" /><figcaption><span>03</span><div><b>Technical foundation</b><p>Documented sitemap, robots, canonical, schema, GSC and GA4 setup.</p></div></figcaption></figure>
              <figure className="case3-evidence-wide"><EvidenceVisual type="content" /><figcaption><span>04</span><div><b>Content system</b><p>Informational and commercial topics mapped to student research and conversion intent.</p></div></figcaption></figure>
            </>}
          </div>
        )}
      </section>

      <section className="case3-next case3-reveal-section">
        <div className="case3-section-top"><span>06 / WAY FORWARD</span><span>ROADMAP / NOT COMPLETED OUTCOMES</span></div>
        {project.slug === 'student-housing' ? <>
          <div className="case3-next-head"><div><span className="case3-kicker">THE NEXT LAYER</span><h2>{study.nextTitle || <>Build the<br/><em>next search layer.</em></>}</h2></div><div className="case3-next-intro"><span className="case3-next-status">ROADMAP / 2026</span><p>{study.nextIntro || 'The roadmap identifies further expansion areas. These are roadmap items, not completed outcomes.'}</p></div></div>
          <div className="case3-roadmap">{study.next.map((item: string, i: number) => <article key={item}>
            <div className="case3-roadmap-top"><span>{String(i + 1).padStart(2, '0')}</span><CaseIcon name={['property','pin','search','chart','analytics'][i] || 'arrow'} /></div>
            <div className="case3-roadmap-body"><b>{['Listings','Location + college','Internal linking','Technical layer','Measurement'][i]}</b><p>{item}</p></div>
            <small>PLANNED</small>
          </article>)}</div>
        </> : <>
          <div className="case3-next-head"><h2>{study.nextTitle || <>Scale the<br/><em>system.</em></>}</h2><p>{study.nextIntro || 'The roadmap identifies further expansion areas. These are roadmap items, not completed outcomes.'}</p></div>
          <ol>{study.next.map((item: string, i: number) => <li key={item}><span>{String(i + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol>
        </>}
      </section>

      <section id="insight" className="case3-close">
        {project.slug === 'student-housing' ? <div className="case3-close-layout">
          <div className="case3-close-copy">
            <span>{study.closeLabel || `${project.title.toUpperCase()} / CASE STUDY`}</span>
            <h2>A search problem is rarely<br/><em>just a ranking problem.</em></h2>
            <p>The useful work happens underneath: intent, structure, content, technical foundations and the paths connecting them.</p>
            <div className="case3-close-links"><Link data-magnetic href="/work">← Selected work</Link><Link data-magnetic href="/contact">Start a conversation <b>↗</b></Link></div>
          </div>
          <div className="case3-close-system" aria-label="Connected search system summary">
            <div className="case3-close-orbit orbit-a"><span>LOCATION</span></div>
            <div className="case3-close-orbit orbit-b"><span>COLLEGE</span></div>
            <div className="case3-close-orbit orbit-c"><span>PROPERTY</span></div>
            <div className="case3-close-core"><CaseIcon name="search"/><b>DISCOVERY</b><small>→ ENQUIRY</small></div>
            <i className="close-line close-line-a"/><i className="close-line close-line-b"/><i className="close-line close-line-c"/>
          </div>
        </div> : <>
          <span>{study.closeLabel || `${project.title.toUpperCase()} / CASE STUDY`}</span><h2>A search problem is rarely<br/><em>just a ranking problem.</em></h2><p>The useful work happens underneath: intent, structure, content, technical foundations and the paths connecting them.</p><div className="case3-close-links"><Link data-magnetic href="/work">← Selected work</Link><Link data-magnetic href="/contact">Start a conversation <b>↗</b></Link></div>
        </>}
      </section>
      <footer className="work-page-footer"><span>TEJAS KAMBLE · SEO ANALYST / SEARCH GROWTH STRATEGIST</span><span>INDIA · WORKING GLOBALLY</span></footer>
    </main>
  );
}
