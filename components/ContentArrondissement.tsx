'use client';

import { Phone, Clock, Euro, Shield, CheckCircle, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentArrondissementProps {
  arrondissement: number;
}

const ContentArrondissement = ({ arrondissement }: ContentArrondissementProps) => {
  const nomsArrondissements: { [key: number]: string } = {
    1: '1er', 2: '2ème', 3: '3ème', 4: '4ème', 5: '5ème',
    6: '6ème', 7: '7ème', 8: '8ème', 9: '9ème', 10: '10ème',
    11: '11ème', 12: '12ème', 13: '13ème', 14: '14ème', 15: '15ème',
    16: '16ème', 17: '17ème', 18: '18ème', 19: '19ème', 20: '20ème'
  };

  const nomArrondissement = nomsArrondissements[arrondissement] || `${arrondissement}ème`;

  // Contenu varié pour chaque arrondissement
  const contenusServices = [
    `Notre serrurier pas cher intervient dans le ${nomArrondissement} arrondissement de Paris pour tous vos besoins de dépannage serrurerie. Que vous ayez besoin d'une ouverture de porte suite à un claquement de porte, d'un changement de serrure suite à une perte de clés, ou d'une réparation de serrure défectueuse, notre artisan serrurier qualifié est à votre service 24h/24 et 7j/7.`,
    `Besoin d'un dépannage serrurier urgent à Paris ${arrondissement} ? Nous intervenons rapidement pour toute urgence de serrurerie : ouverture de porte claquée, changement de cylindre, réparation de serrure, installation de serrures haute sécurité. Nos tarifs sont transparents et compétitifs, avec des prix dès 95€ pour une ouverture de porte standard.`,
    `Serrurier professionnel dans le ${nomArrondissement} arrondissement de Paris, nous proposons une large gamme de services : ouverture de porte 24h/24, dépannage serrurerie, changement de serrure, installation de serrures multipoints, blindage de porte. Nos artisans serruriers certifiés maîtrisent toutes les techniques modernes pour garantir une intervention rapide et efficace.`
  ];

  const contenusPourquoi = [
    `Choisir notre serrurier à Paris ${arrondissement}, c'est opter pour un service d'excellence avec intervention rapide 24h/24. Nous intervenons dans tout le ${nomArrondissement} arrondissement en moins de 30 minutes en moyenne. Nos tarifs sont transparents et compétitifs, sans frais cachés. De plus, nos artisans serruriers sont certifiés et expérimentés, avec une garantie sur toutes nos interventions.`,
    `Notre équipe de serruriers professionnels est spécialisée dans l'intervention d'urgence à Paris ${arrondissement}. Nous vous garantissons une disponibilité totale, y compris les weekends et jours fériés. Avec plus de 10 ans d'expérience, nous maîtrisons toutes les techniques de dépannage serrurerie pour résoudre rapidement votre problème, qu'il s'agisse d'une porte claquée, d'une clé cassée ou d'un changement de serrure.`,
    `Pourquoi faire appel à notre serrurier pas cher Paris ${arrondissement} ? Parce que nous offrons un service complet avec intervention rapide, tarifs transparents dès 95€, artisans qualifiés et certifiés, garantie sur toutes les interventions, et disponibilité 7j/7 et 24h/24. Nous intervenons dans tout le ${nomArrondissement} arrondissement pour tous vos besoins de serrurerie.`
  ];

  const contenuServices = contenusServices[arrondissement % contenusServices.length];
  const contenuPourquoi = contenusPourquoi[arrondissement % contenusPourquoi.length];

  const avantages = [
    { icon: Clock, title: 'Intervention rapide 24h/24 et 7j/7', desc: 'Disponibilité totale pour vos urgences' },
    { icon: Euro, title: 'Prix transparents sans surprise', desc: 'Devis gratuit et tarifs compétitifs dès 95€' },
    { icon: Shield, title: 'Serruriers certifiés et expérimentés', desc: '+10 ans d\'expérience dans la serrurerie' },
    { icon: CheckCircle, title: 'Garantie sur toutes les interventions', desc: 'Travail soigné et garantie satisfaction' },
  ];

  return (
    <>
      {/* Section Services */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Services serrurier Paris {arrondissement}
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {contenuServices}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ouverture de porte Paris {arrondissement}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Porte claquée dès 95€, porte fermée à clé dès 139€. Porte blindée claquée dès 129€, fermée à clé dès 179€. Intervention rapide dans le {nomArrondissement} arrondissement.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Porte standard claquée : dès 95€</li>
                <li>Porte fermée à clé : dès 139€</li>
                <li>Porte blindée : dès 129€</li>
                <li>Intervention en moins de 30 minutes</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dépannage serrurerie Paris {arrondissement}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Changement de cylindre 80€-150€. Réparation/réglage de porte 100€-200€. Tous types de serrures et toutes marques.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Changement de cylindre : 80€-150€</li>
                <li>Réparation de serrure : 100€-200€</li>
                <li>Installation serrure haute sécurité : dès 250€</li>
                <li>Artisan serrurier certifié</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi choisir */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pourquoi choisir notre serrurier à Paris {arrondissement} ?
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {contenuPourquoi}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {avantages.map((avantage, index) => {
              const IconComponent = avantage.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {avantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {avantage.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Contactez votre serrurier à Paris {arrondissement}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Besoin d'une intervention d'urgence ? Appelez-nous maintenant ou demandez un devis gratuit. 
              Notre équipe intervient rapidement dans tout le {nomArrondissement} arrondissement de Paris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('tel:0635355158', '_self')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Appelez-nous : 06 35 35 51 58
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://wa.me/33635355158?text=Bonjour, j\'ai besoin d\'un serrurier d\'urgence à Paris ' + arrondissement, '_blank')}
              >
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentArrondissement;
