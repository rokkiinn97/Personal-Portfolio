import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Tejas Kamble | SEO Analyst & Search Growth Strategist',
  description: 'Selected SEO and search growth work across international search, technical SEO, content architecture, local search and complex websites.',
  alternates: { canonical: '/work' },
  openGraph: { title: 'Work — Tejas Kamble | SEO Analyst & Search Growth Strategist', description: 'Selected SEO and search growth work across international search, technical SEO, content architecture, local search and complex websites.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
