import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page non trouvée - 404 | Serrurier pas cher Paris',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Home className="h-5 w-5" />
              Retour à l'accueil
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              <Search className="h-5 w-5" />
              Voir nos articles
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { slug: 'paris-1er', name: 'Paris 1er' },
              { slug: 'paris-2eme', name: 'Paris 2ème' },
              { slug: 'paris-3eme', name: 'Paris 3ème' },
              { slug: 'paris-4eme', name: 'Paris 4ème' },
            ].map((arr) => (
              <Link
                key={arr.slug}
                href={`/${arr.slug}`}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow text-gray-900 dark:text-white"
              >
                {arr.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
