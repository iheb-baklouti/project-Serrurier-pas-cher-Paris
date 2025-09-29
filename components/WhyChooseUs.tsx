'use client';

import { CircleCheck as CheckCircle, Clock, Euro, Users, Shield, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Tarifs AMD clairs et compétitifs. Devis gratuit sans engagement. Pas de frais cachés.",
      highlight: "Dès 95€"
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Service AMD disponible 24h/24, 7j/7. Intervention rapide dans tout Paris.",
      highlight: "24h/24"
    },
    {
      icon: Users,
      title: "Artisans qualifiés",
      description: "Équipe AMD d'experts formés et expérimentés. Techniques modernes et matériel professionnel.",
      highlight: "+10 ans d'expérience"
    },
    {
      icon: Shield,
      title: "Disponibilité totale",
      description: "AMD : urgences de jour comme de nuit, weekends et jours fériés inclus. Toujours disponibles.",
      highlight: "7j/7"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction garantie",
      description: "Travail AMD soigné et garanti. Plus de 1000 clients satisfaits chaque année à Paris.",
      highlight: "100% satisfait"
    },
    {
      icon: Phone,
      title: "Contact direct",
      description: "Appelez AMD ou contactez-nous via WhatsApp. Réponse immédiate à vos urgences.",
      highlight: "Réponse immédiate"
    }
  ];

  return (
    <section id="pourquoi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-blue-600">AMD Serrurier Paris</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des centaines de clients font confiance à AMD chaque mois. 
            Découvrez pourquoi nous sommes le serrurier de référence à Paris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        {reason.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Interventions par an</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Disponibilité</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">&lt; 30min</div>
                <div className="text-gray-600">Temps d'intervention</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15 ans</div>
                <div className="text-gray-600">D'expérience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Faites confiance à AMD, experts parisiens
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Rejoignez nos milliers de clients satisfaits. Intervention immédiate et tarifs transparents.
            </p>
            <button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              onClick={() => window.open('tel:0635355158', '_self')}
            >
              <Phone className="h-5 w-5" />
              Appelez maintenant : 06 35 35 51 58
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;