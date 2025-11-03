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
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import ImageUpload from './ImageUpload'

const blogSchema = z.object({
  title: z.string().min(1, 'Le titre est requis'),
  slug: z.string().min(1, 'Le slug est requis'),
  content: z.string().min(1, 'Le contenu est requis'),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  linkedPage: z.string().default('principal'),
  published: z.boolean().default(false),
})

type BlogForm = z.infer<typeof blogSchema>

interface AdminBlogEditorProps {
  blogId?: string
}

const pageOptions = [
  { value: 'principal', label: 'Page principale' },
  { value: 'paris-1', label: 'Paris 1' },
  { value: 'paris-2', label: 'Paris 2' },
  { value: 'paris-3', label: 'Paris 3' },
  { value: 'paris-4', label: 'Paris 4' },
  { value: 'paris-5', label: 'Paris 5' },
  { value: 'paris-6', label: 'Paris 6' },
  { value: 'paris-7', label: 'Paris 7' },
  { value: 'paris-8', label: 'Paris 8' },
  { value: 'paris-9', label: 'Paris 9' },
  { value: 'paris-10', label: 'Paris 10' },
  { value: 'paris-11', label: 'Paris 11' },
  { value: 'paris-12', label: 'Paris 12' },
  { value: 'paris-13', label: 'Paris 13' },
  { value: 'paris-14', label: 'Paris 14' },
  { value: 'paris-15', label: 'Paris 15' },
  { value: 'paris-16', label: 'Paris 16' },
  { value: 'paris-17', label: 'Paris 17' },
  { value: 'paris-18', label: 'Paris 18' },
  { value: 'paris-19', label: 'Paris 19' },
  { value: 'paris-20', label: 'Paris 20' },
]

export default function AdminBlogEditor({ blogId }: AdminBlogEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(!!blogId)
  const [saving, setSaving] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BlogForm>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      image: '',
      category: '',
      linkedPage: 'principal',
      published: false,
    },
  })

  const published = watch('published')
  const linkedPage = watch('linkedPage')

  useEffect(() => {
    if (blogId) {
      fetchBlog()
    }
  }, [blogId])

  useEffect(() => {
    const title = watch('title')
    if (title && !blogId) {
      const slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setValue('slug', slug)
    }
  }, [watch('title')])

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`)
      if (res.ok) {
        const data = await res.json()
        Object.keys(data).forEach((key) => {
          if (key in data) {
            setValue(key as keyof BlogForm, data[key])
          }
        })
      }
    } catch (error) {
      toast.error('Erreur lors du chargement')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: BlogForm) => {
    setSaving(true)
    try {
      const url = blogId ? `/api/admin/blogs/${blogId}` : '/api/admin/blogs'
      const method = blogId ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success(blogId ? 'Blog mis à jour' : 'Blog créé')
        router.push('/admin/blogs')
      } else {
        const error = await res.json()
        toast.error(error.error || 'Erreur')
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {blogId ? 'Modifier le blog' : 'Nouvel article'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {blogId ? 'Modifiez les informations du blog' : 'Créez un nouvel article de blog'}
          </p>
        </div>
        <Button variant="outline" onClick={() => router.push('/admin/blogs')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contenu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre *</Label>
                  <Input
                    id="title"
                    {...register('title')}
                    placeholder="Titre de l'article"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    {...register('slug')}
                    placeholder="url-de-l-article"
                  />
                  {errors.slug && (
                    <p className="text-sm text-red-600">{errors.slug.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Extrait</Label>
                  <Textarea
                    id="excerpt"
                    {...register('excerpt')}
                    placeholder="Résumé court de l'article"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Contenu *</Label>
                  <Textarea
                    id="content"
                    {...register('content')}
                    placeholder="Contenu de l'article (HTML supporté)"
                    rows={15}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-600">{errors.content.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedPage">Page liée</Label>
                  <Select
                    value={linkedPage}
                    onValueChange={(value) => setValue('linkedPage', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {pageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Input
                    id="category"
                    {...register('category')}
                    placeholder="conseils, urgence, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image de l'article</Label>
                  <ImageUpload
                    value={watch('image')}
                    onChange={(url) => setValue('image', url)}
                  />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="published">Publié</Label>
                    <p className="text-sm text-gray-500">
                      Rendre l'article visible publiquement
                    </p>
                  </div>
                  <Switch
                    id="published"
                    checked={published}
                    onCheckedChange={(checked) => setValue('published', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Button type="submit" className="w-full" disabled={saving}>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}

