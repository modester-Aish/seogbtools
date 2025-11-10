import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchProductBySlug } from '@/lib/woocommerce-api';
import { fetchPostBySlug, fetchPageBySlug } from '@/lib/wordpress-api';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/canonical';
import { cleanWordPressContent, extractPlainText } from '@/lib/content-parser';
import ProductDetailClient from '@/components/ProductDetailClient';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;

  // Try to fetch as product first
  const product = await fetchProductBySlug(slug);
  if (product) {
    const description = extractPlainText(product.short_description || product.description).substring(0, 160);
    const imageUrl = product.images?.[0]?.src;

    return {
      title: product.name,
      description,
      keywords: [product.name, 'group buy', 'seo tools', ...product.categories.map(cat => cat.name)].join(', '),
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: product.name,
        description,
        url: getCanonicalUrl(slug),
        type: 'website',
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      },
    };
  }

  // Try to fetch as post
  const post = await fetchPostBySlug(slug);
  if (post) {
    const description = extractPlainText(post.excerpt.rendered).substring(0, 160);
    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    return {
      title: post.title.rendered,
      description,
      keywords: 'seo blog, digital marketing, seo tips',
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: post.title.rendered,
        description,
        url: getCanonicalUrl(slug),
        type: 'article',
        images: imageUrl ? [{ url: imageUrl }] : undefined,
        publishedTime: post.date,
      },
    };
  }

  // Try to fetch as page
  const page = await fetchPageBySlug(slug);
  if (page) {
    const description = page.excerpt?.rendered 
      ? extractPlainText(page.excerpt.rendered).substring(0, 160)
      : extractPlainText(page.content.rendered).substring(0, 160);
    const imageUrl = page._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    return {
      title: page.title.rendered,
      description,
      keywords: 'seo tools, group buy, pricing plans',
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: page.title.rendered,
        description,
        url: getCanonicalUrl(slug),
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      },
    };
  }

  // Not found
  return {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = params;

  // Try to fetch as product first
  const product = await fetchProductBySlug(slug);
  if (product) {
    // Fetch related products (from same category or random)
    const relatedProducts: any[] = []; // You can implement fetchRelatedProducts if needed

    // Product Schema
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: extractPlainText(product.short_description || product.description),
      image: product.images?.[0]?.src,
      brand: {
        '@type': 'Brand',
        name: 'SEOGBTools',
      },
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        availability: product.stock_status === 'instock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        url: getCanonicalUrl(slug),
      },
      aggregateRating: parseFloat(product.average_rating) > 0 ? {
        '@type': 'AggregateRating',
        ratingValue: product.average_rating,
        reviewCount: product.rating_count,
      } : undefined,
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: getCanonicalUrl(),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: getCanonicalUrl('products'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: getCanonicalUrl(slug),
        },
      ],
    };

    return (
      <>
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
        
        {/* Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </>
    );
  }

  // Try to fetch as post
  const post = await fetchPostBySlug(slug);
  if (post) {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const cleanContent = cleanWordPressContent(post.content.rendered);

    return (
      <div className="min-h-screen bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative h-96 bg-slate-800 rounded-xl overflow-hidden mb-8">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            )}

            {/* Post Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title.rendered}
              </h1>
              <div className="flex items-center space-x-4 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl p-8 border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-300 mb-6">Access 50+ premium SEO tools at affordable prices</p>
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Try to fetch as page
  const page = await fetchPageBySlug(slug);
  if (page) {
    const featuredImage = page._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const cleanContent = cleanWordPressContent(page.content.rendered);

    return (
      <div className="min-h-screen bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/pages"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Pages</span>
            </Link>

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative h-80 bg-slate-800 rounded-xl overflow-hidden mb-8">
                <Image
                  src={featuredImage}
                  alt={page.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>
            )}

            {/* Page Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {page.title.rendered}
            </h1>

            {/* Page Content */}
            <div 
              className="prose prose-invert max-w-none bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl p-8 border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Get Instant Access</h3>
              <p className="text-slate-300 mb-6">Join 50,000+ satisfied customers today</p>
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If nothing found, show 404
  notFound();
}

