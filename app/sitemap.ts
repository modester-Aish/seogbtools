import { MetadataRoute } from 'next';
import { fetchAllProductsComplete } from '@/lib/woocommerce-api';
import { fetchAllPagesComplete } from '@/lib/wordpress-api';
import { getCanonicalUrl } from '@/lib/canonical';
import { getAllTools } from '@/lib/tools-data';

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || '';
const WP_API_URL = `${WORDPRESS_BASE_URL}/wp-json/wp/v2`;

// Force dynamic generation - sitemap will update on every request
// This means when you add new content in WordPress, sitemap will update immediately
export const dynamic = 'force-dynamic';

/**
 * Fetch all WordPress posts (handles pagination automatically)
 */
async function fetchAllPostsComplete() {
  try {
    let allPosts: any[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${WP_API_URL}/posts?page=${page}&per_page=100&status=publish`,
        {
          cache: 'no-store',
        }
      );

      if (!response.ok) {
        break;
      }

      const data = await response.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        break;
      }
      
      allPosts = [...allPosts, ...data];

      const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');
      hasMore = page < totalPages;
      page++;
    }

    return allPosts;
  } catch (error: any) {
    console.error('❌ Error fetching all posts for sitemap:', error.message);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Frontend site URL - seogbtools.com (NOT WordPress backend)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seogbtools.com';
  
  // Static routes - All URLs are frontend URLs (seogbtools.com)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // https://seogbtools.com
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('products'), // https://seogbtools.com/products
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('blog'), // https://seogbtools.com/blog
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('pages'), // https://seogbtools.com/pages
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Get static tools data
  const tools = getAllTools();

  // Fetch dynamic content
  let products: any[] = [];
  let posts: any[] = [];
  let pages: any[] = [];

  try {
    console.log('🔄 Generating sitemap...');
    
    // Fetch all products, posts, and pages in parallel
    [products, posts, pages] = await Promise.all([
      fetchAllProductsComplete(),
      fetchAllPostsComplete(),
      fetchAllPagesComplete(),
    ]);

    console.log(`✅ Sitemap data: ${tools.length} tools, ${products.length} products, ${posts.length} posts, ${pages.length} pages`);
  } catch (error: any) {
    console.error('❌ Error fetching sitemap data:', error.message);
  }

  // Tool routes - All frontend URLs (seogbtools.com/tool-slug)
  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: getCanonicalUrl(tool.slug), // https://seogbtools.com/tool-slug
    lastModified: new Date(), // Static tools, so use current date
    changeFrequency: 'monthly' as const,
    priority: 0.85, // Higher priority than posts/pages, slightly lower than products
  }));

  // Product routes - All frontend URLs (seogbtools.com/product-slug)
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: getCanonicalUrl(product.slug), // https://seogbtools.com/product-slug
    lastModified: product.date_modified ? new Date(product.date_modified) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog post routes - All frontend URLs (seogbtools.com/post-slug)
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getCanonicalUrl(post.slug), // https://seogbtools.com/post-slug
    lastModified: post.modified ? new Date(post.modified) : new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Page routes - All frontend URLs (seogbtools.com/page-slug)
  const pageRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: getCanonicalUrl(page.slug), // https://seogbtools.com/page-slug
    lastModified: page.modified ? new Date(page.modified) : new Date(page.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Combine all routes into ONE XML file
  // Next.js automatically generates /sitemap.xml with all these URLs
  return [...staticRoutes, ...toolRoutes, ...productRoutes, ...postRoutes, ...pageRoutes];
}
