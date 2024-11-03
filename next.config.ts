/** @type {import('next').NextConfig} */
export default {
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
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  }
};
