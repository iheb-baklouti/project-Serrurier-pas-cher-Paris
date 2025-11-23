// Script Node.js pour générer tous les fichiers SEO
const fs = require('fs');
const path = require('path');

const arrondissements = [
  { num: 4, slug: 'paris-4eme', name: '4ème', postal: '75004', lat: 48.8546, lng: 2.3522, fn: '4eme' },
  { num: 5, slug: 'paris-5eme', name: '5ème', postal: '75005', lat: 48.8449, lng: 2.3447, fn: '5eme' },
  { num: 6, slug: 'paris-6eme', name: '6ème', postal: '75006', lat: 48.8442, lng: 2.3372, fn: '6eme' },
  { num: 7, slug: 'paris-7eme', name: '7ème', postal: '75007', lat: 48.8565, lng: 2.3134, fn: '7eme' },
  { num: 8, slug: 'paris-8eme', name: '8ème', postal: '75008', lat: 48.8756, lng: 2.3117, fn: '8eme' },
  { num: 9, slug: 'paris-9eme', name: '9ème', postal: '75009', lat: 48.8722, lng: 2.3376, fn: '9eme' },
  { num: 10, slug: 'paris-10eme', name: '10ème', postal: '75010', lat: 48.8722, lng: 2.3624, fn: '10eme' },
  { num: 11, slug: 'paris-11eme', name: '11ème', postal: '75011', lat: 48.8630, lng: 2.3798, fn: '11eme' },
  { num: 12, slug: 'paris-12eme', name: '12ème', postal: '75012', lat: 48.8449, lng: 2.3798, fn: '12eme' },
  { num: 13, slug: 'paris-13eme', name: '13ème', postal: '75013', lat: 48.8322, lng: 2.3561, fn: '13eme' },
  { num: 14, slug: 'paris-14eme', name: '14ème', postal: '75014', lat: 48.8331, lng: 2.3264, fn: '14eme' },
  { num: 15, slug: 'paris-15eme', name: '15ème', postal: '75015', lat: 48.8412, lng: 2.2992, fn: '15eme' },
  { num: 16, slug: 'paris-16eme', name: '16ème', postal: '75016', lat: 48.8566, lng: 2.2764, fn: '16eme' },
  { num: 17, slug: 'paris-17eme', name: '17ème', postal: '75017', lat: 48.8846, lng: 2.3217, fn: '17eme' },
  { num: 18, slug: 'paris-18eme', name: '18ème', postal: '75018', lat: 48.8932, lng: 2.3481, fn: '18eme' },
  { num: 19, slug: 'paris-19eme', name: '19ème', postal: '75019', lat: 48.8827, lng: 2.3745, fn: '19eme' },
  { num: 20, slug: 'paris-20eme', name: '20ème', postal: '75020', lat: 48.8630, lng: 2.3984, fn: '20eme' },
];

arrondissements.forEach(arr => {
  const dir = path.join('app', arr.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Page.tsx
  const pageContent = `import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroArrondissement from '@/components/HeroArrondissement';
import Services from '@/components/Services';
import ContentArrondissement from '@/components/ContentArrondissement';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris ${arr.name} ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié ${arr.name} arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 27 55 88 55',
  keywords: 'serrurier Paris ${arr.name}, serrurier pas cher Paris ${arr.name}, dépannage serrurier Paris ${arr.name}, ouverture de porte Paris ${arr.name}, urgence serrurerie Paris ${arr.name}, artisan serrurier Paris ${arr.name}, serrurerie 24h Paris ${arr.name}, serrurier urgence Paris ${arr.name}, prix serrurier Paris ${arr.name}',
  authors: [{ name: 'Serrurier pas cher Paris' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://serrurier-pas-cher.paris/${arr.slug}',
    title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris ${arr.name}. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié ${arr.name} arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris ${arr.name}. Dépannage serrurier urgent, ouverture de porte dès 95€.',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/${arr.slug}',
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris ${arr.name}',
    'geo.position': '${arr.lat};${arr.lng}',
    'ICBM': '${arr.lat}, ${arr.lng}',
  },
};

export default function Paris${arr.fn}() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={${arr.num}} />
      <Services />
      <ContentArrondissement arrondissement={${arr.num}} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
`;

  // Layout.tsx
  const layoutContent = `import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://serrurier-pas-cher.paris'),
}

export default function Paris${arr.fn}Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Serrurier pas cher Paris ${arr.name}',
            image: 'https://serrurier-pas-cher.paris/logo.png',
            '@id': 'https://serrurier-pas-cher.paris/${arr.slug}',
            url: 'https://serrurier-pas-cher.paris/${arr.slug}',
            telephone: '+33627558855',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressRegion: 'Île-de-France',
              postalCode: '${arr.postal}',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: ${arr.lat},
              longitude: ${arr.lng},
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            areaServed: { '@type': 'City', name: 'Paris ${arr.name}' },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: { '@type': 'GeoCoordinates', latitude: ${arr.lat}, longitude: ${arr.lng} },
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services de serrurerie',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Ouverture de porte', description: 'Ouverture de porte d\\'urgence 24h/24' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Dépannage serrurerie', description: 'Dépannage serrurier urgent' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Installation serrures', description: 'Installation de serrures et systèmes de sécurité' },
                },
              ],
            },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '127' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://serrurier-pas-cher.paris' },
              { '@type': 'ListItem', position: 2, name: 'Paris ${arr.name}', item: 'https://serrurier-pas-cher.paris/${arr.slug}' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent);
  fs.writeFileSync(path.join(dir, 'layout.tsx'), layoutContent);
  console.log(`✓ ${arr.slug} - page.tsx et layout.tsx créés`);
});

console.log(`\n✅ Tous les fichiers SEO ont été générés pour ${arrondissements.length} arrondissements!`);

