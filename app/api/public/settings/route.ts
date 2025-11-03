import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
	try {
		const settings = await prisma.settings.findMany()
		const map = settings.reduce((acc: Record<string, string>, s) => {
			acc[s.key] = s.value
			return acc
		}, {})
		return NextResponse.json(map)
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
