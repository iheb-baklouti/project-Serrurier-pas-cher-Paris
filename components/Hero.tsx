'use client';

import { Phone, Clock, MapPin, Star, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useContactInfo } from '@/lib/useContactInfo';

const Hero = () => {
  const { contact_phone, contact_whatsapp, getPhoneLink, getWhatsAppLink } = useContactInfo();
  return (
    <section id="accueil" className="pt-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>Service de confiance depuis 2010</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Serrurier Pas Cher
                <span className="text-blue-600 dark:text-blue-400 block">Paris - Dépannage 24h/24</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Dépannage serrurier 24h/24 • Ouverture de porte dès 35€ • Artisan serrurier qualifié
                Urgence serrurerie Paris - Tarifs transparents et compétitifs
              </p>
            </div>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>24h/24 - 7j/7</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Tout Paris</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Star className="h-4 w-4 text-blue-600" />
                <span>Devis gratuit</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto"
                onClick={() => window.open(`tel:${getPhoneLink(contact_phone)}`, '_self')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white text-lg px-8 py-4 h-auto"
                onClick={() => window.open(getWhatsAppLink(contact_whatsapp, "Bonjour, j'ai besoin d'un serrurier d'urgence"), '_blank')}
              >
                WhatsApp
              </Button>
            </div>

            {/* Numéro d'urgence */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full p-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-red-800 dark:text-red-200 font-semibold">Urgence 24h/24</p>
                  <p className="text-red-700 dark:text-red-300 text-lg font-bold">{contact_phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-2">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <a
                  href={process.env.NEXT_PUBLIC_SCANNER_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-full p-6 w-32 h-32 mx-auto flex flex-col items-center justify-center shadow-lg mb-4 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Camera className="h-12 w-12 text-blue-600 mb-2 group-hover:text-blue-700" />
                  <span className="text-xs font-bold text-blue-600 uppercase">Scanner</span>
                </a>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 uppercase max-w-xs mx-auto">
                  SCANNEZ VOTRE SERRURE POUR UN DEVIS & UNE INTERVENTION
                </h3>
              </div>
            </div>

            {/* Badges flottants */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Disponible maintenant
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="text-sm text-gray-600 dark:text-gray-300">Tarif dès</div>
              <div className="text-lg font-bold text-blue-600">35€</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;