import { WCProduct, WCCategory, WPApiResponse } from '@/types/wordpress';

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || '';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';
const CACHE_REVALIDATE = 3600; // 1 hour

/**
 * Create WooCommerce API URL with authentication
 */
function getWooCommerceUrl(endpoint: string, params: Record<string, any> = {}): string {
  const url = new URL(`${WORDPRESS_BASE_URL}/wp-json/wc/v3/${endpoint}`);
  
  // Add authentication via query parameters (works with Next.js fetch caching)
  url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
  url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
  
  // Add additional parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  });
  
  return url.toString();
}

/**
 * Fetch all WooCommerce products (handles pagination automatically)
 */
export async function fetchAllProductsComplete(): Promise<WCProduct[]> {
  try {
    console.log('🔄 Fetching all products from WooCommerce...');
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
        cache: 'no-store',
        next: {
          tags: ['products']
        },
      });

      if (!response.ok) {
        console.error(`❌ WooCommerce API error: ${response.status} ${response.statusText}`);
        break;
      }

      const data = await response.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        break;
      }
      
      allProducts = [...allProducts, ...data];

      const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');
      hasMore = page < totalPages;
      page++;
    }

    console.log(`✅ Successfully fetched ${allProducts.length} products`);
    return allProducts;
  } catch (error: any) {
    console.error('❌ Error fetching all products:', error.message);
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
      cache: 'no-store',
      next: {
        tags: ['products']
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('x-wp-total') || '0');
    const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');

    console.log(`✅ Fetched page ${page} of products (${data.length} items)`);

    return {
      data: Array.isArray(data) ? data : [],
      total,
      totalPages,
    };
  } catch (error: any) {
    console.error('❌ Error fetching products:', error.message);
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
      cache: 'no-store',
      next: {
        tags: ['products', `product-${slug}`]
      },
    });

    if (!response.ok) {
      console.log(`ℹ️ Product not found: ${slug}`);
      return null;
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      console.log(`ℹ️ Product not found: ${slug}`);
      return null;
    }

    console.log(`✅ Fetched product: ${data[0].name}`);
    return data[0];
  } catch (error: any) {
    console.error(`❌ Error fetching product ${slug}:`, error.message);
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
      cache: 'no-store',
      next: {
        tags: ['categories']
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Fetched ${data.length} product categories`);
    
    return Array.isArray(data) ? data : [];
  } catch (error: any) {
    console.error('❌ Error fetching categories:', error.message);
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
      cache: 'no-store',
      next: {
        tags: ['products', `category-${categoryId}`]
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products by category: ${response.statusText}`);
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('x-wp-total') || '0');
    const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '1');

    console.log(`✅ Fetched products for category ${categoryId} (${data.length} items)`);

    return {
      data: Array.isArray(data) ? data : [],
      total,
      totalPages,
    };
  } catch (error: any) {
    console.error(`❌ Error fetching products by category ${categoryId}:`, error.message);
    return {
      data: [],
      total: 0,
      totalPages: 0,
    };
  }
}
