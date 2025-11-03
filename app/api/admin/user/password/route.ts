import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

function validatePassword(pw: string) {
	// Min 8 chars, 1 letter, 1 number
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-={}|[\]\\:\";'<>?,./]{8,}$/.test(pw)
}

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)
		if (!session?.user?.email) {
			return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
		}

		const { oldPassword, newPassword } = await req.json()
		if (!oldPassword || !newPassword) {
			return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
		}

		if (!validatePassword(newPassword)) {
			return NextResponse.json({ error: 'Mot de passe trop faible (8+ caractères, lettres et chiffres)' }, { status: 400 })
		}

		const user = await prisma.user.findUnique({ where: { email: session.user.email } })
		if (!user) {
			return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 })
		}

		const ok = await bcrypt.compare(oldPassword, user.password)
		if (!ok) {
			return NextResponse.json({ error: 'Ancien mot de passe incorrect' }, { status: 400 })
		}

		const hashed = await bcrypt.hash(newPassword, 10)
		await prisma.user.update({ where: { id: user.id }, data: { password: hashed } })

		return NextResponse.json({ success: true })
	} catch (error: any) {
		return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 })
	}
}
