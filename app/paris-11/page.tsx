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
  title: 'Serrurier pas cher Paris 11 – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 11 ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 11ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 11, serrurier pas cher Paris 11, dépannage serrurier Paris 11, ouverture de porte Paris 11, urgence serrurerie Paris 11, artisan serrurier Paris 11, serrurerie 24h Paris 11, serrurier urgence Paris 11, prix serrurier Paris 11',
  openGraph: {
    title: 'Serrurier pas cher Paris 11 – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 11. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 11ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-11',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-11',
  },
};

export default function Paris11() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={11} />
      <Services />
      <ContentArrondissement arrondissement={11} />
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
