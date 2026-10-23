import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Tejas Kamble | SEO Analyst & Search Growth Strategist',
  description: 'About Tejas Kamble — an SEO Analyst and Search Growth Strategist working across search, websites, content, data and growth.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Tejas Kamble | SEO Analyst & Search Growth Strategist',
    description: 'About Tejas Kamble — an SEO Analyst and Search Growth Strategist working across search, websites, content, data and growth.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
