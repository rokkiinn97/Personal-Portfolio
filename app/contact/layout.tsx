import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Tejas Kamble | SEO Analyst & Search Growth Strategist',
  description: 'Contact Tejas Kamble about SEO, search strategy, websites, content systems, analytics and digital growth.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact — Tejas Kamble | SEO Analyst & Search Growth Strategist', description: 'Contact Tejas Kamble about SEO, search strategy, websites, content systems, analytics and digital growth.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
