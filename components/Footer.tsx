import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              AMD <span className="text-blue-400">Serrurier Paris</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              AMD, votre artisan serrurier de confiance à Paris. Dépannage serrurier urgent 24h/24 pour tous vos besoins : 
              ouverture de porte dès 95€, urgence serrurerie, installation. Tarifs transparents et compétitifs.
            </p>
            
            {/* Contact direct */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="font-semibold">Urgence 24h/24</div>
                  <a href="tel:0635355158" className="text-xl font-bold text-blue-400 hover:text-blue-300">
                    06 35 35 51 58
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <div>
                  <div className="text-gray-300">WhatsApp</div>
                  <a 
                    href="https://wa.me/0033635355158?text=Bonjour, j'ai besoin d'un serrurier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Ouverture de porte</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Dépannage serrurerie</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Installation serrures</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Blindage de porte</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Urgence 24h/24</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Serrurerie résidentielle</a></li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Zone d'intervention</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Paris et région</div>
                  <div className="text-sm">Tous arrondissements</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Horaires</div>
                  <div className="text-sm">24h/24 - 7j/7</div>
                  <div className="text-xs text-gray-400">Weekends et jours fériés</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:amd.fermetures@gmail.com" className="text-sm hover:text-blue-400">
                    amd.fermetures@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liens rapides et mots-clés SEO */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Liens rapides</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#accueil" className="text-gray-300 hover:text-blue-400 transition-colors">Accueil</a>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
                <a href="#pourquoi" className="text-gray-300 hover:text-blue-400 transition-colors">Pourquoi nous ?</a>
                <a href="#temoignages" className="text-gray-300 hover:text-blue-400 transition-colors">Témoignages</a>
                <a href="#blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Recherches populaires</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">AMD serrurier Paris</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">dépannage serrurier</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">ouverture de porte</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">urgence serrurerie</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">tarifs transparents</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} AMD Serrurier Paris. Tous droits réservés. | 
            <span className="ml-1">Intervention d'urgence 24h/24 dans tout Paris</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;