import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Token d'authentification (à mettre dans .env)
const AUTOMATION_TOKEN = process.env.AUTOMATION_TOKEN || 'votre-token-secret-tres-long'

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

// POST - Créer une FAQ via automation (avec token)
export async function POST(req: NextRequest) {
  try {
    // Vérifier le token
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    if (token !== AUTOMATION_TOKEN) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }

    const body = await req.json()
    const { question, answer, linkedPage, order } = body

    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Question et réponse sont requis' },
        { status: 400 }
      )
    }

    // Validation
    if (question.length < 10) {
      return NextResponse.json(
        { error: 'La question doit faire au moins 10 caractères' },
        { status: 400 }
      )
    }

    if (answer.length < 50) {
      return NextResponse.json(
        { error: 'La réponse doit faire au moins 50 caractères' },
        { status: 400 }
      )
    }

    const faq = await prisma.faq.create({
      data: {
        question,
        answer,
        linkedPage: normalizeLinkedPage(linkedPage || 'principal'),
        order: order || 0,
        visible: true, // Toujours visible pour les FAQs automatisées
      }
    })

    return NextResponse.json(faq, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: 500 }
    )
  }
}

