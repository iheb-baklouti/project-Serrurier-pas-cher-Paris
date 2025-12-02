'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Search, Loader2 } from 'lucide-react';
import { useContactInfo } from '@/lib/useContactInfo';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    order: number;
    visible?: boolean;
    linkedPage: string;
}

interface FAQResponse {
    data: FAQItem[];
    meta: {
        total: number;
        page: number;
        totalPages: number;
        hasMore: boolean;
    };
}

const FAQList = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { contact_phone, contact_whatsapp, getPhoneLink, getWhatsAppLink } = useContactInfo();

    const take = 10;

    useEffect(() => {
        const fetchFaqs = async () => {
            setLoading(true);
            try {
                const skip = (page - 1) * take;
                const queryParams = new URLSearchParams({
                    page: 'all',
                    take: take.toString(),
                    skip: skip.toString(),
                });

                if (search) {
                    queryParams.append('q', search);
                }

                const res = await fetch(`/api/public/faqs?${queryParams.toString()}`, { cache: 'no-store' });
                if (res.ok) {
                    const json: FAQResponse = await res.json();
                    setFaqs(json.data);
                    setTotalPages(json.meta.totalPages);
                    setOpenIndex(null); // Close all when page/search changes
                }
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            } finally {
                setLoading(false);
            }
        };

        // Debounce search
        const timeoutId = setTimeout(() => {
            fetchFaqs();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [page, search]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1); // Reset to first page on search
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Search Bar */}
            <div className="mb-12 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Rechercher une question..."
                    className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-shadow"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
            ) : faqs.length > 0 ? (
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md">
                            <button
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 pt-0">
                                    <div className="h-px w-full bg-gray-100 mb-4" />
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500 text-lg">Aucune question trouvée pour votre recherche.</p>
                    <button
                        onClick={() => { setSearch(''); setPage(1); }}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Voir toutes les questions
                    </button>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Précédent
                    </button>
                    <div className="flex items-center gap-1 px-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === p
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Suivant
                    </button>
                </div>
            )}

            {/* Contact CTA */}
            <div className="mt-16 text-center">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Vous ne trouvez toujours pas votre réponse ?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Notre équipe d'experts est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions et intervenir en urgence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
                            onClick={() => window.open(`tel:${getPhoneLink(contact_phone)}`, '_self')}
                        >
                            Appeler {contact_phone}
                        </button>
                        <button
                            className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                            onClick={() => window.open(getWhatsAppLink(contact_whatsapp, "Bonjour, j'ai une question..."), '_blank')}
                        >
                            WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQList;
