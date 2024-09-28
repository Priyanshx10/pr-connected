import { Metadata } from 'next'

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function generateMetadata({ title, description, canonical }: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'PR-Connect',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: canonical,
    },
  }
}