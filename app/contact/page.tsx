'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import BrandLogo from '../../components/BrandLogo';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  return (
    <main className="contact-page">
      <nav className="nav contact-nav">
        <a className="brand brand-logo-link" href="/"><BrandLogo variant="wordmark" /></a>
        <div className="nav-center">SEARCH / DIGITAL GROWTH</div>
        <div className="nav-links">
          <a href="/work">Work</a><a href="/about">About</a><a href="/contact" className="nav-active" aria-current="page">Contact</a>
        </div>
      </nav>

      <section className="contact-page-hero">
        <div className="contact-page-grid" aria-hidden="true" />
        <div className="contact-page-orbit" aria-hidden="true"><span /></div>
        <div className="contact-page-meta"><span>01 / CONTACT</span><span>SEO / SEARCH / SYSTEMS / GROWTH</span></div>
        <div className="contact-page-layout">
          <div className="contact-page-copy">
            <span className="contact-page-kicker">START A CONVERSATION</span>
            <h1>Let's make it<br/><em>make sense.</em></h1>
            <p>Have a search problem, website question, growth challenge or project that does not fit neatly into one box? Send the context. We can start there.</p>
            <a className="contact-page-email" href="mailto:tejas30797@gmail.com">tejas30797@gmail.com <span>↗</span></a>
            <a className="contact-page-linkedin" href="https://www.linkedin.com/in/kambletejas/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <div className="contact-page-notes"><span>BASED IN INDIA</span><span>WORKING GLOBALLY</span><span>SEARCH / DIGITAL GROWTH</span></div>
          </div>

          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="contact-form-top"><span>ENQUIRY / FORM</span><b>05 FIELDS</b></div>
            <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label>
            <label>What are you working on?<select name="project" defaultValue=""><option value="" disabled>Select one</option><option>SEO / Search strategy</option><option>Website / technical SEO</option><option>Content / AEO / GEO</option><option>Local / international search</option><option>Something else</option></select></label>
            <label>Message<textarea name="message" required rows={6} placeholder="Tell me what needs solving..." /></label>
            <button type="submit">{formSent ? 'OPENING EMAIL…' : 'SEND ENQUIRY'} <span>↗</span></button>
            <small>This form opens your email client with the details pre-filled.</small>
          </form>
        </div>
        <div className="contact-page-bottom"><span>CONTEXT FIRST</span><span>QUESTION → SYSTEM → SIGNAL</span><span>SCROLL / EXPLORE ↓</span></div>
      </section>
    </main>
  );
}
