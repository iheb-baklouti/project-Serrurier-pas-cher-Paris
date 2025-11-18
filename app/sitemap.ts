import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://serrurier-pas-cher.paris'
  const date = new Date()
  
  // Page principale
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 1,
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
      changeFrequency: 'weekly',
      priority: 0.9,
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
      pages.push({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des blogs pour le sitemap:', error)
  }
  
  return pages
}