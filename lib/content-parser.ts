import { decodeHtmlEntities } from './html-utils';

/**
 * Clean WordPress content from shortcodes and unwanted HTML
 */
export function cleanWordPressContent(content: string): string {
  if (!content) return '';

  let cleaned = content;

  // Remove all shortcodes like [shortcode] or [shortcode attr="value"]
  // This catches nested shortcodes and complex patterns
  cleaned = cleaned.replace(/\[[\s\S]*?\]/g, '');
  
  // Remove Divi Builder shortcodes (backup)
  cleaned = cleaned.replace(/\[et_pb_[^\]]*\]/g, '');
  
  // Remove Elementor shortcodes (backup)
  cleaned = cleaned.replace(/\[elementor-[^\]]*\]/g, '');
  
  // Remove WPBakery shortcodes (backup)
  cleaned = cleaned.replace(/\[vc_[^\]]*\]/g, '');
  
  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, '');
  cleaned = cleaned.replace(/<p>&nbsp;<\/p>/g, '');
  cleaned = cleaned.replace(/<p><br\s*\/?><\/p>/g, '');
  
  // Remove excessive whitespace
  cleaned = cleaned.replace(/\s{2,}/g, ' ');
  
  // Clean up HTML attributes (data-* attributes from page builders)
  cleaned = cleaned.replace(/\s+data-[a-z-]+="[^"]*"/gi, '');
  
  // Remove inline styles that page builders add
  cleaned = cleaned.replace(/\s+style="[^"]*"/gi, '');
  
  // Remove empty divs and spans
  cleaned = cleaned.replace(/<(div|span)[^>]*>\s*<\/\1>/gi, '');
  
  return cleaned.trim();
}

/**
 * Extract plain text from HTML content
 */
export function extractPlainText(html: string): string {
  if (!html) return '';
  
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Decode HTML entities using html-utils
  text = decodeHtmlEntities(text);
  
  // Remove excessive whitespace
  text = text.replace(/\s{2,}/g, ' ');
  text = text.replace(/\n{2,}/g, '\n');
  
  return text.trim();
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 160): string {
  if (!text || text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = extractPlainText(content);
  return truncateText(plainText, maxLength);
}

/**
 * Remove first heading (H1-H3) from content to avoid duplicate titles
 */
export function removeFirstHeading(content: string): string {
  if (!content) return '';
  
  // Remove first H1, H2, or H3 tag (case insensitive)
  return content.replace(/<h[1-3][^>]*>.*?<\/h[1-3]>/i, '');
}

