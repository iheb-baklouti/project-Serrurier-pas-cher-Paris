import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const page = searchParams.get('page') || 'principal'
		const takeParam = searchParams.get('take')
		const take = takeParam ? Math.min(parseInt(takeParam, 10) || 6, 24) : 6

		const blogs = await prisma.blog.findMany({
			where: { published: true, linkedPage: page },
			orderBy: { updatedAt: 'desc' },
			take,
		})

		return NextResponse.json(blogs)
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
