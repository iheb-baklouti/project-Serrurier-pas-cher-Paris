import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://serrurier-pas-cher.paris'
  const date = new Date()
  
  // Page principale
  const pages = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
  
  // Ajouter les 20 pages d'arrondissement
  for (let i = 1; i <= 20; i++) {
    pages.push({
      url: `${baseUrl}/paris-${i}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  }
  
  return pages
}