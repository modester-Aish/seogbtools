import { WPPost, WPPage, WPApiResponse } from '@/types/wordpress';

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || '';

/**
 * Fetch all WordPress posts with pagination
 */
export async function fetchAllPosts(
  page: number = 1,
  perPage: number = 12
): Promise<WPApiResponse<WPPost>> {
  try {
    const response = await fetch(
      `${WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');

    return {
      data,
      total,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
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
    const response = await fetch(
      `${WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

/**
 * Fetch all WordPress pages (handles pagination automatically)
 */
export async function fetchAllPagesComplete(): Promise<WPPage[]> {
  try {
    let allPages: WPPage[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${WORDPRESS_BASE_URL}/wp-json/wp/v2/pages?page=${page}&per_page=100&_embed`,
        { next: { revalidate: 3600 } }
      );

      if (!response.ok) {
        break;
      }

      const data = await response.json();
      allPages = [...allPages, ...data];

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      hasMore = page < totalPages;
      page++;
    }

    return allPages;
  } catch (error) {
    console.error('Error fetching all pages:', error);
    return [];
  }
}

/**
 * Fetch single page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_BASE_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
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
      `${WORDPRESS_BASE_URL}/wp-json/wp/v2/pages?page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');

    return {
      data,
      total,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching pages:', error);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}

