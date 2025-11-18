/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' - Retiré car incompatible avec les pages admin dynamiques et l'API backend
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  generateEtags: false,
  
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate'
          }
        ]
      }
    ];
  },
  
  async redirects() {
    const redirects = [];
    
    // Redirections pour Paris 1, 2, 3
    redirects.push(
      { source: '/paris-1', destination: '/paris-1er', permanent: true },
      { source: '/paris-2', destination: '/paris-2eme', permanent: true },
      { source: '/paris-3', destination: '/paris-3eme', permanent: true }
    );
    
    // Redirections pour Paris 4 à 20
    for (let i = 4; i <= 20; i++) {
      redirects.push({
        source: `/paris-${i}`,
        destination: `/paris-${i}eme`,
        permanent: true,
      });
    }
    
    return redirects;
  },
};

module.exports = nextConfig;
