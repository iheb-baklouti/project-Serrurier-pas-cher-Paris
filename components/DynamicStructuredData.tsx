'use client';

import { useEffect } from 'react';
import { useContactInfo } from '@/lib/useContactInfo';
import { getArrondissementData } from '@/lib/arrondissementData';

interface DynamicStructuredDataProps {
  arrondissement: number;
}

const DynamicStructuredData = ({ arrondissement }: DynamicStructuredDataProps) => {
  const { contact_phone, loading } = useContactInfo();
  const arrondissementInfo = getArrondissementData(arrondissement);

  useEffect(() => {
    if (loading || !contact_phone) return;

    // Formater le numéro pour le JSON-LD (format international)
    const formatPhoneForJSONLD = (phone: string) => {
      // Enlever les espaces et ajouter le + si nécessaire
      const cleaned = phone.replace(/\s/g, '');
      if (cleaned.startsWith('+')) {
        return cleaned;
      }
      if (cleaned.startsWith('0')) {
        return '+33' + cleaned.substring(1);
      }
      if (cleaned.startsWith('33')) {
        return '+' + cleaned;
      }
      return '+33' + cleaned;
    };

    const phoneFormatted = formatPhoneForJSONLD(contact_phone);

    // Créer le JSON-LD LocalBusiness
    const slug = arrondissement === 1 ? '1er' : arrondissement === 2 ? '2eme' : arrondissement === 3 ? '3eme' : `${arrondissement}eme`;
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `Serrurier pas cher Paris ${arrondissementInfo.name}`,
      image: 'https://serrurier-pas-cher.paris/logo.png',
      '@id': `https://serrurier-pas-cher.paris/paris-${slug}`,
      url: `https://serrurier-pas-cher.paris/paris-${slug}`,
      telephone: phoneFormatted,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressRegion: 'Île-de-France',
        postalCode: arrondissementInfo.postalCode,
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: arrondissementInfo.latitude,
        longitude: arrondissementInfo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      areaServed: { '@type': 'City', name: `Paris ${arrondissementInfo.name}` },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: arrondissementInfo.latitude, longitude: arrondissementInfo.longitude },
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
    };

    // Créer le JSON-LD BreadcrumbList
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://serrurier-pas-cher.paris' },
        { '@type': 'ListItem', position: 2, name: `Paris ${arrondissementInfo.name}`, item: `https://serrurier-pas-cher.paris/paris-${slug}` },
      ],
    };

    // Supprimer les anciens scripts JSON-LD s'ils existent
    const existingScripts = document.querySelectorAll('script[data-dynamic-structured-data]');
    existingScripts.forEach(script => script.remove());

    // Créer et injecter le script LocalBusiness
    const scriptLocalBusiness = document.createElement('script');
    scriptLocalBusiness.type = 'application/ld+json';
    scriptLocalBusiness.setAttribute('data-dynamic-structured-data', 'local-business');
    scriptLocalBusiness.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptLocalBusiness);

    // Créer et injecter le script BreadcrumbList
    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.setAttribute('data-dynamic-structured-data', 'breadcrumb');
    scriptBreadcrumb.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    // Cleanup function
    return () => {
      const scriptsToRemove = document.querySelectorAll('script[data-dynamic-structured-data]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, [contact_phone, loading, arrondissement]);

  return null; // Ce composant ne rend rien visuellement
};

export default DynamicStructuredData;

