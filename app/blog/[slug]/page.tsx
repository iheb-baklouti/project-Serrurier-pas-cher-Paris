import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { fetchBlogBySlug, canonicalLinkedPageSlug, getLinkedPageLabel } from '@/lib/blogs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: 'Article introuvable | Serrurier Paris',
    };
  }

  return {
    title: `${blog.title} | Serrurier Paris`,
    description: blog.excerpt || blog.title,
  };
}

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: ArticlePageProps) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog || !blog.published) {
    notFound();
  }

  const linkedPageSlug = canonicalLinkedPageSlug(blog.linkedPage);
  const displayName = getLinkedPageLabel(linkedPageSlug);
  const listingUrl = linkedPageSlug === 'principal' ? '/blog' : `/blog?linkedPage=${linkedPageSlug}`;

  return (
    <>
      <Header />
      <article className="py-20 bg-gray-50 dark:bg-gray-900 pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href={listingUrl}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles {displayName}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 lg:p-12 overflow-hidden">
                {/* Header */}
                <header className="mb-10">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wide">
                      {displayName}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.updatedAt ?? blog.createdAt ?? '').toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {blog.readTime && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                    {blog.title}
                  </h1>

                  {blog.image && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  )}
                </header>

                {/* Content */}
                <div
                  className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white 
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-6
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-blue-600
                    prose-ol:list-decimal prose-ol:pl-6
                    [&>p]:mb-6 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Author Footer */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {blog.author || 'Équipe Serrurier Paris'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Expert en serrurerie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Sticky Container */}
              <div className="sticky top-32 space-y-8">
                {/* CTA Box */}
                <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-600/20">
                  <h3 className="text-xl font-bold mb-4">Besoin d'un serrurier ?</h3>
                  <p className="text-blue-100 mb-6">
                    Nos experts interviennent en 30 minutes partout à Paris. Devis gratuit et sans engagement.
                  </p>
                  <Link
                    href="/#contact"
                    className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                  >
                    Demander un devis
                  </Link>
                </div>

                {/* Navigation */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    <Link href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Tous les articles
                    </Link>
                    <Link href="/faq" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Foire aux questions
                    </Link>
                    <Link href="/#services" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Nos services
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href={listingUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Voir d&apos;autres articles {displayName}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
