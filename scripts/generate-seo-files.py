#!/usr/bin/env python3
"""Script pour générer les fichiers SEO pour tous les arrondissements"""

import os
from pathlib import Path

arrondissements = [
    (3, 'paris-3eme', '3ème', '75003', 48.8630, 2.3624, '3eme'),
    (4, 'paris-4eme', '4ème', '75004', 48.8546, 2.3522, '4eme'),
    (5, 'paris-5eme', '5ème', '75005', 48.8449, 2.3447, '5eme'),
    (6, 'paris-6eme', '6ème', '75006', 48.8442, 2.3372, '6eme'),
    (7, 'paris-7eme', '7ème', '75007', 48.8565, 2.3134, '7eme'),
    (8, 'paris-8eme', '8ème', '75008', 48.8756, 2.3117, '8eme'),
    (9, 'paris-9eme', '9ème', '75009', 48.8722, 2.3376, '9eme'),
    (10, 'paris-10eme', '10ème', '75010', 48.8722, 2.3624, '10eme'),
    (11, 'paris-11eme', '11ème', '75011', 48.8630, 2.3798, '11eme'),
    (12, 'paris-12eme', '12ème', '75012', 48.8449, 2.3798, '12eme'),
    (13, 'paris-13eme', '13ème', '75013', 48.8322, 2.3561, '13eme'),
    (14, 'paris-14eme', '14ème', '75014', 48.8331, 2.3264, '14eme'),
    (15, 'paris-15eme', '15ème', '75015', 48.8412, 2.2992, '15eme'),
    (16, 'paris-16eme', '16ème', '75016', 48.8566, 2.2764, '16eme'),
    (17, 'paris-17eme', '17ème', '75017', 48.8846, 2.3217, '17eme'),
    (18, 'paris-18eme', '18ème', '75018', 48.8932, 2.3481, '18eme'),
    (19, 'paris-19eme', '19ème', '75019', 48.8827, 2.3745, '19eme'),
    (20, 'paris-20eme', '20ème', '75020', 48.8630, 2.3984, '20eme'),
]

base_dir = Path('app')

for num, slug, name, postal, lat, lng, fn in arrondissements:
    dir_path = base_dir / slug
    dir_path.mkdir(exist_ok=True)
    
    # Générer page.tsx
    page_content = f"""import React from 'react';
import type {{ Metadata }} from 'next';
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

export const metadata: Metadata = {{
  title: 'Serrurier pas cher Paris {name} – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris {name} ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié {name} arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 27 55 88 55',
  keywords: 'serrurier Paris {name}, serrurier pas cher Paris {name}, dépannage serrurier Paris {name}, ouverture de porte Paris {name}, urgence serrurerie Paris {name}, artisan serrurier Paris {name}, serrurerie 24h Paris {name}, serrurier urgence Paris {name}, prix serrurier Paris {name}',
  authors: [{{ name: 'Serrurier pas cher Paris' }}],
  robots: {{
    index: true,
    follow: true,
    googleBot: {{
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }},
  }},
  openGraph: {{
    type: 'website',
    locale: 'fr_FR',
    url: 'https://serrurier-pas-cher.paris/{slug}',
    title: 'Serrurier pas cher Paris {name} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris {name}. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié {name} arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  }},
  twitter: {{
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris {name} – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris {name}. Dépannage serrurier urgent, ouverture de porte dès 95€.',
  }},
  alternates: {{
    canonical: 'https://serrurier-pas-cher.paris/{slug}',
  }},
  other: {{
    'geo.region': 'FR-75',
    'geo.placename': 'Paris {name}',
    'geo.position': '{lat};{lng}',
    'ICBM': '{lat}, {lng}',
  }},
}};

export default function Paris{fn}() {{
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={{{num}}} />
      <Services />
      <ContentArrondissement arrondissement={{{num}}} />
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
}}
"""
    
    # Générer layout.tsx
    layout_content = f"""import {{ Metadata }} from 'next'

export const metadata: Metadata = {{
  metadataBase: new URL('https://serrurier-pas-cher.paris'),
}}

export default function Paris{fn}Layout({{
  children,
}}: {{
  children: React.ReactNode
}}) {{
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Serrurier pas cher Paris {name}',
            image: 'https://serrurier-pas-cher.paris/logo.png',
            '@id': 'https://serrurier-pas-cher.paris/{slug}',
            url: 'https://serrurier-pas-cher.paris/{slug}',
            telephone: '+33627558855',
            priceRange: '€€',
            address: {{
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressRegion: 'Île-de-France',
              postalCode: '{postal}',
              addressCountry: 'FR',
            }},
            geo: {{
              '@type': 'GeoCoordinates',
              latitude: {lat},
              longitude: {lng},
            }},
            openingHoursSpecification: {{
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            }},
            areaServed: {{ '@type': 'City', name: 'Paris {name}' }},
            serviceArea: {{
              '@type': 'GeoCircle',
              geoMidpoint: {{ '@type': 'GeoCoordinates', latitude: {lat}, longitude: {lng} }},
            }},
            hasOfferCatalog: {{
              '@type': 'OfferCatalog',
              name: 'Services de serrurerie',
              itemListElement: [
                {{
                  '@type': 'Offer',
                  itemOffered: {{ '@type': 'Service', name: 'Ouverture de porte', description: 'Ouverture de porte d\\'urgence 24h/24' }},
                }},
                {{
                  '@type': 'Offer',
                  itemOffered: {{ '@type': 'Service', name: 'Dépannage serrurerie', description: 'Dépannage serrurier urgent' }},
                }},
                {{
                  '@type': 'Offer',
                  itemOffered: {{ '@type': 'Service', name: 'Installation serrures', description: 'Installation de serrures et systèmes de sécurité' }},
                }},
              ],
            }},
            aggregateRating: {{ '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '127' }},
          }}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://serrurier-pas-cher.paris' }},
              {{ '@type': 'ListItem', position: 2, name: 'Paris {name}', item: 'https://serrurier-pas-cher.paris/{slug}' }},
            ],
          }}),
        }}
      />
      {{children}}
    </>
  )
}}
"""
    
    (dir_path / 'page.tsx').write_text(page_content, encoding='utf-8')
    (dir_path / 'layout.tsx').write_text(layout_content, encoding='utf-8')
    print(f'✓ {slug} - page.tsx et layout.tsx générés')

print(f'\n✅ Tous les fichiers SEO ont été générés pour {len(arrondissements)} arrondissements!')

