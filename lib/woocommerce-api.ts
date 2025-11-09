import { WCProduct, WCCategory, WPApiResponse } from '@/types/wordpress';

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || '';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

/**
 * Create WooCommerce API URL with authentication
 */
function getWooCommerceUrl(endpoint: string, params: Record<string, any> = {}): string {
  const url = new URL(`${WORDPRESS_BASE_URL}/wp-json/wc/v3/${endpoint}`);
  
  // Add authentication
  url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
  url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
  
  // Add additional parameters
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });
  
  return url.toString();
}

/**
 * Fetch all WooCommerce products (handles pagination automatically)
 */
export async function fetchAllProductsComplete(): Promise<WCProduct[]> {
  try {
    let allProducts: WCProduct[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const url = getWooCommerceUrl('products', {
        page,
        per_page: 100,
        status: 'publish',
      });

      const response = await fetch(url, {
        next: { revalidate: 3600 },
      });

      if (!response.ok) {
        break;
      }

      const data = await response.json();
      allProducts = [...allProducts, ...data];

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      hasMore = page < totalPages;
      page++;
    }

    return allProducts;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
}

/**
 * Fetch products with pagination
 */
export async function fetchAllProducts(
  page: number = 1,
  perPage: number = 20
): Promise<WPApiResponse<WCProduct>> {
  try {
    const url = getWooCommerceUrl('products', {
      page,
      per_page: perPage,
      status: 'publish',
    });

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
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
    console.error('Error fetching products:', error);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}

/**
 * Fetch single product by slug
 */
export async function fetchProductBySlug(slug: string): Promise<WCProduct | null> {
  try {
    const url = getWooCommerceUrl('products', {
      slug,
      status: 'publish',
    });

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

/**
 * Fetch product categories
 */
export async function fetchCategories(): Promise<WCCategory[]> {
  try {
    const url = getWooCommerceUrl('products/categories', {
      per_page: 100,
    });

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(
  categoryId: number,
  page: number = 1,
  perPage: number = 20
): Promise<WPApiResponse<WCProduct>> {
  try {
    const url = getWooCommerceUrl('products', {
      category: categoryId,
      page,
      per_page: perPage,
      status: 'publish',
    });

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products by category: ${response.statusText}`);
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
    console.error('Error fetching products by category:', error);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}

