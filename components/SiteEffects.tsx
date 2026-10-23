'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SiteEffects() {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    const progress = document.querySelector<HTMLElement>('.site-progress');
    const cursor = document.querySelector<HTMLElement>('.site-cursor');
    const ring = document.querySelector<HTMLElement>('.site-cursor-ring');
    const label = document.querySelector<HTMLElement>('.site-cursor-label');
    const preloader = document.querySelector<HTMLElement>('.site-preloader');
    const scrollFill = document.querySelector<HTMLElement>('.scroll-indicator b');
    const isDesktop = () => finePointer.matches && !reduceMotion.matches;
    const cleanups: Array<() => void> = [];
    let raf = 0;
    let introDone = false;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const gsapContext = gsap.context(() => {
      const finishPreloader = () => {
        if (introDone || !preloader) return;
        introDone = true;
        document.body.classList.add('site-ready');

        if (reduceMotion.matches) {
          setShowPreloader(false);
          return;
        }

        gsap.timeline({ onComplete: () => setShowPreloader(false) })
          .to('.preloader-word', { yPercent: -110, opacity: 0, duration: 0.45, ease: 'power3.in' })
          .to('.preloader-question', { y: 12, opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=.3')
          .to('.preloader-signal', { scaleX: 1, duration: 0.65, ease: 'power3.inOut' }, '-=.2')
          .to(preloader, { clipPath: 'inset(0 0 100% 0)', duration: 0.85, ease: 'power4.inOut' }, '-=.05');
      };

      if (preloader) {
        const minimum = window.setTimeout(finishPreloader, 1150);
        const onLoad = () => window.setTimeout(finishPreloader, 180);
        window.addEventListener('load', onLoad, { once: true });
        cleanups.push(() => {
          window.clearTimeout(minimum);
          window.removeEventListener('load', onLoad);
        });
      }

      const render = () => {
        if (progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = max > 0 ? window.scrollY / max : 0;
          const clamped = Math.min(1, Math.max(0, ratio));
          progress.style.transform = `scaleX(${clamped})`;
          if (scrollFill) scrollFill.style.transform = `scaleX(${clamped})`;
        }
        if (isDesktop() && cursor && ring) {
          rx += (mx - rx) * 0.16;
          ry += (my - ry) * 0.16;
          cursor.style.transform = `translate3d(${mx}px,${my}px,0)`;
          ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        }
        raf = requestAnimationFrame(render);
      };

      const onPointerMove = (event: PointerEvent) => {
        mx = event.clientX;
        my = event.clientY;
        if (!isDesktop()) return;
        const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('a,button,[data-cursor],.project-card-v6,[data-cursor-zone]');
        if (target && cursor && ring && label) {
          const cursorText = target.dataset.cursor || target.dataset.cursorZone || (target.classList.contains('project-card-v6') ? 'VIEW' : target.tagName === 'A' ? 'OPEN' : 'SELECT');
          label.textContent = cursorText;
          ring.classList.add('is-hovering');
        } else {
          ring?.classList.remove('is-hovering');
        }
      };

      const onPointerLeave = () => {
        cursor?.classList.add('is-hidden');
        ring?.classList.add('is-hidden');
      };
      const onPointerEnter = () => {
        cursor?.classList.remove('is-hidden');
        ring?.classList.remove('is-hidden');
      };
      const onKey = (event: KeyboardEvent) => {
        if (event.key !== '/') return;
        const active = document.activeElement;
        if (active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName)) return;
        const first = document.querySelector<HTMLAnchorElement>('.nav-links a');
        if (first) {
          event.preventDefault();
          first.focus();
        }
      };

      document.querySelectorAll<HTMLElement>('[data-system-line]').forEach((line) => {
        gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.15, ease: 'power3.inOut', scrollTrigger: { trigger: line, start: 'top 88%', once: true } });
      });
      document.querySelectorAll<HTMLElement>('.signal-node').forEach((node, i) => {
        gsap.fromTo(node, { y: 28, opacity: 0, '--node-progress': '0%' }, { y: 0, opacity: 1, '--node-progress': '100%', duration: 0.72, delay: i * 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.signal-system-v6', start: 'top 76%', once: true } });
      });
      document.querySelectorAll<HTMLElement>('.evo-step-v6').forEach((step, i) => {
        gsap.fromTo(step, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.evolution-track-v6', start: 'top 78%', once: true } });
      });

      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in-view');
        });
      }, { threshold: 0.12 });
      document.querySelectorAll<HTMLElement>('.manifesto-v8,.approach-v6,.work-v6,.journey-v6,.evolution-v6,.toolkit-v18,.beyond-v6,.now-v7,.contact-v6,.case3-reveal-section').forEach((section) => sectionObserver.observe(section));

      document.querySelectorAll<HTMLElement>('.case3-system-map .case3-node').forEach((node, i) => {
        gsap.fromTo(node, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .65, delay: i * .1, ease: 'power3.out', scrollTrigger: { trigger: '.case3-system-map', start: 'top 82%', once: true } });
      });
      document.querySelectorAll<HTMLElement>('.case3-evidence-grid figure').forEach((figure, i) => {
        gsap.fromTo(figure, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: .75, delay: i * .08, ease: 'power3.out', scrollTrigger: { trigger: '.case3-evidence-grid', start: 'top 80%', once: true } });
      });

      const cleanupMagnets: Array<() => void> = [];
      if (isDesktop()) {
        document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((element) => {
          const move = (event: PointerEvent) => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
            const y = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
            gsap.to(element, { x, y, duration: 0.35, ease: 'power3.out', overwrite: true });
          };
          const leave = () => gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.5)', overwrite: true });
          element.addEventListener('pointermove', move);
          element.addEventListener('pointerleave', leave);
          cleanupMagnets.push(() => {
            element.removeEventListener('pointermove', move);
            element.removeEventListener('pointerleave', leave);
          });
        });
      }

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('mouseleave', onPointerLeave);
      document.addEventListener('mouseenter', onPointerEnter);
      document.addEventListener('keydown', onKey);
      raf = requestAnimationFrame(render);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('mouseleave', onPointerLeave);
        document.removeEventListener('mouseenter', onPointerEnter);
        document.removeEventListener('keydown', onKey);
        cleanupMagnets.forEach((cleanup) => cleanup());
        sectionObserver.disconnect();
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      gsapContext.revert();
      document.body.classList.remove('is-route-leaving');
    };
  }, [pathname]);

  return (
    <>
      {showPreloader && (
        <div className="site-preloader" aria-hidden="true">
          <div className="preloader-top"><span>TK / 01</span><span>SEARCH SYSTEM</span></div>
          <div className="preloader-core">
            <div className="preloader-word">TK</div>
            <div className="preloader-question">WHAT ARE YOU LOOKING FOR?</div>
            <div className="preloader-queries"><span>SEARCH GROWTH</span><span>INFORMATION ARCHITECTURE</span><span>TECHNICAL SEO</span></div>
            <div className="preloader-signal"><i/><i/><i/><i/><i/></div>
            <div className="preloader-system"><span>INTENT</span><i>→</i><span>STRUCTURE</span><i>→</i><span>CONTENT</span><i>→</i><span>TRUST</span><i>→</i><span>MEASUREMENT</span></div>
          </div>
          <div className="preloader-bottom"><span>THE SEARCH BEGINS</span><span>TEJAS KAMBLE</span></div>
        </div>
      )}
      <div className="site-progress" aria-hidden="true" />
      <div className="scroll-indicator" aria-hidden="true"><span>SCROLL</span><i><b/></i></div>
      <div className="site-cursor" aria-hidden="true"><span /></div>
      <div className="site-cursor-ring" aria-hidden="true"><span className="site-cursor-label">MOVE</span></div>
      <div className="site-system-mark" aria-hidden="true"><img src="/brand/tk-mark.svg" alt="" /><i /></div>
    </>
  );
}
