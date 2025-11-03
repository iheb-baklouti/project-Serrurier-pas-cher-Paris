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
  title: 'Serrurier pas cher Paris 14 – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 14 ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 14ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 14, serrurier pas cher Paris 14, dépannage serrurier Paris 14, ouverture de porte Paris 14, urgence serrurerie Paris 14, artisan serrurier Paris 14, serrurerie 24h Paris 14, serrurier urgence Paris 14, prix serrurier Paris 14',
  openGraph: {
    title: 'Serrurier pas cher Paris 14 – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 14. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 14ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-14',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-14',
  },
};

export default function Paris14() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={14} />
      <Services />
      <ContentArrondissement arrondissement={14} />
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
