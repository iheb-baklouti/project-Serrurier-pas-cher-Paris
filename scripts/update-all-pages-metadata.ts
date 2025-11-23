import * as fs from 'fs'
import * as path from 'path'

const arrondissements = [
  { num: 3, slug: 'paris-3eme', name: '3ème', geo: '48.8630;2.3624' },
  { num: 4, slug: 'paris-4eme', name: '4ème', geo: '48.8546;2.3522' },
  { num: 5, slug: 'paris-5eme', name: '5ème', geo: '48.8442;2.3436' },
  { num: 6, slug: 'paris-6eme', name: '6ème', geo: '48.8449;2.3364' },
  { num: 7, slug: 'paris-7eme', name: '7ème', geo: '48.8565;2.3122' },
  { num: 8, slug: 'paris-8eme', name: '8ème', geo: '48.8756;2.3117' },
  { num: 9, slug: 'paris-9eme', name: '9ème', geo: '48.8722;2.3378' },
  { num: 10, slug: 'paris-10eme', name: '10ème', geo: '48.8722;2.3624' },
  { num: 11, slug: 'paris-11eme', name: '11ème', geo: '48.8592;2.3790' },
  { num: 12, slug: 'paris-12eme', name: '12ème', geo: '48.8449;2.3732' },
  { num: 13, slug: 'paris-13eme', name: '13ème', geo: '48.8322;2.3561' },
  { num: 14, slug: 'paris-14eme', name: '14ème', geo: '48.8331;2.3264' },
  { num: 15, slug: 'paris-15eme', name: '15ème', geo: '48.8412;2.2996' },
  { num: 16, slug: 'paris-16eme', name: '16ème', geo: '48.8500;2.2669' },
  { num: 17, slug: 'paris-17eme', name: '17ème', geo: '48.8846;2.3219' },
  { num: 18, slug: 'paris-18eme', name: '18ème', geo: '48.8932;2.3484' },
  { num: 19, slug: 'paris-19eme', name: '19ème', geo: '48.8827;2.3742' },
  { num: 20, slug: 'paris-20eme', name: '20ème', geo: '48.8630;2.3984' },
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
    }
  }

  // Remplacer export const metadata par export async function generateMetadata
  const metadataMatch = content.match(/export const metadata: Metadata = \{[\s\S]*?\};/)
  if (metadataMatch) {
    const [lat, lng] = arr.geo.split(';')
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
        'geo.position': '${arr.geo}',
        'ICBM': '${arr.geo.replace(';', ', ')}',
      },
    };
  }
  
  // Fallback si pas de métadonnées en BDD
  return {
    title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24 et 7j/7 | Intervention rapide',
    description: 'Serrurier pas cher Paris ${arr.name} ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié ${arr.name} arrondissement. Urgence serrurerie. Devis gratuit ☎️ 06 35 35 51 58',
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
      images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: 'Serrurier pas cher Paris' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Serrurier pas cher Paris ${arr.name} – Dépannage 24h/24',
      description: 'Serrurier pas cher Paris ${arr.name}. Dépannage serrurier urgent, ouverture de porte dès 35€.',
      images: ['https://serrurier-pas-cher.paris/icon.svg'],
    },
    alternates: {
      canonical: 'https://serrurier-pas-cher.paris/${arr.slug}',
    },
    other: {
      'geo.region': 'FR-75',
      'geo.placename': 'Paris ${arr.name}',
      'geo.position': '${arr.geo}',
      'ICBM': '${arr.geo.replace(';', ', ')}',
    },
  };
}`
    
    content = content.replace(metadataMatch[0], newMetadataBlock)
  }

  fs.writeFileSync(pagePath, content, 'utf-8')
  console.log(`✓ Mis à jour: ${arr.slug}/page.tsx`)
})

console.log('\n✅ Toutes les pages ont été mises à jour avec les métadonnées dynamiques !')

