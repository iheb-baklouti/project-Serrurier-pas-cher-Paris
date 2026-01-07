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
  const metadata = await getPageMetadata('paris-7eme');
  
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
        'geo.placename': 'Paris 7ème',
        'geo.position': '48.8566;2.3122',
        'ICBM': '48.8566, 2.3122',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 7ème – Invalides, Tour Eiffel | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 7ème ⚡ Intervention rapide Invalides, Tour Eiffel, École Militaire. Serrurier d'urgence près métro Invalides, École Militaire, La Tour-Maubourg. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 7ème, serrurier pas cher Paris 7ème, serrurier Invalides, serrurier Tour Eiffel, serrurier École Militaire, serrurier Gros-Caillou, serrurier Invalides, serrurier École Militaire, serrurier La Tour-Maubourg, dépannage serrurier Paris 7ème, ouverture de porte Paris 7ème, urgence serrurerie Paris 7ème, artisan serrurier Paris 7ème, serrurerie 24h Paris 7ème, serrurier urgence Paris 7ème, prix serrurier Paris 7ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-7eme/',
      title: "Serrurier Paris 7ème – Invalides, Tour Eiffel | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 7ème. Intervention rapide Invalides, Tour Eiffel. Dépannage serrurier urgent près métro Invalides, École Militaire. Ouverture de porte dès 95€, artisan serrurier qualifié 7ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 7ème - Invalides" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 7ème – Invalides, Tour Eiffel | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 7ème. Intervention rapide Invalides, Tour Eiffel. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-7eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 7ème',
      'geo.position': '48.8566;2.3122',
      'ICBM': '48.8566, 2.3122',
    },
  };
}

export default function Paris7eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={7} />
      <Header />
      <HeroArrondissement arrondissement={7} />
      <Services />
      <ContentArrondissement arrondissement={7} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={7} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
