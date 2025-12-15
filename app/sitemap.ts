import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { normalizeSlug } from '@/lib/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.serrurier-pas-cher.paris'
  const date = new Date()

  // Page principale
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Ajouter les 20 pages d'arrondissement
  for (let i = 1; i <= 20; i++) {
    let slug: string;
    if (i === 1) slug = 'paris-1er';
    else if (i === 2) slug = 'paris-2eme';
    else if (i === 3) slug = 'paris-3eme';
    else slug = `paris-${i}eme`;

    pages.push({
      url: `${baseUrl}/${slug}`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    })
  }

  // Ajouter la page blog principale
  pages.push({
    url: `${baseUrl}/blog`,
    lastModified: date,
    changeFrequency: 'daily',
    priority: 0.9,
  })

  // Ajouter les pages blog par arrondissement
  for (let i = 1; i <= 20; i++) {
    let slug: string;
    if (i === 1) slug = 'paris-1er';
    else if (i === 2) slug = 'paris-2eme';
    else if (i === 3) slug = 'paris-3eme';
    else slug = `paris-${i}eme`;

    pages.push({
      url: `${baseUrl}/blog?linkedPage=${slug}`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.8,
    })
  }

  // Ajouter les articles de blog publiés
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })

    blogs.forEach((blog) => {
      // Normaliser le slug pour qu'il corresponde aux URLs utilisées dans l'application
      const normalizedSlug = normalizeSlug(blog.slug)
      if (normalizedSlug) {
        pages.push({
          url: `${baseUrl}/blog/${encodeURIComponent(normalizedSlug)}`,
          lastModified: blog.updatedAt,
          changeFrequency: 'daily',
          priority: 0.8,
        })
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des blogs pour le sitemap:', error)
  }

  return pages
}