'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const metadataSchema = z.object({
  pagePath: z.string().min(1, 'Le chemin de page est requis'),
  title: z.string().min(1, 'Le titre est requis'),
  description: z.string().min(1, 'La description est requise'),
  keywords: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
  canonical: z.string().optional(),
})

type MetadataForm = z.infer<typeof metadataSchema>

interface AdminPageMetadataEditorProps {
  metadataId?: string
}

const pageOptions = [
  { value: 'principal', label: 'Page principale' },
  { value: 'paris-1er', label: 'Paris 1er' },
  { value: 'paris-2eme', label: 'Paris 2ème' },
  { value: 'paris-3eme', label: 'Paris 3ème' },
  { value: 'paris-4eme', label: 'Paris 4ème' },
  { value: 'paris-5eme', label: 'Paris 5ème' },
  { value: 'paris-6eme', label: 'Paris 6ème' },
  { value: 'paris-7eme', label: 'Paris 7ème' },
  { value: 'paris-8eme', label: 'Paris 8ème' },
  { value: 'paris-9eme', label: 'Paris 9ème' },
  { value: 'paris-10eme', label: 'Paris 10ème' },
  { value: 'paris-11eme', label: 'Paris 11ème' },
  { value: 'paris-12eme', label: 'Paris 12ème' },
  { value: 'paris-13eme', label: 'Paris 13ème' },
  { value: 'paris-14eme', label: 'Paris 14ème' },
  { value: 'paris-15eme', label: 'Paris 15ème' },
  { value: 'paris-16eme', label: 'Paris 16ème' },
  { value: 'paris-17eme', label: 'Paris 17ème' },
  { value: 'paris-18eme', label: 'Paris 18ème' },
  { value: 'paris-19eme', label: 'Paris 19ème' },
  { value: 'paris-20eme', label: 'Paris 20ème' },
]

export default function AdminPageMetadataEditor({ metadataId }: AdminPageMetadataEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(!!metadataId)
  const [saving, setSaving] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<MetadataForm>({
    resolver: zodResolver(metadataSchema),
    defaultValues: {
      pagePath: '',
      title: '',
      description: '',
      keywords: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterTitle: '',
      twitterDescription: '',
      twitterImage: '',
      canonical: '',
    },
  })

  const pagePath = watch('pagePath')

  useEffect(() => {
    if (metadataId) {
      fetchMetadata()
    }
  }, [metadataId])

  const fetchMetadata = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/admin/page-metadata/${metadataId}`)
      if (res.ok) {
        const data = await res.json()
        Object.keys(data).forEach((key) => {
          if (key in data) {
            setValue(key as keyof MetadataForm, data[key] || '')
          }
        })
      } else {
        toast.error('Erreur lors du chargement des métadonnées')
        router.push('/admin/page-metadata')
      }
    } catch (error) {
      toast.error('Erreur lors du chargement des métadonnées')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: MetadataForm) => {
    try {
      setSaving(true)
      const url = metadataId
        ? `/api/admin/page-metadata/${metadataId}`
        : '/api/admin/page-metadata'
      const method = metadataId ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success(metadataId ? 'Métadonnées mises à jour' : 'Métadonnées créées')
        router.push('/admin/page-metadata')
      } else {
        const errorData = await res.json()
        toast.error(errorData.error || 'Erreur lors de la sauvegarde')
      }
    } catch (error) {
      toast.error('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Chargement...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {metadataId ? 'Modifier les métadonnées' : 'Nouvelles métadonnées'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Configurez les métadonnées SEO de la page
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pagePath">Page *</Label>
                <Select
                  value={pagePath}
                  onValueChange={(value) => setValue('pagePath', value)}
                  disabled={!!metadataId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une page" />
                  </SelectTrigger>
                  <SelectContent>
                    {pageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.pagePath && (
                  <p className="text-red-600 text-sm mt-1">{errors.pagePath.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="title">Titre SEO *</Label>
                <Input
                  id="title"
                  {...register('title')}
                  placeholder="Titre de la page (50-60 caractères recommandés)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Apparaît dans les résultats Google (en bleu). Ex: "Serrurier pas cher Paris 1er – Dépannage 24h/24"
                </p>
                {errors.title && (
                  <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="description">Description SEO *</Label>
                <Textarea
                  id="description"
                  {...register('description')}
                  placeholder="Description de la page (150-160 caractères recommandés)"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Apparaît sous le titre dans Google (en gris). Inclure le prix (35€) et le téléphone.
                </p>
                {errors.description && (
                  <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="keywords">Mots-clés</Label>
                <Input
                  id="keywords"
                  {...register('keywords')}
                  placeholder="Mots-clés séparés par des virgules"
                />
              </div>

              <div>
                <Label htmlFor="canonical">URL Canonique</Label>
                <Input
                  id="canonical"
                  {...register('canonical')}
                  placeholder="https://serrurier-pas-cher.paris/..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Open Graph (Facebook, LinkedIn)</CardTitle>
              <p className="text-sm text-gray-500 mt-2">
                Contrôle l'affichage quand quelqu'un partage votre lien sur Facebook ou LinkedIn
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ogTitle">Titre OG</Label>
                <Input
                  id="ogTitle"
                  {...register('ogTitle')}
                  placeholder="Titre pour les réseaux sociaux"
                />
              </div>

              <div>
                <Label htmlFor="ogDescription">Description OG</Label>
                <Textarea
                  id="ogDescription"
                  {...register('ogDescription')}
                  placeholder="Description pour les réseaux sociaux"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="ogImage">Image OG</Label>
                <Input
                  id="ogImage"
                  {...register('ogImage')}
                  placeholder="https://serrurier-pas-cher.paris/icon.svg (1200x630px recommandé)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Si vide, le logo par défaut sera utilisé automatiquement
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Twitter Card</CardTitle>
              <p className="text-sm text-gray-500 mt-2">
                Contrôle l'affichage quand quelqu'un partage votre lien sur Twitter
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="twitterTitle">Titre Twitter</Label>
                <Input
                  id="twitterTitle"
                  {...register('twitterTitle')}
                  placeholder="Titre pour Twitter"
                />
              </div>

              <div>
                <Label htmlFor="twitterDescription">Description Twitter</Label>
                <Textarea
                  id="twitterDescription"
                  {...register('twitterDescription')}
                  placeholder="Description pour Twitter"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="twitterImage">Image Twitter</Label>
                <Input
                  id="twitterImage"
                  {...register('twitterImage')}
                  placeholder="https://serrurier-pas-cher.paris/icon.svg (1200x675px recommandé)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Si vide, le logo par défaut sera utilisé automatiquement
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Annuler
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Enregistrer
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

