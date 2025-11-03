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
  title: 'Serrurier pas cher Paris 16 – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 16 ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 16ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 16, serrurier pas cher Paris 16, dépannage serrurier Paris 16, ouverture de porte Paris 16, urgence serrurerie Paris 16, artisan serrurier Paris 16, serrurerie 24h Paris 16, serrurier urgence Paris 16, prix serrurier Paris 16',
  openGraph: {
    title: 'Serrurier pas cher Paris 16 – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 16. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 16ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-16',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-16',
  },
};

export default function Paris16() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={16} />
      <Services />
      <ContentArrondissement arrondissement={16} />
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
