// Script pour mettre à jour toutes les pages d'arrondissement avec le SEO optimisé
// Coordonnées géographiques pour chaque arrondissement

const arrondissements = [
  { num: 1, slug: 'paris-1er', name: '1er', postalCode: '75001', lat: 48.8606, lng: 2.3376 },
  { num: 2, slug: 'paris-2eme', name: '2ème', postalCode: '75002', lat: 48.8698, lng: 2.3412 },
  { num: 3, slug: 'paris-3eme', name: '3ème', postalCode: '75003', lat: 48.8630, lng: 2.3624 },
  { num: 4, slug: 'paris-4eme', name: '4ème', postalCode: '75004', lat: 48.8546, lng: 2.3522 },
  { num: 5, slug: 'paris-5eme', name: '5ème', postalCode: '75005', lat: 48.8449, lng: 2.3447 },
  { num: 6, slug: 'paris-6eme', name: '6ème', postalCode: '75006', lat: 48.8442, lng: 2.3372 },
  { num: 7, slug: 'paris-7eme', name: '7ème', postalCode: '75007', lat: 48.8565, lng: 2.3134 },
  { num: 8, slug: 'paris-8eme', name: '8ème', postalCode: '75008', lat: 48.8756, lng: 2.3117 },
  { num: 9, slug: 'paris-9eme', name: '9ème', postalCode: '75009', lat: 48.8722, lng: 2.3376 },
  { num: 10, slug: 'paris-10eme', name: '10ème', postalCode: '75010', lat: 48.8722, lng: 2.3624 },
  { num: 11, slug: 'paris-11eme', name: '11ème', postalCode: '75011', lat: 48.8630, lng: 2.3798 },
  { num: 12, slug: 'paris-12eme', name: '12ème', postalCode: '75012', lat: 48.8449, lng: 2.3798 },
  { num: 13, slug: 'paris-13eme', name: '13ème', postalCode: '75013', lat: 48.8322, lng: 2.3561 },
  { num: 14, slug: 'paris-14eme', name: '14ème', postalCode: '75014', lat: 48.8331, lng: 2.3264 },
  { num: 15, slug: 'paris-15eme', name: '15ème', postalCode: '75015', lat: 48.8412, lng: 2.2992 },
  { num: 16, slug: 'paris-16eme', name: '16ème', postalCode: '75016', lat: 48.8566, lng: 2.2764 },
  { num: 17, slug: 'paris-17eme', name: '17ème', postalCode: '75017', lat: 48.8846, lng: 2.3217 },
  { num: 18, slug: 'paris-18eme', name: '18ème', postalCode: '75018', lat: 48.8932, lng: 2.3481 },
  { num: 19, slug: 'paris-19eme', name: '19ème', postalCode: '75019', lat: 48.8827, lng: 2.3745 },
  { num: 20, slug: 'paris-20eme', name: '20ème', postalCode: '75020', lat: 48.8630, lng: 2.3984 },
]

// Template pour page.tsx avec metadata SEO
const generatePageTemplate = (arr: typeof arrondissements[0]) => {
  const nameDisplay = arr.num === 1 ? '1er' : arr.num === 2 ? '2ème' : arr.num === 3 ? '3ème' : `${arr.num}ème`
  
  return `import React from 'react';
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
  title: 'Serrurier pas cher Paris ${nameDisplay} – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris ${nameDisplay} ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié ${nameDisplay} arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 27 55 88 55',
  keywords: 'serrurier Paris ${nameDisplay}, serrurier pas cher Paris ${nameDisplay}, dépannage serrurier Paris ${nameDisplay}, ouverture de porte Paris ${nameDisplay}, urgence serrurerie Paris ${nameDisplay}, artisan serrurier Paris ${nameDisplay}, serrurerie 24h Paris ${nameDisplay}, serrurier urgence Paris ${nameDisplay}, prix serrurier Paris ${nameDisplay}',
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
    title: 'Serrurier pas cher Paris ${nameDisplay} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris ${nameDisplay}. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié ${nameDisplay} arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris ${nameDisplay} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris ${nameDisplay}. Dépannage serrurier urgent, ouverture de porte dès 95€.',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/${arr.slug}',
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris ${nameDisplay}',
    'geo.position': '${arr.lat};${arr.lng}',
    'ICBM': '${arr.lat}, ${arr.lng}',
  },
};

export default function Paris${arr.num === 1 ? '1er' : arr.num === 2 ? '2eme' : arr.num === 3 ? '3eme' : arr.num + 'eme'}() {
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
`
}

// Template pour layout.tsx avec structured data
const generateLayoutTemplate = (arr: typeof arrondissements[0]) => {
  const nameDisplay = arr.num === 1 ? '1er' : arr.num === 2 ? '2ème' : arr.num === 3 ? '3ème' : `${arr.num}ème`
  const functionName = arr.num === 1 ? 'Paris1er' : arr.num === 2 ? 'Paris2eme' : arr.num === 3 ? 'Paris3eme' : `Paris${arr.num}eme`
  
  return `import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://serrurier-pas-cher.paris'),
}

export default function ${functionName}Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Serrurier pas cher Paris ${nameDisplay}',
            image: 'https://serrurier-pas-cher.paris/logo.png',
            '@id': 'https://serrurier-pas-cher.paris/${arr.slug}',
            url: 'https://serrurier-pas-cher.paris/${arr.slug}',
            telephone: '+33627558855',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressRegion: 'Île-de-France',
              postalCode: '${arr.postalCode}',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: ${arr.lat},
              longitude: ${arr.lng},
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
              opens: '00:00',
              closes: '23:59',
            },
            areaServed: {
              '@type': 'City',
              name: 'Paris ${nameDisplay}',
            },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: ${arr.lat},
                longitude: ${arr.lng},
              },
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services de serrurerie',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Ouverture de porte',
                    description: 'Ouverture de porte d\\'urgence 24h/24',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dépannage serrurerie',
                    description: 'Dépannage serrurier urgent',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Installation serrures',
                    description: 'Installation de serrures et systèmes de sécurité',
                  },
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '127',
            },
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://serrurier-pas-cher.paris',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Paris ${nameDisplay}',
                item: 'https://serrurier-pas-cher.paris/${arr.slug}',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
`
}

// Générer les fichiers
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

arrondissements.forEach(arr => {
  const dir = join(process.cwd(), 'app', arr.slug)
  
  // Créer le dossier s'il n'existe pas
  mkdirSync(dir, { recursive: true })
  
  // Générer page.tsx
  const pageContent = generatePageTemplate(arr)
  writeFileSync(join(dir, 'page.tsx'), pageContent)
  
  // Générer layout.tsx
  const layoutContent = generateLayoutTemplate(arr)
  writeFileSync(join(dir, 'layout.tsx'), layoutContent)
  
  console.log(`✓ ${arr.slug} - page.tsx et layout.tsx générés`)
})

console.log(`\n✅ Tous les fichiers SEO ont été générés pour ${arrondissements.length} arrondissements!`)

