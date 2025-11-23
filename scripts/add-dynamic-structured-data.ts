import * as fs from 'fs';
import * as path from 'path';

const arrondissements = [
  { num: 1, name: '1er', slug: '1er' },
  { num: 2, name: '2ème', slug: '2eme' },
  { num: 3, name: '3ème', slug: '3eme' },
  ...Array.from({ length: 17 }, (_, i) => ({
    num: i + 4,
    name: `${i + 4}ème`,
    slug: `${i + 4}eme`,
  })),
];

const appDir = path.join(process.cwd(), 'app');

arrondissements.forEach((arr) => {
  const pagePath = path.join(appDir, `paris-${arr.slug}`, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`Page non trouvée: ${pagePath}`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');

  // Ajouter l'import si pas déjà présent
  if (!content.includes('DynamicStructuredData')) {
    const importMatch = content.match(/import ScrollToTop from.*ScrollToTop['"];?/);
    if (importMatch) {
      content = content.replace(
        importMatch[0],
        `${importMatch[0]}\nimport DynamicStructuredData from '@/components/DynamicStructuredData';`
      );
    }
  }

  // Ajouter le composant dans le return si pas déjà présent
  if (!content.includes('<DynamicStructuredData')) {
    const mainMatch = content.match(/<main className="min-h-screen">/);
    if (mainMatch) {
      content = content.replace(
        mainMatch[0],
        `${mainMatch[0]}\n      <DynamicStructuredData arrondissement={${arr.num}} />`
      );
    }
  }

  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log(`✓ Mis à jour: paris-${arr.slug}/page.tsx`);
});

console.log('\n✅ Toutes les pages ont été mises à jour !');

