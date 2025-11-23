import { Metadata } from 'next'
import { prisma } from './prisma'

export async function getPageMetadata(pagePath: string): Promise<Metadata | null> {
  try {
    const metadata = await prisma.pageMetadata.findUnique({
      where: { pagePath }
    })

    if (!metadata) {
      return null
    }

    return {
      title: metadata.title,
      description: metadata.description,
      keywords: metadata.keywords ? metadata.keywords.split(',').map(k => k.trim()) : undefined,
      authors: [{ name: 'Serrurier pas cher Paris' }],
      creator: 'Serrurier pas cher Paris',
      publisher: 'Serrurier pas cher Paris',
      robots: 'index, follow',
      icons: {
        icon: '/icon.svg',
      },
      openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: `https://serrurier-pas-cher.paris/${pagePath === 'principal' ? '' : pagePath}`,
        siteName: 'Serrurier pas cher Paris',
        title: metadata.ogTitle || metadata.title,
        description: metadata.ogDescription || metadata.description,
        images: metadata.ogImage 
          ? [{ url: metadata.ogImage }] 
          : [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: 'Serrurier pas cher Paris' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: metadata.twitterTitle || metadata.title,
        description: metadata.twitterDescription || metadata.description,
        images: metadata.twitterImage 
          ? [metadata.twitterImage] 
          : ['https://serrurier-pas-cher.paris/icon.svg'],
      },
      alternates: {
        canonical: metadata.canonical || `https://serrurier-pas-cher.paris/${pagePath === 'principal' ? '' : pagePath}`,
      },
    }
  } catch (error) {
    console.error('Error fetching page metadata:', error)
    return null
  }
}

