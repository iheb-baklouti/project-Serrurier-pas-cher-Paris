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
  title: 'Serrurier pas cher Paris 11ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 11ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 11ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 11ème, serrurier pas cher Paris 11ème, dépannage serrurier Paris 11ème, ouverture de porte Paris 11ème, urgence serrurerie Paris 11ème, artisan serrurier Paris 11ème, serrurerie 24h Paris 11ème, serrurier urgence Paris 11ème, prix serrurier Paris 11ème',
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
    url: 'https://serrurier-pas-cher.paris/paris-11eme',
    title: 'Serrurier pas cher Paris 11ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 11ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 11ème arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris 11ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 11ème. Dépannage serrurier urgent, ouverture de porte dès 95€.',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-11eme',
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris 11ème',
    'geo.position': '48.863;2.3798',
    'ICBM': '48.863, 2.3798',
  },
};

export default function Paris11eme() {
  return (
    <main className="min-h-screen">
      <DynamicStructuredData arrondissement={11} />
      <Header />
      <HeroArrondissement arrondissement={11} />
      <Services />
      <ContentArrondissement arrondissement={11} />
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
