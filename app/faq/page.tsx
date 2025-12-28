import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FAQList from '@/components/FAQList';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'FAQ Serrurier Paris | Questions Fréquentes Dépannage & Tarifs',
        description: 'FAQ serrurier Paris : réponses à toutes vos questions sur le dépannage serrurier, les tarifs, les zones d\'intervention et nos services d\'urgence 24h/24 à Paris. Toutes les réponses ici.',
        keywords: 'FAQ serrurier paris, questions serrurier paris, tarifs serrurier paris, dépannage serrurier paris, urgence serrurerie paris, questions fréquentes serrurier, FAQ dépannage serrurerie',
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
            url: 'https://www.serrurier-pas-cher.paris/faq',
            title: 'FAQ Serrurier Paris | Questions Fréquentes',
            description: 'FAQ serrurier Paris : réponses à toutes vos questions sur le dépannage, les tarifs et nos services d\'urgence 24h/24.',
            siteName: 'Serrurier pas cher Paris',
            images: [{ url: 'https://www.serrurier-pas-cher.paris/icon.svg', alt: 'FAQ Serrurier Paris' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'FAQ Serrurier Paris | Questions Fréquentes',
            description: 'FAQ serrurier Paris : réponses à toutes vos questions sur le dépannage serrurier et les tarifs.',
            images: ['https://www.serrurier-pas-cher.paris/icon.svg'],
        },
        alternates: {
            canonical: 'https://www.serrurier-pas-cher.paris/faq',
        },
    };
}

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Centre d'aide et <span className="text-blue-600">FAQ</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tout ce que vous devez savoir sur nos services, nos tarifs et nos interventions d'urgence à Paris.
                    </p>
                </div>
            </div>

            <FAQList />

            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </main>
    );
}
