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

export const metadata: Metadata = {
  title: 'Serrurier pas cher Paris 2ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 2ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié 2ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 2ème, serrurier pas cher Paris 2ème, dépannage serrurier Paris 2ème, ouverture de porte Paris 2ème, urgence serrurerie Paris 2ème, artisan serrurier Paris 2ème, serrurerie 24h Paris 2ème, serrurier urgence Paris 2ème, prix serrurier Paris 2ème',
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
    url: 'https://serrurier-pas-cher.paris/paris-2eme',
    title: 'Serrurier pas cher Paris 2ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 2ème. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié 2ème arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris 2ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 2ème. Dépannage serrurier urgent, ouverture de porte dès 35€.',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-2eme',
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris 2ème',
    'geo.position': '48.8698;2.3412',
    'ICBM': '48.8698, 2.3412',
  },
};

export default function Paris2eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={2} />
      <Header />
      <HeroArrondissement arrondissement={2} />
      <Services />
      <ContentArrondissement arrondissement={2} />
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

