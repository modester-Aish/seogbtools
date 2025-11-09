import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-primary">SEO</span>GBTools
            </h3>
            <p className="text-slate-400 mb-4">
              Empowering digital marketers with professional-grade software solutions. Join our thriving community of successful online businesses.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://m.me/108606453898810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/seogbtools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/seogbtools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@seogbtools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages" className="text-slate-400 hover:text-primary transition-colors">
                  All Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Plans */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Plans</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Small Plan
                </a>
              </li>
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Ahrefs Combo
                </a>
              </li>
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Mega Plan
                </a>
              </li>
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Lite Plan
                </a>
              </li>
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Writer Plan
                </a>
              </li>
              <li>
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Designer Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-slate-400 mb-4">
              Receive exclusive deals and platform announcements directly in your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>Join Now</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} SEOGBTools. All rights reserved. | Crafted for Digital Marketing Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

