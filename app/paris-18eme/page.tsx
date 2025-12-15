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
  const metadata = await getPageMetadata('paris-18eme');
  
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
        'geo.placename': 'Paris 18ème',
        'geo.position': '48.8932;2.3447',
        'ICBM': '48.8932, 2.3447',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 18ème – Montmartre, Pigalle | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 18ème ⚡ Intervention rapide Montmartre, Pigalle, Goutte d'Or. Serrurier d'urgence près métro Abbesses, Pigalle, Anvers. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 18ème, serrurier pas cher Paris 18ème, serrurier Montmartre, serrurier Pigalle, serrurier Goutte d'Or, serrurier La Chapelle, serrurier Abbesses, serrurier Pigalle, serrurier Anvers, dépannage serrurier Paris 18ème, ouverture de porte Paris 18ème, urgence serrurerie Paris 18ème, artisan serrurier Paris 18ème, serrurerie 24h Paris 18ème, serrurier urgence Paris 18ème, prix serrurier Paris 18ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-18eme',
      title: "Serrurier Paris 18ème – Montmartre, Pigalle | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 18ème. Intervention rapide Montmartre, Pigalle. Dépannage serrurier urgent près métro Abbesses, Pigalle. Ouverture de porte dès 95€, artisan serrurier qualifié 18ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 18ème - Montmartre" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 18ème – Montmartre, Pigalle | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 18ème. Intervention rapide Montmartre, Pigalle. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-18eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 18ème',
      'geo.position': '48.8932;2.3447',
      'ICBM': '48.8932, 2.3447',
    },
  };
}

export default function Paris18eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={18} />
      <Header />
      <HeroArrondissement arrondissement={18} />
      <Services />
      <ContentArrondissement arrondissement={18} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={18} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
