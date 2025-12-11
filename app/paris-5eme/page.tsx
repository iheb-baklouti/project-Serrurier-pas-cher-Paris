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
  const metadata = await getPageMetadata('paris-5eme');
  
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
        'geo.placename': 'Paris 5ème',
        'geo.position': '48.8448;2.3447',
        'ICBM': '48.8448, 2.3447',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 5ème – Quartier Latin, Panthéon | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 5ème ⚡ Intervention rapide Quartier Latin, Panthéon, Sorbonne. Serrurier d'urgence près métro Place Monge, Censier-Daubenton, Jussieu. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 5ème, serrurier pas cher Paris 5ème, serrurier Quartier Latin, serrurier Panthéon, serrurier Sorbonne, serrurier Val-de-Grâce, serrurier Jardin des Plantes, serrurier Mouffetard, serrurier Place Monge, serrurier Censier-Daubenton, serrurier Jussieu, dépannage serrurier Paris 5ème, ouverture de porte Paris 5ème, urgence serrurerie Paris 5ème, artisan serrurier Paris 5ème, serrurerie 24h Paris 5ème, serrurier urgence Paris 5ème, prix serrurier Paris 5ème",
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
      url: 'https://serrurier-pas-cher.paris/paris-5eme',
      title: "Serrurier Paris 5ème – Quartier Latin, Panthéon | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 5ème. Intervention rapide Quartier Latin, Panthéon. Dépannage serrurier urgent près métro Place Monge, Censier-Daubenton. Ouverture de porte dès 95€, artisan serrurier qualifié 5ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: "Serrurier pas cher Paris 5ème - Quartier Latin" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 5ème – Quartier Latin, Panthéon | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 5ème. Intervention rapide Quartier Latin, Panthéon. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-5eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 5ème',
      'geo.position': '48.8448;2.3447',
      'ICBM': '48.8448, 2.3447',
    },
  };
}

export default function Paris5eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={5} />
      <Header />
      <HeroArrondissement arrondissement={5} />
      <Services />
      <ContentArrondissement arrondissement={5} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={5} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
