// Données de contenu spécifiques pour chaque arrondissement de Paris
// Utilisé pour créer du contenu unique et optimisé SEO pour chaque page

export interface ArrondissementContent {
  quartiers: string[];
  rues: string[];
  stationsMetro: string[];
  pointsInteret: string[];
  descriptionLongue: string;
  descriptionCourte: string;
  faqContext: string;
}

export const arrondissementContent: Record<number, ArrondissementContent> = {
  1: {
    quartiers: ['Louvre', 'Palais-Royal', 'Les Halles', 'Place Vendôme'],
    rues: ['Rue de Rivoli', 'Rue Saint-Honoré', 'Avenue de l\'Opéra'],
    stationsMetro: ['Louvre-Rivoli', 'Palais Royal-Musée du Louvre', 'Châtelet-Les Halles'],
    pointsInteret: ['Musée du Louvre', 'Palais Royal', 'Jardin des Tuileries'],
    descriptionLongue: 'Serrurier pas cher dans le 1er arrondissement de Paris, proche du Louvre, Palais-Royal et Les Halles. Intervention rapide 24h/24 pour ouverture de porte, changement de serrure, dépannage serrurerie.',
    descriptionCourte: 'Serrurier d\'urgence 1er arrondissement Paris - Intervention rapide Louvre, Palais-Royal',
    faqContext: 'dans le 1er arrondissement de Paris, près du Louvre et des Halles'
  },
  2: {
    quartiers: ['Bourse', 'Sentier', 'Montorgueil'],
    rues: ['Rue Montorgueil', 'Rue du Sentier', 'Rue de la Paix'],
    stationsMetro: ['Bourse', 'Sentier', 'Réaumur-Sébastopol'],
    pointsInteret: ['Bourse de Paris', 'Quartier Montorgueil'],
    descriptionLongue: 'Serrurier pas cher dans le 2ème arrondissement de Paris, zone Bourse et Sentier. Dépannage serrurier urgent 24h/24, ouverture de porte, changement de serrure.',
    descriptionCourte: 'Serrurier d\'urgence 2ème arrondissement Paris - Intervention rapide Bourse, Sentier',
    faqContext: 'dans le 2ème arrondissement de Paris, près de la Bourse et du Sentier'
  },
  3: {
    quartiers: ['Marais', 'Temple', 'Arts-et-Métiers'],
    rues: ['Rue des Rosiers', 'Rue de Bretagne', 'Rue Vieille du Temple'],
    stationsMetro: ['Arts et Métiers', 'Temple', 'République'],
    pointsInteret: ['Musée des Arts et Métiers', 'Place de la République'],
    descriptionLongue: 'Serrurier pas cher dans le 3ème arrondissement de Paris, quartier du Marais. Intervention rapide 24h/24 pour tous vos besoins de serrurerie.',
    descriptionCourte: 'Serrurier d\'urgence 3ème arrondissement Paris - Intervention rapide Marais',
    faqContext: 'dans le 3ème arrondissement de Paris, dans le quartier du Marais'
  },
  4: {
    quartiers: ['Marais', 'Notre-Dame', 'Hôtel de Ville', 'Île de la Cité'],
    rues: ['Rue des Rosiers', 'Rue de Rivoli', 'Boulevard de Sébastopol'],
    stationsMetro: ['Hôtel de Ville', 'Châtelet', 'Saint-Paul'],
    pointsInteret: ['Notre-Dame', 'Hôtel de Ville', 'Place des Vosges'],
    descriptionLongue: 'Serrurier pas cher dans le 4ème arrondissement de Paris, proche de Notre-Dame et Hôtel de Ville. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 4ème arrondissement Paris - Intervention rapide Notre-Dame, Hôtel de Ville',
    faqContext: 'dans le 4ème arrondissement de Paris, près de Notre-Dame et de l\'Hôtel de Ville'
  },
  5: {
    quartiers: ['Quartier Latin', 'Panthéon', 'Sorbonne', 'Val-de-Grâce', 'Jardin des Plantes', 'Mouffetard'],
    rues: ['Rue Mouffetard', 'Rue Monge', 'Boulevard Saint-Michel', 'Rue de la Sorbonne', 'Rue Descartes'],
    stationsMetro: ['Place Monge', 'Censier-Daubenton', 'Jussieu', 'Cardinal Lemoine', 'Maubert-Mutualité', 'Cluny-La Sorbonne'],
    pointsInteret: ['Panthéon', 'Sorbonne', 'Jardin des Plantes', 'Muséum d\'Histoire Naturelle', 'Val-de-Grâce'],
    descriptionLongue: 'Serrurier pas cher dans le 5ème arrondissement de Paris, Quartier Latin. Intervention rapide près du Panthéon, Sorbonne, Jardin des Plantes. Serrurier d\'urgence 24h/24 près des stations Place Monge, Censier-Daubenton, Jussieu, Cardinal Lemoine, Maubert-Mutualité. Ouverture de porte, changement de serrure, dépannage serrurerie dans les rues Mouffetard, Monge, Saint-Michel.',
    descriptionCourte: 'Serrurier d\'urgence 5ème arrondissement Paris - Intervention rapide Quartier Latin, Panthéon, Sorbonne',
    faqContext: 'dans le 5ème arrondissement de Paris, dans le Quartier Latin, près du Panthéon et de la Sorbonne'
  },
  6: {
    quartiers: ['Saint-Germain-des-Prés', 'Luxembourg', 'Odéon', 'Notre-Dame-des-Champs'],
    rues: ['Boulevard Saint-Germain', 'Rue de Rennes', 'Rue de Vaugirard'],
    stationsMetro: ['Saint-Germain-des-Prés', 'Odéon', 'Luxembourg', 'Rennes'],
    pointsInteret: ['Jardin du Luxembourg', 'Théâtre de l\'Odéon', 'Église Saint-Germain-des-Prés'],
    descriptionLongue: 'Serrurier pas cher dans le 6ème arrondissement de Paris, quartier Saint-Germain-des-Prés. Intervention rapide 24h/24 près du Jardin du Luxembourg.',
    descriptionCourte: 'Serrurier d\'urgence 6ème arrondissement Paris - Intervention rapide Saint-Germain-des-Prés',
    faqContext: 'dans le 6ème arrondissement de Paris, dans le quartier Saint-Germain-des-Prés'
  },
  7: {
    quartiers: ['Invalides', 'Tour Eiffel', 'École Militaire', 'Gros-Caillou'],
    rues: ['Avenue des Invalides', 'Rue de Grenelle', 'Boulevard Saint-Germain'],
    stationsMetro: ['Invalides', 'École Militaire', 'La Tour-Maubourg', 'Varenne'],
    pointsInteret: ['Tour Eiffel', 'Hôtel des Invalides', 'Musée d\'Orsay'],
    descriptionLongue: 'Serrurier pas cher dans le 7ème arrondissement de Paris, proche de la Tour Eiffel et des Invalides. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 7ème arrondissement Paris - Intervention rapide Tour Eiffel, Invalides',
    faqContext: 'dans le 7ème arrondissement de Paris, près de la Tour Eiffel et des Invalides'
  },
  8: {
    quartiers: ['Champs-Élysées', 'Madeleine', 'Concorde', 'Faubourg Saint-Honoré'],
    rues: ['Avenue des Champs-Élysées', 'Rue du Faubourg Saint-Honoré', 'Boulevard Haussmann'],
    stationsMetro: ['Champs-Élysées-Clemenceau', 'Concorde', 'Madeleine', 'Miromesnil'],
    pointsInteret: ['Arc de Triomphe', 'Place de la Concorde', 'Église de la Madeleine'],
    descriptionLongue: 'Serrurier pas cher dans le 8ème arrondissement de Paris, proche des Champs-Élysées et de la Madeleine. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 8ème arrondissement Paris - Intervention rapide Champs-Élysées',
    faqContext: 'dans le 8ème arrondissement de Paris, près des Champs-Élysées'
  },
  9: {
    quartiers: ['Opéra', 'Pigalle', 'Grands Boulevards', 'Faubourg Montmartre'],
    rues: ['Boulevard Haussmann', 'Rue de la Paix', 'Rue des Martyrs'],
    stationsMetro: ['Opéra', 'Chaussée d\'Antin', 'Richelieu-Drouot', 'Grands Boulevards'],
    pointsInteret: ['Opéra Garnier', 'Boulevard Haussmann', 'Galeries Lafayette'],
    descriptionLongue: 'Serrurier pas cher dans le 9ème arrondissement de Paris, proche de l\'Opéra et des Grands Boulevards. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 9ème arrondissement Paris - Intervention rapide Opéra',
    faqContext: 'dans le 9ème arrondissement de Paris, près de l\'Opéra'
  },
  10: {
    quartiers: ['Canal Saint-Martin', 'République', 'Gare du Nord', 'Gare de l\'Est'],
    rues: ['Rue du Faubourg Saint-Denis', 'Boulevard de Strasbourg', 'Quai de Valmy'],
    stationsMetro: ['République', 'Gare du Nord', 'Gare de l\'Est', 'Jacques Bonsergent'],
    pointsInteret: ['Canal Saint-Martin', 'Place de la République', 'Gare du Nord'],
    descriptionLongue: 'Serrurier pas cher dans le 10ème arrondissement de Paris, proche de République et du Canal Saint-Martin. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 10ème arrondissement Paris - Intervention rapide République, Canal Saint-Martin',
    faqContext: 'dans le 10ème arrondissement de Paris, près de la Place de la République'
  },
  11: {
    quartiers: ['Bastille', 'Oberkampf', 'Nation', 'Roquette'],
    rues: ['Rue de la Roquette', 'Boulevard Voltaire', 'Rue Oberkampf'],
    stationsMetro: ['Bastille', 'Nation', 'Oberkampf', 'République'],
    pointsInteret: ['Place de la Bastille', 'Place de la Nation'],
    descriptionLongue: 'Serrurier pas cher dans le 11ème arrondissement de Paris, proche de Bastille et Nation. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 11ème arrondissement Paris - Intervention rapide Bastille, Nation',
    faqContext: 'dans le 11ème arrondissement de Paris, près de la Bastille'
  },
  12: {
    quartiers: ['Bercy', 'Gare de Lyon', 'Nation', 'Reuilly'],
    rues: ['Rue de Charenton', 'Boulevard de Bercy', 'Avenue Daumesnil'],
    stationsMetro: ['Gare de Lyon', 'Nation', 'Bercy', 'Dugommier'],
    pointsInteret: ['Gare de Lyon', 'Bercy Village', 'Bois de Vincennes'],
    descriptionLongue: 'Serrurier pas cher dans le 12ème arrondissement de Paris, proche de Gare de Lyon et Bercy. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 12ème arrondissement Paris - Intervention rapide Gare de Lyon, Bercy',
    faqContext: 'dans le 12ème arrondissement de Paris, près de la Gare de Lyon'
  },
  13: {
    quartiers: ['Gobelins', 'Butte-aux-Cailles', 'Chinatown', 'Bibliothèque'],
    rues: ['Rue de la Glacière', 'Rue de Tolbiac', 'Boulevard de l\'Hôpital'],
    stationsMetro: ['Place d\'Italie', 'Tolbiac', 'Bibliothèque François Mitterrand', 'Gobelins'],
    pointsInteret: ['Bibliothèque François Mitterrand', 'Butte-aux-Cailles'],
    descriptionLongue: 'Serrurier pas cher dans le 13ème arrondissement de Paris, proche de Place d\'Italie et Bibliothèque. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 13ème arrondissement Paris - Intervention rapide Place d\'Italie, Bibliothèque',
    faqContext: 'dans le 13ème arrondissement de Paris, près de la Place d\'Italie'
  },
  14: {
    quartiers: ['Montparnasse', 'Pernety', 'Alésia', 'Plaisance'],
    rues: ['Boulevard du Montparnasse', 'Rue d\'Alésia', 'Rue de la Gaîté'],
    stationsMetro: ['Montparnasse-Bienvenüe', 'Alésia', 'Pernety', 'Mouton-Duvernet'],
    pointsInteret: ['Tour Montparnasse', 'Cimetière du Montparnasse'],
    descriptionLongue: 'Serrurier pas cher dans le 14ème arrondissement de Paris, proche de Montparnasse et Alésia. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 14ème arrondissement Paris - Intervention rapide Montparnasse',
    faqContext: 'dans le 14ème arrondissement de Paris, près de Montparnasse'
  },
  15: {
    quartiers: ['Grenelle', 'Vaugirard', 'Javel', 'Beaugrenelle'],
    rues: ['Rue de Vaugirard', 'Rue de la Convention', 'Boulevard de Grenelle'],
    stationsMetro: ['Convention', 'Vaugirard', 'La Motte-Picquet-Grenelle', 'Commerce'],
    pointsInteret: ['Tour Montparnasse', 'Parc André Citroën', 'Beaugrenelle'],
    descriptionLongue: 'Serrurier pas cher dans le 15ème arrondissement de Paris, proche de Vaugirard et Grenelle. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 15ème arrondissement Paris - Intervention rapide Vaugirard, Grenelle',
    faqContext: 'dans le 15ème arrondissement de Paris, près de Vaugirard'
  },
  16: {
    quartiers: ['Auteuil', 'Passy', 'Trocadéro', 'Porte Dauphine'],
    rues: ['Avenue de Versailles', 'Rue de Passy', 'Boulevard Exelmans'],
    stationsMetro: ['Trocadéro', 'Passy', 'Auteuil', 'Porte Dauphine'],
    pointsInteret: ['Trocadéro', 'Bois de Boulogne', 'Stade Roland Garros'],
    descriptionLongue: 'Serrurier pas cher dans le 16ème arrondissement de Paris, proche de Trocadéro et Passy. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 16ème arrondissement Paris - Intervention rapide Trocadéro, Passy',
    faqContext: 'dans le 16ème arrondissement de Paris, près de Trocadéro'
  },
  17: {
    quartiers: ['Batignolles', 'Monceau', 'Ternes', 'Clichy'],
    rues: ['Rue des Batignolles', 'Avenue de Wagram', 'Boulevard des Batignolles'],
    stationsMetro: ['Villiers', 'Monceau', 'Ternes', 'Rome'],
    pointsInteret: ['Parc Monceau', 'Place de Clichy'],
    descriptionLongue: 'Serrurier pas cher dans le 17ème arrondissement de Paris, proche de Batignolles et Monceau. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 17ème arrondissement Paris - Intervention rapide Batignolles',
    faqContext: 'dans le 17ème arrondissement de Paris, près des Batignolles'
  },
  18: {
    quartiers: ['Montmartre', 'Pigalle', 'Goutte d\'Or', 'La Chapelle'],
    rues: ['Rue Lepic', 'Rue des Abbesses', 'Boulevard de Clichy'],
    stationsMetro: ['Abbesses', 'Pigalle', 'Anvers', 'Barbès-Rochechouart'],
    pointsInteret: ['Sacré-Cœur', 'Place du Tertre', 'Moulin Rouge'],
    descriptionLongue: 'Serrurier pas cher dans le 18ème arrondissement de Paris, proche de Montmartre et Pigalle. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 18ème arrondissement Paris - Intervention rapide Montmartre',
    faqContext: 'dans le 18ème arrondissement de Paris, près de Montmartre'
  },
  19: {
    quartiers: ['Buttes-Chaumont', 'Belleville', 'La Villette', 'Canal de l\'Ourcq'],
    rues: ['Rue de Belleville', 'Avenue Jean Jaurès', 'Rue de la Villette'],
    stationsMetro: ['Belleville', 'Buttes Chaumont', 'Jaurès', 'Laumière'],
    pointsInteret: ['Parc des Buttes-Chaumont', 'Cité des Sciences', 'Canal de l\'Ourcq'],
    descriptionLongue: 'Serrurier pas cher dans le 19ème arrondissement de Paris, proche de Buttes-Chaumont et Belleville. Dépannage serrurier urgent 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 19ème arrondissement Paris - Intervention rapide Buttes-Chaumont, Belleville',
    faqContext: 'dans le 19ème arrondissement de Paris, près des Buttes-Chaumont'
  },
  20: {
    quartiers: ['Ménilmontant', 'Belleville', 'Père Lachaise', 'Charonne'],
    rues: ['Rue de Ménilmontant', 'Rue de Belleville', 'Boulevard de Belleville'],
    stationsMetro: ['Ménilmontant', 'Père Lachaise', 'Gambetta', 'Porte de Bagnolet'],
    pointsInteret: ['Cimetière du Père Lachaise', 'Belleville'],
    descriptionLongue: 'Serrurier pas cher dans le 20ème arrondissement de Paris, proche de Ménilmontant et Père Lachaise. Intervention rapide 24h/24.',
    descriptionCourte: 'Serrurier d\'urgence 20ème arrondissement Paris - Intervention rapide Ménilmontant, Père Lachaise',
    faqContext: 'dans le 20ème arrondissement de Paris, près de Ménilmontant'
  }
};

export function getArrondissementContent(arrondissement: number): ArrondissementContent {
  return arrondissementContent[arrondissement] || arrondissementContent[5];
}

