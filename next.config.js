/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  // Adding basePath for GitHub Pages
  basePath: '/AirbnbFood',
  // Fix for GitHub Pages which doesn't support client-side routing
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig; 