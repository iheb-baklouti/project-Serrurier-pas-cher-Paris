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
  const metadata = await getPageMetadata('paris-13eme');
  
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
        'geo.placename': 'Paris 13ème',
        'geo.position': '48.8322;2.3561',
        'ICBM': '48.8322, 2.3561',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 13ème – Gobelins, Butte-aux-Cailles | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 13ème ⚡ Intervention rapide Gobelins, Butte-aux-Cailles, Chinatown. Serrurier d'urgence près métro Place d'Italie, Tolbiac, Bibliothèque François Mitterrand. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 13ème, serrurier pas cher Paris 13ème, serrurier Gobelins, serrurier Butte-aux-Cailles, serrurier Chinatown, serrurier Bibliothèque, serrurier Place d'Italie, serrurier Tolbiac, serrurier Bibliothèque François Mitterrand, dépannage serrurier Paris 13ème, ouverture de porte Paris 13ème, urgence serrurerie Paris 13ème, artisan serrurier Paris 13ème, serrurerie 24h Paris 13ème, serrurier urgence Paris 13ème, prix serrurier Paris 13ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-13eme',
      title: "Serrurier Paris 13ème – Gobelins, Butte-aux-Cailles | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 13ème. Intervention rapide Gobelins, Butte-aux-Cailles. Dépannage serrurier urgent près métro Place d'Italie, Tolbiac. Ouverture de porte dès 95€, artisan serrurier qualifié 13ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 13ème - Gobelins" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 13ème – Gobelins, Butte-aux-Cailles | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 13ème. Intervention rapide Gobelins, Butte-aux-Cailles. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-13eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 13ème',
      'geo.position': '48.8322;2.3561',
      'ICBM': '48.8322, 2.3561',
    },
  };
}

export default function Paris13eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={13} />
      <Header />
      <HeroArrondissement arrondissement={13} />
      <Services />
      <ContentArrondissement arrondissement={13} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={13} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
