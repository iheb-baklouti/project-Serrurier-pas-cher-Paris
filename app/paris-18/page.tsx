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
  title: 'Serrurier pas cher Paris 18 – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 18 ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 18ème arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 18, serrurier pas cher Paris 18, dépannage serrurier Paris 18, ouverture de porte Paris 18, urgence serrurerie Paris 18, artisan serrurier Paris 18, serrurerie 24h Paris 18, serrurier urgence Paris 18, prix serrurier Paris 18',
  openGraph: {
    title: 'Serrurier pas cher Paris 18 – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 18. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 18ème arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-18',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-18',
  },
};

export default function Paris18() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={18} />
      <Services />
      <ContentArrondissement arrondissement={18} />
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
