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
  const metadata = await getPageMetadata('paris-11eme');
  
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
        'geo.placename': 'Paris 11ème',
        'geo.position': '48.8592;2.3797',
        'ICBM': '48.8592, 2.3797',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 11ème – Bastille, Oberkampf | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 11ème ⚡ Intervention rapide Bastille, Oberkampf, Nation. Serrurier d'urgence près métro Bastille, Nation, Oberkampf. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 11ème, serrurier pas cher Paris 11ème, serrurier Bastille, serrurier Oberkampf, serrurier Nation, serrurier Roquette, serrurier Bastille, serrurier Nation, serrurier Oberkampf, dépannage serrurier Paris 11ème, ouverture de porte Paris 11ème, urgence serrurerie Paris 11ème, artisan serrurier Paris 11ème, serrurerie 24h Paris 11ème, serrurier urgence Paris 11ème, prix serrurier Paris 11ème",
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
      url: 'https://serrurier-pas-cher.paris/paris-11eme',
      title: "Serrurier Paris 11ème – Bastille, Oberkampf | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 11ème. Intervention rapide Bastille, Oberkampf. Dépannage serrurier urgent près métro Bastille, Nation. Ouverture de porte dès 95€, artisan serrurier qualifié 11ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 11ème - Bastille" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 11ème – Bastille, Oberkampf | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 11ème. Intervention rapide Bastille, Oberkampf. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-11eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 11ème',
      'geo.position': '48.8592;2.3797',
      'ICBM': '48.8592, 2.3797',
    },
  };
}

export default function Paris11eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={11} />
      <Header />
      <HeroArrondissement arrondissement={11} />
      <Services />
      <ContentArrondissement arrondissement={11} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={11} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
