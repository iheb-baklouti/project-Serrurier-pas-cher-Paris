'use client';

import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizeClasses = {
        sm: 'h-10 w-10',
        md: 'h-14 w-14',
        lg: 'h-20 w-20'
    };

    const textSizes = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl'
    };

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className={`${sizeClasses[size]} relative`}>
                <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Définitions des dégradés et effets */}
                    <defs>
                        {/* Dégradé principal moderne */}
                        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#1E40AF" />
                        </linearGradient>

                        {/* Dégradé secondaire pour les accents */}
                        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>

                        {/* Ombre portée moderne */}
                        <filter id="modernShadow" x="-30%" y="-30%" width="160%" height="160%">
                            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1E40AF" floodOpacity="0.25"/>
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#3B82F6" floodOpacity="0.15"/>
                        </filter>

                        {/* Effet de brillance */}
                        <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Cercle de fond principal avec dégradé moderne */}
                    <circle
                        cx="60"
                        cy="60"
                        r="55"
                        fill="url(#primaryGradient)"
                        filter="url(#modernShadow)"
                    />

                    {/* Cercle intérieur pour la profondeur */}
                    <circle
                        cx="60"
                        cy="60"
                        r="48"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        opacity="0.2"
                    />

                    {/* Serrure principale moderne */}
                    <g transform="translate(60, 60)">
                        {/* Corps de la serrure */}
                        <rect
                            x="-18"
                            y="-8"
                            width="36"
                            height="28"
                            rx="4"
                            fill="white"
                            stroke="#E5E7EB"
                            strokeWidth="1.5"
                        />

                        {/* Anse de la serrure stylisée */}
                        <path
                            d="M-12 -8 C-12 -20, 12 -20, 12 -8"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Détails de l'anse */}
                        <path
                            d="M-10 -8 C-10 -18, 10 -18, 10 -8"
                            stroke="#F3F4F6"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Trou de serrure moderne */}
                        <circle
                            cx="0"
                            cy="2"
                            r="4"
                            fill="url(#accentGradient)"
                        />

                        {/* Fente de la clé */}
                        <rect
                            x="-1.5"
                            y="6"
                            width="3"
                            height="10"
                            fill="url(#accentGradient)"
                            rx="1.5"
                        />

                        {/* Détails décoratifs sur la serrure */}
                        <rect x="-15" y="-5" width="2" height="2" rx="1" fill="#E5E7EB" />
                        <rect x="13" y="-5" width="2" height="2" rx="1" fill="#E5E7EB" />
                        <rect x="-15" y="15" width="2" height="2" rx="1" fill="#E5E7EB" />
                        <rect x="13" y="15" width="2" height="2" rx="1" fill="#E5E7EB" />
                    </g>

                    {/* Clé stylisée moderne en arrière-plan */}
                    <g transform="translate(85, 35) rotate(25)" opacity="0.4">
                        {/* Manche de la clé */}
                        <circle cx="0" cy="0" r="6" fill="none" stroke="white" strokeWidth="2.5" />
                        <circle cx="0" cy="0" r="3" fill="white" />

                        {/* Tige de la clé */}
                        <rect x="6" y="-1.5" width="20" height="3" rx="1.5" fill="white" />

                        {/* Dents de la clé */}
                        <rect x="22" y="-3" width="4" height="2" rx="1" fill="white" />
                        <rect x="24" y="1" width="3" height="2" rx="1" fill="white" />
                        <rect x="22" y="3" width="2" height="2" rx="1" fill="white" />
                    </g>

                    {/* Éléments décoratifs modernes - Points lumineux */}
                    <g opacity="0.6">
                        <circle cx="25" cy="25" r="3" fill="white" opacity="0.8">
                            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="95" cy="85" r="2.5" fill="white" opacity="0.6">
                            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="20" cy="80" r="2" fill="white" opacity="0.5">
                            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="100" cy="30" r="1.5" fill="white" opacity="0.4">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* Effet de brillance sur le cercle principal */}
                    <circle
                        cx="60"
                        cy="60"
                        r="55"
                        fill="url(#shine)"
                    />

                    {/* Bordure externe subtile */}
                    <circle
                        cx="60"
                        cy="60"
                        r="55"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        opacity="0.3"
                    />
                </svg>
            </div>

            {size !== 'sm' && (
                <div className="flex flex-col">
          <span className={`font-bold text-gray-900 dark:text-white ${textSizes[size]} leading-tight`}>
            Serrurier
          </span>
                    <span className={`font-bold text-blue-600 dark:text-blue-400 ${textSizes[size]} leading-tight`}>
            Paris Pro
          </span>
                </div>
            )}
        </div>
    );
};

export default Logo;