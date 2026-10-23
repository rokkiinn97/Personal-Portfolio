'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard';
import { projects, experience, toolkit } from '../data/site';
import BrandLogo from '../components/BrandLogo';

gsap.registerPlugin(ScrollTrigger);

function SignalIcon({ type }: { type: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (type === 'search') return <svg {...common}><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>;
  if (type === 'audience') return <svg {...common}><circle cx="12" cy="8" r="3"/><path d="M6 20c.7-3.2 2.8-5 6-5s5.3 1.8 6 5"/><path d="M18 10c2.3.3 3.7 1.5 4 3.5M6 10c-2.3.3-3.7 1.5-4 3.5"/></svg>;
  if (type === 'technical') return <svg {...common}><path d="M8 3 3 8l5 5"/><path d="m16 3 5 5-5 5"/><path d="m14 3-4 18"/></svg>;
  if (type === 'data') return <svg {...common}><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V3"/></svg>;
  if (type === 'build') return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h5M8 17h8"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.5 2.2 3.5 5 3.5 8s-1 5.8-3.5 8c-2.5-2.2-3.5-5-3.5-8S9.5 6.2 12 4Z"/></svg>;
}

function EvolutionIcon({ type }: { type: string }) {
  const common = { width: 30, height: 30, viewBox: '0 0 30 30', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (type === 'seo') return <svg {...common}><circle cx="13" cy="13" r="7"/><path d="m18 18 7 7"/><path d="M10 13h6"/></svg>;
  if (type === 'aeo') return <svg {...common}><path d="M6 7h18M6 14h12M6 21h8"/><circle cx="22" cy="21" r="3"/></svg>;
  if (type === 'geo') return <svg {...common}><circle cx="15" cy="15" r="9"/><path d="M6 15h18M15 6c3 3 3 15 0 18M15 6c-3 3-3 15 0 18"/></svg>;
  return <svg {...common}><path d="M8 22 15 8l7 14"/><path d="M11 17h8"/><circle cx="15" cy="15" r="12"/></svg>;
}




function NowSection() {
  const focusAreas = [
    'TECHNICAL SEO',
    'INFORMATION ARCHITECTURE',
    'CONTENT SYSTEMS',
    'AEO / GEO',
    'SEARCH BEHAVIOUR'
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="now-v7">
      <div className="now-v7-top reveal">
        <span className="now-v7-index">09 / NOW</span>
        <span className="now-v7-kicker">CURRENT FOCUS</span>
        <span className="now-v7-side">SEARCH / DISCOVERY / SYSTEMS</span>
      </div>
      <div className="now-v7-main">
        <div className="now-v7-statement reveal">
          <span className="now-v7-label">WHERE THE WORK IS MOVING</span>
          <h2>SEO meets<br/><em>AI discovery.</em></h2>
          <p>Currently working at the intersection of technical SEO, information architecture, content systems, analytics, AEO/GEO and the changing search landscape.</p>
        </div>
        <div className="now-v7-focus reveal" aria-label="Current focus areas">
          <div className="now-v7-focus-head"><span>ACTIVE SIGNAL</span><b>05 AREAS</b></div>
          <div className="now-v7-focus-list">
            {focusAreas.map((area, i) => (
              <button type="button" key={area} className={`now-focus-item ${active === i ? 'is-active' : ''}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-pressed={active === i}>
                <span>0{i + 1}</span><strong>{area}</strong><i>↗</i>
              </button>
            ))}
          </div>
          <div className="now-v7-signal" aria-live="polite"><span className="now-signal-dot"/><span className="now-signal-line"/><b>{focusAreas[active]}</b></div>
        </div>
      </div>
      <div className="now-v7-footer reveal"><span>SEARCH <i/> DISCOVERY <i/> SYSTEMS</span><strong>THE LANDSCAPE KEEPS CHANGING.</strong></div>
    </section>
  );
}
function ToolkitSection() {
  const descriptors = [
    'DISCOVER / ANALYSE / PLAN',
    'CRAWL / OPTIMISE / IMPLEMENT',
    'MEASURE / INSIGHT / IMPROVE',
    'DEVELOP / CUSTOMISE / DEPLOY'
  ];
  const labels = ['SEARCH', 'TECHNICAL', 'DATA', 'BUILD'];
  const [active, setActive] = useState(-1);
  const activeTitle = active >= 0 ? labels[active] : 'TOOLKIT';
  const activeHint = active >= 0 ? descriptors[active] : 'SYSTEM / 07';

  return (
    <section className="toolkit-v18">
      <div className="toolkit-v18-head reveal">
        <span className="toolkit-v18-index">07 / TOOLKIT</span>
        <div className="toolkit-v18-title">
          <p>THE WORKING LAYER</p>
          <h2>Tools are<br/><em>the instruments.</em></h2>
        </div>
        <div className="toolkit-v18-note">
          <span>01—04</span>
          <p>Search systems are built across discovery, diagnosis, measurement and implementation. These are the tools I work with every day.</p>
        </div>
      </div>

      <div className="toolkit-v18-stage reveal">
        <div className="toolkit-v18-axis axis-x" aria-hidden="true" />
        <div className="toolkit-v18-axis axis-y" aria-hidden="true" />
        <div className="toolkit-v18-orbit orbit-outer" aria-hidden="true" />
        <div className="toolkit-v18-orbit orbit-mid" aria-hidden="true" />
        <div className="toolkit-v18-orbit orbit-inner" aria-hidden="true" />
        <div className="toolkit-v18-points" aria-hidden="true"><i/><i/><i/><i/></div>
        <div className="toolkit-v18-connectors" data-system-line aria-hidden="true"><i/><i/><i/><i/></div>

        <div className={`toolkit-v18-core ${active >= 0 ? 'is-active' : ''}`} aria-live="polite">
          <small>{activeHint}</small>
          <strong>TK</strong>
          <span>{activeTitle}</span>
          <i />
        </div>

        {toolkit.map((item, i) => (
          <button
            type="button"
            key={item.title}
            className={`toolkit-v18-node node-${i + 1} ${active === i ? 'is-active' : ''}`} data-cursor="SELECT"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={`${item.title} toolkit: ${item.items}`}
          >
            <span className="toolkit-v18-node-top"><b>0{i + 1}</b><i>↗</i></span>
            <span className="toolkit-v18-node-content">
              <span className="toolkit-v18-node-icon"><SignalIcon type={item.title.toLowerCase()}/></span>
              <strong>{item.title}</strong>
              <em>{descriptors[i]}</em>
              <span className="toolkit-v18-tools" aria-label={`${item.title} tools`}>{item.items.split(' · ').map(tool => <small key={tool}>{tool}</small>)}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="toolkit-v18-foot reveal">
        <div><span>DISCOVER</span><i>•</i><span>DIAGNOSE</span><i>•</i><span>BUILD</span><i>•</i><span>MEASURE</span></div>
        <strong><span>THE TOOL IS A MEANS.</span> THE SYSTEM IS THE SKILL.</strong>
      </div>
    </section>
  );
}

export default function Home() {
  const page = useRef<HTMLElement>(null);
  const [formSent, setFormSent] = useState(false);
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const project = String(data.get('project') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Portfolio enquiry — ${project || 'SEO / Search'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}\n\n${message}`);
    setFormSent(true);
    window.location.href = `mailto:tejas30797@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    let heroEl: HTMLElement | null = null;
    let moveHandler: ((e: MouseEvent) => void) | null = null;
    let queryTimer: ReturnType<typeof setInterval> | null = null;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
      intro.from('.hero-v7-kicker, .hero-v7-status, .hero-v7-location, .hero-index', { y: 16, opacity: 0, duration: .65, stagger: .08 })
        .from('.hero-name span', { yPercent: 115, opacity: 0, duration: 1.05, stagger: .1 }, '-=.25')
        .from('.hero-role, .hero-meta-line, .hero-v7-bottom', { y: 18, opacity: 0, duration: .7, stagger: .08 }, '-=.55')
        .from('.search-console-v7', { clipPath: 'inset(0 0 100% 0)', duration: 1.05 }, '-=.7')
        .from('.hero-v7-float', { scale: .7, opacity: 0, duration: .45, stagger: .1 }, '-=.5');

      gsap.to('.scanner-beam', { xPercent: 760, duration: 3.2, repeat: -1, repeatDelay: .7, ease: 'power2.inOut' });
      const heroSignalMap = document.querySelector('.hero-signal-map');
      if (heroSignalMap) gsap.to(heroSignalMap, { backgroundPosition: '80px 0', duration: 5, repeat: -1, ease: 'none' });
      gsap.to('.hero-signal-dot', { x: 18, opacity: .45, duration: 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.hero-signal-node', { scale: 1.035, duration: .65, repeat: -1, yoyo: true, stagger: .18, ease: 'sine.inOut' });
      gsap.to('.query-line-fill', { scaleX: 1, duration: 2.2, repeat: -1, repeatDelay: .4, ease: 'power2.inOut', transformOrigin: 'left center' });
      gsap.to('.hero-query-dot', { xPercent: 420, duration: 2.2, repeat: -1, repeatDelay: .4, ease: 'power2.inOut' });
      heroEl = document.querySelector('.hero-v7');
      const heroSystem = document.querySelector('.hero-system-v7');
      const heroName = document.querySelector('.hero-name-block');
      moveHandler = (e: MouseEvent) => {
        if (!heroEl || !heroSystem || !heroName || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = heroEl.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        gsap.to(heroSystem, { x: x * 10, y: y * 7, duration: .8, ease: 'power3.out', overwrite: true });
        gsap.to(heroName, { x: x * -4, y: y * -2, duration: .9, ease: 'power3.out', overwrite: true });
      };
      heroEl?.addEventListener('mousemove', moveHandler);
      const queries = ['international SEO strategy','medical tourism india','property investment panama','study abroad destination','local search visibility'];
      let qi = 0;
      queryTimer = setInterval(() => {
        const el = document.querySelector('.query-cycle');
        const rail = document.querySelector('.hero-query-cycle');
        if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        qi = (qi + 1) % queries.length;
        gsap.to(el, { opacity: 0, y: 5, duration: .16, onComplete: () => { el.textContent = queries[qi]; gsap.to(el, { opacity: 1, y: 0, duration: .22 }); if (rail) rail.textContent = queries[qi]; } });
      }, 2800);

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => gsap.from(el, {
        y: 45, opacity: 0, duration: .85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }));

      gsap.utils.toArray<HTMLElement>('.section-rule').forEach((el) => gsap.from(el, {
        scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }));

      gsap.utils.toArray<HTMLElement>('.signal-node').forEach((el, i) => gsap.from(el, {
        y: 30, opacity: 0, duration: .6, delay: i * .08, ease: 'power3.out',
        scrollTrigger: { trigger: document.querySelector('.signal-system-v6') || undefined, start: 'top 78%', once: true }
      }));


      const signalSystem = document.querySelector<HTMLElement>('.signal-system-v6');
      document.querySelectorAll<HTMLElement>('.signal-node').forEach((node, index) => {
        const activate = () => {
          document.querySelectorAll('.signal-node').forEach((n) => n.classList.remove('is-active'));
          node.classList.add('is-active');
          if (signalSystem) {
            signalSystem.style.setProperty('--active-signal', String(index));
            signalSystem.classList.add('is-interacting');
          }
        };
        node.addEventListener('pointerenter', activate);
        node.addEventListener('focusin', activate);
      });
    }, page);
    return () => { if (heroEl && moveHandler) heroEl.removeEventListener('mousemove', moveHandler); if (queryTimer) clearInterval(queryTimer); ctx.revert(); };
  }, []);

  return (
    <main ref={page}>
      <nav className="nav">
        <a className="brand brand-logo-link" data-magnetic data-cursor="HOME" href="#top"><BrandLogo variant="wordmark" /></a>
        <div className="nav-center">SEARCH / DIGITAL GROWTH</div>
        <div className="nav-links"><a data-magnetic data-cursor="WORK" href="/work">Work</a><a data-magnetic data-cursor="ABOUT" href="/about">About</a><a data-magnetic data-cursor="CONTACT" href="/contact">Contact</a></div>
      </nav>

      <section id="top" className="hero-v6 hero-v7">
        <div className="hero-v7-grid-bg" aria-hidden="true"/>
        <div className="hero-meta-band">
          <span className="hero-index">01 — 10</span>
          <span className="hero-v7-location">INDIA · WORKING GLOBALLY</span>
          <span className="hero-v7-status">SEARCH SYSTEM / ONLINE <i/></span>
        </div>
        <div className="hero-query-rail" aria-hidden="true">
          <span>LIVE QUERY</span>
          <strong className="hero-query-cycle">international SEO strategy</strong>
          <i className="query-line"><b className="query-line-fill"/><em className="hero-query-dot"/></i>
          <span className="hero-query-intent">INTENT → SIGNAL → DISCOVERY</span>
        </div>
        <div className="hero-grid-v7">
          <div className="hero-name-block">
            <div className="hero-v7-kicker">SEARCH / DIGITAL GROWTH</div>
            <h1 className="hero-name"><span>TEJAS</span><span>KAMBLE</span></h1>
            <p className="hero-role">SEO ANALYST / SEARCH GROWTH STRATEGIST</p>
            <div className="hero-meta-line">07+ YEARS / 06 YEARS SEO</div>
          </div>
          <div className="hero-system hero-system-v7">
            <div className="search-console search-console-v7">
              <div className="console-top"><span>SEARCH SYSTEM</span><span>SYS / 001</span></div>
              <div className="console-query"><span className="console-search-icon">⌕</span><strong className="query-cycle">USER QUERY</strong><i className="cursor-block"/></div>
              <div className="console-subquery">SEARCH PROBLEM / USER NEED</div>
              <div className="hero-signal-map">
                <div className="hero-signal-line line-a"/><div className="hero-signal-line line-b"/>
                <div className="hero-signal-nodes">
                  {['SEARCH','STRUCTURE','CONTENT','CRAWL','INDEX','VISIBILITY','GROWTH'].map((label, i) => (
                    <div className={`hero-signal-node hero-signal-${i}`} key={label}><span>{label}</span><b>{String(i+1).padStart(2,'0')}</b></div>
                  ))}
                </div>
                <span className="hero-signal-dot"/>
                <div className="scanner-beam"/>
              </div>
              <div className="console-signal-label">SIGNAL / INTENT → STRUCTURE</div>
              <div className="console-footer"><span>01—07 / SIGNAL PATH</span><span>SCROLL ↘</span></div>
            </div>
            <div className="hero-v7-float float-one">TECHNICAL</div>
            <div className="hero-v7-float float-two">AEO / GEO</div>
            <div className="hero-v7-float float-three">CONTENT</div>
          </div>
        </div>
        <div className="hero-v7-bottom">
          <div className="hero-v7-work-note"><span>THE WORK</span><p>I work across technical SEO, information architecture, content, local and international search, analytics and digital growth — connecting search behaviour to the systems behind visibility.</p></div>
          <div className="hero-v7-actions"><a data-magnetic data-cursor="EXPLORE" href="/work">View selected work <span>↗</span></a><a data-magnetic data-cursor="TALK" href="#contact">Start a conversation <span>↗</span></a></div>
        </div>
        <div className="hero-footer-v6"><span>SEARCH / TECHNICAL / CONTENT / DATA / LOCAL / INTERNATIONAL / AEO / GEO</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="manifesto-v8">
        <div className="section-meta manifesto-meta-v8"><span>02 / POSITION</span></div>
        <div className="position-v8-grid">
          <div className="position-v8-copy reveal">
            <span className="position-v8-kicker">I DON'T START WITH RANKINGS.</span>
            <h2>I start<br/><em>with the problem.</em></h2>
            <p className="position-v8-lead">Rankings are an outcome. I focus on the real problem behind the search — understanding the user, the business goal, and what needs to change.</p>
          </div>
          <div className="position-v8-visual reveal">
            <div className="position-v8-orbit">
              <div className="position-v8-ring ring-one"/><div className="position-v8-ring ring-two"/><div className="position-v8-ring ring-three"/>
              <span className="orbit-label orbit-top">USER INTENT</span>
              <span className="orbit-label orbit-right">STRUCTURE</span>
              <span className="orbit-label orbit-bottom">CONTENT</span>
              <span className="orbit-label orbit-left">TRUST</span>
              <span className="orbit-label orbit-diagonal">MEASUREMENT</span>
              <i className="orbit-dot dot-top"/><i className="orbit-dot dot-right"/><i className="orbit-dot dot-bottom"/><i className="orbit-dot dot-left"/><i className="orbit-dot dot-diagonal"/>
              <div className="position-v8-core">WHY?</div>
            </div>
          </div>
          <div className="position-v8-notes reveal">
            <article><span>THE IDEA</span><p>A ranking is an output. The useful work is understanding what sits underneath it — intent, structure, content, technical constraints, trust and measurement.</p></article>
            <article><span>HOW I APPROACH SEARCH</span><p>Before tactics, I want to know what the business is trying to change and where the user's problem actually sits.</p></article>
          </div>
        </div>
        <div className="position-v8-flow reveal">
          <article><span>01</span><strong>PROBLEM</strong><p>Understand the real need</p></article>
          <i/>
          <article><span>02</span><strong>CONTEXT</strong><p>Look at the bigger picture</p></article>
          <i/>
          <article><span>03</span><strong>SYSTEM</strong><p>Find what connects the dots</p></article>
          <i/>
          <article><span>04</span><strong>SIGNAL</strong><p>Turn insight into action</p></article>
          <div className="position-v8-end"><b>→</b><span>A MORE MEANINGFUL<br/>APPROACH TO SEO</span></div>
        </div>
      </section>

      <section id="approach" className="approach-v6">
        <div className="section-meta"><span>03 / HOW I THINK</span><span>FROM QUESTION TO SIGNAL</span></div>
        <div className="approach-head-v6 reveal"><div><span className="blue-label">SYSTEM MAP</span><h2>Find<br/><em>the signal.</em></h2></div><p>Search is rarely isolated. Business goals shape the audience problem; the audience shapes the search; search exposes gaps in the website; measurement shows what actually changed.</p></div>
        <div className="approach-principle reveal"><span>THE CONNECTION</span><strong>Every search problem has a system around it.</strong><i>→</i><p>I move from business outcome to user need, then from query to experience and finally to measurable change.</p></div>
        <div className="signal-system-v6 reveal">
          <div className="signal-path" data-system-line><span className="path-beam"/></div>
          {[['01','BUSINESS','Outcome','What needs to move?','data'],['02','AUDIENCE','Need','What does the user need?','audience'],['03','SEARCH','Intent','How does that need appear?','search'],['04','WEBSITE','Experience','Where does the journey break?','build'],['05','MEASUREMENT','Change','What actually changed?','data']].map((item) => (
            <div className="signal-node" tabIndex={0} key={item[0]}><span className="node-number">{item[0]}</span><div className="node-icon"><SignalIcon type={item[4]} /></div><div className="node-copy"><strong>{item[1]}</strong><small>{item[2]}</small><p>{item[3]}</p></div><b>VIEW LOGIC ↗</b></div>
          ))}
        </div>
      </section>

      <section id="work" className="work-v6">
        <div className="work-head-v6 reveal"><div><span className="blue-label">04 / SELECTED WORK</span><h2>Different<br/><em>search environments.</em></h2></div><div className="work-intro"><div className="work-count">06 <span>PROJECTS</span></div><p>Healthcare, education, real estate, relocation and student accommodation. Different search behaviours, different site structures. The common thread is turning intent into useful systems.</p></div></div>
        <div className="projects-v6">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        <div className="work-note-v6 reveal"><div className="note-icon">↗</div><div><span>CASE STUDIES / NEXT LAYER</span><strong>Real reports. Real dashboards. Real evidence.</strong></div><p>Project evidence will be added from the GSC, GA4, crawl reports, dashboards and source material you provide. No invented metrics.</p></div>
      </section>



      <section id="journey" className="journey-v6">
        <div className="journey-head-v6 reveal"><div><span>05 / CAREER</span><h2>The work<br/><em>kept getting deeper.</em></h2></div><div className="career-mark"><span>2019</span><i>→</i><span>PRESENT</span></div></div>
        <div className="career-timeline-v7 reveal">
          <div className="career-track-v7" aria-hidden="true"><span className="career-segment-signal"/><i/><b/><em/></div>
          {experience.map((item, i) => <article className="career-step-v7" key={item.company} data-career-step={i + 1}>
            <div className="career-step-head"><span>{item.year}</span><b>0{i + 1}</b></div>
            <button className="career-step-node" type="button" aria-label={`Career chapter ${i + 1}: ${item.company}`} data-cursor="SELECT"><i/></button>
            <div className="career-step-copy">
              <span className="career-stage">{item.stage}</span>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.note}</p>
              <em>SEARCH / CHAPTER {String(i + 1).padStart(2,'0')}</em>
            </div>
          </article>)}
        </div>
        <div className="career-progression-v7 reveal">
          <span>WHAT CHANGED</span>
          <strong>DIGITAL <i>→</i> SEO <i>→</i> SCALE <i>→</i> SEARCH SYSTEMS</strong>
        </div>
      </section>

      <section className="evolution-v6">
        <div className="evolution-meta">06 / SEARCH EVOLUTION</div>
        <div className="evolution-head-v6 reveal"><h2>Search keeps<br/><em>expanding.</em></h2><p>SEO remains the foundation. AEO and GEO change where answers appear, how information is interpreted, and what it means to be visible.</p></div>
        <div className="evolution-track-v6 reveal"><div className="evo-connection" data-system-line aria-hidden="true"><span/></div>{[['seo','01','SEO','DISCOVERABLE','Technical foundations, content, authority and structure.'],['aeo','02','AEO','ANSWERABLE','Information shaped for answer surfaces and clearer retrieval.'],['geo','03','GEO','REFERENCEABLE','Entities, context and content that can be surfaced and cited by AI systems.'],['next','04','?','WHAT’S NEXT','Search will keep changing. The system has to keep learning.']].map((item, i) => <div className="evo-step-v6" key={item[1]} tabIndex={0} data-cursor="TRACE"><div className="evo-icon"><EvolutionIcon type={item[0]} /></div><span>{item[1]}</span><b>{item[2]}</b><small>{item[3]}</small><p>{item[4]}</p>{i < 3 && <i>→</i>}{i === 3 && <em>OPEN QUESTION</em>}<div className="evo-progress"/></div>)}</div>
      </section>

      <ToolkitSection />

      <section className="beyond-v6">
        <div className="beyond-image-v6 reveal"><div className="beyond-photo-v6"/><span className="image-index">08 / BEYOND SEARCH</span><div className="image-crosshair">+</div></div>
        <div className="beyond-copy-v6 reveal"><span>OBSERVATION / PERSONAL</span><h2>Observation<br/><em>is part of the job.</em></h2><p>When I'm not looking at search behaviour, I'm usually looking at the world through a camera — architecture, streets, machines, light and the details people pass without noticing.</p><div className="tags"><span>PHOTOGRAPHY</span><span>DESIGN</span><span>MOTORCYCLES</span><span>VISUAL CULTURE</span></div></div>
      </section>

      <NowSection />

      <section id="contact" className="contact-v6">
        <div className="contact-grid-lines"/><div className="blue-orbit-v6"><span/></div><span className="blue-label">10 / CONTACT</span><div className="contact-layout-v6"><div className="contact-copy-v6"><div className="contact-kicker reveal">SEO / SEARCH / SYSTEMS / GROWTH</div><h2 className="reveal">Let's make it<br/><em>make sense.</em></h2><p className="reveal">SEO, websites, search strategy or a problem that doesn't fit neatly into one box.</p><a className="contact-link-v6 reveal" href="mailto:tejas30797@gmail.com">tejas30797@gmail.com <span>↗</span></a></div><form className="contact-form-v6 reveal" onSubmit={handleContactSubmit}><div className="form-heading"><span>START A CONVERSATION</span><b>01 / 05</b></div><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label><label>What are you working on?<select name="project" defaultValue=""><option value="" disabled>Select one</option><option>SEO / Search strategy</option><option>Website / technical SEO</option><option>Content / AEO / GEO</option><option>Local / international search</option><option>Something else</option></select></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me what needs solving..." /></label><button type="submit">{formSent ? 'OPENING EMAIL…' : 'SEND ENQUIRY'} <span>↗</span></button><small className="form-note">This form opens your email client with the details pre-filled.</small></form></div><footer><span>TEJAS KAMBLE / SEO ANALYST / SEARCH GROWTH STRATEGIST</span><span>DESIGNED + CODED WITH INTENT</span><span><a className="linkedin-link" href="https://www.linkedin.com/in/kambletejas/" target="_blank" rel="noreferrer">LINKEDIN ↗</a> · © {new Date().getFullYear()}</span></footer>
      </section>
    </main>
  );
}
