import AdminBlogEditor from '@/components/admin/AdminBlogEditor'

export const dynamic = 'force-dynamic'

export default function BlogEditPage({
  params,
}: {
  params: { id: string }
}) {
  return <AdminBlogEditor blogId={params.id} />
}

