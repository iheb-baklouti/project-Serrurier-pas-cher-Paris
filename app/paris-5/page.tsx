import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroArrondissement from '@/components/HeroArrondissement';
import Services from '@/components/Services';
import ContentArrondissement from '@/components/ContentArrondissement';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Serrurier pas cher Paris 5 – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 5 ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 5ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 5, serrurier pas cher Paris 5, dépannage serrurier Paris 5, ouverture de porte Paris 5, urgence serrurerie Paris 5, artisan serrurier Paris 5, serrurerie 24h Paris 5, serrurier urgence Paris 5, prix serrurier Paris 5',
  openGraph: {
    title: 'Serrurier pas cher Paris 5 – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 5. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 5ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-5',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-5',
  },
};

export default function Paris5() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={5} />
      <Services />
      <ContentArrondissement arrondissement={5} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
