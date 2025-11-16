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

// GET - Une FAQ spécifique
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const faq = await prisma.fAQ.findUnique({
      where: { id: params.id }
    })

    if (!faq) {
      return NextResponse.json(
        { error: 'FAQ non trouvée' },
        { status: 404 }
      )
    }

    return NextResponse.json(faq)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// PUT - Mettre à jour une FAQ
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { question, answer, order, visible, linkedPage } = body

    const faq = await prisma.fAQ.update({
      where: { id: params.id },
      data: {
        ...(question && { question }),
        ...(answer && { answer }),
        ...(order !== undefined && { order }),
        ...(visible !== undefined && { visible }),
        ...(linkedPage && { linkedPage: normalizeLinkedPage(linkedPage) }),
      }
    })

    return NextResponse.json(faq)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'FAQ non trouvée' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// DELETE - Supprimer une FAQ
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth()
    
    await prisma.fAQ.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'FAQ non trouvée' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

