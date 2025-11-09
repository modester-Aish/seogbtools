import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { fetchAllPagesComplete } from '@/lib/wordpress-api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SEOGBTools - Affordable Premium Marketing & SEO Software Access | Save 90%',
    template: '%s | SEOGBTools',
  },
  description: 'Access 60+ premium marketing tools including Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, Canva Pro at affordable rates. Trusted by 50,000+ digital marketers worldwide. 24/7 support, instant activation.',
  keywords: [
    'seo tools group buy',
    'affordable seo software',
    'ahrefs subscription',
    'semrush discount',
    'digital marketing tools',
    'premium seo tools 2025',
    'moz pro access',
    'content marketing software',
    'ai writing tools',
    'graphic design tools',
    'marketing automation',
    'keyword research tools',
    'backlink analysis software',
    'rank tracking tools',
    'canva pro subscription',
    'chatgpt plus access',
    'grammarly premium',
    'professional marketing platforms',
  ],
  authors: [{ name: 'SEOGBTools Team' }],
  creator: 'SEOGBTools',
  publisher: 'SEOGBTools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seogbtools.com',
    title: 'SEOGBTools - Professional Marketing Software | 60+ Premium Tools',
    description: 'Transform your digital marketing with affordable access to industry-leading tools. Save thousands monthly while accessing Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, and 56+ more platforms.',
    siteName: 'SEOGBTools',
    images: [
      {
        url: 'https://seogbtools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEOGBTools - Premium Marketing Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEOGBTools - 60+ Premium Marketing Tools at Affordable Prices',
    description: 'Access professional marketing software at a fraction of the cost. Join 50K+ successful marketers.',
    images: ['https://seogbtools.com/twitter-image.jpg'],
    creator: '@seogbtools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://seogbtools.com',
  },
  category: 'Software',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch pages for header navigation
  const pages = await fetchAllPagesComplete();
  const simplifiedPages = pages.map(page => ({
    id: page.id,
    title: page.title.rendered,
    slug: page.slug,
  }));

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header pages={simplifiedPages} />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingChat />
        
        {/* Enhanced Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SEOGBTools',
              alternateName: 'SEO GB Tools',
              url: 'https://seogbtools.com',
              logo: 'https://seogbtools.com/logo.png',
              description: 'Professional marketing software subscription service providing affordable access to 60+ premium tools including Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, and Canva Pro.',
              foundingDate: '2020',
              email: 'support@seogbtools.com',
              telephone: '+1-520-563-6362',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              sameAs: [
                'https://facebook.com/seogbtools',
                'https://twitter.com/seogbtools',
                'https://instagram.com/seogbtools',
                'https://youtube.com/@seogbtools',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-520-563-6362',
                  contactType: 'customer support',
                  availableLanguage: ['English'],
                  areaServed: 'Worldwide',
                  contactOption: 'TollFree',
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '00:00',
                    closes: '23:59',
                  },
                },
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SEOGBTools',
              alternateName: 'SEO Group Buy Tools',
              url: 'https://seogbtools.com',
              description: 'Affordable access to premium marketing and SEO software',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://seogbtools.com/products?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Product/Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'SEO Tools Group Buy Subscription',
              description: 'Affordable subscription service providing access to 60+ premium marketing and SEO software tools',
              brand: {
                '@type': 'Brand',
                name: 'SEOGBTools',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'USD',
                lowPrice: '10',
                highPrice: '50',
                offerCount: '6',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '5000',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are your subscription rates?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Entry-level packages begin at $15 monthly with comprehensive tool access including industry-standard platforms. We offer Basic, Premium, and Complete tiers.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I access specific tools individually?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! We offer specialized packages focused on specific tool categories. Our Content Creator Package and Visual Designer Package are available at $14.99/month.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is there a trial period available?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We provide a no-risk 7-day trial period for all subscription tiers. Credit card information is not required during the trial phase.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the account activation timeframe?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Immediate activation! Your credentials arrive via email within 2-5 minutes after payment verification.',
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

