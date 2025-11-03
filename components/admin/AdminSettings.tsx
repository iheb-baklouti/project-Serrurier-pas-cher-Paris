'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Save, Loader2, Mail, Phone } from 'lucide-react'
import { toast } from 'sonner'

interface Settings {
  contact_email?: string
  contact_phone?: string
  contact_whatsapp?: string
}

export default function AdminSettings() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState<Settings>({})

  const { register, handleSubmit, setValue } = useForm<Settings>({
    defaultValues: {
      contact_email: '',
      contact_phone: '',
      contact_whatsapp: '',
    }
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings')
      if (res.ok) {
        const data = await res.json()
        setSettings(data)
        // Utiliser setValue pour mettre à jour les valeurs du formulaire
        setValue('contact_email', data.contact_email || '')
        setValue('contact_phone', data.contact_phone || '')
        setValue('contact_whatsapp', data.contact_whatsapp || '')
      } else {
        const errorData = await res.json()
        toast.error(errorData.error || 'Erreur lors du chargement')
      }
    } catch (error) {
      console.error('Erreur fetchSettings:', error)
      toast.error('Erreur lors du chargement des paramètres')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: Settings) => {
    setSaving(true)
    try {
      // Envoyer toutes les valeurs, même si elles sont vides
      const payload = {
        email: data.contact_email || '',
        phone: data.contact_phone || '',
        whatsapp: data.contact_whatsapp || '',
      }

      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        const updated = await res.json()
        setSettings(updated)
        // Mettre à jour les valeurs du formulaire avec les nouvelles données
        setValue('contact_email', updated.contact_email || '')
        setValue('contact_phone', updated.contact_phone || '')
        setValue('contact_whatsapp', updated.contact_whatsapp || '')
        toast.success('Paramètres mis à jour avec succès')
      } else {
        const errorData = await res.json()
        toast.error(errorData.error || 'Erreur lors de la sauvegarde')
      }
    } catch (error) {
      console.error('Erreur onSubmit:', error)
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Paramètres du site</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Gérez les informations de contact de votre site
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Informations de contact</CardTitle>
            <CardDescription>
              Ces informations seront affichées sur votre site
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact_email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email de contact
              </Label>
              <Input
                id="contact_email"
                type="email"
                {...register('contact_email')}
                placeholder="contact@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Numéro de téléphone
              </Label>
              <Input
                id="contact_phone"
                type="tel"
                {...register('contact_phone')}
                placeholder="06 35 35 51 58"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_whatsapp" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Numéro WhatsApp
              </Label>
              <Input
                id="contact_whatsapp"
                type="tel"
                {...register('contact_whatsapp')}
                placeholder="33635355158"
              />
              <p className="text-sm text-gray-500">
                Format international sans le + (ex: 33635355158)
              </p>
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
                    Enregistrer les paramètres
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

