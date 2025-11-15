'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, CheckCircle, Star } from 'lucide-react';
import { Tool } from '@/lib/tools-data';
import { getBuyNowUrlWithId } from '@/lib/product-ids';

interface ToolDetailClientProps {
  tool: Tool;
}

export default function ToolDetailClient({ tool }: ToolDetailClientProps) {
  const currentPrice = parseFloat(tool.price.replace('$', '')) || 0;
  const originalPrice = tool.originalPrice ? parseFloat(tool.originalPrice.replace('$', '')) : 0;
  const onSale = originalPrice > currentPrice && originalPrice > 0;
  const savings = onSale ? (originalPrice - currentPrice).toFixed(2) : '0.00';
  const savingsPercent = onSale ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100) : 0;

  const buyNowLink = tool.productId
    ? getBuyNowUrlWithId(tool.productId)
    : 'https://members.seotoolsgroupbuy.us/signup';

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Images */}
          <div>
            <div 
              className={`relative h-96 lg:h-[500px] rounded-xl overflow-hidden mb-4 flex items-center justify-center`}
              style={{ backgroundColor: tool.bgColor }}
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-contain p-8"
                  loading="lazy"
                  onError={(event) => {
                    console.error('Image load error:', tool.image);
                    event.currentTarget.src = '/tools/seo-tools.svg';
                  }}
                />
              </div>
              
              {/* Sale Badge */}
              {onSale && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                  Save {savingsPercent}%
                </div>
              )}
            </div>
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
              {onSale ? (
                <>
                  <span className="text-5xl font-bold text-white">${currentPrice}</span>
                  <span className="text-2xl text-slate-500 line-through">${originalPrice}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${savings}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-bold text-white">
                  {currentPrice > 0 ? `$${currentPrice}` : 'Free'}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-300 mb-6">{tool.description}</p>

            {/* Features List */}
            {tool.features && tool.features.length > 0 && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-white font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2 text-slate-300">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Star size={18} className="text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buy Button */}
            <a
              href={buyNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mb-4 shadow-lg shadow-primary/50"
            >
              <ShoppingCart size={24} />
              <span>Buy Now</span>
            </a>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-400" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-purple-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-yellow-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
        {tool.description && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">About {tool.name}</h2>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                {tool.description}
              </p>
              {tool.features && tool.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What&apos;s Included:</h3>
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
        )}
      </div>
    </div>
  );
}
