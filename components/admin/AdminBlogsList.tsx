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
import { Plus, Search, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
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

interface Blog {
  id: string
  title: string
  slug: string
  linkedPage: string
  category?: string | null
  published: boolean
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

const categoryOptions = [
  { value: 'all', label: 'Toutes les catégories' },
  { value: 'conseils', label: 'Conseils sécurité' },
  { value: 'urgence', label: 'Situations d\'urgence' },
  { value: 'installation', label: 'Installation' },
  { value: 'entretien', label: 'Entretien' },
]

export default function AdminBlogsList() {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [filterLinkedPage, setFilterLinkedPage] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filterLinkedPage && filterLinkedPage !== 'all') params.append('linkedPage', filterLinkedPage)
      if (filterCategory && filterCategory !== 'all') params.append('category', filterCategory)
      params.append('page', currentPage.toString())
      params.append('take', '10')
      
      const res = await fetch(`/api/admin/blogs?${params.toString()}`)
      if (res.ok) {
        const data = await res.json()
        setBlogs(data.blogs || [])
        setFilteredBlogs(data.blogs || [])
        setTotalPages(data.totalPages || 1)
        setTotal(data.total || 0)
      }
    } catch (error) {
      toast.error('Erreur lors du chargement des blogs')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [currentPage, filterLinkedPage, filterCategory])

  useEffect(() => {
    // Filtrage local par recherche
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.slug.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredBlogs(filtered)
  }, [search, blogs])

  // Réinitialiser à la page 1 quand les filtres changent
  useEffect(() => {
    setCurrentPage(1)
  }, [filterLinkedPage, filterCategory])

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        toast.success('Blog supprimé avec succès')
        // Recharger avec les mêmes filtres
        fetchBlogs()
      } else {
        toast.error('Erreur lors de la suppression')
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression')
    } finally {
      setDeleteId(null)
    }
  }

  const togglePublish = async (blog: Blog) => {
    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !blog.published }),
      })
      if (res.ok) {
        toast.success(blog.published ? 'Blog dépublié' : 'Blog publié')
        fetchBlogs()
      }
    } catch (error) {
      toast.error('Erreur')
    }
  }

  if (loading) {
    return <div className="text-center py-12">Chargement...</div>
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Gestion des Blogs</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
            Gérez vos articles de blog
          </p>
        </div>
        <Button onClick={() => router.push('/admin/blogs/new')} className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Nouvel article
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher un blog..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
                <div className="w-full sm:w-[200px]">
                  <Select
                    value={filterCategory}
                    onValueChange={(value) => setFilterCategory(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Filtrer par catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {(filterLinkedPage !== 'all' || filterCategory !== 'all') && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Filtres actifs:
                </span>
                {filterLinkedPage !== 'all' && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Page: {pageOptions.find(p => p.value === filterLinkedPage)?.label}
                  </span>
                )}
                {filterCategory !== 'all' && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Catégorie: {categoryOptions.find(c => c.value === filterCategory)?.label}
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setFilterLinkedPage('all')
                    setFilterCategory('all')
                  }}
                >
                  Réinitialiser
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {filteredBlogs.length === 0 ? (
            <p className="text-center py-8 text-gray-500">Aucun blog trouvé</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-full inline-block align-middle">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Titre</TableHead>
                      <TableHead className="min-w-[150px]">Slug</TableHead>
                      <TableHead className="min-w-[120px]">Page liée</TableHead>
                      <TableHead className="min-w-[130px]">Catégorie</TableHead>
                      <TableHead className="w-24">Statut</TableHead>
                      <TableHead className="min-w-[130px]">Date</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBlogs.map((blog) => (
                      <TableRow key={blog.id}>
                        <TableCell className="font-medium break-words">
                          <div className="max-w-[200px] line-clamp-2">
                            {blog.title}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-500 break-words">
                          <div className="max-w-[150px] line-clamp-1">
                            {blog.slug}
                          </div>
                        </TableCell>
                        <TableCell className="text-blue-600 dark:text-blue-400 break-words">
                          <div className="max-w-[120px] line-clamp-1">
                            {blog.linkedPage}
                          </div>
                        </TableCell>
                        <TableCell>
                          {blog.category ? (
                            <span className="inline-flex w-max px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm whitespace-nowrap">
                              {categoryOptions.find(c => c.value === blog.category)?.label || blog.category}
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                              blog.published
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}
                          >
                            {blog.published ? 'Publié' : 'Brouillon'}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-500 text-sm whitespace-nowrap">
                          {format(new Date(blog.updatedAt), 'dd MMM yyyy', { locale: fr })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => togglePublish(blog)}
                              title={blog.published ? 'Dépublier' : 'Publier'}
                            >
                              {blog.published ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => router.push(`/admin/blogs/${blog.id}`)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteId(blog.id)}
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
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
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
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Affichage de {((currentPage - 1) * 10) + 1} à {Math.min(currentPage * 10, total)} sur {total} article{total > 1 ? 's' : ''}
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
              Êtes-vous sûr de vouloir supprimer ce blog ? Cette action est irréversible.
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

