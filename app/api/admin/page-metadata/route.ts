import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// GET - Liste des métadonnées de page
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const searchParams = req.nextUrl.searchParams
    const pagePath = searchParams.get('pagePath')
    
    const where: any = {}
    if (pagePath) {
      where.pagePath = pagePath
    }
    
    const metadata = await prisma.pageMetadata.findMany({
      where,
      orderBy: { pagePath: 'asc' },
    })

    return NextResponse.json({ metadata })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// POST - Créer une métadonnée de page
export async function POST(req: NextRequest) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { pagePath, title, description, keywords, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, canonical } = body

    if (!pagePath || !title || !description) {
      return NextResponse.json(
        { error: 'Page path, titre et description sont requis' },
        { status: 400 }
      )
    }

    const metadata = await prisma.pageMetadata.create({
      data: {
        pagePath,
        title,
        description,
        keywords,
        ogTitle,
        ogDescription,
        ogImage,
        twitterTitle,
        twitterDescription,
        twitterImage,
        canonical,
      }
    })

    return NextResponse.json(metadata, { status: 201 })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Les métadonnées pour cette page existent déjà' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

