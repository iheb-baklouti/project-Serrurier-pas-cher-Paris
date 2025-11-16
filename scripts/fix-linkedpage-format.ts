import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Mapping des nouveaux formats vers les anciens formats pour la BDD
const formatMapping: Record<string, string> = {
  'paris-1er': 'paris-1',
  'paris-2eme': 'paris-2',
  'paris-3eme': 'paris-3',
  'paris-4eme': 'paris-4',
  'paris-5eme': 'paris-5',
  'paris-6eme': 'paris-6',
  'paris-7eme': 'paris-7',
  'paris-8eme': 'paris-8',
  'paris-9eme': 'paris-9',
  'paris-10eme': 'paris-10',
  'paris-11eme': 'paris-11',
  'paris-12eme': 'paris-12',
  'paris-13eme': 'paris-13',
  'paris-14eme': 'paris-14',
  'paris-15eme': 'paris-15',
  'paris-16eme': 'paris-16',
  'paris-17eme': 'paris-17',
  'paris-18eme': 'paris-18',
  'paris-19eme': 'paris-19',
  'paris-20eme': 'paris-20',
}

async function main() {
  try {
    console.log('🔧 Correction des formats linkedPage...\n')

    // Corriger les FAQs
    console.log('📋 Correction des FAQs...')
    const faqs = await prisma.fAQ.findMany({
      where: {
        linkedPage: {
          in: Object.keys(formatMapping)
        }
      }
    })

    let faqCount = 0
    for (const faq of faqs) {
      const correctFormat = formatMapping[faq.linkedPage]
      if (correctFormat && faq.linkedPage !== correctFormat) {
        await prisma.fAQ.update({
          where: { id: faq.id },
          data: { linkedPage: correctFormat }
        })
        console.log(`  ✅ FAQ ${faq.id}: ${faq.linkedPage} → ${correctFormat}`)
        faqCount++
      }
    }

    // Corriger les Blogs
    console.log('\n📝 Correction des Blogs...')
    const blogs = await prisma.blog.findMany({
      where: {
        linkedPage: {
          in: Object.keys(formatMapping)
        }
      }
    })

    let blogCount = 0
    for (const blog of blogs) {
      const correctFormat = formatMapping[blog.linkedPage]
      if (correctFormat && blog.linkedPage !== correctFormat) {
        await prisma.blog.update({
          where: { id: blog.id },
          data: { linkedPage: correctFormat }
        })
        console.log(`  ✅ Blog ${blog.id}: ${blog.linkedPage} → ${correctFormat}`)
        blogCount++
      }
    }

    console.log(`\n✨ Correction terminée:`)
    console.log(`   - ${faqCount} FAQ(s) corrigée(s)`)
    console.log(`   - ${blogCount} Blog(s) corrigé(s)`)
  } catch (error) {
    console.error('❌ Erreur lors de la correction:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()

