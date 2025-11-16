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

    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value
      return acc
    }, {} as Record<string, string>)

    // Valeurs par défaut si les settings n'existent pas
    return NextResponse.json({
      contact_email: settingsMap.contact_email || 'spcp.paris@gmail.com',
      contact_phone: settingsMap.contact_phone || '06 35 35 51 58',
      contact_whatsapp: settingsMap.contact_whatsapp || '33635355158'
    })
  } catch (error: any) {
    // En cas d'erreur, retourner les valeurs par défaut
    return NextResponse.json({
      contact_email: 'spcp.paris@gmail.com',
      contact_phone: '06 35 35 51 58',
      contact_whatsapp: '33635355158'
    })
  }
}
