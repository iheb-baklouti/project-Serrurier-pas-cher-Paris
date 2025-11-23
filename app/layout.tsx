import './globals.css';
import type {Metadata} from 'next';
import {ThemeProvider} from '@/components/ThemeProvider';
import {Toaster} from '@/components/ui/sonner';
import {Providers} from '@/components/providers';
import { getPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadata('principal');
    
    if (metadata) {
        return metadata;
    }
    
    // Fallback si pas de métadonnées en BDD
    return {
        title: 'Serrurier pas cher Paris | Dépannage Urgent 24h/24 | Tarifs Transparents',
        description: 'Serrurier pas cher Paris ⚡ Dépannage serrurier urgent 24h/24, ouverture de porte dès 35€. Artisan serrurier qualifié. Urgence serrurerie Paris. Devis gratuit ☎️ 06 35 35 51 58',
        keywords: 'AMD serrurier Paris, dépannage serrurier Paris, ouverture de porte Paris, urgence serrurerie Paris, artisan serrurier Paris, serrurerie 24h Paris, serrurier urgence, dépannage serrure Paris, tarifs serrurier Paris',
        authors: [{name: 'Serrurier pas cher Paris'}],
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
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Serrurier pas cher Paris | Dépannage Urgent 24h/24',
            description: 'Serrurier pas cher Paris. Dépannage serrurier urgent, ouverture de porte dès 35€, artisan serrurier qualifié.',
        },
        viewport: 'width=device-width, initial-scale=1',
    };
}

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="fr">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <link rel="canonical" href="https://serrurier-pas-cher-paris.fr"/>
            <meta name="geo.region" content="FR-75"/>
            <meta name="geo.placename" content="Paris"/>
            <meta name="geo.position" content="48.8566;2.3522"/>
            <meta name="ICBM" content="48.8566, 2.3522"/>
        </head>
        <body>
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
        </body>
        </html>
    );
}