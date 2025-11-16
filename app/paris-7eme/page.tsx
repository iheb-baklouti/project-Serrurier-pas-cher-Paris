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
  title: 'Serrurier pas cher Paris 7ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 7ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 7ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 7ème, serrurier pas cher Paris 7ème, dépannage serrurier Paris 7ème, ouverture de porte Paris 7ème, urgence serrurerie Paris 7ème, artisan serrurier Paris 7ème, serrurerie 24h Paris 7ème, serrurier urgence Paris 7ème, prix serrurier Paris 7ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 7ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 7ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 7ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-7eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-7eme',
  },
};

export default function Paris7eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={7} />
      <Services />
      <ContentArrondissement arrondissement={7} />
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
