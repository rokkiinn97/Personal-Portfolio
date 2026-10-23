import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study — Tejas Kamble | SEO Analyst & Search Growth Strategist',
  description: 'Evidence-led SEO case study by Tejas Kamble.',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
