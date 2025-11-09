/**
 * Clean WordPress content from shortcodes and unwanted HTML
 */
export function cleanWordPressContent(content: string): string {
  if (!content) return '';

  let cleaned = content;

  // Remove Divi Builder shortcodes
  cleaned = cleaned.replace(/\[et_pb_[^\]]*\]/g, '');
  
  // Remove Elementor shortcodes
  cleaned = cleaned.replace(/\[elementor-[^\]]*\]/g, '');
  
  // Remove WPBakery shortcodes
  cleaned = cleaned.replace(/\[vc_[^\]]*\]/g, '');
  
  // Remove common shortcodes
  cleaned = cleaned.replace(/\[\/?[a-zA-Z0-9_-]+[^\]]*\]/g, '');
  
  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, '');
  cleaned = cleaned.replace(/<p>&nbsp;<\/p>/g, '');
  
  // Remove excessive whitespace
  cleaned = cleaned.replace(/\s{2,}/g, ' ');
  
  // Clean up HTML attributes (data-* attributes from page builders)
  cleaned = cleaned.replace(/\s+data-[a-z-]+="[^"]*"/gi, '');
  
  return cleaned.trim();
}

/**
 * Extract plain text from HTML content
 */
export function extractPlainText(html: string): string {
  if (!html) return '';
  
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Decode HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#039;/g, "'");
  
  // Remove excessive whitespace
  text = text.replace(/\s{2,}/g, ' ');
  
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

