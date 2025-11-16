'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  HelpCircle, 
  Settings, 
  Home,
  LogOut,
  Shield,
  X
} from 'lucide-react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Logo from '../Logo'

const menuItems = [
  { href: '/admin', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/admin/blogs', label: 'Blogs', icon: FileText },
  { href: '/admin/faqs', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/settings', label: 'Paramètres', icon: Settings },
  { href: '/admin/account', label: 'Compte', icon: Shield },
]

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const prevPathname = useRef(pathname)

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  // Fermer le sidebar sur mobile uniquement lorsqu'on navigue (pathname change)
  useEffect(() => {
    // Vérifier si le pathname a vraiment changé (navigation)
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      
      // Fermer seulement sur mobile lors d'une navigation
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        onClose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) // Seulement pathname - ferme automatiquement après navigation

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg',
          'transform transition-transform duration-300 ease-in-out',
          'lg:translate-x-0 lg:shadow-none',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="rounded-lg">
              
            <Logo size="sm" />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-lg text-gray-900 dark:text-white">Admin</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Serrurier Pas Cher Paris</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname?.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Déconnexion
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

