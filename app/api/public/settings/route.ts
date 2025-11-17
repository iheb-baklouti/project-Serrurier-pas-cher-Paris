import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Récupérer les paramètres de contact (publique)
export async function GET() {
  try {
    const settings = await prisma.settings.findMany({
      where: {
        key: {
          in: ['contact_email', 'contact_phone', 'contact_whatsapp']
        }
      }
    })

    console.log('Settings récupérés depuis la BDD:', settings)

    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value
      return acc
    }, {} as Record<string, string>)

    console.log('Settings map:', settingsMap)

    // Retourner les valeurs de la BDD ou les valeurs par défaut
    const result = {
      contact_email: settingsMap.contact_email || 'spcp.paris@gmail.com',
      contact_phone: settingsMap.contact_phone || '06 35 35 51 58',
      contact_whatsapp: settingsMap.contact_whatsapp || '33635355158'
    }

    console.log('Résultat final retourné:', result)

    // Ajouter des headers pour éviter le cache
    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error: any) {
    console.error('Erreur lors de la récupération des settings:', error)
    // En cas d'erreur, retourner les valeurs par défaut
    return NextResponse.json({
      contact_email: 'spcp.paris@gmail.com',
      contact_phone: '06 35 35 51 58',
      contact_whatsapp: '33635355158'
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  }
}
