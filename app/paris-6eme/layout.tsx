import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://serrurier-pas-cher.paris'),
}

export default function Paris6emeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Serrurier pas cher Paris 6ème',
            image: 'https://serrurier-pas-cher.paris/logo.png',
            '@id': 'https://serrurier-pas-cher.paris/paris-6eme',
            url: 'https://serrurier-pas-cher.paris/paris-6eme',
            telephone: '+33627558855',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressRegion: 'Île-de-France',
              postalCode: '75006',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 48.8442,
              longitude: 2.3372,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            areaServed: { '@type': 'City', name: 'Paris 6ème' },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: { '@type': 'GeoCoordinates', latitude: 48.8442, longitude: 2.3372 },
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services de serrurerie',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Ouverture de porte', description: 'Ouverture de porte d\'urgence 24h/24' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Dépannage serrurerie', description: 'Dépannage serrurier urgent' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Installation serrures', description: 'Installation de serrures et systèmes de sécurité' },
                },
              ],
            },
            aggregateRating: { 
              '@type': 'AggregateRating', 
              ratingValue: 4.8, 
              reviewCount: 127,
              bestRating: 5,
              worstRating: 1
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://serrurier-pas-cher.paris' },
              { '@type': 'ListItem', position: 2, name: 'Paris 6ème', item: 'https://serrurier-pas-cher.paris/paris-6eme' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
