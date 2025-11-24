import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// Token d'authentification (à mettre dans .env)
const AUTOMATION_TOKEN = process.env.AUTOMATION_TOKEN || 'votre-token-secret-tres-long'

// POST - Upload image via automation (avec token)
export async function POST(req: NextRequest) {
  try {
    // Vérifier le token
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    if (token !== AUTOMATION_TOKEN) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }

    // Vérifier que Supabase est configuré
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Configuration Supabase manquante' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { imageUrl, filename } = body

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'URL de l\'image requise' },
        { status: 400 }
      )
    }

    // Télécharger l'image depuis l'URL
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Impossible de télécharger l\'image' },
        { status: 400 }
      )
    }

    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer())
    const contentType = imageResponse.headers.get('content-type') || 'image/png'

    // Générer un nom de fichier unique
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const finalFilename = filename || `blog-${timestamp}-${randomString}.png`
    const filePath = `blogs/${finalFilename}`

    // Upload vers Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from('images')
      .upload(filePath, imageBuffer, {
        contentType,
        upsert: false
      })

    if (error) {
      console.error('Erreur Supabase Storage:', error)
      return NextResponse.json(
        { error: `Erreur lors de l'upload: ${error.message}` },
        { status: 500 }
      )
    }

    // Récupérer l'URL publique
    const { data: urlData } = supabaseAdmin.storage
      .from('images')
      .getPublicUrl(filePath)

    const publicUrl = urlData.publicUrl

    return NextResponse.json({ url: publicUrl }, { status: 200 })
  } catch (error: any) {
    console.error('Erreur upload image:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'upload' },
      { status: 500 }
    )
  }
}

