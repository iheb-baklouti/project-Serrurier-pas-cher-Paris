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
  const metadata = await getPageMetadata('paris-4eme');
  
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
        'geo.placename': 'Paris 4ème',
        'geo.position': '48.8546;2.3522',
        'ICBM': '48.8546, 2.3522',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 4ème – Marais, Notre-Dame | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 4ème ⚡ Intervention rapide Marais, Notre-Dame, Hôtel de Ville. Serrurier d'urgence près métro Hôtel de Ville, Châtelet, Saint-Paul. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 4ème, serrurier pas cher Paris 4ème, serrurier Marais, serrurier Notre-Dame, serrurier Hôtel de Ville, serrurier Île de la Cité, serrurier Hôtel de Ville, serrurier Châtelet, serrurier Saint-Paul, dépannage serrurier Paris 4ème, ouverture de porte Paris 4ème, urgence serrurerie Paris 4ème, artisan serrurier Paris 4ème, serrurerie 24h Paris 4ème, serrurier urgence Paris 4ème, prix serrurier Paris 4ème",
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
      url: 'https://serrurier-pas-cher.paris/paris-4eme',
      title: "Serrurier Paris 4ème – Marais, Notre-Dame | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 4ème. Intervention rapide Marais, Notre-Dame. Dépannage serrurier urgent près métro Hôtel de Ville, Châtelet. Ouverture de porte dès 95€, artisan serrurier qualifié 4ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 4ème - Marais" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 4ème – Marais, Notre-Dame | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 4ème. Intervention rapide Marais, Notre-Dame. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-4eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 4ème',
      'geo.position': '48.8546;2.3522',
      'ICBM': '48.8546, 2.3522',
    },
  };
}

export default function Paris4eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={4} />
      <Header />
      <HeroArrondissement arrondissement={4} />
      <Services />
      <ContentArrondissement arrondissement={4} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={4} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
