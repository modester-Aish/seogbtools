import { Metadata } from 'next';
import ModernHero from '@/components/ModernHero';
import { WhyChooseSection, TestimonialsSection, HowToOrderSection } from '@/components/AnimatedSections';
import PopularToolsSection from '@/components/PopularToolsSection';
import PricingPlansSection from '@/components/PricingPlansSection';
import FAQSection from '@/components/FAQSection';
import { getCanonicalUrl } from '@/lib/canonical';

export const metadata: Metadata = {
  title: 'SEOGBTools - Affordable Premium Marketing & SEO Software | Ahrefs, SEMrush, Moz Pro',
  description: 'Access 60+ professional marketing tools including Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, Canva Pro at affordable subscription rates. Trusted by 50,000+ marketers. Instant activation, 24/7 support, 99.9% uptime. Start saving thousands today.',
  keywords: 'seo tools subscription, affordable seo software, ahrefs affordable access, semrush discount, moz pro subscription, digital marketing tools, content marketing software, keyword research tools, backlink checker, rank tracking software, chatgpt plus subscription, canva pro access, ai writing tools, graphic design software, marketing automation platform, seo analysis tools, competitor research software, professional marketing tools 2025',
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    title: 'SEOGBTools - Professional Marketing Software | 60+ Premium Tools',
    description: 'Transform your digital marketing with affordable access to industry-leading software. Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, Canva Pro & 55+ more tools. Save thousands monthly.',
    url: getCanonicalUrl(),
    type: 'website',
    images: [
      {
        url: 'https://seogbtools.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'SEOGBTools - Affordable Premium Marketing Tools Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEOGBTools - 60+ Marketing Tools at Affordable Prices',
    description: 'Professional marketing software subscription. Ahrefs, SEMrush, ChatGPT Plus & more.',
    images: ['https://seogbtools.com/og-home.jpg'],
  },
};

export const revalidate = 21600; // Revalidate every 6 hours

export default function HomePage() {
  return (
    <>
      {/* Homepage Structured Data - Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Software Subscription Service',
            name: 'Premium Marketing & SEO Tools Subscription',
            description: 'Affordable access to 60+ professional marketing and SEO software platforms',
            provider: {
              '@type': 'Organization',
              name: 'SEOGBTools',
              url: 'https://seogbtools.com',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Marketing Tools Subscription Plans',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Small Plan - SEO Tools Package',
                  },
                  price: '15',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Ahrefs Combo - Premium SEO Suite',
                  },
                  price: '25',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Mega Plan - Complete Marketing Toolkit',
                  },
                  price: '50',
                  priceCurrency: 'USD',
                },
              ],
            },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '10',
              highPrice: '50',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* Semantic HTML Structure */}
      <article itemScope itemType="https://schema.org/WebPage">
        <ModernHero />
        <WhyChooseSection />
        <PopularToolsSection />
        <PricingPlansSection />
        <TestimonialsSection />
        <HowToOrderSection />
        <FAQSection />
      </article>
    </>
  );
}

