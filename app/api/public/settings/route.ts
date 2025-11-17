import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Forcer le mode dynamique pour éviter le cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

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

    console.log('Settings récupérés depuis la BDD:', JSON.stringify(settings, null, 2))

    const settingsMap = settings.reduce((acc, setting) => {
      if (setting.key && setting.value) {
        acc[setting.key] = setting.value
      }
      return acc
    }, {} as Record<string, string>)

    console.log('Settings map après réduction:', JSON.stringify(settingsMap, null, 2))
    console.log('Nombre de settings trouvés:', settings.length)
    console.log('contact_phone dans settingsMap:', settingsMap.contact_phone)
    console.log('contact_whatsapp dans settingsMap:', settingsMap.contact_whatsapp)
    console.log('contact_email dans settingsMap:', settingsMap.contact_email)

    // Retourner TOUJOURS les valeurs de la BDD si elles existent (même si vides), sinon les valeurs par défaut
    // Important: on vérifie si la clé existe dans settingsMap, pas si la valeur est truthy
    const result = {
      contact_email: settingsMap.hasOwnProperty('contact_email') ? settingsMap.contact_email : 'spcp.paris@gmail.com',
      contact_phone: settingsMap.hasOwnProperty('contact_phone') ? settingsMap.contact_phone : '06 35 35 51 58',
      contact_whatsapp: settingsMap.hasOwnProperty('contact_whatsapp') ? settingsMap.contact_whatsapp : '33635355158'
    }

    console.log('Résultat final retourné par l\'API:', JSON.stringify(result, null, 2))
    console.log('Vérification: contact_phone depuis BDD =', settingsMap.contact_phone, '| Résultat =', result.contact_phone)

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
