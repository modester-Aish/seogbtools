# WordPress/WooCommerce Integration Guide

## Overview
This Next.js application is fully integrated with WordPress and WooCommerce APIs to dynamically fetch and display content.

## Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# WordPress/WooCommerce Configuration
WORDPRESS_BASE_URL=https://app.seogbtools.com
WC_CONSUMER_KEY=ck_fad47db227d25ee887362c1cc5d656a34d6671ac
WC_CONSUMER_SECRET=cs_bea750f61d3424613ee985da5172e94e38e38338

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://seogbtools.com
```

## Features Implemented

### 1. **Products Integration** (`/products`)
- **File**: `app/products/page.tsx`
- **API**: WooCommerce REST API v3
- **Features**:
  - Fetches all products from WooCommerce
  - Search functionality
  - Pagination (20 products per page)
  - Category filtering
  - Real-time product data

### 2. **Product Detail Pages** (`/[slug]`)
- **File**: `app/[slug]/page.tsx`
- **Features**:
  - Dynamic product pages
  - Product schema markup for SEO
  - Related products
  - Pricing and availability
  - "Add to Cart" functionality

### 3. **Blog/Posts** (`/blog`)
- **File**: `app/blog/page.tsx`
- **API**: WordPress REST API v2
- **Features**:
  - Fetches latest blog posts
  - Featured images
  - Post excerpts
  - Pagination
  - Clean, card-based layout

### 4. **Blog Post Detail** (`/[slug]`)
- **Features**:
  - Full post content
  - Featured image
  - Formatted date
  - Clean typography with prose styling
  - CTA section

### 5. **WordPress Pages** (`/pages`)
- **File**: `app/pages/page.tsx`
- **Features**:
  - Lists all WordPress pages
  - Featured images
  - Page excerpts
  - Custom icons based on first letter

### 6. **Individual Page Display** (`/[slug]`)
- **Features**:
  - Full page content
  - Featured images
  - Clean layout
  - CTA sections

## API Files Structure

### WooCommerce API (`lib/woocommerce-api.ts`)
- `fetchAllProductsComplete()` - Fetch all products (handles pagination automatically)
- `fetchAllProducts(page, perPage)` - Fetch products with pagination
- `fetchProductBySlug(slug)` - Fetch single product by slug
- `fetchCategories()` - Fetch product categories
- `fetchProductsByCategory(categoryId, page, perPage)` - Fetch products by category

### WordPress API (`lib/wordpress-api.ts`)
- `fetchAllPosts(page, perPage)` - Fetch blog posts with pagination
- `fetchPostBySlug(slug)` - Fetch single post by slug
- `fetchAllPagesComplete()` - Fetch all pages (handles pagination automatically)
- `fetchPageBySlug(slug)` - Fetch single page by slug
- `fetchPages(page, perPage)` - Fetch pages with pagination

## Dynamic Routing

The `app/[slug]/page.tsx` file handles three types of content automatically:

1. **Products** - Checks WooCommerce first
2. **Blog Posts** - Checks WordPress posts second
3. **Pages** - Checks WordPress pages third
4. **404** - Returns not found if none match

## Caching Strategy

All API calls use Next.js 14's built-in caching:
```typescript
export const revalidate = 3600; // Revalidate every hour (3600 seconds)
```

This ensures:
- Fast page loads
- Fresh content every hour
- Reduced API calls
- Better performance

## SEO Features

### Meta Tags
- Dynamic title and description for each page
- Keywords based on content
- Canonical URLs
- Open Graph tags
- Twitter Card tags

### Schema Markup
- Product schema for e-commerce
- Breadcrumb schema
- Article schema for blog posts
- Organization schema

## Content Parsing

The `lib/content-parser.ts` utility provides:
- `cleanWordPressContent()` - Cleans WordPress HTML
- `extractPlainText()` - Extracts plain text from HTML

## Testing the Integration

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Test URLs**:
   - Products: http://localhost:3000/products
   - Blog: http://localhost:3000/blog
   - Pages: http://localhost:3000/pages
   - Individual product: http://localhost:3000/[product-slug]
   - Individual post: http://localhost:3000/[post-slug]
   - Individual page: http://localhost:3000/[page-slug]

3. **Verify API Connection**:
   - Check browser console for errors
   - Verify products are loading
   - Check that images display correctly
   - Test search and pagination

## Deployment

### Coolify/Production Setup

1. Add environment variables in Coolify dashboard:
   ```
   WORDPRESS_BASE_URL=https://app.seogbtools.com
   WC_CONSUMER_KEY=ck_fad47db227d25ee887362c1cc5d656a34d6671ac
   WC_CONSUMER_SECRET=cs_bea750f61d3424613ee985da5172e94e38e38338
   NEXT_PUBLIC_SITE_URL=https://seogbtools.com
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm start
   ```

## Security Notes

- ⚠️ **Never commit `.env.local`** to Git (already in `.gitignore`)
- WooCommerce credentials use OAuth1.0a authentication
- All API calls are server-side only
- Consumer keys are never exposed to the client

## Troubleshooting

### Products Not Loading
1. Verify `WORDPRESS_BASE_URL` is correct
2. Check WooCommerce API is enabled in WordPress admin
3. Verify consumer key and secret are correct
4. Check WordPress site allows REST API access

### Posts/Pages Not Loading
1. Verify WordPress REST API is accessible
2. Check `WORDPRESS_BASE_URL` ends without trailing slash
3. Verify posts/pages are published (not draft)

### Images Not Displaying
1. Check WordPress media URLs are accessible
2. Verify CORS settings on WordPress
3. Check Next.js `images.domains` in `next.config.js`

## Future Enhancements

- [ ] Add cart functionality
- [ ] User authentication with WordPress
- [ ] Comments integration
- [ ] Real-time stock updates
- [ ] Advanced filtering (price range, ratings)
- [ ] Wishlist functionality

## Support

For issues or questions, check:
- WooCommerce REST API docs: https://woocommerce.github.io/woocommerce-rest-api-docs/
- WordPress REST API docs: https://developer.wordpress.org/rest-api/

---

**Last Updated**: November 11, 2025
**Version**: 1.0.0

