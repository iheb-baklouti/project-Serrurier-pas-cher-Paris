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
  const metadata = await getPageMetadata('paris-12eme');
  
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
        'geo.placename': 'Paris 12ème',
        'geo.position': '48.8448;2.37',
        'ICBM': '48.8448, 2.37',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 12ème – Bercy, Gare de Lyon | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 12ème ⚡ Intervention rapide Bercy, Gare de Lyon, Nation. Serrurier d'urgence près métro Gare de Lyon, Nation, Bercy. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 12ème, serrurier pas cher Paris 12ème, serrurier Bercy, serrurier Gare de Lyon, serrurier Nation, serrurier Reuilly, serrurier Gare de Lyon, serrurier Nation, serrurier Bercy, dépannage serrurier Paris 12ème, ouverture de porte Paris 12ème, urgence serrurerie Paris 12ème, artisan serrurier Paris 12ème, serrurerie 24h Paris 12ème, serrurier urgence Paris 12ème, prix serrurier Paris 12ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-12eme/',
      title: "Serrurier Paris 12ème – Bercy, Gare de Lyon | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 12ème. Intervention rapide Bercy, Gare de Lyon. Dépannage serrurier urgent près métro Gare de Lyon, Nation. Ouverture de porte dès 95€, artisan serrurier qualifié 12ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 12ème - Bercy" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 12ème – Bercy, Gare de Lyon | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 12ème. Intervention rapide Bercy, Gare de Lyon. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-12eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 12ème',
      'geo.position': '48.8448;2.37',
      'ICBM': '48.8448, 2.37',
    },
  };
}

export default function Paris12eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={12} />
      <Header />
      <HeroArrondissement arrondissement={12} />
      <Services />
      <ContentArrondissement arrondissement={12} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={12} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
