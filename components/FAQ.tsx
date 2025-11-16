'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, CircleHelp as HelpCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
  visible?: boolean;
  linkedPage: string;
}

interface FAQProps {
  linkedPage?: string;
  take?: number;
}

const FAQ = ({ linkedPage, take = 20 }: FAQProps) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqs, setFaqs] = useState<FAQItem[]>([])
  const [loading, setLoading] = useState(true)

  const pageKey = useMemo(() => {
    if (linkedPage) return linkedPage;
    
    // Support des nouveaux slugs (paris-1er, paris-2eme, paris-3eme, paris-Xeme) et anciens (paris-X)
    if (pathname?.includes('/paris-1er')) return 'paris-1er';
    if (pathname?.includes('/paris-2eme')) return 'paris-2eme';
    if (pathname?.includes('/paris-3eme')) return 'paris-3eme';
    
    // Support pour paris-Xeme (4 à 20)
    const emeMatch = pathname?.match(/\/paris-(\d+)eme/);
    if (emeMatch) return `paris-${emeMatch[1]}eme`;
    
    const match = pathname?.match(/\/paris-(\d+)/);
    return match ? `paris-${match[1]}` : 'principal';
  }, [pathname, linkedPage]);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/public/faqs?page=${encodeURIComponent(pageKey)}&take=${take}`, { cache: 'no-store' })
        if (res.ok) {
          const data: FAQItem[] = await res.json()
          setFaqs(data)
          setOpenIndex(data.length ? 0 : null)
        }
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    fetchFaqs()
  }, [pageKey, take])

  const SkeletonItem = () => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4">
        <div className="animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Questions <span className="text-blue-600">fréquentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services de serrurerie à Paris.
          </p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonItem key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA après FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('tel:+330635355158', '_self')}
              >
                Appelez-nous maintenant
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('https://wa.me/330635355158?text=Bonjour, j\'ai une question sur vos services', '_blank')}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;