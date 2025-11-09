import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fetchAllPagesComplete } from '@/lib/wordpress-api';
import { getCanonicalUrl } from '@/lib/canonical';
import { cleanWordPressContent, extractPlainText } from '@/lib/content-parser';

export const metadata: Metadata = {
  title: 'All Pages - Complete Site Directory',
  description: 'Browse all pages on SEOGBTools including pricing plans, tool information, guides, and more.',
  keywords: 'site pages, pricing plans, seo tools info, guides',
  alternates: {
    canonical: getCanonicalUrl('pages'),
  },
  openGraph: {
    title: 'All Pages - Complete Site Directory',
    description: 'Browse all pages on SEOGBTools',
    url: getCanonicalUrl('pages'),
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function PagesListPage() {
  const pages = await fetchAllPagesComplete();

  const iconColors = [
    'bg-purple-500',
    'bg-primary',
    'bg-orange-500',
    'bg-blue-500',
    'bg-pink-500',
    'bg-green-500',
  ];

  return (
    <div className="min-h-screen bg-[#d4e9f7] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Explore all our pages
          </h1>
        </div>

        {/* Pages Grid */}
        {pages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pages.map((page, idx) => {
              const featuredImage = page._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const excerpt = page.excerpt?.rendered 
                ? extractPlainText(cleanWordPressContent(page.excerpt.rendered))
                : extractPlainText(page.content.rendered).substring(0, 150);
              const iconColor = iconColors[idx % iconColors.length];

              return (
                <Link
                  key={page.id}
                  href={`/${page.slug}`}
                  className="bg-[#faf9f7] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col min-h-[380px] group"
                >
                  {/* Logo/Icon or Featured Image */}
                  <div className="mb-6">
                    {featuredImage ? (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={page.title.rendered}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 ${iconColor} rounded-lg flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white">
                          {page.title.rendered.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {page.title.rendered}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 line-clamp-4">
                    {excerpt}
                  </p>

                  {/* View Page Link */}
                  <div className="mt-auto">
                    <span className="text-slate-900 font-medium group-hover:text-primary transition-colors inline-flex items-center">
                      View page 
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-700 text-xl">No pages found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

