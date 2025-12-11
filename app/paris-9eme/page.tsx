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
  const metadata = await getPageMetadata('paris-9eme');
  
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
        'geo.placename': 'Paris 9ème',
        'geo.position': '48.875;2.3397',
        'ICBM': '48.875, 2.3397',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 9ème – Opéra, Pigalle | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 9ème ⚡ Intervention rapide Opéra, Pigalle, Grands Boulevards. Serrurier d'urgence près métro Opéra, Chaussée d'Antin, Richelieu-Drouot. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 9ème, serrurier pas cher Paris 9ème, serrurier Opéra, serrurier Pigalle, serrurier Grands Boulevards, serrurier Faubourg Montmartre, serrurier Opéra, serrurier Chaussée d'Antin, serrurier Richelieu-Drouot, dépannage serrurier Paris 9ème, ouverture de porte Paris 9ème, urgence serrurerie Paris 9ème, artisan serrurier Paris 9ème, serrurerie 24h Paris 9ème, serrurier urgence Paris 9ème, prix serrurier Paris 9ème",
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
      url: 'https://serrurier-pas-cher.paris/paris-9eme',
      title: "Serrurier Paris 9ème – Opéra, Pigalle | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 9ème. Intervention rapide Opéra, Pigalle. Dépannage serrurier urgent près métro Opéra, Chaussée d'Antin. Ouverture de porte dès 95€, artisan serrurier qualifié 9ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 9ème - Opéra" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 9ème – Opéra, Pigalle | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 9ème. Intervention rapide Opéra, Pigalle. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-9eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 9ème',
      'geo.position': '48.875;2.3397',
      'ICBM': '48.875, 2.3397',
    },
  };
}

export default function Paris9eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={9} />
      <Header />
      <HeroArrondissement arrondissement={9} />
      <Services />
      <ContentArrondissement arrondissement={9} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={9} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
