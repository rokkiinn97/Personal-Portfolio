import type { Metadata } from 'next';
import '../styles/globals.css';
import SiteEffects from '../components/SiteEffects';

export const metadata: Metadata = {
  title: 'Tejas Kamble — SEO Analyst & Search Growth Strategist',
  description: 'Tejas Kamble is an SEO Analyst and Search Growth Strategist working across technical SEO, international SEO, local search, information architecture, content and digital growth.',
  metadataBase: new URL('https://tj-portfolio-nine.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Tejas Kamble — SEO Analyst & Search Growth Strategist', description: 'Search, websites, content, data and business.', type: 'website' },
  robots: { index: true, follow: true },
  twitter: { card: 'summary_large_image', title: 'Tejas Kamble — SEO Analyst & Search Growth Strategist', description: 'Search, websites, content, data and business.' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><SiteEffects />{children}</body></html>;
}
