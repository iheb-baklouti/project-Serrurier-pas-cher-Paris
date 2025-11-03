import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// GET - Récupérer tous les paramètres
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const settings = await prisma.settings.findMany()
    const settingsMap = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value
      return acc
    }, {} as Record<string, string>)

    return NextResponse.json(settingsMap)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// POST - Mettre à jour les paramètres
export async function POST(req: NextRequest) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { email, phone, whatsapp } = body

    const updates = []

    // Toujours mettre à jour, même si la valeur est vide
    updates.push(
      prisma.settings.upsert({
        where: { key: 'contact_email' },
        update: { value: email || '' },
        create: { key: 'contact_email', value: email || '' }
      })
    )

    updates.push(
      prisma.settings.upsert({
        where: { key: 'contact_phone' },
        update: { value: phone || '' },
        create: { key: 'contact_phone', value: phone || '' }
      })
    )

    updates.push(
      prisma.settings.upsert({
        where: { key: 'contact_whatsapp' },
        update: { value: whatsapp || '' },
        create: { key: 'contact_whatsapp', value: whatsapp || '' }
      })
    )

    await Promise.all(updates)

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

    return NextResponse.json(settingsMap)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

