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
  title: 'Serrurier pas cher Paris 19ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 19ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 19ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 19ème, serrurier pas cher Paris 19ème, dépannage serrurier Paris 19ème, ouverture de porte Paris 19ème, urgence serrurerie Paris 19ème, artisan serrurier Paris 19ème, serrurerie 24h Paris 19ème, serrurier urgence Paris 19ème, prix serrurier Paris 19ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 19ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 19ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 19ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-19eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-19eme',
  },
};

export default function Paris19eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={19} />
      <Services />
      <ContentArrondissement arrondissement={19} />
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
