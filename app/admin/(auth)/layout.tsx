// Layout pour le route group (auth) - ce layout remplace le layout admin pour les routes dans ce groupe
// Cela signifie que /admin/login ne sera PAS affecté par le layout admin qui vérifie la session
export const dynamic = 'force-dynamic'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Ce layout ne vérifie PAS la session - permettant l'accès à la page de login
  return <>{children}</>
}
