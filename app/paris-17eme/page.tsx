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
  title: 'Serrurier pas cher Paris 17ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 17ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 17ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 17ème, serrurier pas cher Paris 17ème, dépannage serrurier Paris 17ème, ouverture de porte Paris 17ème, urgence serrurerie Paris 17ème, artisan serrurier Paris 17ème, serrurerie 24h Paris 17ème, serrurier urgence Paris 17ème, prix serrurier Paris 17ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 17ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 17ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 17ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-17eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-17eme',
  },
};

export default function Paris17eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={17} />
      <Services />
      <ContentArrondissement arrondissement={17} />
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
