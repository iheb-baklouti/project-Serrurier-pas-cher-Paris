import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// Fonction pour convertir les formats de linkedPage (paris-Xeme → paris-X)
function normalizeLinkedPage(page: string): string {
  if (!page || page === 'principal' || page === 'all') return page
  
  // Convertir paris-1er → paris-1
  if (page === 'paris-1er') return 'paris-1'
  if (page === 'paris-2eme') return 'paris-2'
  if (page === 'paris-3eme') return 'paris-3'
  
  // Convertir paris-Xeme → paris-X (4 à 20)
  const emeMatch = page.match(/^paris-(\d+)eme$/)
  if (emeMatch) return `paris-${emeMatch[1]}`
  
  return page
}

// GET - Liste des blogs
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const searchParams = req.nextUrl.searchParams
    const linkedPage = searchParams.get('linkedPage')
    const category = searchParams.get('category')
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
    if (category) where.category = category
    
    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.blog.count({ where })
    ])

    return NextResponse.json({
      blogs,
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

  // POST - Créer un blog
  export async function POST(req: NextRequest) {
    try {
      await requireAuth()
      
      const body = await req.json()
      const { title, slug, content, excerpt, image, category, linkedPage, published } = body

      if (!title || !slug || !content) {
        return NextResponse.json(
          { error: 'Titre, slug et contenu sont requis' },
          { status: 400 }
        )
      }

      const blog = await prisma.blog.create({
        data: {
          title,
          slug,
          content,
          excerpt,
          image,
          category,
          linkedPage: normalizeLinkedPage(linkedPage || 'principal'),
          published: published || false,
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
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

