import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// GET - Liste des FAQs
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const faqs = await prisma.fAQ.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    })

    return NextResponse.json(faqs)
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
        linkedPage: linkedPage || 'principal',
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

