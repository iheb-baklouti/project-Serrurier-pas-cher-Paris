'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      location: "Paris 15ème",
      rating: 5,
      text: "Service fantastique ! Porte ouverte en 10 minutes sans aucune dégradation. Très professionnel et prix correct.",
      date: "Il y a 2 jours"
    },
    {
      name: "Pierre M.",
      location: "Paris 11ème", 
      rating: 5,
      text: "Intervention d'urgence un dimanche soir. Arrivé en 20 minutes, problème résolu rapidement. Je recommande !",
      date: "Il y a 1 semaine"
    },
    {
      name: "Sophie R.",
      location: "Paris 9ème",
      rating: 5,
      text: "Changement de serrure après cambriolage. Travail soigné, conseils pertinents et tarif transparent.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Thomas D.",
      location: "Paris 3ème",
      rating: 5,
      text: "Clé cassée dans la serrure un vendredi soir. Dépannage ultra rapide et serrurier très sympathique.",
      date: "Il y a 3 semaines"
    },
    {
      name: "Isabelle G.",
      location: "Paris 17ème",
      rating: 5,
      text: "Installation d'une serrure 3 points. Travail impeccable, explications claires. Parfait !",
      date: "Il y a 1 mois"
    },
    {
      name: "Antoine B.",
      location: "Paris 5ème",
      rating: 5,
      text: "Ouverture de porte en urgence avec bébé à l'intérieur. Intervention express et très rassurante.",
      date: "Il y a 1 mois"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos <span className="text-blue-600">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 1000 clients satisfaits nous font confiance chaque année. 
            Découvrez leurs témoignages authentiques.
          </p>
          
          {/* Note globale */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9/5</div>
            <div className="text-gray-600">(247 avis)</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section confiance */}
        <div className="mt-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Votre satisfaction est notre priorité
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Nous nous engageons à vous fournir un service de qualité. 
              Tous nos clients repartent satisfaits de notre intervention.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</div>
                <div className="text-gray-600 dark:text-gray-300">Frais cachés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24h</div>
                <div className="text-gray-600 dark:text-gray-300">Garantie travaux</div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('tel:+33123456789', '_self')}
              >
                Rejoignez nos clients satisfaits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;