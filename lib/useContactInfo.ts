'use client'

import { useState, useEffect } from 'react'

interface ContactInfo {
  contact_email: string
  contact_phone: string
  contact_whatsapp: string
}

const defaultContactInfo: ContactInfo = {
  contact_email: 'spcp.paris@gmail.com',
  contact_phone: '06 27 55 88 55',
  contact_whatsapp: '33627558855'
}

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        // Ajouter un timestamp pour éviter le cache
        const timestamp = Date.now()
        const response = await fetch(`/api/public/settings?t=${timestamp}`, {
          method: 'GET',
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          },
          next: { revalidate: 0 }
        })
        
        if (response.ok) {
          const data = await response.json()
          console.log('Données reçues de l\'API (raw):', JSON.stringify(data, null, 2))
          
          // Vérifier que les données sont valides et utiliser les valeurs de l'API en priorité
          const newContactInfo = {
            contact_email: data.contact_email || defaultContactInfo.contact_email,
            contact_phone: data.contact_phone || defaultContactInfo.contact_phone,
            contact_whatsapp: data.contact_whatsapp || defaultContactInfo.contact_whatsapp
          }
          
          console.log('Comparaison - Valeurs par défaut:', defaultContactInfo)
          console.log('Comparaison - Nouvelles valeurs:', newContactInfo)
          console.log('Les valeurs sont-elles différentes?', JSON.stringify(newContactInfo) !== JSON.stringify(defaultContactInfo))
          
          setContactInfo(newContactInfo)
        } else {
          const errorText = await response.text()
          console.error('Erreur HTTP lors de la récupération des informations de contact:', response.status, response.statusText, errorText)
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de contact:', error)
        // Garder les valeurs par défaut en cas d'erreur
      } finally {
        setLoading(false)
      }
    }

    fetchContactInfo()
  }, [])

  // Fonction utilitaire pour formater le numéro de téléphone pour tel:
  // Compatible iOS et Android
  const getPhoneLink = (phone: string) => {
    // Enlever tous les espaces et caractères non numériques sauf +
    let cleaned = phone.replace(/\s/g, '').replace(/[^\d+]/g, '')
    
    // Si le numéro commence par 0, le remplacer par +33 pour le format international
    // Cela améliore la compatibilité iOS
    if (cleaned.startsWith('0')) {
      cleaned = '+33' + cleaned.substring(1)
    } else if (!cleaned.startsWith('+')) {
      // Si pas de + et pas de 0, ajouter +33 (format français)
      cleaned = '+33' + cleaned
    }
    
    return cleaned
  }

  // Fonction utilitaire pour formater le numéro WhatsApp
  const getWhatsAppLink = (whatsapp: string, message?: string) => {
    const baseUrl = `https://wa.me/${whatsapp}`
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`
    }
    return baseUrl
  }

  // Fonction pour gérer les clics sur le téléphone avec conversion Google Ads
  // Compatible iOS et Android
  const handlePhoneClick = (phone: string) => {
    const phoneNumber = getPhoneLink(phone)
    const phoneLink = `tel:${phoneNumber}`
    
    // Vérifier si la fonction gtag_report_conversion existe (Google Ads)
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      // Pour iOS, utiliser window.location.href au lieu de window.open
      // car window.open peut ne pas fonctionner avec tel: sur iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      
      if (isIOS) {
        // Sur iOS, utiliser window.location.href pour une meilleure compatibilité
        (window as any).gtag_report_conversion(phoneLink)
        // Le callback de gtag_report_conversion gérera la redirection
      } else {
        // Sur Android et autres, utiliser window.open
        (window as any).gtag_report_conversion(phoneLink)
      }
    } else {
      // Fallback si Google Ads n'est pas chargé
      // Détecter iOS pour utiliser la méthode appropriée
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      
      if (isIOS) {
        // Sur iOS, utiliser window.location.href ou créer un lien temporaire
        const link = document.createElement('a')
        link.href = phoneLink
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // Sur Android et autres, utiliser window.location.href (plus fiable que window.open)
        window.location.href = phoneLink
      }
    }
  }

  return {
    ...contactInfo,
    loading,
    getPhoneLink,
    getWhatsAppLink,
    handlePhoneClick
  }
}

