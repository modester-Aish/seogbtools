'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Check, Minus, Plus, ExternalLink } from 'lucide-react';
import { WCProduct } from '@/types/wordpress';
import ProductCard from './ProductCard';

interface ProductDetailClientProps {
  product: WCProduct;
  relatedProducts?: WCProduct[];
}

export default function ProductDetailClient({ product, relatedProducts = [] }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [{ id: 0, src: '/placeholder-product.jpg', name: product.name, alt: product.name }];

  const regularPrice = parseFloat(product.regular_price) || 0;
  const salePrice = parseFloat(product.sale_price) || 0;
  const currentPrice = product.on_sale && salePrice > 0 ? salePrice : regularPrice;

  // Extract features from description
  const features = product.short_description
    ? product.short_description.split('\n').filter(line => line.trim())
    : [];

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] bg-slate-800 rounded-xl overflow-hidden mb-4">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt || product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 bg-slate-800 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary' : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Category */}
            {product.categories && product.categories.length > 0 && (
              <div className="text-primary text-sm font-semibold mb-2">
                {product.categories[0].name}
              </div>
            )}

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

            {/* Rating */}
            {parseFloat(product.average_rating) > 0 && (
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.round(parseFloat(product.average_rating))
                          ? 'text-yellow-500 fill-current'
                          : 'text-slate-600'
                      }
                    />
                  ))}
                </div>
                <span className="text-slate-400">
                  {product.average_rating} ({product.rating_count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline space-x-4 mb-6">
              {product.on_sale && regularPrice > 0 ? (
                <>
                  <span className="text-5xl font-bold text-white">${currentPrice}</span>
                  <span className="text-2xl text-slate-500 line-through">${regularPrice}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(regularPrice - currentPrice).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-bold text-white">
                  {currentPrice > 0 ? `$${currentPrice}` : 'Free'}
                </span>
              )}
            </div>

            {/* Short Description */}
            {product.short_description && (
              <div 
                className="text-slate-300 mb-6 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock_status === 'instock' ? (
                <div className="flex items-center space-x-2 text-green-500">
                  <Check size={20} />
                  <span className="font-semibold">In Stock</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-500">
                  <span className="font-semibold">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">Quantity:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="text-white text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <a
              href="https://members.seotoolsgroupbuy.us/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 mb-4 shadow-lg shadow-primary/50"
            >
              <ShoppingCart size={24} />
              <span>Buy Now</span>
            </a>

            {/* Features List */}
            {features.length > 0 && (
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-white font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300">
                      <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Full Description */}
        {product.description && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Product Description</h2>
            <div 
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 prose prose-invert max-w-none text-slate-300"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

