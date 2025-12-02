import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FAQList from '@/components/FAQList';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
    title: 'Foire Aux Questions - Serrurier Pas Cher Paris',
    description: 'Retrouvez toutes les réponses à vos questions sur nos services de serrurerie à Paris. Dépannage, tarifs, zones d\'intervention et conseils.',
    robots: {
        index: true,
        follow: true,
    },
};

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
