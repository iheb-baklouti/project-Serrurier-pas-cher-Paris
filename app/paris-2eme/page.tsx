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
  const metadata = await getPageMetadata('paris-2eme');
  
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
        'geo.placename': 'Paris 2ème',
        'geo.position': '48.8698;2.3413',
        'ICBM': '48.8698, 2.3413',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 2ème – Bourse, Sentier | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 2ème ⚡ Intervention rapide Bourse, Sentier, Montorgueil. Serrurier d'urgence près métro Bourse, Sentier, Réaumur-Sébastopol. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 2ème, serrurier pas cher Paris 2ème, serrurier Bourse, serrurier Sentier, serrurier Montorgueil, serrurier Bourse, serrurier Sentier, serrurier Réaumur-Sébastopol, dépannage serrurier Paris 2ème, ouverture de porte Paris 2ème, urgence serrurerie Paris 2ème, artisan serrurier Paris 2ème, serrurerie 24h Paris 2ème, serrurier urgence Paris 2ème, prix serrurier Paris 2ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-2eme/',
      title: "Serrurier Paris 2ème – Bourse, Sentier | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 2ème. Intervention rapide Bourse, Sentier. Dépannage serrurier urgent près métro Bourse, Sentier. Ouverture de porte dès 95€, artisan serrurier qualifié 2ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 2ème - Bourse" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 2ème – Bourse, Sentier | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 2ème. Intervention rapide Bourse, Sentier. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-2eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 2ème',
      'geo.position': '48.8698;2.3413',
      'ICBM': '48.8698, 2.3413',
    },
  };
}

export default function Paris2eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={2} />
      <Header />
      <HeroArrondissement arrondissement={2} />
      <Services />
      <ContentArrondissement arrondissement={2} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={2} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
