'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  // Définir l'état initial seulement une fois au chargement
  useEffect(() => {
    if (!isInitialized && typeof window !== 'undefined') {
      // Sur desktop, ouvrir le sidebar par défaut
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true)
      }
      // Sur mobile/tablette, laisser fermé (déjà false par défaut)
      setIsInitialized(true)
    }
  }, [isInitialized])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Chargement...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64 transition-all duration-300">
        <AdminHeader 
          user={session.user} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="p-4 sm:p-6 max-w-[1920px] mx-auto">{children}</main>
      </div>
    </div>
  )
}
