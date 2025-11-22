import { Metadata } from 'next';
import { fetchAllProductsComplete } from '@/lib/woocommerce-api';
import { getCanonicalUrl } from '@/lib/canonical';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'All SEO Tools - Premium Group Buy Products | SEOGBTools',
  description: 'Browse our complete collection of 50+ premium SEO tools available through group buy subscriptions. Ahrefs, SEMrush, Moz Pro, Surfer SEO, Grammarly and more at unbeatable prices.',
  keywords: 'seo tools list, group buy products, ahrefs semrush moz, premium seo tools, cheap seo subscriptions',
  alternates: {
    canonical: getCanonicalUrl('products'),
  },
  openGraph: {
    title: 'All SEO Tools - Premium Group Buy Products | SEOGBTools',
    description: 'Browse 50+ premium SEO tools at affordable prices. Ahrefs, SEMrush, Moz Pro, Surfer SEO, Grammarly and more.',
    url: getCanonicalUrl('products'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All SEO Tools - Premium Group Buy Products | SEOGBTools',
    description: 'Browse 50+ premium SEO tools at affordable prices',
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function ProductsPage() {
  const products = await fetchAllProductsComplete();

  return <ProductsClient products={products} />;
}

