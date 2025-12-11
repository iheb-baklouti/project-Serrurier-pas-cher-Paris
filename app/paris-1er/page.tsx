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
  const metadata = await getPageMetadata('paris-1er');
  
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
        'geo.placename': 'Paris 1er',
        'geo.position': '48.8606;2.3376',
        'ICBM': '48.8606, 2.3376',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 1er – Louvre, Palais-Royal | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 1er ⚡ Intervention rapide Louvre, Palais-Royal, Les Halles. Serrurier d'urgence près métro Louvre-Rivoli, Palais Royal-Musée du Louvre, Châtelet-Les Halles. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 1er, serrurier pas cher Paris 1er, serrurier Louvre, serrurier Palais-Royal, serrurier Les Halles, serrurier Place Vendôme, serrurier Louvre-Rivoli, serrurier Palais Royal-Musée du Louvre, serrurier Châtelet-Les Halles, dépannage serrurier Paris 1er, ouverture de porte Paris 1er, urgence serrurerie Paris 1er, artisan serrurier Paris 1er, serrurerie 24h Paris 1er, serrurier urgence Paris 1er, prix serrurier Paris 1er",
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
      url: 'https://serrurier-pas-cher.paris/paris-1er',
      title: "Serrurier Paris 1er – Louvre, Palais-Royal | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 1er. Intervention rapide Louvre, Palais-Royal. Dépannage serrurier urgent près métro Louvre-Rivoli, Palais Royal-Musée du Louvre. Ouverture de porte dès 95€, artisan serrurier qualifié 1er arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 1er - Louvre" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 1er – Louvre, Palais-Royal | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 1er. Intervention rapide Louvre, Palais-Royal. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-1er',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 1er',
      'geo.position': '48.8606;2.3376',
      'ICBM': '48.8606, 2.3376',
    },
  };
}

export default function Paris1er() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={1} />
      <Header />
      <HeroArrondissement arrondissement={1} />
      <Services />
      <ContentArrondissement arrondissement={1} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={1} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
