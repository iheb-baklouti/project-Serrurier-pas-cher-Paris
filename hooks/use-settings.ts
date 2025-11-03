import { useEffect, useState } from 'react'

export type SiteSettings = Record<string, string>

export function useSettings() {
	const [data, setData] = useState<SiteSettings>({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let mounted = true
		async function run() {
			setLoading(true)
			try {
				const res = await fetch('/api/public/settings', { cache: 'no-store' })
				if (!res.ok) throw new Error('Erreur chargement settings')
				const json = await res.json()
				if (mounted) setData(json)
			} catch (e: any) {
				if (mounted) setError(e.message || 'Erreur')
			} finally {
				if (mounted) setLoading(false)
			}
		}
		run()
		return () => { mounted = false }
	}, [])

	return { settings: data, loading, error }
}
