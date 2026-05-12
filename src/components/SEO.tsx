import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/og-image.jpg', 
  url = 'https://greenstoneatlantic.ca',
  type = 'website'
}) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Green Stone Atlantic",
    "description": "Halifax's premium landscaping and hardscaping company. Specializing in patios, walls, and luxury lawn care.",
    "url": "https://greenstoneatlantic.ca",
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Halifax",
      "addressRegion": "NS",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6488,
      "longitude": -63.5752
    },
    "potentialAction": {
      "@type": "QuoteAction",
      "target": "https://greenstoneatlantic.ca/quote"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
    "areaServed": "Halifax Regional Municipality"
  };

  return (
    <Helmet>
      <title>{title} | {BUSINESS_INFO.name}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | ${BUSINESS_INFO.name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | ${BUSINESS_INFO.name}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Local SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};
