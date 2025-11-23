import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Récupérer les métadonnées publiques d'une page
export async function GET(
  req: NextRequest,
  { params }: { params: { pagePath: string } }
) {
  try {
    const metadata = await prisma.pageMetadata.findUnique({
      where: { pagePath: params.pagePath }
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
      { status: 500 }
    )
  }
}

