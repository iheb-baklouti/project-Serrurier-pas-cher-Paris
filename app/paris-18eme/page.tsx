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
  title: 'Serrurier pas cher Paris 18ème – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 18ème ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 18ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 18ème, serrurier pas cher Paris 18ème, dépannage serrurier Paris 18ème, ouverture de porte Paris 18ème, urgence serrurerie Paris 18ème, artisan serrurier Paris 18ème, serrurerie 24h Paris 18ème, serrurier urgence Paris 18ème, prix serrurier Paris 18ème',
  openGraph: {
    title: 'Serrurier pas cher Paris 18ème – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 18ème. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 18ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-18eme',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-18eme',
  },
};

export default function Paris18eme() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={18} />
      <Services />
      <ContentArrondissement arrondissement={18} />
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
