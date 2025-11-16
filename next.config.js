/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' - Retiré car incompatible avec les pages admin dynamiques et l'API backend
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  generateEtags: false,
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
