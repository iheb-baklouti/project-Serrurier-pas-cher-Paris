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
    let slug: string;
    if (i === 1) slug = 'paris-1er';
    else if (i === 2) slug = 'paris-2eme';
    else if (i === 3) slug = 'paris-3eme';
    else slug = `paris-${i}eme`;
    
    pages.push({
      url: `${baseUrl}/${slug}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  }
  
  return pages
}