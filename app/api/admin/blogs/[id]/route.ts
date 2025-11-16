import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// Fonction pour convertir les formats de linkedPage (paris-Xeme → paris-X)
function normalizeLinkedPage(page: string): string {
  if (!page || page === 'principal') return 'principal'
  
  // Convertir paris-1er → paris-1
  if (page === 'paris-1er') return 'paris-1'
  if (page === 'paris-2eme') return 'paris-2'
  if (page === 'paris-3eme') return 'paris-3'
  
  // Convertir paris-Xeme → paris-X (4 à 20)
  const emeMatch = page.match(/^paris-(\d+)eme$/)
  if (emeMatch) return `paris-${emeMatch[1]}`
  
  return page
}

// GET - Un blog spécifique
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const blog = await prisma.blog.findUnique({
      where: { id: params.id }
    })

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog non trouvé' },
        { status: 404 }
      )
    }

    return NextResponse.json(blog)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// PUT - Mettre à jour un blog
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { title, slug, content, excerpt, image, category, linkedPage, published } = body

    const blog = await prisma.blog.update({
      where: { id: params.id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(content && { content }),
        ...(excerpt !== undefined && { excerpt }),
        ...(image !== undefined && { image }),
        ...(category !== undefined && { category }),
        ...(linkedPage && { linkedPage: normalizeLinkedPage(linkedPage) }),
        ...(published !== undefined && { published }),
      }
    })

    return NextResponse.json(blog)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Blog non trouvé' },
        { status: 404 }
      )
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Ce slug existe déjà' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// DELETE - Supprimer un blog
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    await prisma.blog.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Blog non trouvé' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

