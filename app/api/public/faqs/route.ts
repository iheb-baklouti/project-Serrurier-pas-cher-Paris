import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const page = searchParams.get('page') || 'principal'
		const takeParam = searchParams.get('take')
		const take = takeParam ? Math.min(parseInt(takeParam, 10) || 20, 100) : 20

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
