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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
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

interface FAQ {
  id: string
  question: string
  answer: string
  order: number
  linkedPage?: string
  visible?: boolean
  createdAt: string
  updatedAt: string
}

const pageOptions = [
  { value: 'all', label: 'Toutes les pages' },
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

export default function AdminFAQsList() {
  const router = useRouter()
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([])
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [filterLinkedPage, setFilterLinkedPage] = useState('all')

  const fetchFAQs = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filterLinkedPage && filterLinkedPage !== 'all') params.append('linkedPage', filterLinkedPage)
      params.append('page', currentPage.toString())
      params.append('take', '10')
      
      const res = await fetch(`/api/admin/faqs?${params.toString()}`)
      if (res.ok) {
        const data = await res.json()
        setFaqs(data.faqs || [])
        setFilteredFaqs(data.faqs || [])
        setTotalPages(data.totalPages || 1)
        setTotal(data.total || 0)
      }
    } catch (error) {
      toast.error('Erreur lors du chargement des FAQs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFAQs()
  }, [currentPage, filterLinkedPage])

  useEffect(() => {
    // Filtrage local par recherche
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredFaqs(filtered)
  }, [search, faqs])

  // Réinitialiser à la page 1 quand le filtre change
  useEffect(() => {
    setCurrentPage(1)
  }, [filterLinkedPage])

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/faqs/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        toast.success('FAQ supprimée avec succès')
        // Recharger avec les mêmes filtres
        fetchFAQs()
      } else {
        toast.error('Erreur lors de la suppression')
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
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Gestion des FAQ</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
            Gérez vos questions fréquentes
          </p>
        </div>
        <Button onClick={() => router.push('/admin/faqs/new')} className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle FAQ
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher une FAQ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <div className="w-full sm:w-[200px]">
                <Select
                  value={filterLinkedPage}
                  onValueChange={(value) => setFilterLinkedPage(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filtrer par page" />
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
            </div>
            {filterLinkedPage !== 'all' && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Filtre actif:
                </span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                  Page: {pageOptions.find(p => p.value === filterLinkedPage)?.label}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilterLinkedPage('all')}
                >
                  Réinitialiser
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {filteredFaqs.length === 0 ? (
            <p className="text-center py-8 text-gray-500">Aucune FAQ trouvée</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-full inline-block align-middle">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Ordre</TableHead>
                      <TableHead className="min-w-[200px] max-w-[250px]">Question</TableHead>
                      <TableHead className="min-w-[250px] max-w-[400px]">Réponse</TableHead>
                      <TableHead className="min-w-[120px]">Page liée</TableHead>
                      <TableHead className="w-24">Visible</TableHead>
                      <TableHead className="min-w-[130px]">Date</TableHead>
                      <TableHead className="w-28 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFaqs.map((faq) => (
                      <TableRow key={faq.id}>
                        <TableCell className="font-medium">{faq.order}</TableCell>
                        <TableCell className="font-medium break-words">
                          <div className="max-w-[250px] line-clamp-2">
                            {faq.question}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-500 break-words">
                          <div className="max-w-[400px] line-clamp-2">
                            {faq.answer}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-blue-600 dark:text-blue-400 text-sm break-words">
                            {faq.linkedPage || 'principal'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                              faq.visible !== false
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}
                          >
                            {faq.visible !== false ? 'Visible' : 'Masquée'}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-500 text-sm whitespace-nowrap">
                          {format(new Date(faq.updatedAt), 'dd MMM yyyy', { locale: fr })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => router.push(`/admin/faqs/${faq.id}`)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteId(faq.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex flex-col items-center gap-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer rounded-full'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let pageNum: number;
                    if (totalPages <= 7) {
                      pageNum = i + 1;
                    } else if (currentPage <= 4) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNum = totalPages - 6 + i;
                    } else {
                      pageNum = currentPage - 3 + i;
                    }
                    
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNum)}
                          isActive={pageNum === currentPage}
                          className="cursor-pointer rounded-full"
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer rounded-full'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Affichage de {((currentPage - 1) * 10) + 1} à {Math.min(currentPage * 10, total)} sur {total} FAQ{total > 1 ? 's' : ''}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cette FAQ ? Cette action est irréversible.
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

