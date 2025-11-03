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

const faqSchema = z.object({
  question: z.string().min(1, 'La question est requise'),
  answer: z.string().min(1, 'La réponse est requise'),
  order: z.number().min(0).default(0),
  visible: z.boolean().default(true),
  linkedPage: z.string().default('principal'),
})

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

type FAQForm = z.infer<typeof faqSchema>

interface AdminFAQEditorProps {
  faqId?: string
}

export default function AdminFAQEditor({ faqId }: AdminFAQEditorProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(!!faqId)
  const [saving, setSaving] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FAQForm>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answer: '',
      order: 0,
      visible: true,
      linkedPage: 'principal',
    },
  })

  const visible = watch('visible')
  const linkedPage = watch('linkedPage')

  useEffect(() => {
    if (faqId) {
      fetchFAQ()
    }
  }, [faqId])

  const fetchFAQ = async () => {
    try {
      const res = await fetch(`/api/admin/faqs/${faqId}`)
      if (res.ok) {
        const data = await res.json()
        setValue('question', data.question)
        setValue('answer', data.answer)
        setValue('order', data.order)
        setValue('visible', data.visible !== undefined ? data.visible : true)
        setValue('linkedPage', data.linkedPage || 'principal')
      }
    } catch (error) {
      toast.error('Erreur lors du chargement')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: FAQForm) => {
    setSaving(true)
    try {
      const url = faqId ? `/api/admin/faqs/${faqId}` : '/api/admin/faqs'
      const method = faqId ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success(faqId ? 'FAQ mise à jour' : 'FAQ créée')
        router.push('/admin/faqs')
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
            {faqId ? 'Modifier la FAQ' : 'Nouvelle FAQ'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {faqId ? 'Modifiez la question/réponse' : 'Créez une nouvelle question/réponse'}
          </p>
        </div>
        <Button variant="outline" onClick={() => router.push('/admin/faqs')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Informations de la FAQ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Question *</Label>
              <Input
                id="question"
                {...register('question')}
                placeholder="Quelle est votre question ?"
              />
              {errors.question && (
                <p className="text-sm text-red-600">{errors.question.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="answer">Réponse *</Label>
              <Textarea
                id="answer"
                {...register('answer')}
                placeholder="Réponse détaillée..."
                rows={8}
              />
              {errors.answer && (
                <p className="text-sm text-red-600">{errors.answer.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="order">Ordre d'affichage</Label>
              <Input
                id="order"
                type="number"
                {...register('order', { valueAsNumber: true })}
                placeholder="0"
                min="0"
              />
              <p className="text-sm text-gray-500">
                Les FAQs avec un ordre plus petit apparaîtront en premier
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedPage">Page d'affichage</Label>
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
              <p className="text-sm text-gray-500">
                Choisissez sur quelle page cette FAQ sera affichée
              </p>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <Label htmlFor="visible">Visible</Label>
                <p className="text-sm text-gray-500">
                  Afficher cette question sur le site
                </p>
              </div>
              <Switch
                id="visible"
                checked={visible}
                onCheckedChange={(checked) => setValue('visible', checked)}
              />
            </div>

            <div className="pt-4">
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
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

