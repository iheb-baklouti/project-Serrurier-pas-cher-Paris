'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, Shield, Key, AlertTriangle, Home, Lock, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Tous les articles', icon: BookOpen },
    { id: 'conseils', name: 'Conseils sécurité', icon: Shield },
    { id: 'urgence', name: 'Situations d\'urgence', icon: AlertTriangle },
    { id: 'installation', name: 'Installation', icon: Lock },
    { id: 'entretien', name: 'Entretien', icon: Key }
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
      title: "Maintenance préventive : Prolongez la vie de vos serrures de 10 ans",
      excerpt: "Un entretien régulier peut tripler la durée de vie de vos serrures. Découvrez le programme de maintenance professionnel adapté à chaque type de serrure.",
      content: `
        <h3>L'entretien préventif : Un investissement rentable</h3>
        <p>Saviez-vous qu'une serrure bien entretenue peut fonctionner parfaitement pendant 15 à 20 ans, contre 5 à 7 ans sans maintenance ? L'entretien préventif représente moins de 2% du coût d'une serrure sur sa durée de vie, mais évite 90% des pannes.</p>
        
        <h3>1. Anatomie d'une serrure : Comprendre pour mieux entretenir</h3>
        
        <h4>Les composants sensibles</h4>
        <ul>
          <li><strong>Le cylindre :</strong> Cœur de la serrure, contient les goupilles</li>
          <li><strong>Le pêne :</strong> Élément mobile qui assure le verrouillage</li>
          <li><strong>Le ressort :</strong> Assure le retour automatique du pêne</li>
          <li><strong>Les goupilles :</strong> Éléments de précision du mécanisme de sécurité</li>
          <li><strong>Le boîtier :</strong> Protection mécanique de l'ensemble</li>
        </ul>
        
        <h4>Les ennemis de votre serrure</h4>
        <ul>
          <li><strong>La poussière :</strong> S'accumule et grippe les mécanismes</li>
          <li><strong>L'humidité :</strong> Provoque corrosion et gonflement</li>
          <li><strong>Le froid :</strong> Contracte les métaux et durcit les lubrifiants</li>
          <li><strong>L'usure :</strong> Friction répétée des pièces mobiles</li>
          <li><strong>Les tentatives d'effraction :</strong> Déforment les mécanismes</li>
        </ul>
        
        <h3>2. Programme de maintenance selon le type de serrure</h3>
        
        <h4>Serrures standard (cylindre européen)</h4>
        <p><strong>Fréquence :</strong> Tous les 6 mois</p>
        <p><strong>Durée :</strong> 15 minutes</p>
        <p><strong>Matériel nécessaire :</strong></p>
        <ul>
          <li>Lubrifiant graphite en spray</li>
          <li>Chiffon microfibre</li>
          <li>Brosse souple</li>
          <li>Aspirateur (embout fin)</li>
        </ul>
        
        <h4>Serrures multipoints (3, 5 ou 7 points)</h4>
        <p><strong>Fréquence :</strong> Tous les 4 mois</p>
        <p><strong>Durée :</strong> 30 minutes</p>
        <p><strong>Spécificités :</strong> Vérification de l'alignement des points de fermeture</p>
        
        <h4>Serrures haute sécurité (A2P***)</h4>
        <p><strong>Fréquence :</strong> Tous les 3 mois</p>
        <p><strong>Durée :</strong> 45 minutes</p>
        <p><strong>Particularité :</strong> Maintenance plus fréquente due à la complexité du mécanisme</p>
        
        <h3>3. Guide pratique : Entretien étape par étape</h3>
        
        <h4>Étape 1 : Nettoyage extérieur (5 minutes)</h4>
        <ol>
          <li><strong>Dépoussiérage :</strong> Utilisez un chiffon sec pour nettoyer le boîtier</li>
          <li><strong>Nettoyage de la plaque :</strong> Produit non agressif pour préserver les finitions</li>
          <li><strong>Inspection visuelle :</strong> Recherchez traces de corrosion ou déformation</li>
        </ol>
        
        <h4>Étape 2 : Nettoyage du cylindre (10 minutes)</h4>
        <ol>
          <li><strong>Soufflage :</strong> Éliminez la poussière avec un aspirateur (embout fin)</li>
          <li><strong>Insertion/extraction de la clé :</strong> 10 fois pour déloger les impuretés</li>
          <li><strong>Brossage délicat :</strong> Brosse souple sur les parties accessibles</li>
        </ol>
        
        <h4>Étape 3 : Lubrification (10 minutes)</h4>
        <ol>
          <li><strong>Application du lubrifiant :</strong> 2-3 pulvérisations dans le cylindre</li>
          <li><strong>Répartition :</strong> Actionnez la clé 15-20 fois</li>
          <li><strong>Essuyage :</strong> Retirez l'excès de lubrifiant</li>
        </ol>
        
        <h4>Étape 4 : Tests de fonctionnement (10 minutes)</h4>
        <ol>
          <li><strong>Test de verrouillage :</strong> Depuis l'intérieur et l'extérieur</li>
          <li><strong>Vérification de la fluidité :</strong> La clé doit tourner sans effort</li>
          <li><strong>Test des points multiples :</strong> Tous les points doivent s'engager</li>
        </ol>
        
        <h3>4. Lubrifiants : Le bon choix pour chaque situation</h3>
        
        <h4>Lubrifiant graphite (recommandé)</h4>
        <p><strong>Avantages :</strong></p>
        <ul>
          <li>N'attire pas la poussière</li>
          <li>Résiste aux variations de température</li>
          <li>Longue durée d'action</li>
          <li>Compatible avec tous types de serrures</li>
        </ul>
        <p><strong>Utilisation :</strong> 2-3 pulvérisations tous les 6 mois</p>
        
        <h4>Lubrifiants à éviter absolument</h4>
        <ul>
          <li><strong>Huile de cuisine :</strong> Rancit et attire les insectes</li>
          <li><strong>WD-40 :</strong> Dégraisse et assèche à long terme</li>
          <li><strong>Graisse épaisse :</strong> Accumule la saleté</li>
          <li><strong>Savon :</strong> Laisse des résidus collants</li>
        </ul>
        
        <h3>5. Diagnostic des problèmes courants</h3>
        
        <h4>Symptômes et solutions</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Symptôme</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Cause probable</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Solution</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Clé dure à tourner</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Manque de lubrification</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Lubrification graphite</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Clé qui accroche</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Poussière dans le cylindre</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Nettoyage + lubrification</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Pêne qui ne sort pas complètement</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Ressort fatigué</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Remplacement professionnel</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Bruit lors du verrouillage</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Pièces usées</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Diagnostic professionnel</td>
          </tr>
        </table>
        
        <h3>6. Maintenance saisonnière spécifique</h3>
        
        <h4>Printemps : Réveil après l'hiver</h4>
        <ul>
          <li>Nettoyage approfondi après les intempéries</li>
          <li>Vérification de l'étanchéité</li>
          <li>Lubrification complète</li>
        </ul>
        
        <h4>Été : Protection contre la chaleur</h4>
        <ul>
          <li>Vérification de la dilatation des métaux</li>
          <li>Protection contre la poussière</li>
          <li>Contrôle de l'alignement</li>
        </ul>
        
        <h4>Automne : Préparation hivernale</h4>
        <ul>
          <li>Lubrification préventive</li>
          <li>Vérification des joints d'étanchéité</li>
          <li>Test de résistance au froid</li>
        </ul>
        
        <h4>Hiver : Protection contre le gel</h4>
        <ul>
          <li>Surveillance accrue du fonctionnement</li>
          <li>Dégivrage si nécessaire</li>
          <li>Lubrification adaptée aux basses températures</li>
        </ul>
        
        <h3>7. Quand faire appel à un professionnel</h3>
        
        <h4>Maintenance préventive annuelle</h4>
        <p>Un serrurier professionnel peut :</p>
        <ul>
          <li>Démonter complètement la serrure</li>
          <li>Nettoyer les pièces internes</li>
          <li>Remplacer les pièces d'usure</li>
          <li>Régler précisément les mécanismes</li>
          <li>Effectuer des tests de sécurité</li>
        </ul>
        
        <h4>Signaux d'alarme nécessitant une intervention</h4>
        <ul>
          <li>Résistance anormale persistante</li>
          <li>Bruits métalliques lors du fonctionnement</li>
          <li>Jeu excessif dans la poignée</li>
          <li>Traces de corrosion importantes</li>
          <li>Déformation visible du mécanisme</li>
        </ul>
        
        <h3>8. Coût de la maintenance vs coût de remplacement</h3>
        
        <h4>Analyse économique sur 15 ans</h4>
        <ul>
          <li><strong>Serrure standard :</strong> 200€ + 150€ de maintenance = 350€ total</li>
          <li><strong>Sans maintenance :</strong> 3 remplacements × 200€ = 600€ total</li>
          <li><strong>Économie réalisée :</strong> 250€ (42% d'économie)</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>La maintenance préventive de vos serrures est un investissement minimal qui vous garantit sécurité, tranquillité et économies substantielles. Un programme d'entretien régulier, combiné à une révision annuelle par un professionnel, vous assure un fonctionnement optimal pendant des décennies.</p>
        
        <p><strong>Notre service :</strong> Nous proposons des contrats de maintenance préventive adaptés à vos besoins, avec intervention programmée et tarifs préférentiels.</p>
      `,
      category: 'entretien',
      author: "Pierre Martin, Serrurier Certifié",
      date: "2024-01-05",
      readTime: "10 min",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      title: "Installation serrure multipoints : Guide technique complet 2024",
      excerpt: "Tout savoir sur l'installation professionnelle d'une serrure multipoints : processus détaillé, durée, coût réel et bénéfices sécuritaires mesurables.",
      content: `
        <h3>Serrure multipoints : La révolution sécuritaire de votre domicile</h3>
        <p>L'installation d'une serrure multipoints représente l'amélioration sécuritaire la plus efficace pour votre domicile. Elle multiplie par 8 la résistance aux tentatives d'effraction et réduit de 85% les risques de cambriolage réussi.</p>
        
        <h3>1. Technologie multipoints : Comprendre le principe</h3>
        
        <h4>Fonctionnement d'une serrure multipoints</h4>
        <p>Contrairement à une serrure classique qui ne verrouille qu'en un point central, la serrure multipoints engage simultanément plusieurs pênes :</p>
        <ul>
          <li><strong>Pêne central :</strong> Verrouillage principal au niveau de la poignée</li>
          <li><strong>Pênes hauts et bas :</strong> Ancrage en haut et bas de la porte</li>
          <li><strong>Pênes latéraux :</strong> (5 et 7 points) Verrouillage sur les côtés</li>
        </ul>
        
        <h4>Avantages techniques mesurables</h4>
        <ul>
          <li><strong>Résistance à l'effraction :</strong> 15 minutes minimum (certifié A2P***)</li>
          <li><strong>Répartition des contraintes :</strong> Moins d'usure par point</li>
          <li><strong>Étanchéité renforcée :</strong> Meilleure isolation thermique (-20% déperditions)</li>
          <li><strong>Isolation phonique :</strong> Réduction de 15 dB des nuisances sonores</li>
        </ul>
        
        <h3>2. Types de serrures multipoints disponibles</h3>
        
        <h4>Serrure 3 points : L'essentiel sécuritaire</h4>
        <p><strong>Configuration :</strong> 1 pêne central + 2 pênes verticaux (haut/bas)</p>
        <p><strong>Recommandée pour :</strong></p>
        <ul>
          <li>Appartements en étage</li>
          <li>Portes standard (hauteur 2,10m max)</li>
          <li>Budget maîtrisé</li>
          <li>Première amélioration sécuritaire</li>
        </ul>
        <p><strong>Niveau de sécurité :</strong> A2P** (résistance 10 minutes)</p>
        
        <h4>Serrure 5 points : Le compromis optimal</h4>
        <p><strong>Configuration :</strong> 1 pêne central + 2 pênes verticaux + 2 pênes latéraux</p>
        <p><strong>Recommandée pour :</strong></p>
        <ul>
          <li>Maisons individuelles</li>
          <li>Appartements rez-de-chaussée</li>
          <li>Portes hautes (jusqu'à 2,40m)</li>
          <li>Sécurité renforcée</li>
        </ul>
        <p><strong>Niveau de sécurité :</strong> A2P*** (résistance 15 minutes)</p>
        
        <h4>Serrure 7 points : La sécurité maximale</h4>
        <p><strong>Configuration :</strong> 1 pêne central + 2 pênes verticaux + 4 pênes latéraux</p>
        <p><strong>Recommandée pour :</strong></p>
        <ul>
          <li>Biens de grande valeur</li>
          <li>Zones à risque élevé</li>
          <li>Portes très hautes (jusqu'à 2,70m)</li>
          <li>Exigences d'assurance spécifiques</li>
        </ul>
        <p><strong>Niveau de sécurité :</strong> A2P*** renforcé</p>
        
        <h3>3. Diagnostic préalable : Évaluation de votre porte</h3>
        
        <h4>Critères de compatibilité</h4>
        <p><strong>Épaisseur de porte :</strong></p>
        <ul>
          <li>Minimum 40mm pour serrure 3 points</li>
          <li>Minimum 50mm pour serrures 5 et 7 points</li>
          <li>Renforcement possible si épaisseur insuffisante</li>
        </ul>
        
        <p><strong>Matériau de la porte :</strong></p>
        <ul>
          <li><strong>Bois massif :</strong> Idéal, perçage facile</li>
          <li><strong>Bois composite :</strong> Compatible avec précautions</li>
          <li><strong>Métal :</strong> Nécessite outillage spécialisé</li>
          <li><strong>PVC :</strong> Renforcement obligatoire</li>
        </ul>
        
        <p><strong>État du bâti :</strong></p>
        <ul>
          <li>Solidité du dormant</li>
          <li>Alignement de la porte</li>
          <li>Absence de déformation</li>
          <li>Qualité des fixations existantes</li>
        </ul>
        
        <h3>4. Processus d'installation détaillé</h3>
        
        <h4>Phase 1 : Préparation et démontage (30 minutes)</h4>
        <ol>
          <li><strong>Protection de l'environnement :</strong> Bâches, aspirateur</li>
          <li><strong>Démontage de l'ancienne serrure :</strong> Conservation des éléments réutilisables</li>
          <li><strong>Nettoyage des logements :</strong> Élimination des résidus</li>
          <li><strong>Vérification des cotes :</strong> Mesures précises pour adaptation</li>
        </ol>
        
        <h4>Phase 2 : Perçages et ajustements (45-60 minutes)</h4>
        <ol>
          <li><strong>Marquage des points de perçage :</strong> Précision millimétrique</li>
          <li><strong>Perçage du cylindre :</strong> Diamètre adapté au modèle</li>
          <li><strong>Perçage des points de verrouillage :</strong> Haut, bas et latéraux</li>
          <li><strong>Ajustement des logements :</strong> Fraisage si nécessaire</li>
          <li><strong>Test d'alignement :</strong> Vérification avant fixation</li>
        </ol>
        
        <h4>Phase 3 : Installation du mécanisme (30-45 minutes)</h4>
        <ol>
          <li><strong>Pose du boîtier principal :</strong> Fixation sécurisée</li>
          <li><strong>Installation des tringles :</strong> Liaison des points de verrouillage</li>
          <li><strong>Montage du cylindre :</strong> Réglage de la longueur</li>
          <li><strong>Fixation des gâches :</strong> Adaptation au dormant</li>
          <li><strong>Raccordement des éléments :</strong> Synchronisation des mouvements</li>
        </ol>
        
        <h4>Phase 4 : Réglages et tests (30 minutes)</h4>
        <ol>
          <li><strong>Réglage de la course des pênes :</strong> Engagement optimal</li>
          <li><strong>Test de fluidité :</strong> Fonctionnement sans effort</li>
          <li><strong>Vérification de l'étanchéité :</strong> Compression des joints</li>
          <li><strong>Test de sécurité :</strong> Résistance aux tentatives d'ouverture</li>
          <li><strong>Remise des clés :</strong> Jeu complet + clés de secours</li>
        </ol>
        
        <h3>5. Durée d'installation selon la complexité</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Type d'installation</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Durée</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Complexité</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Remplacement serrure standard → 3 points</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">2h - 2h30</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Moyenne</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Installation 5 points sur porte neuve</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">3h - 4h</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Élevée</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Installation 7 points avec renforcement</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">4h - 6h</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Très élevée</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Adaptation porte métallique</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">5h - 8h</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Maximale</td>
          </tr>
        </table>
        
        <h3>6. Coûts détaillés par composant</h3>
        
        <h4>Serrure 3 points</h4>
        <ul>
          <li><strong>Serrure de base :</strong> 150€ - 300€</li>
          <li><strong>Serrure A2P** :</strong> 300€ - 500€</li>
          <li><strong>Main d'œuvre :</strong> 150€ - 250€</li>
          <li><strong>Total :</strong> 300€ - 750€</li>
        </ul>
        
        <h4>Serrure 5 points</h4>
        <ul>
          <li><strong>Serrure de base :</strong> 400€ - 600€</li>
          <li><strong>Serrure A2P*** :</strong> 600€ - 1000€</li>
          <li><strong>Main d'œuvre :</strong> 200€ - 350€</li>
          <li><strong>Total :</strong> 600€ - 1350€</li>
        </ul>
        
        <h4>Serrure 7 points</h4>
        <ul>
          <li><strong>Serrure haute sécurité :</strong> 800€ - 1500€</li>
          <li><strong>Main d'œuvre spécialisée :</strong> 300€ - 500€</li>
          <li><strong>Renforcements éventuels :</strong> 200€ - 400€</li>
          <li><strong>Total :</strong> 1300€ - 2400€</li>
        </ul>
        
        <h3>7. Marques et modèles recommandés</h3>
        
        <h4>Segment premium</h4>
        <ul>
          <li><strong>Fichet Foxeo S :</strong> Référence absolue, A2P***, 15 ans de garantie</li>
          <li><strong>Vachette Radialis :</strong> Excellent rapport qualité-prix, A2P**</li>
          <li><strong>Bricard Chifral S2 :</strong> Innovation française, design moderne</li>
        </ul>
        
        <h4>Segment milieu de gamme</h4>
        <ul>
          <li><strong>JPM Keso :</strong> Fiabilité suisse, cylindre haute sécurité</li>
          <li><strong>Mottura Champions :</strong> Design italien, finitions soignées</li>
          <li><strong>Pollux :</strong> Marque française, bon rapport qualité-prix</li>
        </ul>
        
        <h3>8. Maintenance et garanties</h3>
        
        <h4>Programme de maintenance préventive</h4>
        <ul>
          <li><strong>Lubrification :</strong> Tous les 6 mois (graphite uniquement)</li>
          <li><strong>Vérification des réglages :</strong> Annuelle</li>
          <li><strong>Contrôle des fixations :</strong> Tous les 2 ans</li>
          <li><strong>Remplacement préventif :</strong> Cylindre tous les 10 ans</li>
        </ul>
        
        <h4>Garanties constructeur</h4>
        <ul>
          <li><strong>Mécanisme :</strong> 2 à 5 ans selon la marque</li>
          <li><strong>Finitions :</strong> 1 à 2 ans</li>
          <li><strong>Installation :</strong> 1 an (garantie artisan)</li>
          <li><strong>Fonctionnement :</strong> 6 mois adaptation</li>
        </ul>
        
        <h3>9. Impact sur l'assurance habitation</h3>
        
        <h4>Réductions de prime obtenues</h4>
        <ul>
          <li><strong>Serrure 3 points A2P** :</strong> -10 à -15%</li>
          <li><strong>Serrure 5 points A2P*** :</strong> -15 à -25%</li>
          <li><strong>Serrure 7 points + blindage :</strong> -25 à -35%</li>
        </ul>
        
        <h4>Obligations déclaratives</h4>
        <ul>
          <li><strong>Déclaration immédiate :</strong> Modification du contrat</li>
          <li><strong>Certificat d'installation :</strong> Fourni par l'artisan</li>
          <li><strong>Facture détaillée :</strong> Preuve de conformité</li>
          <li><strong>Photos avant/après :</strong> Documentation recommandée</li>
        </ul>
        
        <h3>10. Retour sur investissement calculé</h3>
        
        <h4>Économies directes (sur 10 ans)</h4>
        <ul>
          <li><strong>Réduction prime assurance :</strong> 1500€ - 3000€</li>
          <li><strong>Évitement d'un cambriolage :</strong> 8000€ en moyenne</li>
          <li><strong>Amélioration valeur du bien :</strong> +2 à +5%</li>
        </ul>
        
        <h4>Bénéfices indirects</h4>
        <ul>
          <li><strong>Tranquillité d'esprit :</strong> Inestimable</li>
          <li><strong>Confort d'utilisation :</strong> Fermeture en un geste</li>
          <li><strong>Isolation améliorée :</strong> Économies énergétiques</li>
          <li><strong>Prestige :</strong> Image de sécurité renforcée</li>
        </ul>
        
        <h3>11. Erreurs à éviter absolument</h3>
        
        <h4>Erreurs de choix</h4>
        <ul>
          <li><strong>Sous-dimensionnement :</strong> 3 points sur maison individuelle</li>
          <li><strong>Économie sur la certification :</strong> Serrure non A2P</li>
          <li><strong>Négligence du cylindre :</strong> Point faible de l'ensemble</li>
          <li><strong>Installation amateur :</strong> Perte de 80% de l'efficacité</li>
        </ul>
        
        <h4>Erreurs d'installation</h4>
        <ul>
          <li><strong>Perçages approximatifs :</strong> Jeu excessif, sécurité compromise</li>
          <li><strong>Fixations insuffisantes :</strong> Arrachement possible</li>
          <li><strong>Réglages négligés :</strong> Usure prématurée</li>
          <li><strong>Test incomplet :</strong> Dysfonctionnements non détectés</li>
        </ul>
        
        <h3>12. Évolutions technologiques</h3>
        
        <h4>Serrures multipoints connectées</h4>
        <ul>
          <li><strong>Ouverture smartphone :</strong> Plus de clés à perdre</li>
          <li><strong>Historique d'accès :</strong> Traçabilité complète</li>
          <li><strong>Alertes temps réel :</strong> Notification d'ouverture</li>
          <li><strong>Gestion des accès :</strong> Codes temporaires visiteurs</li>
        </ul>
        
        <h4>Intégration domotique</h4>
        <ul>
          <li><strong>Scénarios automatisés :</strong> Éclairage, alarme, chauffage</li>
          <li><strong>Contrôle vocal :</strong> Commandes Alexa, Google</li>
          <li><strong>Géofencing :</strong> Ouverture automatique à l'approche</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>L'installation d'une serrure multipoints représente l'investissement sécuritaire le plus rentable pour votre domicile. Le choix du bon modèle et une installation professionnelle garantissent une protection optimale pendant des décennies.</p>
        
        <p><strong>Notre engagement :</strong> Diagnostic gratuit, devis détaillé, installation certifiée et garantie complète. Nous vous accompagnons dans le choix de la solution la plus adaptée à vos besoins et votre budget.</p>
      `,
      category: 'installation',
      author: "Michel Rousseau, Serrurier Expert",
      date: "2023-12-20",
      readTime: "15 min",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Porte claquée : Protocole d'urgence et solutions professionnelles",
      excerpt: "Guide complet d'intervention en cas de porte claquée : évaluation de la situation, techniques d'ouverture sécurisées et prévention des récidives.",
      content: `
        <h3>Porte claquée : Une urgence qui touche 40% des Parisiens</h3>
        <p>Chaque jour à Paris, plus de 200 personnes se retrouvent enfermées dehors suite à une porte claquée. Cette situation d'urgence nécessite une approche méthodique pour éviter les dégâts coûteux et garantir une ouverture rapide et sécurisée.</p>
        
        <h3>1. Diagnostic immédiat : Évaluer la situation en 2 minutes</h3>
        
        <h4>Classification par niveau d'urgence</h4>
        <p><strong>🚨 Urgence critique (intervention < 15 minutes)</strong></p>
        <ul>
          <li><strong>Enfant seul à l'intérieur :</strong> Priorité absolue, risque vital</li>
          <li><strong>Personne âgée ou malade enfermée :</strong> Surveillance médicale nécessaire</li>
          <li><strong>Fuite de gaz détectée :</strong> Danger d'explosion</li>
          <li><strong>Début d'incendie :</strong> Évacuation urgente</li>
          <li><strong>Animal en détresse :</strong> Risque de suffocation</li>
        </ul>
        
        <p><strong>⚠️ Urgence standard (intervention < 30 minutes)</strong></p>
        <ul>
          <li>Personne seule sans moyen de contact</li>
          <li>Conditions météo extrêmes (froid, pluie)</li>
          <li>Heure tardive (après 22h)</li>
          <li>Zone peu sûre</li>
        </ul>
        
        <p><strong>📋 Situation normale (intervention < 1 heure)</strong></p>
        <ul>
          <li>Personne en sécurité à l'extérieur</li>
          <li>Possibilité d'attendre dans un lieu sûr</li>
          <li>Horaires de jour en semaine</li>
        </ul>
        
        <h4>Analyse technique de la serrure</h4>
        <p><strong>Identification du type de serrure :</strong></p>
        <ul>
          <li><strong>Serrure simple à pêne demi-tour :</strong> Ouverture possible sans dégât</li>
          <li><strong>Serrure multipoints :</strong> Complexité accrue, outils spécialisés</li>
          <li><strong>Serrure haute sécurité A2P :</strong> Techniques avancées requises</li>
          <li><strong>Serrure connectée :</strong> Solutions numériques possibles</li>
        </ul>
        
        <h3>2. Solutions d'urgence temporaires (à vos risques et périls)</h3>
        
        <h4>⚠️ Avertissement important</h4>
        <p>Les techniques suivantes sont présentées à titre informatif. Leur utilisation peut endommager votre serrure et annuler votre assurance. En cas de doute, contactez immédiatement un professionnel.</p>
        
        <h4>Technique 1 : La méthode de la radiographie (serrures simples uniquement)</h4>
        <p><strong>Conditions d'application :</strong></p>
        <ul>
          <li>Serrure à pêne demi-tour uniquement</li>
          <li>Porte non blindée</li>
          <li>Jeu suffisant entre porte et chambranle (2mm minimum)</li>
        </ul>
        
        <p><strong>Matériel nécessaire :</strong></p>
        <ul>
          <li>Radiographie médicale ou carte plastique rigide</li>
          <li>Lampe de poche pour visualiser</li>
        </ul>
        
        <p><strong>Procédure :</strong></p>
        <ol>
          <li>Insérez la radiographie entre la porte et le chambranle</li>
          <li>Localisez le pêne demi-tour</li>
          <li>Exercez une pression vers l'intérieur tout en poussant la porte</li>
          <li>Le pêne doit se rétracter et libérer la porte</li>
        </ol>
        
        <p><strong>Taux de réussite :</strong> 60% sur serrures simples, 0% sur multipoints</p>
        
        <h4>Technique 2 : Vérification des accès alternatifs</h4>
        <p><strong>Points d'accès à examiner :</strong></p>
        <ul>
          <li><strong>Fenêtres :</strong> Vérifiez si une est restée ouverte</li>
          <li><strong>Balcons :</strong> Accès par balcons voisins (avec autorisation)</li>
          <li><strong>Caves/garages :</strong> Accès par sous-sol si communicant</li>
          <li><strong>Toits :</strong> Accès par toiture (très dangereux, déconseillé)</li>
        </ul>
        
        <h4>Technique 3 : Recherche de clés de secours</h4>
        <ul>
          <li><strong>Voisins :</strong> Clé confiée à un voisin de confiance</li>
          <li><strong>Famille/amis :</strong> Clé chez des proches</li>
          <li><strong>Boîte à clés :</strong> Coffre sécurisé à code</li>
          <li><strong>Concierge :</strong> Clé en dépôt (immeubles anciens)</li>
        </ul>
        
        <h3>3. Ce qu'il ne faut JAMAIS faire</h3>
        
        <h4>❌ Actions dangereuses et coûteuses</h4>
        <ul>
          <li><strong>Forcer la porte à l'épaule :</strong> Risque de blessure + dégâts 500-2000€</li>
          <li><strong>Casser une vitre :</strong> Danger de coupure + remplacement 200-800€</li>
          <li><strong>Démonter la serrure sans compétence :</strong> Destruction du mécanisme</li>
          <li><strong>Utiliser des outils inadaptés :</strong> Dégâts irréversibles</li>
          <li><strong>Faire appel à un "ami bricoleur" :</strong> Aggravation du problème</li>
        </ul>
        
        <h4>❌ Erreurs fréquentes qui aggravent la situation</h4>
        <ul>
          <li><strong>Paniquer et forcer :</strong> Déformation de la serrure</li>
          <li><strong>Multiplier les tentatives :</strong> Usure prématurée du mécanisme</li>
          <li><strong>Utiliser de l'huile :</strong> Encrassement du cylindre</li>
          <li><strong>Secouer la porte violemment :</strong> Désalignement des gonds</li>
        </ul>
        
        <h3>4. Intervention professionnelle : Techniques et outils</h3>
        
        <h4>Outils professionnels d'ouverture fine</h4>
        <ul>
          <li><strong>Pistolet à aiguilles :</strong> Ouverture par manipulation des goupilles</li>
          <li><strong>Crochetage électronique :</strong> Vibration contrôlée du cylindre</li>
          <li><strong>Décodeur de clé :</strong> Création d'une clé temporaire</li>
          <li><strong>Endoscope :</strong> Visualisation interne du mécanisme</li>
        </ul>
        
        <h4>Techniques d'ouverture selon le type de serrure</h4>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f3f4f6;">
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Type de serrure</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Technique</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Durée</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Taux de réussite sans casse</th>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure simple</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Crochetage classique</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">5-15 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">95%</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure 3 points</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Manipulation cylindre</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">15-30 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">85%</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure 5 points</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Outils spécialisés</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">30-45 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">75%</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Serrure A2P***</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">Techniques avancées</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">45-90 min</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;">60%</td>
          </tr>
        </table>
        
        <h3>5. Tarification transparente selon la situation</h3>
        
        <h4>Grille tarifaire jour (8h-20h, lundi-vendredi)</h4>
        <ul>
          <li><strong>Ouverture simple sans casse :</strong> 80€ - 120€</li>
          <li><strong>Ouverture multipoints sans casse :</strong> 120€ - 180€</li>
          <li><strong>Ouverture avec remplacement cylindre :</strong> 150€ - 250€</li>
          <li><strong>Déplacement inclus :</strong> Dans un rayon de 10km</li>
        </ul>
        
        <h4>Majorations horaires</h4>
        <ul>
          <li><strong>Soirée (20h-22h) :</strong> +30%</li>
          <li><strong>Nuit (22h-7h) :</strong> +50%</li>
          <li><strong>Weekend :</strong> +40%</li>
          <li><strong>Jours fériés :</strong> +60%</li>
        </ul>
        
        <h4>Situations d'urgence critique</h4>
        <ul>
          <li><strong>Enfant enfermé :</strong> Tarif de jour appliqué 24h/24</li>
          <li><strong>Urgence médicale :</strong> Intervention prioritaire</li>
          <li><strong>Danger immédiat :</strong> Pas de majoration d'urgence</li>
        </ul>
        
        <h3>6. Prévention : Comment éviter la récidive</h3>
        
        <h4>Solutions de secours permanentes</h4>
        <p><strong>Clé de secours chez un voisin :</strong></p>
        <ul>
          <li>Choisir un voisin de confiance et disponible</li>
          <li>Prévoir un double chez 2 voisins différents</li>
          <li>Informer de vos horaires habituels</li>
          <li>Renouveler la clé en cas de changement de serrure</li>
        </ul>
        
        <p><strong>Boîte à clés sécurisée :</strong></p>
        <ul>
          <li><strong>Code à 4 chiffres minimum :</strong> 10 000 combinaisons possibles</li>
          <li><strong>Fixation discrète :</strong> Invisible depuis la rue</li>
          <li><strong>Matériau résistant :</strong> Acier trempé anti-effraction</li>
          <li><strong>Changement de code régulier :</strong> Tous les 6 mois</li>
        </ul>
        
        <h4>Solutions technologiques modernes</h4>
        <p><strong>Serrure connectée :</strong></p>
        <ul>
          <li><strong>Ouverture smartphone :</strong> Plus de risque de clé oubliée</li>
          <li><strong>Codes temporaires :</strong> Accès visiteurs sans clé physique</li>
          <li><strong>Historique d'accès :</strong> Traçabilité complète</li>
          <li><strong>Alertes temps réel :</strong> Notification d'ouverture</li>
        </ul>
        
        <p><strong>Digicode d'entrée :</strong></p>
        <ul>
          <li>Code personnel mémorisable</li>
          <li>Pas de clé à perdre ou oublier</li>
          <li>Changement de code facile</li>
          <li>Résistance aux intempéries</li>
        </ul>
        
        <h3>7. Habitudes préventives à adopter</h3>
        
        <h4>Réflexes quotidiens</h4>
        <ul>
          <li><strong>Vérification systématique :</strong> Clés en poche avant de sortir</li>
          <li><strong>Trousseau de secours :</strong> Dans le sac/portefeuille</li>
          <li><strong>Clé de voiture séparée :</strong> Éviter la perte totale</li>
          <li><strong>Point de dépôt fixe :</strong> Toujours au même endroit</li>
        </ul>
        
        <h4>Organisation familiale</h4>
        <ul>
          <li><strong>Clés multiples :</strong> Un jeu par membre de la famille</li>
          <li><strong>Clé d'urgence cachée :</strong> Connue de tous les membres</li>
          <li><strong>Numéros d'urgence :</strong> Serrurier en contact rapide</li>
          <li><strong>Procédure d'urgence :</strong> Qui appeler en premier</li>
        </ul>
        
        <h3>8. Cas particuliers et solutions adaptées</h3>
        
        <h4>Immeubles avec digicode</h4>
        <ul>
          <li><strong>Double problème :</strong> Porte d'immeuble + porte d'appartement</li>
          <li><strong>Solution :</strong> Mémoriser le code d'immeuble</li>
          <li><strong>Alternative :</strong> Badge d'accès de secours</li>
        </ul>
        
        <h4>Résidences sécurisées</h4>
        <ul>
          <li><strong>Accès contrôlé :</strong> Gardien ou télésurveillance</li>
          <li><strong>Procédure spécifique :</strong> Identification obligatoire</li>
          <li><strong>Horaires d'accès :</strong> Restrictions nocturnes possibles</li>
        </ul>
        
        <h4>Locations saisonnières</h4>
        <ul>
          <li><strong>Clé unique :</strong> Pas de double disponible</li>
          <li><strong>Contact propriétaire :</strong> Numéro d'urgence obligatoire</li>
          <li><strong>Assurance voyage :</strong> Couverture des frais de serrurier</li>
        </ul>
        
        <h3>9. Aspects légaux et assurance</h3>
        
        <h4>Responsabilités locataire/propriétaire</h4>
        <ul>
          <li><strong>Locataire :</strong> Frais d'ouverture à sa charge</li>
          <li><strong>Propriétaire :</strong> Remplacement de serrure si dégradée</li>
          <li><strong>Copropriété :</strong> Accès parties communes</li>
        </ul>
        
        <h4>Couverture assurance habitation</h4>
        <ul>
          <li><strong>Garantie dépannage :</strong> Souvent incluse (vérifier contrat)</li>
          <li><strong>Plafond de remboursement :</strong> 150€ à 500€ selon contrats</li>
          <li><strong>Franchise :</strong> Parfois applicable</li>
          <li><strong>Conditions :</strong> Urgence avérée requise</li>
        </ul>
        
        <h3>10. Notre service d'urgence 24h/24</h3>
        
        <h4>Engagement de service</h4>
        <ul>
          <li><strong>Temps d'intervention :</strong> Moins de 30 minutes à Paris</li>
          <li><strong>Disponibilité :</strong> 24h/24, 7j/7, 365j/an</li>
          <li><strong>Devis gratuit :</strong> Avant toute intervention</li>
          <li><strong>Paiement :</strong> Espèces, CB, chèque acceptés</li>
        </ul>
        
        <h4>Équipement professionnel</h4>
        <ul>
          <li><strong>Véhicules équipés :</strong> Tous outils d'ouverture fine</li>
          <li><strong>Stock de pièces :</strong> Cylindres et serrures courantes</li>
          <li><strong>Formation continue :</strong> Techniques d'ouverture actualisées</li>
          <li><strong>Assurance professionnelle :</strong> Couverture complète</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Une porte claquée n'est jamais une situation anodine, mais elle peut être résolue rapidement et sans dégât par un professionnel expérimenté. La prévention reste la meilleure solution : adoptez les bons réflexes et prévoyez des solutions de secours adaptées à votre situation.</p>
        
        <p><strong>Notre promesse :</strong> Intervention rapide, ouverture sans casse dans 95% des cas, tarifs transparents et conseils personnalisés pour éviter la récidive.</p>
        
        <p><strong>Urgence 24h/24 :</strong> 01 23 45 67 89</p>
      `,
      category: 'urgence',
      author: "Laurent Dubois, Serrurier d'Urgence",
      date: "2023-12-15",
      readTime: "12 min",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux articles
              </button>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {categories.find(cat => cat.id === article.category)?.name}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="relative mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Contenu de l'article */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <div 
                className="article-content text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-th:text-gray-900 dark:prose-th:text-gray-100 prose-td:text-gray-700 dark:prose-td:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
              
              {/* CTA en fin d'article */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <Phone className="h-8 w-8" />
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
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </button>
                  <button 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105"
                    onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, j\'ai une question suite à la lecture de votre article', '_blank')}
                  >
                    <MessageSquare className="h-5 w-5" />
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
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{similarArticle.readTime}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Lire →</span>
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
            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
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
                <IconComponent className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
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
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-600">
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
                <Shield className="h-5 w-5" />
                Conseil gratuit
              </Button>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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