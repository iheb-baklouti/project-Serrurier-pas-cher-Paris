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

export const metadata: Metadata = {
  title: 'Serrurier pas cher Paris 5ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 5ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 5ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 5ème, serrurier pas cher Paris 5ème, dépannage serrurier Paris 5ème, ouverture de porte Paris 5ème, urgence serrurerie Paris 5ème, artisan serrurier Paris 5ème, serrurerie 24h Paris 5ème, serrurier urgence Paris 5ème, prix serrurier Paris 5ème',
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
    title: 'Serrurier pas cher Paris 5ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 5ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 5ème arrondissement.',
    siteName: 'Serrurier pas cher Paris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier pas cher Paris 5ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 5ème. Dépannage serrurier urgent, ouverture de porte dès 95€.',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-5eme',
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris 5ème',
    'geo.position': '48.8449;2.3447',
    'ICBM': '48.8449, 2.3447',
  },
};

export default function Paris5eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={5} />
      <Services />
      <ContentArrondissement arrondissement={5} />
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
