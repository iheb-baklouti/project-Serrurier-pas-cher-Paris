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
  title: 'Serrurier pas cher Paris 3ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 3ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 3ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 3ème, serrurier pas cher Paris 3ème, dépannage serrurier Paris 3ème, ouverture de porte Paris 3ème, urgence serrurerie Paris 3ème, artisan serrurier Paris 3ème, serrurerie 24h Paris 3ème, serrurier urgence Paris 3ème, prix serrurier Paris 3ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 3ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 3ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 3ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-3eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-3eme',
  },
};

export default function Paris3eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={3} />
      <Services />
      <ContentArrondissement arrondissement={3} />
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

