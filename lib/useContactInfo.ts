'use client'

import { useState, useEffect } from 'react'

interface ContactInfo {
  contact_email: string
  contact_phone: string
  contact_whatsapp: string
}

const defaultContactInfo: ContactInfo = {
  contact_email: 'spcp.paris@gmail.com',
  contact_phone: '06 35 35 51 58',
  contact_whatsapp: '33635355158'
}

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/public/settings', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          console.log('Données reçues de l\'API:', data)
          // Vérifier que les données sont valides
          if (data && (data.contact_email || data.contact_phone || data.contact_whatsapp)) {
            const newContactInfo = {
              contact_email: data.contact_email || defaultContactInfo.contact_email,
              contact_phone: data.contact_phone || defaultContactInfo.contact_phone,
              contact_whatsapp: data.contact_whatsapp || defaultContactInfo.contact_whatsapp
            }
            console.log('Mise à jour des informations de contact:', newContactInfo)
            setContactInfo(newContactInfo)
          } else {
            console.warn('Données de contact invalides, utilisation des valeurs par défaut', data)
          }
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
  const getPhoneLink = (phone: string) => {
    return phone.replace(/\s/g, '')
  }

  // Fonction utilitaire pour formater le numéro WhatsApp
  const getWhatsAppLink = (whatsapp: string, message?: string) => {
    const baseUrl = `https://wa.me/${whatsapp}`
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`
    }
    return baseUrl
  }

  return {
    ...contactInfo,
    loading,
    getPhoneLink,
    getWhatsAppLink
  }
}

