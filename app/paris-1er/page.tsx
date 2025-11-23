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
    title: 'Serrurier pas cher Paris 1er – Dépannage 24h/24 et 7j/7 | Intervention rapide',
    description: 'Serrurier pas cher Paris 1er ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié 1er arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
    keywords: 'serrurier Paris 1er, serrurier pas cher Paris 1er, dépannage serrurier Paris 1er, ouverture de porte Paris 1er, urgence serrurerie Paris 1er, artisan serrurier Paris 1er, serrurerie 24h Paris 1er, serrurier urgence Paris 1er, prix serrurier Paris 1er',
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
      title: 'Serrurier pas cher Paris 1er – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris 1er. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié 1er arrondissement.',
      siteName: 'Serrurier pas cher Paris',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serrurier pas cher Paris 1er – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris 1er. Dépannage serrurier urgent, ouverture de porte dès 35€.',
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
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}

