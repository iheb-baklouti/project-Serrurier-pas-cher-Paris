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
  const metadata = await getPageMetadata('paris-19eme');
  
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
        'geo.placename': 'Paris 19ème',
        'geo.position': '48.8827;2.3742',
        'ICBM': '48.8827, 2.3742',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 19ème – Buttes-Chaumont, Belleville | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 19ème ⚡ Intervention rapide Buttes-Chaumont, Belleville, La Villette. Serrurier d'urgence près métro Belleville, Buttes Chaumont, Jaurès. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 19ème, serrurier pas cher Paris 19ème, serrurier Buttes-Chaumont, serrurier Belleville, serrurier La Villette, serrurier Canal de l'Ourcq, serrurier Belleville, serrurier Buttes Chaumont, serrurier Jaurès, dépannage serrurier Paris 19ème, ouverture de porte Paris 19ème, urgence serrurerie Paris 19ème, artisan serrurier Paris 19ème, serrurerie 24h Paris 19ème, serrurier urgence Paris 19ème, prix serrurier Paris 19ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-19eme/',
      title: "Serrurier Paris 19ème – Buttes-Chaumont, Belleville | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 19ème. Intervention rapide Buttes-Chaumont, Belleville. Dépannage serrurier urgent près métro Belleville, Buttes Chaumont. Ouverture de porte dès 95€, artisan serrurier qualifié 19ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 19ème - Buttes-Chaumont" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 19ème – Buttes-Chaumont, Belleville | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 19ème. Intervention rapide Buttes-Chaumont, Belleville. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-19eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 19ème',
      'geo.position': '48.8827;2.3742',
      'ICBM': '48.8827, 2.3742',
    },
  };
}

export default function Paris19eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={19} />
      <Header />
      <HeroArrondissement arrondissement={19} />
      <Services />
      <ContentArrondissement arrondissement={19} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={19} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
