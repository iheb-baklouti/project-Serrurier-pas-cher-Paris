import AdminPageMetadataEditor from '@/components/admin/AdminPageMetadataEditor'

export const dynamic = 'force-dynamic'

export default function PageMetadataEditPage({
  params,
}: {
  params: { id: string }
}) {
  return <AdminPageMetadataEditor metadataId={params.id} />
}

