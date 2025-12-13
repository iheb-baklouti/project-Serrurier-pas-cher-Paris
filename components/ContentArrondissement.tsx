'use client';

import { Phone, Clock, Euro, Shield, CheckCircle, Wrench, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactInfo } from '@/lib/useContactInfo';
import { getArrondissementContent } from '@/lib/arrondissementContent';
import { getArrondissementData } from '@/lib/arrondissementData';

interface ContentArrondissementProps {
  arrondissement: number;
}

const ContentArrondissement = ({ arrondissement }: ContentArrondissementProps) => {
  const { contact_phone, contact_whatsapp, handlePhoneClick, getWhatsAppLink } = useContactInfo();
  const content = getArrondissementContent(arrondissement);
  const arrondissementData = getArrondissementData(arrondissement);
  const nomArrondissement = arrondissementData.name;

  // Contenu unique et spécifique pour chaque arrondissement
  const contenuServices = `Notre serrurier pas cher intervient dans le ${nomArrondissement} arrondissement de Paris, notamment dans les quartiers ${content.quartiers.slice(0, 3).join(', ')}. Que vous habitiez près de ${content.stationsMetro.slice(0, 2).join(' ou ')}, ou dans les rues ${content.rues.slice(0, 2).join(' ou ')}, notre artisan serrurier qualifié est à votre service 24h/24 et 7j/7 pour tous vos besoins de dépannage serrurerie : ouverture de porte suite à un claquement de porte, changement de serrure suite à une perte de clés, ou réparation de serrure défectueuse.`;

  const contenuPourquoi = `Choisir notre serrurier à Paris ${arrondissement}, c'est opter pour un service d'excellence avec intervention rapide 24h/24 dans les quartiers ${content.quartiers.slice(0, 2).join(' et ')}. Nous intervenons dans tout le ${nomArrondissement} arrondissement, près des stations ${content.stationsMetro.slice(0, 3).join(', ')}, en moins de 30 minutes en moyenne. Nos tarifs sont transparents et compétitifs, sans frais cachés. De plus, nos artisans serruriers sont certifiés et expérimentés, avec une garantie sur toutes nos interventions.`;

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

          {/* Section Quartiers et Stations */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Zones d'intervention dans le {nomArrondissement} arrondissement
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Quartiers desservis :</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {content.quartiers.join(', ')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Stations de métro proches :</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {content.stationsMetro.join(', ')}
                </p>
              </div>
            </div>
            {content.rues.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Rues principales :</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {content.rues.slice(0, 5).join(', ')}
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ouverture de porte Paris {arrondissement}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Porte claquée dès 95€, porte fermée à clé dès 139€. Porte blindée claquée dès 129€, fermée à clé dès 179€. Intervention rapide dans le {nomArrondissement} arrondissement, notamment près de {content.stationsMetro.slice(0, 2).join(' et ')}.
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
                Changement de cylindre 80€-150€. Réparation/réglage de porte 100€-200€. Tous types de serrures et toutes marques. Intervention dans les quartiers {content.quartiers.slice(0, 2).join(' et ')}.
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

          {/* Section FAQ spécifique à l'arrondissement 
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions fréquentes - Serrurier Paris {arrondissement}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Combien de temps pour une intervention dans le {nomArrondissement} arrondissement ?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nous intervenons en moyenne en moins de 30 minutes dans le {nomArrondissement} arrondissement, notamment près des stations {content.stationsMetro.slice(0, 2).join(' et ')}. Notre équipe est répartie dans tout Paris pour garantir une intervention rapide.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Intervenez-vous dans les quartiers {content.quartiers.slice(0, 2).join(' et ')} ?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Oui, nous intervenons dans tous les quartiers du {nomArrondissement} arrondissement, y compris {content.quartiers.join(', ')}. Notre serrurier est disponible 24h/24 et 7j/7 pour tous vos besoins de dépannage serrurerie.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quels sont vos tarifs pour une ouverture de porte dans le {nomArrondissement} arrondissement ?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nos tarifs sont transparents et compétitifs : porte standard claquée dès 95€, porte fermée à clé dès 139€, porte blindée dès 129€. Tous nos tarifs sont affichés sans surprise, avec devis gratuit avant intervention.
                </p>
              </div>
              {content.pointsInteret.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Intervenez-vous près de {content.pointsInteret[0]} ?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Oui, nous intervenons rapidement près de {content.pointsInteret.slice(0, 2).join(' et ')}, ainsi que dans toutes les rues du {nomArrondissement} arrondissement. Notre serrurier est à votre service pour toute urgence de serrurerie.
                  </p>
                </div>
              )}
            </div>
          </div>
*/}
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Contactez votre serrurier à Paris {arrondissement}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Besoin d'une intervention d'urgence {content.faqContext} ? Appelez-nous maintenant ou demandez un devis gratuit. 
              Notre équipe intervient rapidement dans tout le {nomArrondissement} arrondissement de Paris, notamment près de {content.stationsMetro.slice(0, 2).join(' et ')}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => handlePhoneClick(contact_phone)}
              >
                <Phone className="h-5 w-5 mr-2" />
                Appelez-nous : {contact_phone}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(getWhatsAppLink(contact_whatsapp, `Bonjour, j'ai besoin d'un serrurier d'urgence à Paris ${arrondissement}`), '_blank')}
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
