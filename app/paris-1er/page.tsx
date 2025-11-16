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
  title: 'Serrurier pas cher Paris 1er – Dépannage 24h/24 et 7j/7 | Intervention rapide',
  description: 'Serrurier pas cher Paris 1er ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 95€. Artisan serrurier qualifié 1er arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
  keywords: 'serrurier Paris 1er, serrurier pas cher Paris 1er, dépannage serrurier Paris 1er, ouverture de porte Paris 1er, urgence serrurerie Paris 1er, artisan serrurier Paris 1er, serrurerie 24h Paris 1er, serrurier urgence Paris 1er, prix serrurier Paris 1er',
  openGraph: {
    title: 'Serrurier pas cher Paris 1er – Dépannage 24h/24',
    description: 'Serrurier pas cher Paris 1er. Dépannage serrurier urgent, ouverture de porte dès 95€, artisan serrurier qualifié 1er arrondissement.',
    url: 'https://serrurier-pas-cher.paris/paris-1er',
  },
  alternates: {
    canonical: 'https://serrurier-pas-cher.paris/paris-1er',
  },
};

export default function Paris1er() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroArrondissement arrondissement={1} />
      <Services />
      <ContentArrondissement arrondissement={1} />
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

