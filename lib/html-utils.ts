/**
 * HTML Utilities for decoding HTML entities and cleaning titles
 */

/**
 * Decode HTML entities to readable text
 * Handles both numeric (&#8211;) and named (&amp;) entities
 */
export function decodeHtmlEntities(text: string): string {
  if (typeof window !== 'undefined') {
    // Client-side decoding using browser API
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  // Server-side decoding
  return text
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(parseInt(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&#8211;/g, '-')   // en dash
    .replace(/&#8212;/g, '—')   // em dash
    .replace(/&#8216;/g, "'")   // left single quote
    .replace(/&#8217;/g, "'")   // right single quote
    .replace(/&#8220;/g, '"')   // left double quote
    .replace(/&#8221;/g, '"')   // right double quote
    .replace(/&#8230;/g, '...') // ellipsis
    .replace(/&#038;/g, '&')    // ampersand
    .replace(/&ndash;/g, '-')   // en dash (named)
    .replace(/&mdash;/g, '—')   // em dash (named)
    .replace(/&nbsp;/g, ' ')    // non-breaking space
    .replace(/&hellip;/g, '...'); // ellipsis (named)
}

/**
 * Clean page/post title by removing HTML tags and decoding entities
 */
export function cleanPageTitle(title: string): string {
  if (!title) return '';
  
  let cleanTitle = decodeHtmlEntities(title);
  cleanTitle = cleanTitle.replace(/<[^>]*>/g, ''); // Remove HTML tags
  return cleanTitle.trim();
}

/**
 * Get clean title from WordPress object
 */
export function getTitle(item: any): string {
  if (!item) return '';
  
  const rawTitle = item.title?.rendered || item.name || '';
  return cleanPageTitle(rawTitle);
}

/**
 * Get clean excerpt from WordPress object
 */
export function getExcerpt(item: any): string {
  if (!item) return '';
  
  let excerpt = '';
  
  if (item.excerpt?.rendered) {
    excerpt = item.excerpt.rendered;
  } else if (item.short_description) {
    excerpt = item.short_description;
  } else if (item.description) {
    excerpt = item.description;
  } else if (item.content?.rendered) {
    excerpt = item.content.rendered.substring(0, 160);
  }
  
  // Remove HTML tags
  excerpt = excerpt.replace(/<[^>]*>/g, '');
  // Decode entities
  excerpt = decodeHtmlEntities(excerpt);
  // Trim and limit length
  excerpt = excerpt.trim().substring(0, 160);
  
  return excerpt;
}

/**
 * Get featured image URL from WordPress object
 */
export function getFeaturedImage(item: any): string | null {
  if (!item) return null;
  
  // For products
  if (item.images && item.images.length > 0) {
    return item.images[0].src;
  }
  
  // For posts/pages with _embedded
  if (item._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return item._embedded['wp:featuredmedia'][0].source_url;
  }
  
  return null;
}

