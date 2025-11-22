/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WORDPRESS_BASE_URL: process.env.WORDPRESS_BASE_URL || 'https://app.seogbtools.com',
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY || 'ck_fad47db227d25ee887362c1cc5d656a34d6671ac',
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET || 'cs_bea750f61d3424613ee985da5172e94e38e38338',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Redirect specific broken URLs
      {
        source: '/best-seo-tools',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/best-seo-tools/',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/pages',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/pages',
        permanent: true,
      },
    ]
  },
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
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

