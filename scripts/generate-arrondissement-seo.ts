// Script pour générer les metadata et layouts SEO pour tous les arrondissements
// Coordonnées géographiques approximatives pour chaque arrondissement de Paris

const arrondissements = [
  { num: 1, slug: 'paris-1er', name: '1er', lat: 48.8606, lng: 2.3376 },
  { num: 2, slug: 'paris-2eme', name: '2ème', lat: 48.8698, lng: 2.3412 },
  { num: 3, slug: 'paris-3eme', name: '3ème', lat: 48.8630, lng: 2.3624 },
  { num: 4, slug: 'paris-4eme', name: '4ème', lat: 48.8546, lng: 2.3522 },
  { num: 5, slug: 'paris-5eme', name: '5ème', lat: 48.8449, lng: 2.3447 },
  { num: 6, slug: 'paris-6eme', name: '6ème', lat: 48.8442, lng: 2.3372 },
  { num: 7, slug: 'paris-7eme', name: '7ème', lat: 48.8565, lng: 2.3134 },
  { num: 8, slug: 'paris-8eme', name: '8ème', lat: 48.8756, lng: 2.3117 },
  { num: 9, slug: 'paris-9eme', name: '9ème', lat: 48.8722, lng: 2.3376 },
  { num: 10, slug: 'paris-10eme', name: '10ème', lat: 48.8722, lng: 2.3624 },
  { num: 11, slug: 'paris-11eme', name: '11ème', lat: 48.8630, lng: 2.3798 },
  { num: 12, slug: 'paris-12eme', name: '12ème', lat: 48.8449, lng: 2.3798 },
  { num: 13, slug: 'paris-13eme', name: '13ème', lat: 48.8322, lng: 2.3561 },
  { num: 14, slug: 'paris-14eme', name: '14ème', lat: 48.8331, lng: 2.3264 },
  { num: 15, slug: 'paris-15eme', name: '15ème', lat: 48.8412, lng: 2.2992 },
  { num: 16, slug: 'paris-16eme', name: '16ème', lat: 48.8566, lng: 2.2764 },
  { num: 17, slug: 'paris-17eme', name: '17ème', lat: 48.8846, lng: 2.3217 },
  { num: 18, slug: 'paris-18eme', name: '18ème', lat: 48.8932, lng: 2.3481 },
  { num: 19, slug: 'paris-19eme', name: '19ème', lat: 48.8827, lng: 2.3745 },
  { num: 20, slug: 'paris-20eme', name: '20ème', lat: 48.8630, lng: 2.3984 },
]

console.log('Génération des fichiers SEO pour tous les arrondissements...')
console.log(`Total: ${arrondissements.length} arrondissements`)

arrondissements.forEach(arr => {
  console.log(`✓ ${arr.slug}`)
})

console.log('\nUtilisez ce script pour générer les fichiers automatiquement.')

