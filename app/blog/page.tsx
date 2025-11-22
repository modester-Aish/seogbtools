import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fetchAllPosts } from '@/lib/wordpress-api';
import { getCanonicalUrl } from '@/lib/canonical';
import { cleanWordPressContent, extractPlainText } from '@/lib/content-parser';

export const metadata: Metadata = {
  title: 'SEO Blog - Tips, Guides & Latest Updates | SEOGBTools',
  description: 'Read our latest blog posts about SEO strategies, tool tutorials, digital marketing tips, and industry updates. Learn how to improve your search rankings.',
  keywords: 'seo blog, seo tips, digital marketing, seo guides, search engine optimization',
  alternates: {
    canonical: getCanonicalUrl('blog'),
  },
  openGraph: {
    title: 'SEO Blog - Tips, Guides & Latest Updates | SEOGBTools',
    description: 'Latest SEO tips and digital marketing insights. Learn SEO strategies, tool tutorials, and industry updates.',
    url: getCanonicalUrl('blog'),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Blog - Tips, Guides & Latest Updates | SEOGBTools',
    description: 'Latest SEO tips and digital marketing insights',
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const { data: posts } = await fetchAllPosts(1, 12);

  return (
    <div className="min-h-screen bg-[#d4e9f7] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            SEOGBTools in the media
          </h1>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {posts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const excerpt = extractPlainText(cleanWordPressContent(post.excerpt.rendered));

              return (
                <Link
                  key={post.id}
                  href={`/${post.slug}`}
                  className="bg-[#faf9f7] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col min-h-[400px] group"
                >
                  {/* Logo/Icon or Featured Image */}
                  <div className="mb-6">
                    {featuredImage ? (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={post.title.rendered}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {post.title.rendered.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                    {post.title.rendered}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 line-clamp-4">
                    {excerpt}
                  </p>

                  {/* Read Post Link */}
                  <div className="mt-auto">
                    <span className="text-slate-900 font-medium group-hover:text-primary transition-colors inline-flex items-center">
                      Read post 
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
            <p className="text-slate-700 text-xl">No blog posts found.</p>
          </div>
        )}

        {/* Load More Section (Optional) */}
        {posts.length >= 12 && (
          <div className="text-center mt-12">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

