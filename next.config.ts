/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages deployment
  // In local development, this is '/'
  // In production, this should be '/ssh-eat'
  // We will handle this via environment variables or conditional logic in a real setup,
  // but for now, we'll set it to '/' to ensure local dev works.
  // The deployment workflow will handle the production prefix.
  basePath: process.env.NODE_ENV === 'production' ? '/ssh-eat' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ssh-eat' : '',
};

export default nextConfig;
