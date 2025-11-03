'use client'

import { User, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminHeaderProps {
  user: {
    name?: string | null
    email?: string | null
  }
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const handleOpenSite = () => {
    window.open('/', '_blank')
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Administration
        </h2>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleOpenSite}
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Voir le site
          </Button>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <User className="h-5 w-5" />
            <span className="text-sm">{user.name || user.email}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

