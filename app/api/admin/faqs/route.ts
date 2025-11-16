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

// GET - Liste des FAQs
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const searchParams = req.nextUrl.searchParams
    const linkedPage = searchParams.get('linkedPage')
    const pageParam = searchParams.get('page')
    const takeParam = searchParams.get('take')
    
    const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1
    const take = takeParam ? Math.min(parseInt(takeParam, 10) || 10, 50) : 10
    const skip = (page - 1) * take
    
    const where: any = {}
    if (linkedPage && linkedPage !== 'all') {
      // Normaliser le linkedPage pour la recherche (convertir paris-Xeme → paris-X)
      where.linkedPage = normalizeLinkedPage(linkedPage)
    }
    
    const [faqs, total] = await Promise.all([
      prisma.fAQ.findMany({
        where,
        orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
        skip,
        take,
      }),
      prisma.fAQ.count({ where })
    ])

    return NextResponse.json({
      faqs,
      total,
      page,
      totalPages: Math.ceil(total / take),
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

// POST - Créer une FAQ
export async function POST(req: NextRequest) {
  try {
    await requireAuth()
    
    const body = await req.json()
    const { question, answer, order, visible, linkedPage } = body

    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Question et réponse sont requis' },
        { status: 400 }
      )
    }

    const faq = await prisma.fAQ.create({
      data: {
        question,
        answer,
        order: order || 0,
        visible: visible !== undefined ? visible : true,
        linkedPage: normalizeLinkedPage(linkedPage || 'principal'),
      }
    })

    return NextResponse.json(faq, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

