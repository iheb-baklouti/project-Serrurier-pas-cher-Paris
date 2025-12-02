import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		let page = searchParams.get('page') || 'principal'
		const takeParam = searchParams.get('take')
		const skipParam = searchParams.get('skip')
		const search = searchParams.get('q')
		const sort = searchParams.get('sort') // 'recent' or 'order'
		
		const take = takeParam ? Math.min(parseInt(takeParam, 10) || 20, 100) : 20
		const skip = skipParam ? parseInt(skipParam, 10) || 0 : 0

		// Mapper les nouveaux slugs vers les anciens slugs (pour compatibilité avec la base de données)
		if (page === 'paris-1er') page = 'paris-1';
		else if (page === 'paris-2eme') page = 'paris-2';
		else if (page === 'paris-3eme') page = 'paris-3';
		else if (page.match(/^paris-\d+eme$/)) {
			// Extraire le numéro de paris-Xeme et convertir en paris-X
			const match = page.match(/^paris-(\d+)eme$/);
			if (match) page = `paris-${match[1]}`;
		}

		const where: Prisma.FAQWhereInput = {
			visible: true,
		}

		// Si on n'est pas sur la page dédiée "toutes les FAQs" (qui pourrait ne pas envoyer de page ou envoyer 'all'),
		// on filtre par page.
		// Pour la page /faq, on veut probablement tout voir, ou filtrer par recherche.
		// Disons que si page='all', on ignore le filtre linkedPage.
		if (page !== 'all') {
			where.linkedPage = page
		}

		if (search) {
			where.OR = [
				{ question: { contains: search, mode: 'insensitive' } },
				{ answer: { contains: search, mode: 'insensitive' } },
			]
		}

		let orderBy: Prisma.FAQOrderByWithRelationInput[] = [{ order: 'asc' }, { updatedAt: 'desc' }]
		
		if (sort === 'recent') {
			orderBy = [{ createdAt: 'desc' }]
		}

		const [faqs, total] = await Promise.all([
			prisma.fAQ.findMany({
				where,
				orderBy,
				take,
				skip,
			}),
			prisma.fAQ.count({ where })
		])

		return NextResponse.json({
			data: faqs,
			meta: {
				total,
				page: Math.floor(skip / take) + 1,
				totalPages: Math.ceil(total / take),
				hasMore: skip + take < total
			}
		})
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
