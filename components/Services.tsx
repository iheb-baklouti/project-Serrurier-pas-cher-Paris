'use client';

import React from 'react';
import { Key, Lock, Clock, Shield, Wrench, Chrome as Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Ouverture de porte",
      description: "Porte claquée dès 95€, porte fermée à clé dès 139€. Porte blindée claquée dès 129€, fermée à clé dès 179€.",
      price: "Dès 95€ TTC",
      urgent: true
    },
    {
      icon: Lock,
      title: "Dépannage serrurerie",
      description: "Changement de cylindre 80€-150€. Réparation/réglage de porte 100€-200€. Tous types de serrures.",
      price: "80€ à 200€",
      urgent: false
    },
    {
      icon: Shield,
      title: "Installation serrures",
      description: "Serrure multipoints haute sécurité dès 250€. Pose de porte blindée sur devis selon norme A2P.",
      price: "Dès 250€",
      urgent: false
    },
    {
      icon: Clock,
      title: "Urgence 24h/24",
      description: "Service d'urgence 24h/24. Tarifs majorés la nuit, weekends et jours fériés.",
      price: "Intervention rapide",
      urgent: true
    },
    {
      icon: Wrench,
      title: "Blindage de porte",
      description: "Renforcement sécuritaire selon norme A2P. Protection anti-effraction optimale sur devis.",
      price: "Devis sur mesure",
      urgent: false
    },
    {
      icon: Home,
      title: "Serrurerie résidentielle",
      description: "Tous travaux de serrurerie pour particuliers. Tarifs transparents et compétitifs.",
      price: "Tarif préférentiel",
      urgent: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Services <span className="text-blue-600">AMD Serrurier Paris</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AMD, votre artisan serrurier qualifié à Paris. 
            Dépannage serrurier urgent avec tarifs transparents et compétitifs pour tous vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                {service.urgent && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Urgent
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{service.price}</span>
                    <button 
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      onClick={() => window.open('tel:0635355158', '_self')}
                    >
                      En savoir plus →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Besoin d'un serrurier maintenant ?
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
              Nos équipes sont disponibles 24h/24 pour tous vos dépannages urgents. 
              Devis gratuit et intervention rapide garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                onClick={() => window.open('tel:0635355158', '_self')}
              >
                <Clock className="h-5 w-5" />
                Intervention immédiate
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Devis gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;