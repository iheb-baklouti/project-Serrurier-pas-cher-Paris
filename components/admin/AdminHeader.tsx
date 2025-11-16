'use client'

import { User, ExternalLink, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminHeaderProps {
  user: {
    name?: string | null
    email?: string | null
  }
  onMenuClick: () => void
}

export default function AdminHeader({ user, onMenuClick }: AdminHeaderProps) {
  const handleOpenSite = () => {
    window.open('/', '_blank')
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Administration
          </h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleOpenSite}
            className="flex items-center gap-2 text-xs sm:text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Voir le site</span>
            <span className="sm:hidden">Site</span>
          </Button>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
              {user.name || user.email}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

