'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Search, Edit, Trash2 } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { toast } from 'sonner'

interface PageMetadata {
  id: string
  pagePath: string
  title: string
  description: string
  keywords?: string | null
  createdAt: string
  updatedAt: string
}

export default function AdminPageMetadataList() {
  const router = useRouter()
  const [metadata, setMetadata] = useState<PageMetadata[]>([])
  const [filteredMetadata, setFilteredMetadata] = useState<PageMetadata[]>([])
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchMetadata = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/admin/page-metadata')
      if (res.ok) {
        const data = await res.json()
        setMetadata(data.metadata || [])
        setFilteredMetadata(data.metadata || [])
      }
    } catch (error) {
      toast.error('Erreur lors du chargement des métadonnées')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMetadata()
  }, [])

  useEffect(() => {
    const filtered = metadata.filter(
      (item) =>
        item.pagePath.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredMetadata(filtered)
  }, [search, metadata])

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/page-metadata/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        toast.success('Métadonnée supprimée')
        fetchMetadata()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Erreur lors de la suppression')
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression')
    } finally {
      setDeleteId(null)
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
            Métadonnées des pages
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Gérez les métadonnées SEO de chaque page
          </p>
        </div>
        <Button onClick={() => router.push('/admin/page-metadata/new')}>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle métadonnée
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des métadonnées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher par page, titre ou description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredMetadata.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {search ? 'Aucun résultat trouvé' : 'Aucune métadonnée'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Titre</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Modifié le</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMetadata.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.pagePath}</TableCell>
                      <TableCell className="max-w-xs truncate">{item.title}</TableCell>
                      <TableCell className="max-w-md truncate">{item.description}</TableCell>
                      <TableCell>
                        {format(new Date(item.updatedAt), 'dd MMM yyyy', { locale: fr })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/page-metadata/${item.id}`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer ces métadonnées ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

