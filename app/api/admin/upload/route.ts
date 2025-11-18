import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    await requireAuth()

    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      )
    }

    // Vérifier le type de fichier (images uniquement)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Type de fichier non autorisé. Seules les images sont acceptées.' },
        { status: 400 }
      )
    }

    // Vérifier la taille (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Le fichier est trop volumineux. Taille maximale: 5MB' },
        { status: 400 }
      )
    }

    // Vérifier que Supabase est configuré
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Configuration Supabase manquante. Veuillez configurer NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY.' },
        { status: 500 }
      )
    }

    // Générer un nom de fichier unique
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const extension = file.name.split('.').pop()
    const filename = `${timestamp}-${randomString}.${extension}`
    const filePath = `uploads/${filename}`

    // Convertir le fichier en buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload vers Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from('images')
      .upload(filePath, buffer, {
        contentType: file.type,
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
    console.error('Erreur upload:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'upload' },
      { status: error.message === 'Non authentifié' ? 401 : 500 }
    )
  }
}

