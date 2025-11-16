import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		let page = searchParams.get('page') || 'principal'
		const takeParam = searchParams.get('take')
		const take = takeParam ? Math.min(parseInt(takeParam, 10) || 20, 100) : 20

		// Mapper les nouveaux slugs vers les anciens slugs (pour compatibilité avec la base de données)
		if (page === 'paris-1er') page = 'paris-1';
		else if (page === 'paris-2eme') page = 'paris-2';
		else if (page === 'paris-3eme') page = 'paris-3';
		else if (page.match(/^paris-\d+eme$/)) {
			// Extraire le numéro de paris-Xeme et convertir en paris-X
			const match = page.match(/^paris-(\d+)eme$/);
			if (match) page = `paris-${match[1]}`;
		}

		const faqs = await prisma.fAQ.findMany({
			where: { visible: true, linkedPage: page },
			orderBy: [{ order: 'asc' }, { updatedAt: 'desc' }],
			take,
		})

		return NextResponse.json(faqs)
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
