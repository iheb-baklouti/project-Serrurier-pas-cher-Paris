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
  const [contactInfo, setContactInfo] = useState<ContactInfo>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/public/settings')
        if (response.ok) {
          const data = await response.json()
          setContactInfo(data)
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

