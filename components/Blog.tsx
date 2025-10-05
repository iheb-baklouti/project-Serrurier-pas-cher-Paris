'use client';

import React, {useState} from 'react';
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    BookOpen,
    Shield,
    Key,
    AlertTriangle,
    Home,
    Lock,
    Phone,
    MessageSquare,
    ArrowLeft
} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('tous');

    const categories = [
        {id: 'tous', name: 'Tous les articles', icon: BookOpen},
        {id: 'conseils', name: 'Conseils sécurité', icon: Shield},
        {id: 'urgence', name: 'Situations d\'urgence', icon: AlertTriangle},
        {id: 'installation', name: 'Installation', icon: Lock},
        {id: 'entretien', name: 'Entretien', icon: Key}
    ];

    const articles = [
        {
            id: 1,
            title: "Guide complet : Comment choisir la serrure parfaite pour votre domicile",
            excerpt: "Découvrez les critères essentiels pour sélectionner une serrure adaptée à vos besoins : niveau de sécurité, certifications A2P, types de cylindres et budget.",
            content: `
        <h3>Introduction : L'importance du choix de votre serrure</h3>
        <p>Le choix d'une serrure ne doit jamais être pris à la légère. En France, 80% des cambriolages se font par la porte d'entrée, et une serrure de qualité peut dissuader jusqu'à 95% des tentatives d'effraction. Ce guide vous aidera à faire le bon choix.</p>
        
        <h3>1. Les différents types de serrures disponibles</h3>
        
        <h4>Serrures à cylindre européen</h4>
        <p>Les plus répandues dans l'habitat moderne. Elles se composent d'un cylindre (barillet) et d'un mécanisme de verrouillage. <strong>Avantages :</strong></p>
        <ul>
          <li>Facilement remplaçables sans changer toute la serrure</li>
          <li>Large gamme de niveaux de sécurité disponibles</li>
          <li>Compatible avec la plupart des portes existantes</li>
          <li>Prix abordable pour les modèles de base</li>
        </ul>
        
        <h4>Serrures multipoints (3, 5 ou 7 points)</h4>
        <p>Elles verrouillent la porte en plusieurs endroits simultanément. <strong>Recommandées pour :</strong></p>
        <ul>
          <li><strong>3 points :</strong> Appartements en étage, portes standard</li>
          <li><strong>5 points :</strong> Maisons individuelles, portes d'entrée principales</li>
          <li><strong>7 points :</strong> Très haute sécurité, biens de grande valeur</li>
        </ul>
        
        <h4>Serrures connectées et électroniques</h4>
        <p>La nouvelle génération de serrures offre des fonctionnalités avancées :</p>
        <ul>
          <li>Ouverture par smartphone, code ou empreinte</li>
          <li>Historique des accès</li>
          <li>Gestion à distance</li>
          <li>Alertes en temps réel</li>
        </ul>
        
        <h3>2. Les certifications de sécurité à connaître</h3>
        
        <h4>Certification A2P (Assurance Prévention Protection)</h4>
        <p>C'est LA référence en matière de sécurité en France :</p>
        <ul>
          <li><strong>A2P* (1 étoile) :</strong> Résistance 5 minutes - Sécurité de base</li>
          <li><strong>A2P** (2 étoiles) :</strong> Résistance 10 minutes - Sécurité renforcée</li>
          <li><strong>A2P*** (3 étoiles) :</strong> Résistance 15 minutes - Très haute sécurité</li>
        </ul>
        
        <h4>Norme européenne EN 1303</h4>
        <p>Elle évalue la résistance à l'usure, à la corrosion et aux tentatives d'effraction. Recherchez les classes 4, 5 ou 6 pour une utilisation résidentielle.</p>
        
        <h3>3. Critères de choix selon votre situation</h3>
        
        <h4>Pour un appartement parisien</h4>
        <ul>
          <li><strong>Étage élevé :</strong> Serrure 3 points A2P** minimum</li>
          <li><strong>Rez-de-chaussée :</strong> Serrure 5 points A2P*** recommandée</li>
          <li><strong>Immeuble sécurisé :</strong> Serrure A2P* peut suffire</li>
        </ul>
        
        <h4>Pour une maison individuelle</h4>
        <ul>
          <li><strong>Zone urbaine :</strong> Serrure 5 points A2P*** + blindage</li>
          <li><strong>Zone isolée :</strong> Serrure 7 points + système d'alarme</li>
          <li><strong>Résidence secondaire :</strong> Serrure connectée pour surveillance</li>
        </ul>
        
        <h3>4. Budget et rapport qualité-prix</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Type de serrure</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Prix indicatif</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Niveau de sécurité</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Cylindre A2P*</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">50€ - 120€</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Basique</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure 3 points A2P**</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">200€ - 400€</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Bon</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure 5 points A2P***</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">400€ - 800€</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Excellent</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure connectée</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">300€ - 1200€</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Variable + confort</td>
          </tr>
        </table>
        
        <h3>5. Les marques de référence</h3>
        <p>Privilégiez les marques reconnues pour leur fiabilité :</p>
        <ul>
          <li><strong>Fichet :</strong> Leader français, très haute sécurité</li>
          <li><strong>Vachette :</strong> Excellent rapport qualité-prix</li>
          <li><strong>Bricard :</strong> Spécialiste des serrures multipoints</li>
          <li><strong>Mottura :</strong> Innovation et design italien</li>
          <li><strong>ABUS :</strong> Technologie allemande, serrures connectées</li>
        </ul>
        
        <h3>6. Installation et maintenance</h3>
        <p><strong>Installation professionnelle obligatoire :</strong> Une serrure mal installée perd 80% de son efficacité. Faites appel à un serrurier certifié.</p>
        
        <p><strong>Maintenance préventive :</strong></p>
        <ul>
          <li>Lubrification tous les 6 mois</li>
          <li>Vérification annuelle du mécanisme</li>
          <li>Remplacement des clés usées</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Le choix d'une serrure dépend de nombreux facteurs : type de logement, zone géographique, budget et besoins spécifiques. N'hésitez pas à demander conseil à un professionnel pour une évaluation personnalisée de vos besoins sécuritaires.</p>
      `,
            category: 'conseils',
            author: "Jean-Pierre Dubois, Expert Serrurier",
            date: "2024-01-15",
            readTime: "8 min",
            image: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 2,
            title: "SOS Clé cassée : Guide d'urgence et solutions professionnelles",
            excerpt: "Votre clé s'est brisée dans la serrure ? Découvrez les techniques d'extraction sécurisées et les erreurs à éviter absolument pour ne pas aggraver la situation.",
            content: `
        <h3>Situation d'urgence : Évaluer rapidement le problème</h3>
        <p>Une clé qui se casse dans une serrure est un incident fréquent qui touche 15% des Parisiens chaque année. La première règle : <strong>ne pas paniquer</strong> et évaluer la situation calmement.</p>
        
        <h3>1. Diagnostic immédiat de la situation</h3>
        
        <h4>Types de cassures les plus fréquentes</h4>
        <ul>
          <li><strong>Cassure nette à la base :</strong> La partie métallique reste dans le cylindre</li>
          <li><strong>Cassure au milieu :</strong> Une partie dépasse, facilitant l'extraction</li>
          <li><strong>Clé tordue puis cassée :</strong> Fragments multiples, situation complexe</li>
        </ul>
        
        <h4>Facteurs aggravants à identifier</h4>
        <ul>
          <li>Serrure multipoints (extraction plus délicate)</li>
          <li>Cylindre ancien ou grippé</li>
          <li>Tentative de forçage préalable</li>
          <li>Présence de rouille ou de saleté</li>
        </ul>
        
        <h3>2. Les erreurs fatales à éviter absolument</h3>
        
        <h4>❌ Ne JAMAIS faire</h4>
        <ul>
          <li><strong>Forcer avec des outils inadaptés :</strong> Risque d'enfoncer davantage le fragment</li>
          <li><strong>Utiliser de la colle :</strong> Vous détruiriez définitivement le mécanisme</li>
          <li><strong>Démonter la serrure sans compétence :</strong> Remontage impossible</li>
          <li><strong>Arroser d'huile :</strong> L'huile attire la poussière et grippe le mécanisme</li>
          <li><strong>Secouer ou frapper la porte :</strong> Risque de casser d'autres éléments</li>
        </ul>
        
        <h3>3. Techniques d'extraction sécurisées (à vos risques)</h3>
        
        <h4>Méthode 1 : Extraction par pince fine</h4>
        <p><strong>Conditions :</strong> Fragment dépassant d'au moins 2mm</p>
        <p><strong>Matériel :</strong> Pince à épiler ou pince à becs fins</p>
        <p><strong>Technique :</strong></p>
        <ol>
          <li>Vaporisez un lubrifiant spécial serrure (pas d'huile !)</li>
          <li>Attendez 5 minutes que le produit pénètre</li>
          <li>Saisissez fermement le fragment avec la pince</li>
          <li>Tirez dans l'axe du cylindre, sans mouvement latéral</li>
          <li>Si résistance, arrêtez immédiatement</li>
        </ol>
        
        <h4>Méthode 2 : Technique de la lame fine</h4>
        <p><strong>Conditions :</strong> Fragment affleurant, serrure simple</p>
        <p><strong>Matériel :</strong> Lame de cutter neuve et fine</p>
        <p><strong>Technique :</strong></p>
        <ol>
          <li>Insérez délicatement la lame le long du fragment</li>
          <li>Créez un léger effet de levier</li>
          <li>Dès que le fragment bouge, saisissez-le avec une pince</li>
        </ol>
        
        <h4>Méthode 3 : Extraction par aimant (clés magnétiques)</h4>
        <p><strong>Conditions :</strong> Clé en acier magnétique</p>
        <p><strong>Matériel :</strong> Aimant néodyme puissant</p>
        <p><strong>Technique :</strong> Approchez l'aimant du fragment et tirez doucement</p>
        
        <h3>4. Quand appeler un professionnel immédiatement</h3>
        
        <h4>Situations d'urgence absolue</h4>
        <ul>
          <li><strong>Enfant seul à l'intérieur :</strong> Intervention en moins de 15 minutes</li>
          <li><strong>Personne âgée ou malade enfermée :</strong> Priorité médicale</li>
          <li><strong>Fuite de gaz détectée :</strong> Danger immédiat</li>
          <li><strong>Tentative d'effraction en cours :</strong> Sécurité compromise</li>
        </ul>
        
        <h4>Situations techniques complexes</h4>
        <ul>
          <li>Serrure multipoints (3, 5 ou 7 points)</li>
          <li>Cylindre haute sécurité A2P***</li>
          <li>Fragment complètement enfoncé</li>
          <li>Plusieurs tentatives d'extraction échouées</li>
          <li>Serrure ancienne ou de marque inconnue</li>
        </ul>
        
        <h3>5. Coûts et délais d'intervention professionnelle</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Type d'intervention</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Délai</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Tarif indicatif</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Extraction simple (jour)</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">30 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">80€ - 120€</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Extraction complexe (jour)</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">1h - 2h</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">150€ - 250€</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Urgence nuit/weekend</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">45 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">200€ - 350€</td>
          </tr>
        </table>
        
        <h3>6. Prévention : Comment éviter la casse de clés</h3>
        
        <h4>Signes avant-coureurs à surveiller</h4>
        <ul>
          <li><strong>Clé qui accroche :</strong> Lubrification nécessaire</li>
          <li><strong>Résistance au tournage :</strong> Cylindre à réviser</li>
          <li><strong>Clé qui se tord :</strong> Remplacement urgent</li>
          <li><strong>Rayures profondes sur la clé :</strong> Usure critique</li>
        </ul>
        
        <h4>Maintenance préventive</h4>
        <ul>
          <li><strong>Lubrification semestrielle :</strong> Spray graphite ou lubrifiant spécialisé</li>
          <li><strong>Nettoyage du cylindre :</strong> Soufflage pour éliminer poussières</li>
          <li><strong>Remplacement des clés usées :</strong> Dès les premiers signes d'usure</li>
          <li><strong>Duplication préventive :</strong> Toujours avoir une clé de secours</li>
        </ul>
        
        <h3>7. Solutions de secours à prévoir</h3>
        
        <h4>Clé de secours sécurisée</h4>
        <ul>
          <li><strong>Chez un voisin de confiance :</strong> Solution classique mais efficace</li>
          <li><strong>Boîte à clés sécurisée :</strong> Code à 4 chiffres minimum</li>
          <li><strong>Serrure connectée :</strong> Ouverture par smartphone en secours</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Une clé cassée n'est jamais une situation anodine. Si les techniques d'extraction simples échouent, n'insistez pas : l'intervention d'un serrurier professionnel vous évitera des dégâts coûteux et vous garantira une solution durable.</p>
        
        <p><strong>Notre conseil d'expert :</strong> En cas de doute, appelez-nous pour un diagnostic téléphonique gratuit. Nous vous guiderons vers la meilleure solution selon votre situation.</p>
      `,
            category: 'urgence',
            author: "Marie Lefort, Serrurier Expert",
            date: "2024-01-10",
            readTime: "7 min",
            image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 3,
            title: "Clé perdue Paris : Que faire en urgence ?",
            excerpt: "Clé égarée ? Solutions immédiates pour changer vos serrures à Paris. Intervention rapide et sécurisée par serruriers locaux.",
            content: `
        <h3>Introduction : Gérer une clé perdue à Paris</h3>
        <p>Perdre ses clés expose à des risques immédiats. Notre équipe assure un <a href="#cle-perdue-paris">changement de serrure</a> en moins de 45 minutes.</p>
        
        <h3>1. Étapes immédiates</h3>
        
        <h4>Signaler la perte</h4>
        <p>Déclarez à la police pour l'assurance.</p>
        
        <h3>2. Options de remplacement</h3>
        
        <h4>Cylindre seul : Économique</h4>
        <p>100-200€ si duplicata possible.</p>
        
        <h4>Serrure complète : Sécurisée</h4>
        <p>200-400€ pour une nouvelle installation.</p>
        
        <img src="https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Serrurier gérant une clé perdue sur une porte d'appartement" style="width:100%; height:auto; margin:20px 0; border-radius:8px;" />
        
        <h3>3. Prévention future</h3>
        <p>Clés de secours chez un voisin ou boîte sécurisée.</p>
        
        <h3>Conclusion</h3>
        <p>Agissez vite pour sécuriser votre porte. <a href="#contact">Serrurier Paris urgence</a>.</p>
      `,
            category: 'urgence',
            author: "Luc Martin, Serrurier Spécialiste",
            date: "2025-10-04",
            readTime: "4 min",
            image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 4,
            title: "Sécurité domicile : 15 techniques anti-cambriolage validées par les experts",
            excerpt: "Réduisez de 95% les risques de cambriolage avec ces techniques éprouvées. Guide complet basé sur les statistiques policières et les recommandations d'assureurs.",
            content: `
        <h3>Statistiques alarmantes : La réalité du cambriolage en France</h3>
        <p>En France, un cambriolage a lieu toutes les 90 secondes. Paris et sa région concentrent 25% des cambriolages nationaux. Mais rassurez-vous : 95% des tentatives d'effraction peuvent être dissuadées par des mesures préventives appropriées.</p>
        
        <h3>1. Analyse criminologique : Comment procèdent les cambrioleurs</h3>
        
        <h4>Le profil type du cambrioleur parisien</h4>
        <ul>
          <li><strong>Âge moyen :</strong> 25-35 ans</li>
          <li><strong>Mode opératoire :</strong> Opportuniste dans 80% des cas</li>
          <li><strong>Temps passé :</strong> Maximum 10 minutes sur place</li>
          <li><strong>Période privilégiée :</strong> 14h-17h en semaine</li>
          <li><strong>Cible préférée :</strong> Appartements rez-de-chaussée et 1er étage</li>
        </ul>
        
        <h4>Points d'entrée statistiques</h4>
        <ul>
          <li><strong>Porte d'entrée :</strong> 80% des cas</li>
          <li><strong>Fenêtres RDC :</strong> 15% des cas</li>
          <li><strong>Balcons/terrasses :</strong> 3% des cas</li>
          <li><strong>Autres accès :</strong> 2% des cas</li>
        </ul>
        
        <h3>2. Sécurisation de la porte d'entrée : Votre première ligne de défense</h3>
        
        <h4>Niveau 1 : Sécurité de base (Budget : 200-500€)</h4>
        <p><strong>Serrure 3 points A2P** minimum</strong></p>
        <ul>
          <li>Résistance certifiée 10 minutes</li>
          <li>Dissuade 70% des tentatives</li>
          <li>Compatible avec la plupart des portes existantes</li>
        </ul>
        
        <p><strong>Cornières anti-pinces</strong></p>
        <ul>
          <li>Protègent les gonds contre le dégondage</li>
          <li>Installation simple sur porte existante</li>
          <li>Efficacité prouvée contre 90% des techniques de dégondage</li>
        </ul>
        
        <h4>Niveau 2 : Sécurité renforcée (Budget : 800-1500€)</h4>
        <p><strong>Serrure 5 points A2P***</strong></p>
        <ul>
          <li>Résistance certifiée 15 minutes</li>
          <li>Dissuade 85% des tentatives</li>
          <li>Verrouillage en 5 points simultanés</li>
        </ul>
        
        <p><strong>Blindage de porte pivot</strong></p>
        <ul>
          <li>Remplacement complet de la porte</li>
          <li>Résistance maximale aux tentatives d'effraction</li>
          <li>Amélioration de l'isolation thermique et phonique</li>
        </ul>
        
        <h4>Niveau 3 : Très haute sécurité (Budget : 2000-4000€)</h4>
        <p><strong>Porte blindée certifiée A2P BP3</strong></p>
        <ul>
          <li>Résistance 15 minutes minimum</li>
          <li>Dissuade 98% des tentatives</li>
          <li>Garantie constructeur et assurance</li>
        </ul>
        
        <h3>3. Sécurisation des fenêtres : Points d'accès secondaires</h3>
        
        <h4>Fenêtres rez-de-chaussée</h4>
        <p><strong>Solutions recommandées :</strong></p>
        <ul>
          <li><strong>Barres de sécurité :</strong> Dissuasion visuelle + protection réelle</li>
          <li><strong>Volets roulants sécurisés :</strong> Lames anti-soulèvement</li>
          <li><strong>Film de sécurité :</strong> Retarde la casse du vitrage</li>
          <li><strong>Verrous de fenêtre :</strong> Bloquent l'ouverture</li>
        </ul>
        
        <h4>Fenêtres étages supérieurs</h4>
        <p><strong>Mesures adaptées :</strong></p>
        <ul>
          <li><strong>Verrous à clé :</strong> Empêchent l'ouverture depuis l'extérieur</li>
          <li><strong>Entrebâilleurs sécurisés :</strong> Aération sans risque</li>
          <li><strong>Détecteurs d'ouverture :</strong> Alarme en cas d'intrusion</li>
        </ul>
        
        <h3>4. Systèmes d'alarme et de surveillance</h3>
        
        <h4>Alarme filaire vs sans fil</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Critère</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Filaire</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Sans fil</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Fiabilité</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Excellente</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Très bonne</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Installation</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Complexe</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Simple</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Coût</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">800-2000€</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">300-800€</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Maintenance</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Minimale</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Batteries à changer</td>
          </tr>
        </table>
        
        <h4>Télésurveillance : Avantages et inconvénients</h4>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>Intervention rapide des forces de l'ordre</li>
          <li>Surveillance 24h/24</li>
          <li>Réduction des primes d'assurance (jusqu'à 30%)</li>
          <li>Dissuasion psychologique forte</li>
        </ul>
        
        <p><strong>Inconvénients :</strong></p>
        <ul>
          <li>Coût mensuel (30-80€/mois)</li>
          <li>Fausses alarmes possibles</li>
          <li>Engagement contractuel</li>
        </ul>
        
        <h3>5. Éclairage de sécurité : Dissuasion par la lumière</h3>
        
        <h4>Éclairage automatique extérieur</h4>
        <ul>
          <li><strong>Détecteurs de mouvement :</strong> Portée 10-15 mètres</li>
          <li><strong>Éclairage LED haute puissance :</strong> 20-50W minimum</li>
          <li><strong>Temporisation réglable :</strong> 1-10 minutes</li>
          <li><strong>Alimentation solaire :</strong> Autonomie et écologie</li>
        </ul>
        
        <h4>Éclairage intérieur programmable</h4>
        <ul>
          <li><strong>Simulateurs de présence :</strong> Allumage/extinction aléatoire</li>
          <li><strong>Programmation hebdomadaire :</strong> Adaptation aux habitudes</li>
          <li><strong>Contrôle à distance :</strong> Via smartphone</li>
        </ul>
        
        <h3>6. Caméras de surveillance : Choix et installation</h3>
        
        <h4>Types de caméras recommandées</h4>
        <ul>
          <li><strong>Caméras IP WiFi :</strong> Installation simple, qualité HD</li>
          <li><strong>Caméras avec vision nocturne :</strong> Surveillance 24h/24</li>
          <li><strong>Caméras motorisées :</strong> Suivi automatique des mouvements</li>
          <li><strong>Caméras discrètes :</strong> Effet de surprise</li>
        </ul>
        
        <h4>Positionnement stratégique</h4>
        <ul>
          <li><strong>Entrée principale :</strong> Identification des visiteurs</li>
          <li><strong>Points d'accès secondaires :</strong> Fenêtres, balcons</li>
          <li><strong>Zones de passage :</strong> Couloirs, escaliers</li>
          <li><strong>Extérieur :</strong> Approches du domicile</li>
        </ul>
        
        <h3>7. Techniques comportementales de prévention</h3>
        
        <h4>Simulation de présence</h4>
        <ul>
          <li><strong>Éclairage programmé :</strong> Variation des horaires</li>
          <li><strong>Radio/TV en marche :</strong> Bruits de vie</li>
          <li><strong>Volets ouverts/fermés :</strong> Alternance réaliste</li>
          <li><strong>Courrier relevé :</strong> Boîte aux lettres non pleine</li>
        </ul>
        
        <h4>Discrétion sur les réseaux sociaux</h4>
        <ul>
          <li><strong>Pas d'annonce de vacances :</strong> Publication au retour</li>
          <li><strong>Géolocalisation désactivée :</strong> Pas de localisation en temps réel</li>
          <li><strong>Photos d'objets de valeur :</strong> À éviter</li>
          <li><strong>Informations personnelles :</strong> Limitation du partage</li>
        </ul>
        
        <h3>8. Sécurisation des objets de valeur</h3>
        
        <h4>Coffre-fort domestique</h4>
        <p><strong>Critères de choix :</strong></p>
        <ul>
          <li><strong>Volume :</strong> Selon les objets à protéger</li>
          <li><strong>Fixation :</strong> Scellement au sol obligatoire</li>
          <li><strong>Certification :</strong> Norme européenne EN 1143-1</li>
          <li><strong>Serrure :</strong> Électronique ou à clé A2P</li>
        </ul>
        
        <h4>Cachettes sécurisées</h4>
        <ul>
          <li><strong>Éviter les cachettes évidentes :</strong> Tiroirs, placards</li>
          <li><strong>Répartir les risques :</strong> Plusieurs cachettes</li>
          <li><strong>Objets factices :</strong> Fausses boîtes de conserve</li>
          <li><strong>Coffre bancaire :</strong> Pour les objets très précieux</li>
        </ul>
        
        <h3>9. Relations de voisinage et surveillance mutuelle</h3>
        
        <h4>Réseau de voisins vigilants</h4>
        <ul>
          <li><strong>Échange de contacts :</strong> Communication rapide</li>
          <li><strong>Surveillance mutuelle :</strong> Pendant les absences</li>
          <li><strong>Signalement d'activités suspectes :</strong> Réflexe communautaire</li>
          <li><strong>Partage d'informations :</strong> Tentatives d'effraction</li>
        </ul>
        
        <h3>10. Assurance habitation et sécurité</h3>
        
        <h4>Impact des mesures de sécurité sur les primes</h4>
        <ul>
          <li><strong>Serrure A2P :</strong> -5 à -10% sur la prime</li>
          <li><strong>Porte blindée :</strong> -10 à -15% sur la prime</li>
          <li><strong>Alarme avec télésurveillance :</strong> -15 à -30% sur la prime</li>
          <li><strong>Cumul des dispositifs :</strong> Jusqu'à -40% de réduction</li>
        </ul>
        
        <h4>Obligations contractuelles</h4>
        <ul>
          <li><strong>Déclaration des équipements :</strong> Mise à jour du contrat</li>
          <li><strong>Maintenance obligatoire :</strong> Preuves à conserver</li>
          <li><strong>Utilisation effective :</strong> Alarme activée lors des absences</li>
        </ul>
        
        <h3>11. Budget global et retour sur investissement</h3>
        
        <h4>Investissement par niveau de sécurité</h4>
        <ul>
          <li><strong>Sécurité de base :</strong> 500-1000€</li>
          <li><strong>Sécurité renforcée :</strong> 1500-3000€</li>
          <li><strong>Très haute sécurité :</strong> 3000-6000€</li>
        </ul>
        
        <h4>Économies réalisées</h4>
        <ul>
          <li><strong>Réduction prime assurance :</strong> 200-800€/an</li>
          <li><strong>Évitement d'un cambriolage :</strong> 3000-15000€ en moyenne</li>
          <li><strong>Tranquillité d'esprit :</strong> Inestimable</li>
        </ul>
        
        <h3>12. Technologies émergentes</h3>
        
        <h4>Serrures connectées</h4>
        <ul>
          <li><strong>Ouverture smartphone :</strong> Plus de clés perdues</li>
          <li><strong>Historique d'accès :</strong> Qui entre et quand</li>
          <li><strong>Alertes temps réel :</strong> Notification d'ouverture</li>
          <li><strong>Accès temporaires :</strong> Codes visiteurs</li>
        </ul>
        
        <h4>Intelligence artificielle</h4>
        <ul>
          <li><strong>Reconnaissance faciale :</strong> Identification automatique</li>
          <li><strong>Analyse comportementale :</strong> Détection d'anomalies</li>
          <li><strong>Prédiction des risques :</strong> Algorithmes d'apprentissage</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>La sécurisation de votre domicile est un investissement rentable qui combine protection de vos biens, réduction des primes d'assurance et sérénité au quotidien. L'approche multicouche (serrures + alarme + éclairage + comportement) offre la meilleure protection.</p>
        
        <p><strong>Notre expertise :</strong> Nous réalisons des audits sécuritaires gratuits et vous proposons des solutions personnalisées selon votre budget et vos contraintes.</p>
      `,
            category: 'conseils',
            author: "Sophie Durand, Consultante Sécurité",
            date: "2023-12-28",
            readTime: "12 min",
            image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 5,
            title: "Sécurité appartement Paris : 10 astuces anti-cambriolage",
            excerpt: "Astuces simples pour sécuriser votre appartement à Paris en 2025. Serrures, alarmes et vigilance pour une protection efficace.",
            content: `
        <h3>Introduction : Sécuriser son appart parisien</h3>
        <p>Les cambriolages touchent 1 appartement sur 200 à Paris. Voici des conseils pour renforcer votre <a href="#securite-appartement-paris">sécurité appartement Paris</a>.</p>
        
        <h3>1. Renforcer les accès</h3>
        
        <h4>Serrures multipoints</h4>
        <p>Installez au moins 3 points pour les portes d'entrée.</p>
        
        <h3>2. Surveillance et visibilité</h3>
        
        <h4>Caméras discrètes</h4>
        <ul>
          <li>À l'entrée et aux balcons</li>
          <li>Intégration avec alarme</li>
        </ul>
        
        <img src="https://images.pexels.com/photos/13007854/pexels-photo-13007854.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Serrurier conseillant sur la sécurité anti-cambriolage d'un appartement" style="width:100%; height:auto; margin:20px 0; border-radius:8px;" />
        
        <h3>3. Habitudes quotidiennes</h3>
        <p>Ne laissez pas de signes d'absence : lumières automatiques.</p>
        
        <h3>Conclusion</h3>
        <p>Appliquez ces astuces pour une tranquillité d'esprit. <a href="#contact">Audit gratuit par serrurier Paris</a>.</p>
      `,
            category: 'conseils',
            author: "Thomas Girard, Expert Sécurité",
            date: "2025-10-05",
            readTime: "5 min",
            image: "https://images.pexels.com/photos/13007854/pexels-photo-13007854.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 6,
            title: "Serrure connectée Paris : L'avenir de la serrurerie",
            excerpt: "Découvrez les serrures connectées pour votre domicile parisien. Ouverture par app, sécurité renforcée et installation facile.",
            content: `
        <h3>Introduction : Serrures intelligentes à Paris</h3>
        <p>En 2025, 30% des Parisiens adoptent les serrures connectées pour une <a href="#serrure-connectee-paris">serrure connectée Paris</a> pratique.</p>
        
        <h3>1. Fonctionnalités clés</h3>
        
        <h4>Contrôle à distance</h4>
        <p>Via smartphone, historique des accès.</p>
        
        <h3>2. Compatibilité avec les portes parisiennes</h3>
        
        <h4>Modèles recommandés</h4>
        <ul>
          <li>Nuki ou Yale : 200-400€</li>
          <li>Intégration Zigbee</li>
        </ul>
        
        <img src="https://images.pexels.com/photos/7522609/pexels-photo-7522609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Serrurier installant une serrure connectée moderne" style="width:100%; height:auto; margin:20px 0; border-radius:8px;" />
        
        <h3>3. Installation et sécurité</h3>
        <p>Par un pro : 150€, chiffrement AES 256.</p>
        
        <h3>Conclusion</h3>
        <p>Modernisez votre serrure. <a href="#contact">Installation serrurier Paris</a>.</p>
      `,
            category: 'installation',
            author: "David Petit, Spécialiste Connecté",
            date: "2025-10-05",
            readTime: "5 min",
            image: "https://images.pexels.com/photos/7522609/pexels-photo-7522609.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];

    const filteredArticles = selectedCategory === 'tous'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (selectedArticle) {
        const article = articles.find(a => a.id === selectedArticle);
        if (!article) return null;

        return (
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header de l'article */}
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors font-medium"
                            >
                                <ArrowLeft className="h-4 w-4"/>
                                Retour aux articles
                            </button>

                            <div className="mb-6">
                <span
                    className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {categories.find(cat => cat.id === article.category)?.name}
                </span>
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                                {article.title}
                            </h1>

                            <div
                                className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                                <div
                                    className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <User className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span className="font-medium">{article.author}</span>
                                </div>
                                <div
                                    className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span>{formatDate(article.date)}</span>
                                </div>
                                <div
                                    className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400"/>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            <div className="relative mb-8">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                            </div>
                        </div>

                        {/* Contenu de l'article */}
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div
                                className="article-content text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-th:text-gray-900 dark:prose-th:text-gray-100 prose-td:text-gray-700 dark:prose-td:text-gray-300"
                                dangerouslySetInnerHTML={{__html: article.content}}
                            />

                            {/* CTA en fin d'article */}
                            <div
                                className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                                <div className="text-center">
                                    <div
                                        className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                                        <Phone className="h-8 w-8"/>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                                    Besoin d'aide avec votre serrurerie ?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                                    Nos experts sont disponibles 24h/24 pour vous conseiller et intervenir rapidement.
                                    Devis gratuit et intervention garantie.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        onClick={() => window.open('tel:+33123456789', '_self')}
                                    >
                                        <Phone className="h-5 w-5"/>
                                        Appeler maintenant
                                    </button>
                                    <button
                                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105"
                                        onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, j\'ai une question suite à la lecture de votre article', '_blank')}
                                    >
                                        <MessageSquare className="h-5 w-5"/>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Articles similaires */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                                Articles similaires
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {articles
                                    .filter(a => a.id !== selectedArticle && a.category === article.category)
                                    .slice(0, 2)
                                    .map((similarArticle) => (
                                        <div
                                            key={similarArticle.id}
                                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                            onClick={() => setSelectedArticle(similarArticle.id)}
                                        >
                                            <img
                                                src={similarArticle.image}
                                                alt={similarArticle.title}
                                                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {similarArticle.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                                                {similarArticle.excerpt}
                                            </p>
                                            <div
                                                className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                                <span>{similarArticle.readTime}</span>
                                                <span
                                                    className="text-blue-600 dark:text-blue-400 font-medium">Lire →</span>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400"/>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Blog & <span className="text-blue-600 dark:text-blue-400">Conseils Sécurité</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Découvrez nos conseils d'experts pour améliorer la sécurité de votre domicile,
                        gérer les urgences et bien choisir vos équipements de serrurerie.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                                    selectedCategory === category.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            >
                                <IconComponent className="h-4 w-4"/>
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                {/* Articles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <Card key={article.id}
                              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                            <div onClick={() => setSelectedArticle(article.id)}>
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                                    </div>
                                </div>

                                <CardHeader>
                                    <div
                                        className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4"/>
                                            {formatDate(article.date)}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4"/>
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <CardTitle
                                        className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </CardDescription>

                                    <div className="flex items-center justify-between">
                                        <div
                                            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <User className="h-4 w-4"/>
                                            {article.author}
                                        </div>
                                        <div
                                            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                                            Lire l'article
                                            <ArrowRight className="h-4 w-4"/>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div
                        className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-600">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Une question spécifique ?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Nos experts serruriers sont à votre disposition pour répondre à toutes vos questions
                            et vous conseiller sur les meilleures solutions de sécurité.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex items-center gap-2"
                                onClick={() => window.open('tel:+33123456789', '_self')}
                            >
                                <Shield className="h-5 w-5"/>
                                Conseil gratuit
                            </Button>
                            <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            >
                                Demander un devis
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;