import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// GET - Récupérer une métadonnée spécifique
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const metadata = await prisma.pageMetadata.findUnique({
      where: { id: params.id }
    })

    if (!metadata) {
      return NextResponse.json(
        { error: 'Métadonnée non trouvée' },
        { status: 404 }
      )
    }

    return NextResponse.json(metadata)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// PUT - Mettre à jour une métadonnée
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { pagePath, title, description, keywords, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, canonical } = body

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Titre et description sont requis' },
        { status: 400 }
      )
    }

    const metadata = await prisma.pageMetadata.update({
      where: { id: params.id },
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

    return NextResponse.json(metadata)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Métadonnée non trouvée' },
        { status: 404 }
      )
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Ce page path existe déjà' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// DELETE - Supprimer une métadonnée
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    await prisma.pageMetadata.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Métadonnée non trouvée' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

