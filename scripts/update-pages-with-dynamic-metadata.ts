import * as fs from 'fs'
import * as path from 'path'

const arrondissements = [
  { num: 1, slug: 'paris-1er', name: '1er' },
  { num: 2, slug: 'paris-2eme', name: '2ème' },
  { num: 3, slug: 'paris-3eme', name: '3ème' },
  { num: 4, slug: 'paris-4eme', name: '4ème' },
  { num: 5, slug: 'paris-5eme', name: '5ème' },
  { num: 6, slug: 'paris-6eme', name: '6ème' },
  { num: 7, slug: 'paris-7eme', name: '7ème' },
  { num: 8, slug: 'paris-8eme', name: '8ème' },
  { num: 9, slug: 'paris-9eme', name: '9ème' },
  { num: 10, slug: 'paris-10eme', name: '10ème' },
  { num: 11, slug: 'paris-11eme', name: '11ème' },
  { num: 12, slug: 'paris-12eme', name: '12ème' },
  { num: 13, slug: 'paris-13eme', name: '13ème' },
  { num: 14, slug: 'paris-14eme', name: '14ème' },
  { num: 15, slug: 'paris-15eme', name: '15ème' },
  { num: 16, slug: 'paris-16eme', name: '16ème' },
  { num: 17, slug: 'paris-17eme', name: '17ème' },
  { num: 18, slug: 'paris-18eme', name: '18ème' },
  { num: 19, slug: 'paris-19eme', name: '19ème' },
  { num: 20, slug: 'paris-20eme', name: '20ème' },
]

const appDir = path.join(process.cwd(), 'app')

arrondissements.forEach((arr) => {
  const pagePath = path.join(appDir, arr.slug, 'page.tsx')
  
  if (!fs.existsSync(pagePath)) {
    console.log(`Page non trouvée: ${pagePath}`)
    return
  }

  let content = fs.readFileSync(pagePath, 'utf-8')

  // Vérifier si déjà mis à jour
  if (content.includes('getPageMetadata')) {
    console.log(`✓ ${arr.slug} - déjà mis à jour`)
    return
  }

  // Ajouter l'import getPageMetadata
  if (!content.includes('getPageMetadata')) {
    const importMatch = content.match(/import DynamicStructuredData from.*DynamicStructuredData['"];?/)
    if (importMatch) {
      content = content.replace(
        importMatch[0],
        `${importMatch[0]}\nimport { getPageMetadata } from '@/lib/getPageMetadata';`
      )
    } else {
      // Si DynamicStructuredData n'est pas présent, ajouter après les autres imports
      const lastImport = content.match(/import .* from.*['"];?\n/)
      if (lastImport) {
        const lastIndex = content.lastIndexOf(lastImport[0])
        content = content.slice(0, lastIndex + lastImport[0].length) + 
          `import { getPageMetadata } from '@/lib/getPageMetadata';\n` +
          content.slice(lastIndex + lastImport[0].length)
      }
    }
  }

  // Remplacer export const metadata par export async function generateMetadata
  const metadataMatch = content.match(/export const metadata: Metadata = \{[\s\S]*?\};/)
  if (metadataMatch) {
    const metadataBlock = metadataMatch[0]
    const newMetadataBlock = `export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('${arr.slug}');
  
  if (metadata) {
    return {
      ...metadata,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      other: {
        'geo.region': 'FR-75',
        'geo.placename': 'Paris ${arr.name}',
        'geo.position': '48.8566;2.3522',
        'ICBM': '48.8566, 2.3522',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24 et 7j/7 | Intervention rapide',
    description: 'Serrurier pas cher Paris ${arr.name} ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié ${arr.name} arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 27 55 88 55',
    keywords: 'serrurier Paris ${arr.name}, serrurier pas cher Paris ${arr.name}, dépannage serrurier Paris ${arr.name}, ouverture de porte Paris ${arr.name}, urgence serrurerie Paris ${arr.name}, artisan serrurier Paris ${arr.name}, serrurerie 24h Paris ${arr.name}, serrurier urgence Paris ${arr.name}, prix serrurier Paris ${arr.name}',
    authors: [{ name: 'Serrurier pas cher Paris' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: 'https://serrurier-pas-cher.paris/${arr.slug}',
      title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris ${arr.name}. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié ${arr.name} arrondissement.',
      siteName: 'Serrurier pas cher Paris',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris ${arr.name}. Dépannage serrurier urgent, ouverture de porte dès 35€.',
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/${arr.slug}',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris ${arr.name}',
      'geo.position': '48.8566;2.3522',
      'ICBM': '48.8566, 2.3522',
    },
  };
}`
    
    content = content.replace(metadataMatch[0], newMetadataBlock)
  }

  fs.writeFileSync(pagePath, content, 'utf-8')
  console.log(`✓ Mis à jour: ${arr.slug}/page.tsx`)
})

console.log('\n✅ Toutes les pages ont été mises à jour avec les métadonnées dynamiques !')

