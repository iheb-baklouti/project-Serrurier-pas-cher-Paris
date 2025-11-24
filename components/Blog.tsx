'use client';

import React, {useEffect, useMemo, useState, useRef} from 'react';
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    BookOpen,
    Shield,
    Key,
    AlertTriangle,
    Lock,
    Phone,
    MessageSquare,
    ArrowLeft,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useContactInfo } from '@/lib/useContactInfo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogItem {
  id: string;
  title: string;
  excerpt?: string | null;
  content: string;
  category?: string | null;
  author?: string | null;
  date?: string | null;
  readTime?: string | null;
  image?: string | null;
  linkedPage: string;
  updatedAt?: string;
}

interface BlogProps {
  linkedPage?: string; // 'principal' | 'paris-1' ...
  take?: number;
}

const Blog = ({ linkedPage, take = 3 }: BlogProps) => {
    const pathname = usePathname();
    const [selectedCategory, setSelectedCategory] = useState('tous');
    const [articles, setArticles] = useState<BlogItem[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef<SwiperType | null>(null);

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

    const categories = useMemo(() => ([
        {id: 'tous', name: 'Tous les articles', icon: BookOpen},
        {id: 'conseils', name: 'Conseils sécurité', icon: Shield},
        {id: 'urgence', name: 'Situations d\'urgence', icon: AlertTriangle},
        {id: 'installation', name: 'Installation', icon: Lock},
        {id: 'entretien', name: 'Entretien', icon: Key}
    ]), []);

    useEffect(() => {
      const fetchBlogs = async () => {
        setLoading(true);
        try {
          const categoryParam = selectedCategory !== 'tous' ? `&category=${encodeURIComponent(selectedCategory)}` : '';
          const res = await fetch(`/api/public/blogs?page=${encodeURIComponent(pageKey)}&take=${take}${categoryParam}`, { cache: 'no-store' })
          if (res.ok) {
            const data = await res.json()
            setArticles(data.blogs || [])
          }
        } catch (e) {
          // ignore
        } finally {
          setLoading(false)
        }
      }
      fetchBlogs()
    }, [pageKey, take, selectedCategory])

    // Les articles sont déjà filtrés côté serveur, donc pas besoin de filtrage côté client
    const filteredArticles = articles
    const { contact_phone, contact_whatsapp, getPhoneLink, getWhatsAppLink } = useContactInfo();
    const viewAllHref = pageKey === 'principal' ? '/blog' : `/blog?linkedPage=${encodeURIComponent(pageKey)}`;

    const formatDate = (dateString?: string | null) => {
        if (!dateString) return ''
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Skeletons
    const SkeletonCard = () => (
      <div className="animate-pulse bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
        <div className="h-48 w-full bg-gray-200 dark:bg-gray-600 rounded-t-lg" />
        <div className="p-6 space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3" />
          <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-2/3" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6" />
        </div>
      </div>
    )

    if (selectedArticle) {
        const article = articles.find(a => a.id === selectedArticle);
        if (!article) return null;

        return (
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header de l'article */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors font-medium"
                            >
                                <ArrowLeft className="h-4 w-4"/>
                                Retour aux articles
                            </button>

                            <div className="mb-6">
                <span
                    className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {categories.find(cat => cat.id === article.category)?.name || 'Article'}
                </span>
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                                {article.author && (
                                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <User className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium">{article.author}</span>
                                  </div>
                                )}
                                {article.date && (
                                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span>{formatDate(article.date)}</span>
                                  </div>
                                )}
                                {article.readTime && (
                                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span>{article.readTime}</span>
                                  </div>
                                )}
                            </div>

                            <div className="relative mb-8">
                                {article.image && (
                                  <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                            </div>
                        </div>

                        {/* Contenu de l'article */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div
                                className="article-content text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-300 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-th:text-gray-900 dark:prose-th:text-gray-100 prose-td:text-gray-700 dark:prose-td:text-gray-300"
                                dangerouslySetInnerHTML={{__html: article.content}}
                            />

                            {/* CTA en fin d'article */}
                            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                                        <Phone className="h-8 w-8"/>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                                    Besoin d'aide avec votre serrurerie ?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                                    Nos experts sont disponibles 24h/24 pour vous conseiller et intervenir rapidement.
                                    Devis gratuit et intervention garantie.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        onClick={() => window.open(`tel:${getPhoneLink(contact_phone)}`, '_self')}
                                    >
                                        <Phone className="h-5 w-5"/>
                                        Appeler maintenant
                                    </button>
                                    <button
                                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105"
                                        onClick={() => window.open(getWhatsAppLink(contact_whatsapp, "Bonjour, j'ai une question suite à la lecture de votre article"), '_blank')}
                                    >
                                        <MessageSquare className="h-5 w-5"/>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Articles similaires */}
                        {articles.length > 1 && (
                          <div className="mt-12">
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                                  Articles similaires
                              </h3>
                              <div className="grid md:grid-cols-2 gap-6">
                                  {articles
                                      .filter(a => a.id !== selectedArticle && (!article.category || a.category === article.category))
                                      .slice(0, 2)
                                      .map((similarArticle) => (
                                          <div
                                              key={similarArticle.id}
                                              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                              onClick={() => setSelectedArticle(similarArticle.id)}
                                          >
                                              {similarArticle.image && (
                                                <img
                                                    src={similarArticle.image}
                                                    alt={similarArticle.title}
                                                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                                                />
                                              )}
                                              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                  {similarArticle.title}
                                              </h4>
                                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                                                  {similarArticle.excerpt}
                                              </p>
                                              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                                  <span>{similarArticle.readTime || ''}</span>
                                                  <span className="text-blue-600 dark:text-blue-400 font-medium">Lire →</span>
                                              </div>
                                          </div>
                                      ))}
                              </div>
                          </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400"/>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Blog & <span className="text-blue-600 dark:text-blue-400">Conseils Sécurité</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Découvrez nos conseils d'experts pour améliorer la sécurité de votre domicile,
                        gérer les urgences et bien choisir vos équipements de serrurerie.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                                    selectedCategory === category.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            >
                                <IconComponent className="h-4 w-4"/>
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                {/* Carrousel d'articles */}
                {loading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <SkeletonCard key={i} />
                    ))}
                  </div>
                ) : filteredArticles.length > 0 ? (
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, SwiperPagination, Keyboard, Mousewheel, Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      slidesPerGroup={1}
                      loop={filteredArticles.length > 3}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                        },
                      }}
                      navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                      }}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        bulletClass: 'swiper-pagination-bullet-custom',
                        renderBullet: function (index, className) {
                          return '<span class="' + className + ' swiper-pagination-bullet-custom"></span>';
                        },
                      }}
                      keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                      }}
                      mousewheel={{
                        forceToAxis: true,
                      }}
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      className="!pb-16"
                      style={{ 
                        '--swiper-slide-height': 'auto'
                      } as React.CSSProperties}
                    >
                      {filteredArticles.map((article) => (
                        <SwiperSlide key={article.id} className="!h-auto">
                          <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer group bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 min-h-[500px]">
                            <div onClick={() => setSelectedArticle(article.id)} className="flex flex-col h-full">
                              {article.image && (
                                <div className="relative overflow-hidden rounded-t-lg flex-shrink-0">
                                  <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                  />
                                </div>
                              )}

                              <CardHeader className="flex-shrink-0">
                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                  {article.updatedAt && (
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4"/>
                                      {formatDate(article.updatedAt)}
                                    </div>
                                  )}
                                  {article.readTime && (
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4"/>
                                      {article.readTime}
                                    </div>
                                  )}
                                </div>

                                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white line-clamp-2 min-h-[3.5rem]">
                                  {article.title}
                                </CardTitle>
                              </CardHeader>

                              <CardContent className="flex flex-col flex-grow">
                                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                                  {article.excerpt || ''}
                                </CardDescription>

                                <div className="flex items-center justify-between mt-auto">
                                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <User className="h-4 w-4"/>
                                    {article.author || 'Admin'}
                                  </div>
                                  <Link
                                    href={`/blog/${article.slug}`}
                                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all"
                                  >
                                    Lire l'article
                                    <ArrowRight className="h-4 w-4"/>
                                  </Link>
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Boutons de navigation personnalisés */}
                    {filteredArticles.length > 3 && (
                      <>
                        <button
                          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group"
                          aria-label="Article précédent"
                        >
                          <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </button>
                        <button
                          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group"
                          aria-label="Article suivant"
                        >
                          <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </button>
                      </>
                    )}

                    {/* Styles personnalisés pour la pagination */}
                    <style jsx global>{`
                      .swiper-pagination {
                        position: relative !important;
                        margin-top: 2rem !important;
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                        gap: 8px !important;
                      }
                      .swiper-pagination-bullet-custom {
                        width: 12px !important;
                        height: 12px !important;
                        background: #e5e7eb !important;
                        opacity: 1 !important;
                        margin: 0 !important;
                        border-radius: 50% !important;
                        cursor: pointer !important;
                        transition: all 0.3s ease !important;
                        display: inline-block !important;
                      }
                      .swiper-pagination-bullet-custom:hover {
                        transform: scale(1.2) !important;
                        background: #9ca3af !important;
                      }
                      .swiper-pagination-bullet-custom-active {
                        background: #2563eb !important;
                        width: 32px !important;
                        height: 12px !important;
                        border-radius: 6px !important;
                        transform: scale(1.1) !important;
                      }
                      .dark .swiper-pagination-bullet-custom {
                        background: #4b5563 !important;
                      }
                      .dark .swiper-pagination-bullet-custom:hover {
                        background: #6b7280 !important;
                      }
                      .dark .swiper-pagination-bullet-custom-active {
                        background: #3b82f6 !important;
                      }
                    `}</style>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                    Aucun article disponible pour le moment.
                  </div>
                )}

                {articles.length > 0 && (
                  <div className="mt-12 text-center">
                    <Link
                      href={viewAllHref}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <BookOpen className="h-5 w-5" />
                      Afficher d&apos;autres articles
                    </Link>
                  </div>
                )}

                {/* Bouton Afficher d'autres articles */}
                {filteredArticles.length >= 3 && (
                  <div className="mt-12 text-center">
                    <Link
                      href={viewAllHref}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <BookOpen className="h-5 w-5" />
                      Afficher d'autres articles
                    </Link>
                  </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-600">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Une question spécifique ?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Nos experts serruriers sont à votre disposition pour répondre à toutes vos questions
                            et vous conseiller sur les meilleures solutions de sécurité.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex items-center gap-2"
                                onClick={() => window.open(`tel:${getPhoneLink(contact_phone)}`, '_self')}
                            >
                                <Shield className="h-5 w-5"/>
                                Conseil gratuit
                            </Button>
                            <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            >
                                Demander un devis
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;