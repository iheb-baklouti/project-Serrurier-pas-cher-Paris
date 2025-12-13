'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { useContactInfo } from '@/lib/useContactInfo';

const HeaderPhoneButton = () => {
  const { contact_phone, getTelLink, handlePhoneClick } = useContactInfo();

  return (
    <div className="hidden md:flex items-center gap-3">
      <ThemeToggle />
      <a
        href={getTelLink(contact_phone)}
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
        onClick={(e) => handlePhoneClick(contact_phone, e)}
      >
        <Phone className="h-4 w-4" />
        {contact_phone}
      </a>
    </div>
  );
};

const Header = () => {
  const { contact_phone, getTelLink, handlePhoneClick } = useContactInfo();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Extraire le numéro d'arrondissement de l'URL (support des anciens et nouveaux slugs)
  const arrondissementMatch = pathname?.match(/\/paris-(?:1er|2eme|3eme|\d+eme|\d+)/);
  let selectedArrondissement: number | null = null;

  if (pathname?.includes('/paris-1er')) {
    selectedArrondissement = 1;
  } else if (pathname?.includes('/paris-2eme')) {
    selectedArrondissement = 2;
  } else if (pathname?.includes('/paris-3eme')) {
    selectedArrondissement = 3;
  } else {
    // Support pour paris-Xeme (4 à 20) et anciens paris-X
    const match = pathname?.match(/\/paris-(\d+)(?:eme)?/);
    selectedArrondissement = match ? parseInt(match[1]) : null;
  }

  // Fonction pour obtenir le slug d'URL correct
  const getArrondissementSlug = (num: number): string => {
    if (num === 1) return '/paris-1er';
    if (num === 2) return '/paris-2eme';
    if (num === 3) return '/paris-3eme';
    return `/paris-${num}eme`;
  };

  // Fonction pour obtenir le nom d'affichage
  const getArrondissementName = (num: number): string => {
    if (num === 1) return 'Paris 1er';
    if (num === 2) return 'Paris 2ème';
    if (num === 3) return 'Paris 3ème';
    return `Paris ${num}ème`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('pourquoi')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pourquoi nous ?
            </button>
            <button onClick={() => scrollToSection('temoignages')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Témoignages
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </button>

            {/* Menu déroulant Arrondissements - MASQUÉ TEMPORAIREMENT */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors outline-none focus:outline-none">
                <MapPin className="h-4 w-4" />
                <span>
                  {selectedArrondissement ? getArrondissementName(selectedArrondissement) : 'Arrondissements'}
                </span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 max-h-96 overflow-y-auto">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2 py-1 mb-2 uppercase tracking-wide">
                    Paris par arrondissement
                  </div>
                  <DropdownMenuItem asChild className="p-0 mb-2">
                    <Link 
                      href="/"
                      className={`flex items-center justify-center px-3 py-2 text-sm rounded cursor-pointer w-full font-medium ${
                        !selectedArrondissement
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      Tous les arrondissements
                    </Link>
                  </DropdownMenuItem>
                  <div className="grid grid-cols-2 gap-1">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                      const isSelected = selectedArrondissement === num;
                      return (
                        <DropdownMenuItem key={num} asChild className="p-0">
                          <Link 
                            href={getArrondissementSlug(num)}
                            className={`flex items-center justify-center px-3 py-2 text-sm rounded cursor-pointer w-full ${
                              isSelected
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                            }`}
                          >
                            {getArrondissementName(num)}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </nav>

          {/* Phone CTA + Theme Toggle */}
          <HeaderPhoneButton />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              <button onClick={() => scrollToSection('accueil')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('pourquoi')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Pourquoi nous ?
              </button>
              <button onClick={() => scrollToSection('temoignages')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Témoignages
              </button>
              <button onClick={() => scrollToSection('blog')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left">
                Contact
              </button>

              {/* Section Arrondissements Mobile - MASQUÉE TEMPORAIREMENT */}
              {/* <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="px-3 py-2 font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {selectedArrondissement ? getArrondissementName(selectedArrondissement) : 'Arrondissements Paris'}
                </div>
                <Link
                  href="/"
                  className={`block px-3 py-2 text-sm rounded transition-colors text-center mb-2 mx-3 font-medium ${
                    !selectedArrondissement
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tous les arrondissements
                </Link>
                <div className="grid grid-cols-3 gap-1 px-3 py-2">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                    const isSelected = selectedArrondissement === num;
                    return (
                      <Link
                        key={num}
                        href={getArrondissementSlug(num)}
                        className={`px-3 py-2 text-sm rounded transition-colors text-center ${
                          isSelected
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {getArrondissementName(num)}
                      </Link>
                    );
                  })}
                </div>
              </div> */}

              <div className="px-3 py-2 flex items-center gap-2 border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                <ThemeToggle />
              </div>
              <div className="px-3 py-2">
                <a
                  href={getTelLink(contact_phone)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
                  onClick={(e) => handlePhoneClick(contact_phone, e)}
                >
                  <Phone className="h-4 w-4" />
                  {contact_phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;