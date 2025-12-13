import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { Providers } from '@/components/providers';
import { getPageMetadata } from '@/lib/getPageMetadata';

import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadata('principal');

    if (metadata) {
        return metadata;
    }

    // Fallback si pas de métadonnées en BDD
    return {
        title: 'Serrurier pas cher Paris | Dépannage Urgent 24h/24 | Tarifs Transparents',
        description: 'Serrurier pas cher Paris ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié. Urgence serrurerie Paris. Devis gratuit ☎️ 06 27 55 88 55',
        keywords: 'AMD serrurier Paris, dépannage serrurier Paris, ouverture de porte Paris, urgence serrurerie Paris, artisan serrurier Paris, serrurerie 24h Paris, serrurier urgence, dépannage serrure Paris, tarifs serrurier Paris',
        authors: [{ name: 'Serrurier pas cher Paris' }],
        creator: 'Serrurier pas cher Paris',
        publisher: 'Serrurier pas cher Paris',
        robots: 'index, follow',
        icons: {
            icon: '/icon.svg',
        },
        openGraph: {
            type: 'website',
            locale: 'fr_FR',
            url: 'https://serrurier-pas-cher.paris/',
            siteName: 'Serrurier pas cher Paris',
            title: 'Serrurier pas cher Paris | Dépannage Urgent 24h/24',
            description: 'Serrurier pas cher Paris. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié. Urgence serrurerie Paris.',
            images: [{ url: 'https://serrurier-pas-cher.paris/icon.svg', alt: 'Serrurier pas cher Paris' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Serrurier pas cher Paris | Dépannage Urgent 24h/24',
            description: 'Serrurier pas cher Paris. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié.',
            images: ['https://serrurier-pas-cher.paris/icon.svg'],
        },
        viewport: 'width=device-width, initial-scale=1',
    };
}

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="fr">
            <head>
                <meta name="google-site-verification" content="z7bYTCabDUHihlE0FxznC4SMB600UI_QtNB49xCAccg" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <link rel="canonical" href="https://www.serrurier-pas-cher.paris/" />
                <meta name="geo.region" content="FR-75" />
                <meta name="geo.placename" content="Paris" />
                <meta name="geo.position" content="48.8566;2.3522" />
                <meta name="ICBM" content="48.8566, 2.3522" />
            </head>
            <body>
                {/* Google Tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17776892300"
                    strategy="afterInteractive"
                />
                <Script id="google-tag-init" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17776892300');
          
          // Fonction de conversion Google Ads pour les appels directs
          // Optimisée pour iOS mode privé et Android
          function gtag_report_conversion(url) {
            // Détection iOS / Safari
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            
            // Envoi conversion AVANT l'appel (important pour iOS)
            try {
              gtag('event', 'conversion', {
                'send_to': 'AW-17776892300/4tPcCO7JvNAbEIyz15xC',
                'value': 1.0,
                'currency': 'EUR'
              });
            } catch (e) {
              // Ignorer les erreurs (mode privé, cookies bloqués, etc.)
              console.log('Tracking non disponible (mode privé possible)');
            }
            
            // Sur Android / Desktop seulement (redirection via JavaScript)
            // Sur iOS, le lien href="tel:" gère la redirection automatiquement
            if (!isIOS && typeof(url) !== 'undefined') {
              setTimeout(function () {
                try {
                  window.location.href = url;
                } catch (e) {
                  // Fallback si window.location.href échoue
                  var link = document.createElement('a');
                  link.href = url;
                  link.style.display = 'none';
                  document.body.appendChild(link);
                  link.click();
                  setTimeout(function() {
                    document.body.removeChild(link);
                  }, 100);
                }
              }, 300);
            }
            
            // IMPORTANT : empêcher Safari d'annuler l'event
            return true;
          }
          
          // Exposer la fonction globalement
          window.gtag_report_conversion = gtag_report_conversion;
        `}
                </Script>
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster closeButton />
                    </ThemeProvider>
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}