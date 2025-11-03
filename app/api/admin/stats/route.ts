import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    await requireAuth()
    
    const [blogCount, faqCount, publishedBlogs, recentBlogs] = await Promise.all([
      prisma.blog.count(),
      prisma.fAQ.count(),
      prisma.blog.count({ where: { published: true } }),
      prisma.blog.findMany({
        take: 5,
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          title: true,
          updatedAt: true,
          linkedPage: true,
        }
      })
    ])

    return NextResponse.json({
      blogCount,
      faqCount,
      publishedBlogs,
      recentBlogs,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erreur serveur' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

