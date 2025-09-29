'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CircleHelp as HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quels sont vos tarifs pour l'ouverture de porte ?",
      answer: "Nos tarifs AMD sont transparents : ouverture de porte claquée dès 95€ TTC, porte fermée à clé dès 139€ TTC. Pour les portes blindées : claquée dès 129€ TTC, fermée à clé dès 179€ TTC. Tarifs majorés la nuit, weekends et jours fériés."
    },
    {
      question: "En combien de temps arrivez-vous sur place ?",
      answer: "AMD garantit une intervention rapide dans tout Paris. Nos équipes sont disponibles 24h/24 et 7j/7 pour assurer une rapidité optimale lors de vos urgences serrurerie."
    },
    {
      question: "Intervenez-vous vraiment 24h/24 ?",
      answer: "Oui, AMD est disponible 24h/24, 7j/7, y compris les weekends et jours fériés. Nos serruriers d'urgence sont toujours prêts à intervenir. Tarifs majorés appliqués la nuit, weekends et jours fériés."
    },
    {
      question: "Peut-on ouvrir ma porte sans la casser ?",
      answer: "Dans la majorité des cas, les techniques professionnelles AMD permettent d'ouvrir votre porte sans dégradation. Nous privilégions toujours les méthodes douces et n'endommageons votre porte qu'en dernier recours."
    },
    {
      question: "Quels sont vos tarifs pour les serrures ?",
      answer: "Changement de cylindre simple : 80€ à 150€ selon modèle. Serrure multipoints haute sécurité : dès 250€. Réparation/réglage de porte : entre 100€ et 200€. Pose de porte blindée : sur devis selon norme A2P."
    },
    {
      question: "Acceptez-vous les paiements par carte bancaire ?",
      answer: "Oui, AMD accepte tous les modes de paiement : espèces, chèque, carte bancaire et virement. Nos techniciens sont équipés de terminaux de paiement pour votre confort."
    },
    {
      question: "Vos travaux sont-ils garantis ?",
      answer: "Absolument ! Tous les travaux AMD bénéficient d'une garantie. La durée varie selon le type d'intervention : dépannage, installation ou réparation. Nous sommes fiers de la qualité de notre travail."
    },
    {
      question: "Intervenez-vous dans tous les arrondissements de Paris ?",
      answer: "Oui, AMD couvre l'intégralité de Paris et sa proche banlieue. Nos équipes sont mobiles et peuvent se rendre rapidement dans tous les arrondissements parisiens."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Questions <span className="text-blue-600">fréquentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services de serrurerie à Paris.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA après FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('tel:+33123456789', '_self')}
              >
                Appelez-nous maintenant
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, j\'ai une question sur vos services', '_blank')}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;