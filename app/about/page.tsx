import type { Metadata } from 'next';
import { experience } from '../../data/site';
import BrandLogo from '../../components/BrandLogo';

export const metadata: Metadata = {
  title: 'About — Tejas Kamble | SEO Analyst & Search Growth Strategist',
  description: 'About Tejas Kamble — an SEO Analyst and Search Growth Strategist working across search, websites, content, data and growth.',
  alternates: { canonical: '/about' },
};

const capabilities = [
  ['01', 'SEARCH', 'Technical, on-page, local, international and off-page SEO.'],
  ['02', 'STRUCTURE', 'Information architecture, keyword mapping, internal linking and crawl/indexation.'],
  ['03', 'CONTENT', 'Search intent, content systems, topical coverage, AEO and GEO.'],
  ['04', 'MEASUREMENT', 'GSC, GA4, GTM, Clarity, reporting and conversion context.'],
  ['05', 'BUILD', 'WordPress, HTML, CSS, PHP and modern web environments.'],
  ['06', 'GROWTH', 'Connecting search visibility to the wider business problem rather than treating rankings as the endpoint.'],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="nav about-nav">
        <a className="brand brand-logo-link" href="/"><BrandLogo variant="wordmark" /></a>
        <div className="nav-center">SEARCH / DIGITAL GROWTH</div>
        <div className="nav-links">
          <a href="/work">Work</a>
          <a href="/about" className="nav-active" aria-current="page">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="about-hero">
        <div className="about-grid-bg" aria-hidden="true" />
        <div className="about-meta"><span>01 / ABOUT</span><span>TEJAS KAMBLE</span></div>
        <div className="about-hero-grid">
          <div className="about-kicker">SEO / SEARCH / SYSTEMS</div>
          <div>
            <h1>Search is<br/><em>the surface.</em></h1>
            <p className="about-lead">I work on the systems underneath it — technical foundations, information architecture, content, local and international search, analytics and the business context connecting them.</p>
          </div>
          <div className="about-stats">
            <div><strong>07</strong><span>YEARS<br/>PROFESSIONAL</span></div>
            <div><strong>06</strong><span>YEARS<br/>SEO</span></div>
            <div><strong>01</strong><span>CORE IDEA<br/>CONTEXT FIRST</span></div>
          </div>
        </div>
        <div className="about-hero-line"><span>INDIA · WORKING GLOBALLY</span><span>SEARCH / DIGITAL GROWTH</span></div>
      </section>

      <section className="about-statement">
        <div className="about-section-label">02 / POSITION</div>
        <div className="about-statement-grid">
          <span className="about-index">WHY</span>
          <h2>I don't start with rankings.<br/><em>I start with the problem.</em></h2>
          <p>Good search work starts by understanding what needs to change, who needs to find it, what the search engine can understand, where the website creates friction and what evidence will show that the work mattered.</p>
        </div>
      </section>

      <section className="about-career">
        <div className="about-section-label"><span>03 / THE PATH</span><span>2019 → {new Date().getFullYear()}</span></div>
        <div className="about-career-head"><h2>The work<br/><em>kept getting deeper.</em></h2><p>Four chapters, moving from digital fundamentals into search as a broader system.</p></div>
        <div className="about-career-list">
          {experience.map((item, i) => (
            <article key={item.company}>
              <div className="about-career-no">0{i + 1}</div>
              <div className="about-career-year">{item.year}</div>
              <div className="about-career-main"><span>{item.stage}</span><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.note}</p></div>
              <div className="about-career-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-capabilities">
        <div className="about-section-label"><span>04 / WHAT I BRING</span><span>SYSTEM / SIGNAL / GROWTH</span></div>
        <div className="about-cap-head"><h2>Different disciplines.<br/><em>One search system.</em></h2><p>The useful part is not knowing a long list of tools. It is knowing where each discipline fits — and what question it should answer.</p></div>
        <div className="about-cap-grid">
          {capabilities.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}
        </div>
      </section>

      <section className="about-personal">
        <div className="about-personal-visual"><div className="about-photo-placeholder"><span>05 / BEYOND SEARCH</span><b>FRAME / 001</b><i>+</i></div></div>
        <div className="about-personal-copy"><span>OBSERVATION / PERSONAL</span><h2>Observation<br/><em>is part of the job.</em></h2><p>Photography is a parallel way of thinking: notice the structure, the detail, the relationship between things, and what most people move past. That same instinct informs how I look at websites and search behaviour.</p><div className="about-tags"><span>PHOTOGRAPHY</span><span>DESIGN</span><span>MOTORCYCLES</span><span>VISUAL CULTURE</span></div></div>
      </section>

      <section className="about-now">
        <div className="about-section-label"><span>06 / NOW</span><span>{new Date().getFullYear()}</span></div>
        <div className="about-now-grid"><div><span className="about-now-label">CURRENT QUESTION</span><h2>What does<br/><em>visibility</em> mean now?</h2></div><p>SEO remains the foundation. I am also working across AEO, GEO, analytics and the changing relationship between traditional search and AI discovery.</p></div>
        <div className="about-now-footer"><span>TEJAS KAMBLE</span><a href="/contact">START A CONVERSATION ↗</a></div>
      </section>

      <footer className="about-footer"><span>TEJAS KAMBLE / SEO ANALYST / SEARCH GROWTH STRATEGIST</span><span><a href="/">HOME</a> · <a href="/contact">CONTACT</a> · <a className="linkedin-link" href="https://www.linkedin.com/in/kambletejas/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></span><span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
