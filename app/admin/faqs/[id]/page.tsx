import AdminFAQEditor from '@/components/admin/AdminFAQEditor'

export const dynamic = 'force-dynamic'

export default function FAQEditPage({
  params,
}: {
  params: { id: string }
}) {
  return <AdminFAQEditor faqId={params.id} />
}

