import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchProductBySlug } from '@/lib/woocommerce-api';
import { fetchPostBySlug, fetchPageBySlug } from '@/lib/wordpress-api';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/canonical';
import { cleanWordPressContent, extractPlainText, removeFirstHeading } from '@/lib/content-parser';
import { cleanPageTitle } from '@/lib/html-utils';
import ProductDetailClient from '@/components/ProductDetailClient';
import ToolDetailClient from '@/components/ToolDetailClient';
import { getToolBySlug } from '@/lib/tools-data';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;

  // Try to fetch as tool first (highest priority)
  const tool = getToolBySlug(slug);
  if (tool) {
    return {
      title: `${tool.name} - Premium SEO Tool | SEOGBTools`,
      description: tool.description.substring(0, 160),
      keywords: [tool.name, tool.category, 'seo tools', 'group buy'].join(', '),
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: `${tool.name} - Premium SEO Tool | SEOGBTools`,
        description: tool.description.substring(0, 160),
        url: getCanonicalUrl(slug),
        type: 'website',
        images: tool.image ? [{ url: tool.image.startsWith('http') ? tool.image : getCanonicalUrl(tool.image) }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${tool.name} - Premium SEO Tool | SEOGBTools`,
        description: tool.description.substring(0, 160),
        images: tool.image ? [tool.image.startsWith('http') ? tool.image : getCanonicalUrl(tool.image)] : undefined,
      },
    };
  }

  // Try to fetch as product
  const product = await fetchProductBySlug(slug);
  if (product) {
    const description = extractPlainText(product.short_description || product.description).substring(0, 160);
    const imageUrl = product.images?.[0]?.src;

    return {
      title: `${product.name} | SEOGBTools`,
      description,
      keywords: [product.name, 'group buy', 'seo tools', ...product.categories.map(cat => cat.name)].join(', '),
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: `${product.name} | SEOGBTools`,
        description,
        url: getCanonicalUrl(slug),
        type: 'website',
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.name} | SEOGBTools`,
        description,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  }

  // Try to fetch as post
  const post = await fetchPostBySlug(slug);
  if (post) {
    const description = extractPlainText(post.excerpt.rendered).substring(0, 160);
    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    return {
      title: `${post.title.rendered} | SEOGBTools`,
      description,
      keywords: 'seo blog, digital marketing, seo tips',
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: `${post.title.rendered} | SEOGBTools`,
        description,
        url: getCanonicalUrl(slug),
        type: 'article',
        images: imageUrl ? [{ url: imageUrl }] : undefined,
        publishedTime: post.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.title.rendered} | SEOGBTools`,
        description,
        images: imageUrl ? [imageUrl] : undefined,
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
      title: `${page.title.rendered} | SEOGBTools`,
      description,
      keywords: 'seo tools, group buy, pricing plans',
      alternates: {
        canonical: getCanonicalUrl(slug),
      },
      openGraph: {
        title: `${page.title.rendered} | SEOGBTools`,
        description,
        url: getCanonicalUrl(slug),
        type: 'website',
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${page.title.rendered} | SEOGBTools`,
        description,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  }

  // Not found
  return {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    alternates: {
      canonical: getCanonicalUrl(),
    },
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = params;

  // Try to fetch as tool first (highest priority)
  const tool = getToolBySlug(slug);
  if (tool) {
    return <ToolDetailClient tool={tool} />;
  }

  // Try to fetch as product
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

  // Try to fetch as post (BLOG)
  const post = await fetchPostBySlug(slug);
  if (post) {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const cleanContent = removeFirstHeading(cleanWordPressContent(post.content.rendered));
    const postTitle = cleanPageTitle(post.title.rendered);
    const postDate = new Date(post.date);
    const readTime = Math.ceil(extractPlainText(post.content.rendered).split(' ').length / 200);

    return (
      <main className="min-h-screen bg-slate-900">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Blog</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <time className="text-sm font-semibold">
                  {postDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span className="text-sm font-semibold">{readTime} min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center">
              {postTitle}
            </h1>

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={featuredImage}
                  alt={postTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1024px"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Main Article - Content Card with Gradient Border */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000"></div>
              
              {/* Content Card */}
              <div className="relative bg-slate-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 lg:p-16 border border-slate-700/50">
                <article 
                  className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none prose-invert
                    
                    /* Headings Styling */
                    prose-headings:font-extrabold prose-headings:text-white prose-headings:scroll-mt-20 prose-headings:tracking-tight
                    
                    prose-h2:text-3xl md:prose-h2:text-4xl lg:prose-h2:text-5xl 
                    prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 
                    prose-h2:border-b-2 prose-h2:border-gradient-to-r prose-h2:from-blue-500 prose-h2:to-purple-500
                    prose-h2:bg-gradient-to-r prose-h2:from-blue-400 prose-h2:to-purple-400 prose-h2:bg-clip-text prose-h2:text-transparent
                    
                    prose-h3:text-2xl md:prose-h3:text-3xl lg:prose-h3:text-4xl 
                    prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-slate-100
                    
                    prose-h4:text-xl md:prose-h4:text-2xl lg:prose-h4:text-3xl 
                    prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-slate-200
                    
                    /* Paragraph Styling */
                    prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-7
                    prose-p:text-lg md:prose-p:text-xl
                    
                    /* Link Styling */
                    prose-a:text-blue-400 prose-a:font-semibold prose-a:no-underline 
                    prose-a:decoration-blue-400/30 prose-a:transition-all
                    hover:prose-a:text-blue-300 hover:prose-a:underline 
                    prose-a:underline-offset-4 prose-a:decoration-2
                    
                    /* Strong & Emphasis */
                    prose-strong:text-white prose-strong:font-extrabold
                    prose-em:text-slate-300 prose-em:italic
                    
                    /* Lists */
                    prose-ul:my-8 prose-ul:space-y-4
                    prose-ol:my-8 prose-ol:space-y-4
                    prose-li:text-slate-300 prose-li:text-lg md:prose-li:text-xl
                    prose-li:leading-[1.8] prose-li:marker:text-blue-400 prose-li:marker:font-bold
                    
                    /* Images */
                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12 
                    prose-img:border-4 prose-img:border-slate-700/50
                    
                    /* Blockquotes */
                    prose-blockquote:border-l-[5px] prose-blockquote:border-blue-500
                    prose-blockquote:bg-gradient-to-r prose-blockquote:from-slate-700/60 prose-blockquote:to-slate-800/40
                    prose-blockquote:py-6 prose-blockquote:px-8 
                    prose-blockquote:my-10 prose-blockquote:rounded-r-2xl 
                    prose-blockquote:not-italic prose-blockquote:shadow-lg
                    prose-blockquote:text-slate-200 prose-blockquote:text-xl
                    prose-blockquote:font-medium
                    
                    /* Code */
                    prose-code:text-blue-300 prose-code:bg-slate-700/70 
                    prose-code:px-2.5 prose-code:py-1 prose-code:rounded-md 
                    prose-code:text-base prose-code:font-mono prose-code:font-semibold
                    prose-code:before:content-[''] prose-code:after:content-['']
                    prose-code:shadow-inner
                    
                    /* Pre/Code Blocks */
                    prose-pre:bg-slate-950 prose-pre:text-slate-100 
                    prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-10 
                    prose-pre:shadow-2xl prose-pre:border-2 prose-pre:border-slate-700
                    prose-pre:overflow-x-auto prose-pre:font-mono
                    
                    /* Tables */
                    prose-table:border-collapse prose-table:w-full prose-table:my-10 
                    prose-table:rounded-xl prose-table:overflow-hidden
                    prose-table:shadow-xl prose-table:border-2 prose-table:border-slate-700
                    
                    prose-thead:bg-gradient-to-r prose-thead:from-blue-600 prose-thead:to-purple-600
                    prose-thead:text-white
                    prose-th:py-4 prose-th:px-6 prose-th:text-left 
                    prose-th:font-bold prose-th:text-lg
                    
                    prose-td:py-4 prose-td:px-6 prose-td:border-t 
                    prose-td:border-slate-700 prose-td:text-slate-300
                    prose-tr:even:bg-slate-700/20 prose-tr:hover:bg-slate-700/40
                    prose-tr:transition-colors
                    
                    /* Horizontal Rule */
                    prose-hr:border-slate-700 prose-hr:my-14 prose-hr:border-t-2
                    prose-hr:opacity-50"
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
              </div>
            </div>

            {/* Social Share & Contact Section */}
            <div className="mt-12 space-y-6">
              {/* Share This Article */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 size={24} className="text-blue-400" />
                    <h3 className="text-xl font-bold text-white">Share This Article</h3>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {/* WhatsApp Share */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(postTitle + ' - ' + getCanonicalUrl(slug))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp</span>
                    </a>
                    
                    {/* Facebook Share */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCanonicalUrl(slug))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Facebook size={20} />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Help or Have Questions?</h3>
                  <p className="text-slate-300 text-lg">Get in touch with us on your preferred platform</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {/* WhatsApp Contact */}
                  <a
                    href="https://wa.me/8801883772816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-green-600/20 hover:bg-green-600/30 border-2 border-green-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="bg-green-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle size={28} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">WhatsApp</h4>
                        <p className="text-green-300 text-sm font-medium">Chat with us instantly</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Facebook Contact */}
                  <a
                    href="https://www.facebook.com/seogbtools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-blue-600/20 hover:bg-blue-600/30 border-2 border-blue-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Facebook size={28} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Facebook</h4>
                        <p className="text-blue-300 text-sm font-medium">Follow & Message us</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Supercharge Your SEO?
              </h2>
              <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Get instant access to 50+ premium SEO tools at unbeatable prices. Join thousands of satisfied customers today!
              </p>
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now →
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Try to fetch as page
  const page = await fetchPageBySlug(slug);
  if (page) {
    const featuredImage = page._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const cleanContent = removeFirstHeading(cleanWordPressContent(page.content.rendered));
    const pageTitle = cleanPageTitle(page.title.rendered);

    return (
      <main className="min-h-screen bg-slate-900">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <Link 
            href="/pages" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Pages</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center">
              {pageTitle}
            </h1>

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={featuredImage}
                  alt={pageTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1024px"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Main Content - Content Card with Gradient Border */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000"></div>
              
              {/* Content Card */}
              <div className="relative bg-slate-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 lg:p-16 border border-slate-700/50">
                <article 
                  className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none prose-invert
                    
                    /* Headings Styling */
                    prose-headings:font-extrabold prose-headings:text-white prose-headings:scroll-mt-20 prose-headings:tracking-tight
                    
                    prose-h2:text-3xl md:prose-h2:text-4xl lg:prose-h2:text-5xl 
                    prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 
                    prose-h2:border-b-2 prose-h2:border-gradient-to-r prose-h2:from-blue-500 prose-h2:to-purple-500
                    prose-h2:bg-gradient-to-r prose-h2:from-blue-400 prose-h2:to-purple-400 prose-h2:bg-clip-text prose-h2:text-transparent
                    
                    prose-h3:text-2xl md:prose-h3:text-3xl lg:prose-h3:text-4xl 
                    prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-slate-100
                    
                    prose-h4:text-xl md:prose-h4:text-2xl lg:prose-h4:text-3xl 
                    prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-slate-200
                    
                    /* Paragraph Styling */
                    prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-7
                    prose-p:text-lg md:prose-p:text-xl
                    
                    /* Link Styling */
                    prose-a:text-blue-400 prose-a:font-semibold prose-a:no-underline 
                    prose-a:decoration-blue-400/30 prose-a:transition-all
                    hover:prose-a:text-blue-300 hover:prose-a:underline 
                    prose-a:underline-offset-4 prose-a:decoration-2
                    
                    /* Strong & Emphasis */
                    prose-strong:text-white prose-strong:font-extrabold
                    prose-em:text-slate-300 prose-em:italic
                    
                    /* Lists */
                    prose-ul:my-8 prose-ul:space-y-4
                    prose-ol:my-8 prose-ol:space-y-4
                    prose-li:text-slate-300 prose-li:text-lg md:prose-li:text-xl
                    prose-li:leading-[1.8] prose-li:marker:text-blue-400 prose-li:marker:font-bold
                    
                    /* Images */
                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12 
                    prose-img:border-4 prose-img:border-slate-700/50
                    
                    /* Blockquotes */
                    prose-blockquote:border-l-[5px] prose-blockquote:border-blue-500
                    prose-blockquote:bg-gradient-to-r prose-blockquote:from-slate-700/60 prose-blockquote:to-slate-800/40
                    prose-blockquote:py-6 prose-blockquote:px-8 
                    prose-blockquote:my-10 prose-blockquote:rounded-r-2xl 
                    prose-blockquote:not-italic prose-blockquote:shadow-lg
                    prose-blockquote:text-slate-200 prose-blockquote:text-xl
                    prose-blockquote:font-medium
                    
                    /* Code */
                    prose-code:text-blue-300 prose-code:bg-slate-700/70 
                    prose-code:px-2.5 prose-code:py-1 prose-code:rounded-md 
                    prose-code:text-base prose-code:font-mono prose-code:font-semibold
                    prose-code:before:content-[''] prose-code:after:content-['']
                    prose-code:shadow-inner
                    
                    /* Pre/Code Blocks */
                    prose-pre:bg-slate-950 prose-pre:text-slate-100 
                    prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-10 
                    prose-pre:shadow-2xl prose-pre:border-2 prose-pre:border-slate-700
                    prose-pre:overflow-x-auto prose-pre:font-mono
                    
                    /* Tables */
                    prose-table:border-collapse prose-table:w-full prose-table:my-10 
                    prose-table:rounded-xl prose-table:overflow-hidden
                    prose-table:shadow-xl prose-table:border-2 prose-table:border-slate-700
                    
                    prose-thead:bg-gradient-to-r prose-thead:from-blue-600 prose-thead:to-purple-600
                    prose-thead:text-white
                    prose-th:py-4 prose-th:px-6 prose-th:text-left 
                    prose-th:font-bold prose-th:text-lg
                    
                    prose-td:py-4 prose-td:px-6 prose-td:border-t 
                    prose-td:border-slate-700 prose-td:text-slate-300
                    prose-tr:even:bg-slate-700/20 prose-tr:hover:bg-slate-700/40
                    prose-tr:transition-colors
                    
                    /* Horizontal Rule */
                    prose-hr:border-slate-700 prose-hr:my-14 prose-hr:border-t-2
                    prose-hr:opacity-50"
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
              </div>
            </div>

            {/* Social Share & Contact Section */}
            <div className="mt-12 space-y-6">
              {/* Share This Page */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 size={24} className="text-blue-400" />
                    <h3 className="text-xl font-bold text-white">Share This Page</h3>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {/* WhatsApp Share */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(pageTitle + ' - ' + getCanonicalUrl(slug))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp</span>
                    </a>
                    
                    {/* Facebook Share */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCanonicalUrl(slug))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Facebook size={20} />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Help or Have Questions?</h3>
                  <p className="text-slate-300 text-lg">Get in touch with us on your preferred platform</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {/* WhatsApp Contact */}
                  <a
                    href="https://wa.me/8801883772816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-green-600/20 hover:bg-green-600/30 border-2 border-green-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="bg-green-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle size={28} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">WhatsApp</h4>
                        <p className="text-green-300 text-sm font-medium">Chat with us instantly</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Facebook Contact */}
                  <a
                    href="https://www.facebook.com/seogbtools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-blue-600/20 hover:bg-blue-600/30 border-2 border-blue-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Facebook size={28} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Facebook</h4>
                        <p className="text-blue-300 text-sm font-medium">Follow & Message us</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your SEO Journey Today
              </h2>
              <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join 50,000+ satisfied customers and get instant access to premium SEO tools at group buy prices!
              </p>
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Sign Up Now →
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // If nothing found, show 404
  notFound();
}
