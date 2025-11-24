import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Calendar, Clock, User } from 'lucide-react';
import { fetchBlogsByPage, canonicalLinkedPageSlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog Serrurerie Paris | Conseils & Actualités',
  description:
    'Retrouvez toutes nos actualités, conseils sécurité et dossiers complets sur la serrurerie à Paris. Nouveaux articles chaque semaine pour protéger votre habitation.',
};

const PAGE_SIZE = 9;

interface BlogPageProps {
  searchParams?: {
    p?: string;
    linkedPage?: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Math.max(1, parseInt(searchParams?.p ?? '1', 10) || 1);
  const linkedPageParam = canonicalLinkedPageSlug(searchParams?.linkedPage || 'principal');

  const { blogs, totalPages, total, displayName, linkedPageSlug } = await fetchBlogsByPage({
    linkedPage: linkedPageParam,
    currentPage,
    pageSize: PAGE_SIZE,
  });

  if (currentPage > totalPages && totalPages !== 0) {
    notFound();
  }

  const buildListingUrl = (slug: string) =>
    slug === 'principal' ? '/blog' : `/blog?linkedPage=${slug}`;

  const paginationBase = linkedPageSlug === 'principal' ? '/blog' : `/blog?linkedPage=${linkedPageSlug}`;

  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4">
              <BookOpen className="h-5 w-5" />
              <span>Blog & Conseils Serrurerie</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Articles récents – {displayName}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nouveaux articles chaque semaine pour sécuriser votre habitation, comprendre les dernières
              normes et choisir les meilleures solutions de serrurerie à Paris.
            </p>
          </header>

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            Aucun article n&apos;a encore été publié pour cette zone.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {blog.image && (
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" loading="lazy" />
                )}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.updatedAt ?? blog.createdAt ?? '').toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {blog.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                    {blog.excerpt || ''}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4" />
                      {blog.author || 'Équipe Serrurier Paris'}
                    </span>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <PaginationButton
              href={
                currentPage <= 2
                  ? paginationBase
                  : `${paginationBase}${paginationBase.includes('?') ? '&' : '?'}p=${currentPage - 1}`
              }
              disabled={currentPage === 1}
            >
              Page précédente
            </PaginationButton>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Page {currentPage} / {totalPages} — {total} articles
            </span>
            <PaginationButton
              href={`${paginationBase}${paginationBase.includes('?') ? '&' : '?'}p=${currentPage + 1}`}
              disabled={currentPage === totalPages}
            >
              Page suivante
            </PaginationButton>
          </div>
        )}
        </div>
      </section>
      <Footer />
    </>
  );
}

function PaginationButton({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled: boolean;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm cursor-not-allowed">
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      {children}
    </Link>
  );
}

