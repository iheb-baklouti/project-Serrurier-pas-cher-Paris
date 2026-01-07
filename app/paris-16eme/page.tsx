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
  const metadata = await getPageMetadata('paris-16eme');
  
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
        'geo.placename': 'Paris 16ème',
        'geo.position': '48.8534;2.265',
        'ICBM': '48.8534, 2.265',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 16ème – Auteuil, Passy | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 16ème ⚡ Intervention rapide Auteuil, Passy, Trocadéro. Serrurier d'urgence près métro Trocadéro, Passy, Auteuil. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 16ème, serrurier pas cher Paris 16ème, serrurier Auteuil, serrurier Passy, serrurier Trocadéro, serrurier Porte Dauphine, serrurier Trocadéro, serrurier Passy, serrurier Auteuil, dépannage serrurier Paris 16ème, ouverture de porte Paris 16ème, urgence serrurerie Paris 16ème, artisan serrurier Paris 16ème, serrurerie 24h Paris 16ème, serrurier urgence Paris 16ème, prix serrurier Paris 16ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-16eme/',
      title: "Serrurier Paris 16ème – Auteuil, Passy | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 16ème. Intervention rapide Auteuil, Passy. Dépannage serrurier urgent près métro Trocadéro, Passy. Ouverture de porte dès 95€, artisan serrurier qualifié 16ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 16ème - Auteuil" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 16ème – Auteuil, Passy | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 16ème. Intervention rapide Auteuil, Passy. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-16eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 16ème',
      'geo.position': '48.8534;2.265',
      'ICBM': '48.8534, 2.265',
    },
  };
}

export default function Paris16eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={16} />
      <Header />
      <HeroArrondissement arrondissement={16} />
      <Services />
      <ContentArrondissement arrondissement={16} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={16} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
