import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Token d'authentification (à mettre dans .env)
const AUTOMATION_TOKEN = process.env.AUTOMATION_TOKEN || 'votre-token-secret-tres-long'

// Fonction pour convertir les formats de linkedPage (paris-Xeme → paris-X)
function normalizeLinkedPage(page: string): string {
  if (!page || page === 'principal' || page === 'all') return 'principal'
  
  // Convertir paris-1er → paris-1
  if (page === 'paris-1er') return 'paris-1'
  if (page === 'paris-2eme') return 'paris-2'
  if (page === 'paris-3eme') return 'paris-3'
  
  // Convertir paris-Xeme → paris-X (4 à 20)
  const emeMatch = page.match(/^paris-(\d+)eme$/)
  if (emeMatch) return `paris-${emeMatch[1]}`
  
  return page
}

// POST - Créer un blog via automation (avec token)
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
    const { title, content, excerpt, image, category, linkedPage, published } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titre et contenu sont requis' },
        { status: 400 }
      )
    }

    // Validation du contenu
    if (content.length < 100) {
      return NextResponse.json(
        { error: 'Le contenu doit faire au moins 100 caractères' },
        { status: 400 }
      )
    }

    if (title.length < 20) {
      return NextResponse.json(
        { error: 'Le titre doit faire au moins 20 caractères' },
        { status: 400 }
      )
    }

    // Générer le slug automatiquement si non fourni
    let slug = body.slug
    if (!slug) {
      slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      
      // Ajouter un timestamp pour éviter les doublons
      slug = `${slug}-${Date.now()}`
    }

    // Générer l'extrait si non fourni
    const finalExcerpt = excerpt || content.substring(0, 200).replace(/\n/g, ' ').trim() + '...'

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt: finalExcerpt,
        image: image || null,
        category: category || null,
        linkedPage: normalizeLinkedPage(linkedPage || 'principal'),
        published: published !== false, // Par défaut publié
      }
    })

    return NextResponse.json(blog, { status: 201 })
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Ce slug existe déjà' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: 500 }
    )
  }
}

