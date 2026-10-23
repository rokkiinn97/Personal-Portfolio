import type { SVGProps } from 'react';

type BrandLogoProps = {
  variant?: 'mark' | 'wordmark';
  className?: string;
  href?: string;
};

function TKMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 82" role="img" aria-label="TK" {...props}>
      <path fill="currentColor" d="M8 8h73l-10 10H51v55H36V18H8z" />
      <path fill="currentColor" d="M49 25h13v48H49z" />
      <path fill="currentColor" d="M59 43 82 20h15L69 47l29 26H81L59 52z" />
      <path d="M8 72 91 8" fill="none" stroke="currentColor" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function BrandLogo({ variant = 'mark', className = '', href }: BrandLogoProps) {
  const content = variant === 'wordmark' ? (
    <span className={`brand-lockup ${className}`}>
      <TKMark className="brand-lockup-mark" aria-hidden="true" />
      <span className="brand-lockup-copy">
        <strong>TEJAS KAMBLE</strong>
        <small>SEO ANALYST · SEARCH GROWTH STRATEGIST</small>
      </span>
    </span>
  ) : (
    <span className={`brand-mark-only ${className}`}>
      <TKMark aria-hidden="true" />
    </span>
  );

  return href ? <a href={href} aria-label="Tejas Kamble — Home">{content}</a> : content;
}
