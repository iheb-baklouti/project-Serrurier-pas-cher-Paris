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
  const metadata = await getPageMetadata('paris-6eme');
  
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
        'geo.placename': 'Paris 6ème',
        'geo.position': '48.8448;2.3376',
        'ICBM': '48.8448, 2.3376',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 6ème – Saint-Germain-des-Prés, Luxembourg | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 6ème ⚡ Intervention rapide Saint-Germain-des-Prés, Luxembourg, Odéon. Serrurier d'urgence près métro Saint-Germain-des-Prés, Odéon, Luxembourg. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 6ème, serrurier pas cher Paris 6ème, serrurier Saint-Germain-des-Prés, serrurier Luxembourg, serrurier Odéon, serrurier Notre-Dame-des-Champs, serrurier Saint-Germain-des-Prés, serrurier Odéon, serrurier Luxembourg, dépannage serrurier Paris 6ème, ouverture de porte Paris 6ème, urgence serrurerie Paris 6ème, artisan serrurier Paris 6ème, serrurerie 24h Paris 6ème, serrurier urgence Paris 6ème, prix serrurier Paris 6ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-6eme',
      title: "Serrurier Paris 6ème – Saint-Germain-des-Prés, Luxembourg | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 6ème. Intervention rapide Saint-Germain-des-Prés, Luxembourg. Dépannage serrurier urgent près métro Saint-Germain-des-Prés, Odéon. Ouverture de porte dès 95€, artisan serrurier qualifié 6ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 6ème - Saint-Germain-des-Prés" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 6ème – Saint-Germain-des-Prés, Luxembourg | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 6ème. Intervention rapide Saint-Germain-des-Prés, Luxembourg. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-6eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 6ème',
      'geo.position': '48.8448;2.3376',
      'ICBM': '48.8448, 2.3376',
    },
  };
}

export default function Paris6eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={6} />
      <Header />
      <HeroArrondissement arrondissement={6} />
      <Services />
      <ContentArrondissement arrondissement={6} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={6} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
