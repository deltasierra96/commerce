// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/**
 * @type {import('next').NextConfig}
 */
const config = {
  transpilePackages: ['@plaiceholder/next'],
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};

export default withPlaiceholder(config);
