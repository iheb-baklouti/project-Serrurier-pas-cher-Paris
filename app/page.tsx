import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import { getPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('principal');
  
  if (metadata) {
    return {
      ...metadata,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      alternates: {
        canonical: 'https://www.serrurier-pas-cher.paris',
      },
      other: {
        'geo.region': 'FR-75',
        'geo.placename': 'Paris',
        'geo.position': '48.8566;2.3522',
        'ICBM': '48.8566, 2.3522',
      },
    };
  }
  
  // Fallback optimisé pour "serrurier paris"
  return {
    title: 'Serrurier Paris | Dépannage Urgent 24h/24 | Tous Arrondissements',
    description: 'Serrurier Paris ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Intervention rapide dans tous les arrondissements de Paris (1er au 20ème). Artisan serrurier qualifié. Devis gratuit ☎️ 06 27 55 88 55',
    keywords: 'serrurier paris, serrurier pas cher paris, dépannage serrurier paris, ouverture de porte paris, urgence serrurerie paris, artisan serrurier paris, serrurerie 24h paris, serrurier urgence paris, tarifs serrurier paris, serrurier paris 1er, serrurier paris 2ème, serrurier paris 3ème, serrurier paris 4ème, serrurier paris 5ème, serrurier paris 6ème, serrurier paris 7ème, serrurier paris 8ème, serrurier paris 9ème, serrurier paris 10ème, serrurier paris 11ème, serrurier paris 12ème, serrurier paris 13ème, serrurier paris 14ème, serrurier paris 15ème, serrurier paris 16ème, serrurier paris 17ème, serrurier paris 18ème, serrurier paris 19ème, serrurier paris 20ème',
    authors: [{ name: 'Serrurier pas cher Paris' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.serrurier-pas-cher.paris',
      title: 'Serrurier Paris | Dépannage Urgent 24h/24 | Tous Arrondissements',
      description: 'Serrurier Paris. Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Intervention rapide dans tous les arrondissements. Artisan serrurier qualifié.',
      siteName: 'Serrurier pas cher Paris',
      images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: 'Serrurier pas cher Paris' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serrurier Paris | Dépannage Urgent 24h/24',
      description: 'Serrurier Paris. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié dans tous les arrondissements.',
      images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://www.serrurier-pas-cher.paris',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris',
      'geo.position': '48.8566;2.3522',
      'ICBM': '48.8566, 2.3522',
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ take={5} showMoreButton={true} />
      
      {/* Section liens internes vers arrondissements */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Serrurier dans tous les arrondissements de Paris
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Intervention rapide 24h/24 dans tous les arrondissements de Paris. Découvrez nos pages dédiées à chaque quartier.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
              const getSlug = (n: number) => {
                if (n === 1) return '/paris-1er';
                if (n === 2) return '/paris-2eme';
                if (n === 3) return '/paris-3eme';
                return `/paris-${n}eme`;
              };
              const getName = (n: number) => {
                if (n === 1) return 'Paris 1er';
                if (n === 2) return 'Paris 2ème';
                if (n === 3) return 'Paris 3ème';
                return `Paris ${n}ème`;
              };
              return (
                <Link
                  key={num}
                  href={getSlug(num)}
                  className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-center text-gray-900 dark:text-white font-medium transition-colors"
                >
                  {getName(num)}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}