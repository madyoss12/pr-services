'use client';

interface BlogJsonLdProps {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  authorName: string;
  images: string[];
  url: string;
}

export default function BlogJsonLd({
  title,
  description,
  publishDate,
  modifiedDate,
  authorName,
  images,
  url,
}: BlogJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: images,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PR Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://prservices.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
