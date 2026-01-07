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
  const metadata = await getPageMetadata('paris-20eme');
  
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
        'geo.placename': 'Paris 20ème',
        'geo.position': '48.863;2.3984',
        'ICBM': '48.863, 2.3984',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 20ème – Ménilmontant, Belleville | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 20ème ⚡ Intervention rapide Ménilmontant, Belleville, Père Lachaise. Serrurier d'urgence près métro Ménilmontant, Père Lachaise, Gambetta. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 20ème, serrurier pas cher Paris 20ème, serrurier Ménilmontant, serrurier Belleville, serrurier Père Lachaise, serrurier Charonne, serrurier Ménilmontant, serrurier Père Lachaise, serrurier Gambetta, dépannage serrurier Paris 20ème, ouverture de porte Paris 20ème, urgence serrurerie Paris 20ème, artisan serrurier Paris 20ème, serrurerie 24h Paris 20ème, serrurier urgence Paris 20ème, prix serrurier Paris 20ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-20eme/',
      title: "Serrurier Paris 20ème – Ménilmontant, Belleville | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 20ème. Intervention rapide Ménilmontant, Belleville. Dépannage serrurier urgent près métro Ménilmontant, Père Lachaise. Ouverture de porte dès 95€, artisan serrurier qualifié 20ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 20ème - Ménilmontant" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 20ème – Ménilmontant, Belleville | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 20ème. Intervention rapide Ménilmontant, Belleville. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-20eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 20ème',
      'geo.position': '48.863;2.3984',
      'ICBM': '48.863, 2.3984',
    },
  };
}

export default function Paris20eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={20} />
      <Header />
      <HeroArrondissement arrondissement={20} />
      <Services />
      <ContentArrondissement arrondissement={20} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={20} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
