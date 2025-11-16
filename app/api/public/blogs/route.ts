import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		let page = searchParams.get('page') || 'principal'
		const takeParam = searchParams.get('take')
		const skipParam = searchParams.get('skip')
		const category = searchParams.get('category')
		
		// Mapper les nouveaux slugs vers les anciens slugs (pour compatibilité avec la base de données)
		if (page === 'paris-1er') page = 'paris-1';
		else if (page === 'paris-2eme') page = 'paris-2';
		else if (page === 'paris-3eme') page = 'paris-3';
		else if (page.match(/^paris-\d+eme$/)) {
			// Extraire le numéro de paris-Xeme et convertir en paris-X
			const match = page.match(/^paris-(\d+)eme$/);
			if (match) page = `paris-${match[1]}`;
		}
		
		// Pour le carrousel, on peut récupérer plus d'articles (jusqu'à 100 pour permettre plusieurs slides)
		const take = takeParam ? Math.min(parseInt(takeParam, 10) || 100, 100) : 100
		const skip = skipParam ? Math.max(0, parseInt(skipParam, 10)) : 0

		const where: any = { published: true, linkedPage: page }
		
		// Filtrage par catégorie si spécifié
		if (category && category !== 'tous') {
			where.category = category
		}

		// Récupérer le nombre total d'articles
		const total = await prisma.blog.count({ where })

		// Récupérer les articles avec pagination, triés par date décroissante (plus récent en premier)
		const blogs = await prisma.blog.findMany({
			where,
			orderBy: { updatedAt: 'desc' },
			skip,
			take,
		})

		return NextResponse.json({
			blogs,
			total,
			page: Math.floor(skip / take) + 1,
			totalPages: Math.ceil(total / take),
		})
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
