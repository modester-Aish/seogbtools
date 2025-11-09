import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <Link
            href="/products"
            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-700"
          >
            <Search size={20} />
            <span>Browse Products</span>
          </Link>
        </div>

        {/* Suggested Links */}
        <div className="mt-12">
          <p className="text-slate-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/products" className="text-primary hover:underline">Products</Link>
            <span className="text-slate-600">•</span>
            <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            <span className="text-slate-600">•</span>
            <Link href="/pages" className="text-primary hover:underline">All Pages</Link>
            <span className="text-slate-600">•</span>
            <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

