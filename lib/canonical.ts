/**
 * Generate canonical URL for SEO
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seogbtools.com';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Combine base URL with path
  const url = cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
  
  return url;
}

/**
 * Generate OpenGraph image URL
 */
export function getOgImageUrl(imagePath?: string): string {
  if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
    return imagePath;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seogbtools.com';
  return `${baseUrl}/og-image.jpg`;
}

