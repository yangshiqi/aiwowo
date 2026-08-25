// Content structures for the router.com landing page clone.

export interface CustomerQuote {
  /** Company logo image (public path) */
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  authorName: string;
  authorCompany: string;
  /** Headshot image (public path) */
  headshotSrc: string;
}

export interface LabPost {
  date: string;
  title: string;
  description: string;
  href: string;
}

export interface FaqItem {
  question: string;
  /** Answer paragraphs (rendered in order) */
  answer: string[];
}

export interface ProviderLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BenchmarkPoint {
  /** Model logo public path */
  logoSrc: string;
  /** Percentage position within plot area */
  leftPct: number;
  topPct: number;
  label?: string;
}

export interface HeroStep {
  number: string;
  title: string;
}
