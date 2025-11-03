import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

// GET - Liste des blogs
export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const searchParams = req.nextUrl.searchParams
    const linkedPage = searchParams.get('linkedPage')
    
    const where = linkedPage ? { linkedPage } : {}
    
    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(blogs)
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
        linkedPage: linkedPage || 'principal',
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

