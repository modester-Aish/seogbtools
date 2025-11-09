import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://seogbtools.com';
  
  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/products',
    '/pages',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Tool categories (for better SEO)
  const toolCategories = [
    '/seo-tools',
    '/ai-writing-tools',
    '/design-tools',
    '/marketing-automation',
    '/analytics-tools',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...toolCategories];
}

