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
  const metadata = await getPageMetadata('paris-3eme');
  
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
        'geo.placename': 'Paris 3ème',
        'geo.position': '48.863;2.3622',
        'ICBM': '48.863, 2.3622',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 3ème – Marais, Temple | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 3ème ⚡ Intervention rapide Marais, Temple, Arts-et-Métiers. Serrurier d'urgence près métro Arts et Métiers, Temple, République. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 3ème, serrurier pas cher Paris 3ème, serrurier Marais, serrurier Temple, serrurier Arts-et-Métiers, serrurier Arts et Métiers, serrurier Temple, serrurier République, dépannage serrurier Paris 3ème, ouverture de porte Paris 3ème, urgence serrurerie Paris 3ème, artisan serrurier Paris 3ème, serrurerie 24h Paris 3ème, serrurier urgence Paris 3ème, prix serrurier Paris 3ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-3eme/',
      title: "Serrurier Paris 3ème – Marais, Temple | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 3ème. Intervention rapide Marais, Temple. Dépannage serrurier urgent près métro Arts et Métiers, Temple. Ouverture de porte dès 95€, artisan serrurier qualifié 3ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 3ème - Marais" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 3ème – Marais, Temple | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 3ème. Intervention rapide Marais, Temple. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-3eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 3ème',
      'geo.position': '48.863;2.3622',
      'ICBM': '48.863, 2.3622',
    },
  };
}

export default function Paris3eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={3} />
      <Header />
      <HeroArrondissement arrondissement={3} />
      <Services />
      <ContentArrondissement arrondissement={3} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={3} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
