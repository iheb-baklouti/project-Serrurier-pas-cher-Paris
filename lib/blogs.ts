import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

const ARR_LABELS: Record<string, string> = {
  principal: 'Paris & Île-de-France',
};

for (let i = 1; i <= 20; i++) {
  const erSlug = i === 1 ? '1er' : `${i}ème`;
  ARR_LABELS[`paris-${erSlug}`] = `Paris ${erSlug}`;
}

export function normalizeLinkedPageForDb(slug: string): string {
  if (!slug || slug === 'principal') return 'principal';
  if (slug === 'paris-1er') return 'paris-1';
  if (slug === 'paris-2eme') return 'paris-2';
  if (slug === 'paris-3eme') return 'paris-3';

  const emeMatch = slug.match(/^paris-(\d+)eme$/);
  if (emeMatch) return `paris-${emeMatch[1]}`;

  const plainMatch = slug.match(/^paris-(\d+)$/);
  if (plainMatch) return slug;

  return 'principal';
}

export function canonicalLinkedPageSlug(slug?: string): string {
  if (!slug || slug === 'principal') return 'principal';
  if (slug === 'paris-1' || slug === 'paris-1er') return 'paris-1er';
  if (slug === 'paris-2' || slug === 'paris-2eme') return 'paris-2eme';
  if (slug === 'paris-3' || slug === 'paris-3eme') return 'paris-3eme';

  const plainMatch = slug.match(/^paris-(\d+)$/);
  if (plainMatch) return `paris-${plainMatch[1]}eme`;

  const emeMatch = slug.match(/^paris-(\d+)eme$/);
  if (emeMatch) return slug;

  return 'principal';
}

export function getLinkedPageLabel(slug?: string): string {
  const normalized = canonicalLinkedPageSlug(slug);
  return ARR_LABELS[normalized] || 'Paris';
}

const linkedPageOptionsCache = Object.entries(ARR_LABELS).map(([value, label]) => ({
  value,
  label,
}));

export function getLinkedPageOptions() {
  return linkedPageOptionsCache;
}

export async function fetchBlogsByPage({
  linkedPage = 'principal',
  currentPage = 1,
  pageSize = 9,
}: {
  linkedPage?: string;
  currentPage?: number;
  pageSize?: number;
}) {
  const dbLinkedPage = normalizeLinkedPageForDb(linkedPage);
  const skip = (currentPage - 1) * pageSize;

  const where: Prisma.BlogWhereInput = {
    published: true,
    linkedPage: dbLinkedPage,
  };

  const [total, blogs] = await Promise.all([
    prisma.blog.count({ where }),
    prisma.blog.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      skip,
      take: pageSize,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return {
    blogs,
    total,
    totalPages,
    currentPage: Math.min(currentPage, totalPages),
    linkedPageSlug: canonicalLinkedPageSlug(linkedPage),
    displayName: getLinkedPageLabel(linkedPage),
  };
}

export async function fetchBlogBySlug(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });
  return blog;
}

