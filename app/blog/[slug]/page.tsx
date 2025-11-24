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
      <article className="py-20 bg-white dark:bg-gray-900 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href={listingUrl}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles {displayName}
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                {displayName}
              </span>
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
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {blog.author || 'Équipe Serrurier Paris'}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{blog.title}</h1>

            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-2xl mb-10"
                loading="lazy"
              />
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          <div className="mt-12 text-center">
            <Link
              href={listingUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              ← Voir d&apos;autres articles {displayName}
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

