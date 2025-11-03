'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, HelpCircle, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface Stats {
  blogCount: number
  faqCount: number
  publishedBlogs: number
  recentBlogs: Array<{
    id: string
    title: string
    updatedAt: string
    linkedPage: string
  }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Chargement...</div>
  }

  if (!stats) {
    return <div className="text-center py-12 text-red-600">Erreur de chargement</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Vue d'ensemble de votre site
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogCount}</div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.publishedBlogs} publiés
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions FAQ</CardTitle>
            <HelpCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.faqCount}</div>
            <p className="text-xs text-gray-500 mt-1">
              Questions actives
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles publiés</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.publishedBlogs}</div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.blogCount - stats.publishedBlogs} en brouillon
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Blogs */}
      <Card>
        <CardHeader>
          <CardTitle>Derniers articles modifiés</CardTitle>
          <CardDescription>
            Les 5 articles les plus récemment modifiés
          </CardDescription>
        </CardHeader>
        <CardContent>
          {stats.recentBlogs.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Aucun article pour le moment</p>
          ) : (
            <div className="space-y-3">
              {stats.recentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>
                        {format(new Date(blog.updatedAt), 'dd MMMM yyyy', { locale: fr })}
                      </span>
                      <span className="text-blue-600">• {blog.linkedPage}</span>
                    </div>
                  </div>
                  <Link href={`/admin/blogs/${blog.id}`}>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/blogs/new">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Nouvel article
              </CardTitle>
              <CardDescription>Créer un nouvel article de blog</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/admin/faqs/new">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Nouvelle FAQ
              </CardTitle>
              <CardDescription>Ajouter une nouvelle question/réponse</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}

