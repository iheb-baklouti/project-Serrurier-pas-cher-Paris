import React from 'react';
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
import DynamicStructuredData from '@/components/DynamicStructuredData';
import { getPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('paris-10eme');
  
  if (metadata) {
    return {
      ...metadata,
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
      other: {
        'geo.region': 'FR-75',
        'geo.placename': 'Paris 10ème',
        'geo.position': '48.8756;2.3622',
        'ICBM': '48.8756, 2.3622',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 10ème – Canal Saint-Martin, République | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 10ème ⚡ Intervention rapide Canal Saint-Martin, République, Gare du Nord. Serrurier d'urgence près métro République, Gare du Nord, Gare de l'Est. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 10ème, serrurier pas cher Paris 10ème, serrurier Canal Saint-Martin, serrurier République, serrurier Gare du Nord, serrurier Gare de l'Est, serrurier République, serrurier Gare du Nord, serrurier Gare de l'Est, dépannage serrurier Paris 10ème, ouverture de porte Paris 10ème, urgence serrurerie Paris 10ème, artisan serrurier Paris 10ème, serrurerie 24h Paris 10ème, serrurier urgence Paris 10ème, prix serrurier Paris 10ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-10eme',
      title: "Serrurier Paris 10ème – Canal Saint-Martin, République | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 10ème. Intervention rapide Canal Saint-Martin, République. Dépannage serrurier urgent près métro République, Gare du Nord. Ouverture de porte dès 95€, artisan serrurier qualifié 10ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 10ème - Canal Saint-Martin" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 10ème – Canal Saint-Martin, République | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 10ème. Intervention rapide Canal Saint-Martin, République. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-10eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 10ème',
      'geo.position': '48.8756;2.3622',
      'ICBM': '48.8756, 2.3622',
    },
  };
}

export default function Paris10eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={10} />
      <Header />
      <HeroArrondissement arrondissement={10} />
      <Services />
      <ContentArrondissement arrondissement={10} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={10} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
