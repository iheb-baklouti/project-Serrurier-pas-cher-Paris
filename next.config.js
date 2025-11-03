/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' - Retiré car incompatible avec les pages admin dynamiques et l'API backend
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  generateEtags: false,
};

module.exports = nextConfig;
