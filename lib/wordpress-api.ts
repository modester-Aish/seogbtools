import { WPPost, WPPage, WPApiResponse } from '@/types/wordpress';

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || '';
const WP_API_URL = `${WORDPRESS_BASE_URL}/wp-json/wp/v2`;
const CACHE_REVALIDATE = 3600; // 1 hour

/**
 * Fetch all WordPress posts with pagination
 */
export async function fetchAllPosts(
  page: number = 1,
  perPage: number = 12
): Promise<WPApiResponse<WPPost>> {
  try {
    console.log(`🔄 Fetching posts (page ${page})...`);
    
    const response = await fetch(
      `${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed`,
      { 
        cache: 'no-store',
        next: {
          tags: ['posts']
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('x-wp-total') || '0');
    const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');

    console.log(`✅ Fetched ${data.length} posts`);

    return {
      data: Array.isArray(data) ? data : [],
      total,
      totalPages,
    };
  } catch (error: any) {
    console.error('❌ Error fetching posts:', error.message);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}

/**
 * Fetch single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    console.log(`🔄 Fetching post: ${slug}`);
    
    const response = await fetch(
      `${WP_API_URL}/posts?slug=${slug}&_embed`,
      { 
        cache: 'no-store',
        next: {
          tags: ['posts', `post-${slug}`]
        }
      }
    );

    if (!response.ok) {
      console.log(`ℹ️ Post not found: ${slug}`);
      return null;
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      console.log(`ℹ️ Post not found: ${slug}`);
      return null;
    }
    
    console.log(`✅ Fetched post: ${data[0].title.rendered}`);
    return data[0];
  } catch (error: any) {
    console.error(`❌ Error fetching post ${slug}:`, error.message);
    return null;
  }
}

/**
 * Fetch all WordPress pages (handles pagination automatically)
 */
export async function fetchAllPagesComplete(): Promise<WPPage[]> {
  try {
    console.log('🔄 Fetching all pages from WordPress...');
    
    let allPages: WPPage[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${WP_API_URL}/pages?page=${page}&per_page=100&_embed`,
        {
          cache: 'no-store',
          next: {
            tags: ['pages']
          }
        }
      );

      if (!response.ok) {
        console.error(`❌ WordPress API error: ${response.status} ${response.statusText}`);
        break;
      }

      const data = await response.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        break;
      }
      
      allPages = [...allPages, ...data];

      const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');
      hasMore = page < totalPages;
      page++;
    }

    console.log(`✅ Successfully fetched ${allPages.length} pages`);
    return allPages;
  } catch (error: any) {
    console.error('❌ Error fetching all pages:', error.message);
    return [];
  }
}

/**
 * Fetch single page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    console.log(`🔄 Fetching page: ${slug}`);
    
    const response = await fetch(
      `${WP_API_URL}/pages?slug=${slug}&_embed`,
      { 
        cache: 'no-store',
        next: {
          tags: ['pages', `page-${slug}`]
        }
      }
    );

    if (!response.ok) {
      console.log(`ℹ️ Page not found: ${slug}`);
      return null;
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      console.log(`ℹ️ Page not found: ${slug}`);
      return null;
    }
    
    console.log(`✅ Fetched page: ${data[0].title.rendered}`);
    return data[0];
  } catch (error: any) {
    console.error(`❌ Error fetching page ${slug}:`, error.message);
    return null;
  }
}

/**
 * Fetch pages with pagination
 */
export async function fetchPages(
  page: number = 1,
  perPage: number = 20
): Promise<WPApiResponse<WPPage>> {
  try {
    const response = await fetch(
      `${WP_API_URL}/pages?page=${page}&per_page=${perPage}&_embed`,
      { 
        cache: 'no-store',
        next: {
          tags: ['pages']
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('x-wp-total') || '0');
    const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');

    console.log(`✅ Fetched page ${page} of pages (${data.length} items)`);

    return {
      data: Array.isArray(data) ? data : [],
      total,
      totalPages,
    };
  } catch (error: any) {
    console.error('❌ Error fetching pages:', error.message);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}
