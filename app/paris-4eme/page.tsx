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
  title: 'Serrurier pas cher Paris 4ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 4ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 4ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 4ème, serrurier pas cher Paris 4ème, dépannage serrurier Paris 4ème, ouverture de porte Paris 4ème, urgence serrurerie Paris 4ème, artisan serrurier Paris 4ème, serrurerie 24h Paris 4ème, serrurier urgence Paris 4ème, prix serrurier Paris 4ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 4ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 4ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 4ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-4eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-4eme',
  },
};

export default function Paris4eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={4} />
      <Services />
      <ContentArrondissement arrondissement={4} />
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

