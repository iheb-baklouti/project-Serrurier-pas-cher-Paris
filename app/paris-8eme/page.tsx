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
  title: 'Serrurier pas cher Paris 8ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 8ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 8ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 8ème, serrurier pas cher Paris 8ème, dépannage serrurier Paris 8ème, ouverture de porte Paris 8ème, urgence serrurerie Paris 8ème, artisan serrurier Paris 8ème, serrurerie 24h Paris 8ème, serrurier urgence Paris 8ème, prix serrurier Paris 8ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 8ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 8ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 8ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-8eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-8eme',
  },
};

export default function Paris8eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={8} />
      <Services />
      <ContentArrondissement arrondissement={8} />
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
