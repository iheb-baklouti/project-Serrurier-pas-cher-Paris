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
  const metadata = await getPageMetadata('paris-15eme');
  
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
        'geo.placename': 'Paris 15ème',
        'geo.position': '48.8412;2.2992',
        'ICBM': '48.8412, 2.2992',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: "Serrurier Paris 15ème – Grenelle, Vaugirard | Dépannage 24h/24",
    description: "Serrurier pas cher Paris 15ème ⚡ Intervention rapide Grenelle, Vaugirard, Javel. Serrurier d'urgence près métro Convention, Vaugirard, La Motte-Picquet-Grenelle. Ouverture porte claquée dès 95€, changement cylindre, installation serrure. Service 24h/24, 7j/7. Devis gratuit ☎️ 06 27 55 88 55",
    keywords: "serrurier Paris 15ème, serrurier pas cher Paris 15ème, serrurier Grenelle, serrurier Vaugirard, serrurier Javel, serrurier Beaugrenelle, serrurier Convention, serrurier Vaugirard, serrurier La Motte-Picquet-Grenelle, dépannage serrurier Paris 15ème, ouverture de porte Paris 15ème, urgence serrurerie Paris 15ème, artisan serrurier Paris 15ème, serrurerie 24h Paris 15ème, serrurier urgence Paris 15ème, prix serrurier Paris 15ème",
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
      url: 'https://www.serrurier-pas-cher.paris/paris-15eme/',
      title: "Serrurier Paris 15ème – Grenelle, Vaugirard | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 15ème. Intervention rapide Grenelle, Vaugirard. Dépannage serrurier urgent près métro Convention, Vaugirard. Ouverture de porte dès 95€, artisan serrurier qualifié 15ème arrondissement.",
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg/', alt: "Serrurier pas cher Paris 15ème - Grenelle" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Serrurier Paris 15ème – Grenelle, Vaugirard | Dépannage 24h/24",
      description: "Serrurier pas cher Paris 15ème. Intervention rapide Grenelle, Vaugirard. Dépannage serrurier urgent, ouverture de porte dès 95€.",
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris/paris-15eme/',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 15ème',
      'geo.position': '48.8412;2.2992',
      'ICBM': '48.8412, 2.2992',
    },
  };
}

export default function Paris15eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={15} />
      <Header />
      <HeroArrondissement arrondissement={15} />
      <Services />
      <ContentArrondissement arrondissement={15} />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      <Contact arrondissement={15} />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
