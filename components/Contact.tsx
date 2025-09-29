'use client';

'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailClient, setEmailClient] = useState('');

  // Détecter le client email préféré de l'utilisateur
  useEffect(() => {
    const detectEmailClient = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const hostname = window.location.hostname;
      
      // Vérifier si on est sur Gmail
      if (hostname.includes('gmail.com') || userAgent.includes('gmail')) {
        return 'gmail';
      }
      // Vérifier si on est sur Outlook
      else if (hostname.includes('outlook') || userAgent.includes('outlook')) {
        return 'outlook';
      }
      // Vérifier si on est sur Yahoo
      else if (hostname.includes('yahoo') || userAgent.includes('yahoo')) {
        return 'yahoo';
      }
      // Par défaut, utiliser le client email système
      return 'default';
    };

    setEmailClient(detectEmailClient());
  }, []);

  const openEmailClient = (formData: any) => {
    const subject = encodeURIComponent(`Demande de devis serrurier - ${formData.name}`);
    const body = encodeURIComponent(
      `Bonjour AMD Serrurier Paris,\n\n` +
      `Je vous contacte pour une demande de devis.\n\n` +
      `Mes informations :\n` +
      `• Nom : ${formData.name}\n` +
      `• Email : ${formData.email}\n` +
      `• Téléphone : ${formData.phone}\n\n` +
      `Ma demande :\n${formData.message}\n\n` +
      `Merci de me recontacter rapidement.\n\n` +
      `Cordialement,\n${formData.name}\n\n` +
      `---\nDemande envoyée depuis amd-serrurier-paris.fr`
    );
    
    const emailTo = 'amd.fermetures@gmail.com';
    
    // Ouvrir selon le client email détecté
    switch (emailClient) {
      case 'gmail':
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${subject}&body=${body}`, '_blank');
        break;
      case 'outlook':
        window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${emailTo}&subject=${subject}&body=${body}`, '_blank');
        break;
      case 'yahoo':
        window.open(`https://compose.mail.yahoo.com/?to=${emailTo}&subject=${subject}&body=${body}`, '_blank');
        break;
      default:
        // Client email système par défaut
        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Ouvrir le client email approprié avec les données du formulaire
      openEmailClient(formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contactez <span className="text-blue-600">AMD Serrurier Paris</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'un dépannage serrurier urgent à Paris ? Contactez AMD par téléphone, WhatsApp ou formulaire. 
            Urgence serrurerie Paris - Réponse garantie et tarifs transparents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Intervention d'urgence 24h/24
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Téléphone d'urgence</h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">06 35 35 51 58</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Disponible 24h/24, 7j/7</p>
                    <Button 
                      className="mt-3 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open('tel:0635355158', '_self')}
                    >
                      Appeler maintenant
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                  <svg className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Message instantané</p>
                    <Button 
                      variant="outline" 
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-400"
                      onClick={() => window.open('https://wa.me/0033635355158?text=Bonjour, j\'ai besoin d\'un serrurier d\'urgence', '_blank')}
                    >
                      Envoyer un message
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h4>
                    <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium">amd.fermetures@gmail.com</p>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400"
                      onClick={() => window.open('mailto:amd.fermetures@gmail.com?subject=Demande de renseignements', '_self')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Envoyer un email
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Zone d'intervention</h4>
                    <p className="text-gray-600 dark:text-gray-300">Paris et proche banlieue</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tous arrondissements couverts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Horaires</h4>
                    <p className="text-gray-600 dark:text-gray-300">24h/24 - 7j/7</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Y compris weekends et jours fériés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Demandez un devis gratuit
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 mb-4">
                  <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Message envoyé !</h4>
                <p className="text-green-700">Nous vous recontactons dans les plus brefs délais.</p>
                <Button 
                  className="mt-4 bg-green-600 hover:bg-green-700"
                  onClick={() => setIsSubmitted(false)}
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom et prénom"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@exemple.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="06 12 34 56 78"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre besoin *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Décrivez votre situation : porte claquée, serrure cassée, urgence..."
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Ouverture de {emailClient === 'gmail' ? 'Gmail' : emailClient === 'outlook' ? 'Outlook' : emailClient === 'yahoo' ? 'Yahoo' : 'votre client email'}...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5 mr-2" />
                      Envoyer via {emailClient === 'gmail' ? 'Gmail' : emailClient === 'outlook' ? 'Outlook' : emailClient === 'yahoo' ? 'Yahoo' : 'Email'}
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">Ou contactez-nous directement :</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      onClick={() => window.open('https://wa.me/0033635355158?text=Bonjour, j\'ai besoin d\'un serrurier d\'urgence', '_blank')}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      onClick={() => window.open('tel:0635355158', '_self')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center space-y-1">
                  <p>En soumettant ce formulaire, vous acceptez d'être recontacté par nos services.</p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Section urgence */}
        <div className="mt-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">Urgence absolue ?</h3>
            </div>
            <p className="text-red-700 mb-6">
              En cas d'urgence critique (porte blindée, nuit, situation de danger), 
              appelez-nous directement pour une intervention immédiate.
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-4 h-auto"
              onClick={() => window.open('tel:0635355158', '_self')}
            >
              <Phone className="h-6 w-6 mr-3" />
              URGENCE : 06 35 35 51 58
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;