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
  const metadata = await getPageMetadata('paris-14eme');
  
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
        'geo.placename': 'Paris 14ème',
        'geo.position': '48.8331;2.3264',
        'ICBM': '48.8331, 2.3264',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: 'Serrurier pas cher Paris 14ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
    description: 'Serrurier pas cher Paris 14ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié 14ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
    keywords: 'serrurier Paris 14ème, serrurier pas cher Paris 14ème, dépannage serrurier Paris 14ème, ouverture de porte Paris 14ème, urgence serrurerie Paris 14ème, artisan serrurier Paris 14ème, serrurerie 24h Paris 14ème, serrurier urgence Paris 14ème, prix serrurier Paris 14ème',
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
      url: 'https://serrurier-pas-cher.paris/paris-14eme',
      title: 'Serrurier pas cher Paris 14ème – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris 14ème. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié 14ème arrondissement.',
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: 'Serrurier pas cher Paris' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serrurier pas cher Paris 14ème – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris 14ème. Dépannage serrurier urgent, ouverture de porte dès 35€.',
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/paris-14eme',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris 14ème',
      'geo.position': '48.8331;2.3264',
      'ICBM': '48.8331, 2.3264',
    },
  };
}

export default function Paris14eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={14} />
      <Header />
      <HeroArrondissement arrondissement={14} />
      <Services />
      <ContentArrondissement arrondissement={14} />
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
