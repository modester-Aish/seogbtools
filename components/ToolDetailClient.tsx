'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { Tool } from '@/lib/tools-data';

interface ToolDetailClientProps {
  tool: Tool;
}

export default function ToolDetailClient({ tool }: ToolDetailClientProps) {
  const [quantity, setQuantity] = useState(1);

  // Generate Buy Now URL with product ID from Google Sheet
  const getBuyNowUrl = () => {
    if (tool.productId) {
      return `https://members.seotoolsgroupbuy.us/cart/index/product/id/${tool.productId}/c/?`;
    }
    return 'https://members.seotoolsgroupbuy.us/signup';
  };

  const currentPrice = parseFloat(tool.price.replace('$', '')) || 0;
  const originalPrice = tool.originalPrice ? parseFloat(tool.originalPrice.replace('$', '')) : 0;
  const savings = originalPrice > 0 ? originalPrice - currentPrice : 0;
  const savingsPercent = originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <div>
            {/* Main Image */}
            <div 
              className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden mb-4 flex items-center justify-center"
              style={{ backgroundColor: tool.bgColor }}
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {tool.image.startsWith('http') ? (
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = '/tools/seo-tools.svg';
                    }}
                  />
                ) : (
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-contain p-8"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = '/tools/seo-tools.svg';
                    }}
                  />
                )}
              </div>
            </div>

            {/* Sale Badge */}
            {originalPrice > 0 && savings > 0 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Save {savingsPercent}%
              </div>
            )}
          </div>

          {/* Right: Tool Info */}
          <div>
            {/* Category */}
            <div className="text-primary text-sm font-semibold mb-2">
              {tool.category}
            </div>

            {/* Tool Name */}
            <h1 className="text-4xl font-bold text-white mb-4">{tool.name}</h1>

            {/* Price */}
            <div className="flex items-baseline space-x-4 mb-6">
              {originalPrice > 0 ? (
                <>
                  <span className="text-5xl font-bold text-white">{tool.price}</span>
                  <span className="text-2xl text-slate-500 line-through">{tool.originalPrice}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${savings.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-bold text-white">{tool.price}</span>
              )}
            </div>

            {/* Description */}
            <div className="text-slate-300 mb-6 text-lg leading-relaxed">
              {tool.description}
            </div>

            {/* Key Features */}
            {tool.features && tool.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Quantity:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-slate-700 hover:bg-slate-600 text-white w-10 h-10 rounded-lg font-bold transition-colors"
                >
                  -
                </button>
                <span className="text-white text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-slate-700 hover:bg-slate-600 text-white w-10 h-10 rounded-lg font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy Button - Dynamic URL from Google Sheet Product ID */}
            <a
              href={getBuyNowUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mb-4 shadow-lg shadow-primary/50"
            >
              <ShoppingCart size={24} />
              <span>Buy Now</span>
            </a>

            {/* Additional Info */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-3">
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-green-500" size={20} />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-green-500" size={20} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-green-500" size={20} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="text-green-500" size={20} />
                <span>Private Account</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About {tool.name}</h2>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {tool.description}
            </p>
            {tool.features && tool.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-slate-300">Active Users</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-slate-300">Uptime</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-slate-300">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

