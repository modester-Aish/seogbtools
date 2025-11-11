'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { WCProduct } from '@/types/wordpress';
import ProductCard from './ProductCard';
import { getProductLogo, getProductBgColor } from '@/lib/product-images';

interface ProductDetailClientProps {
  product: WCProduct;
  relatedProducts?: WCProduct[];
}

export default function ProductDetailClient({ product, relatedProducts = [] }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Priority system for images:
  // 1. Use WordPress product images if they exist and are valid
  // 2. Fall back to company logo based on product name
  const hasRealImages = product.images && 
                        product.images.length > 0 && 
                        product.images[0]?.src &&
                        product.images[0].src.trim() !== '' &&
                        !product.images[0].src.includes('placeholder') &&
                        !product.images[0].src.includes('seo-tools.svg') &&
                        !product.images[0].src.includes('woocommerce-placeholder') &&
                        (product.images[0].src.startsWith('http') || product.images[0].src.startsWith('/'));
  
  const productLogo = getProductLogo(product.name);
  const images = hasRealImages 
    ? product.images 
    : [{ id: 0, src: productLogo, name: product.name, alt: product.name }];
  
  const isCompanyLogo = !hasRealImages;
  const bgColor = isCompanyLogo ? getProductBgColor(product.name) : 'bg-slate-800';

  const regularPrice = parseFloat(product.regular_price) || 0;
  const salePrice = parseFloat(product.sale_price) || 0;
  const currentPrice = product.on_sale && salePrice > 0 ? salePrice : regularPrice;

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Images */}
          <div>
            {/* Main Image */}
            <div className={`relative h-96 lg:h-[500px] ${bgColor} rounded-xl overflow-hidden mb-4 ${isCompanyLogo ? 'flex items-center justify-center' : ''}`}>
              {isCompanyLogo ? (
                // Company logo - smaller, centered
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt || product.name}
                    fill
                    className="object-contain p-8"
                    sizes="320px"
                    priority
                    unoptimized={images[selectedImage].src.endsWith('.svg')}
                    onError={(e) => {
                      console.error('Image load error:', images[selectedImage].src);
                      e.currentTarget.src = '/tools/seo-tools.svg';
                    }}
                  />
                </div>
              ) : (
                // Real product image - full cover
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt || product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={(e) => {
                    console.error('Image load error:', images[selectedImage].src);
                    e.currentTarget.src = '/tools/seo-tools.svg';
                  }}
                />
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 ${isCompanyLogo ? bgColor : 'bg-slate-800'} rounded-lg overflow-hidden border-2 transition-all ${isCompanyLogo ? 'flex items-center justify-center' : ''} ${
                      selectedImage === idx ? 'border-primary' : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {isCompanyLogo ? (
                      <div className="relative w-12 h-12">
                        <Image
                          src={image.src}
                          alt={image.alt || `${product.name} ${idx + 1}`}
                          fill
                          className="object-contain p-2"
                          sizes="48px"
                          unoptimized={image.src.endsWith('.svg')}
                          onError={(e) => {
                            e.currentTarget.src = '/tools/seo-tools.svg';
                          }}
                        />
                      </div>
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt || `${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        onError={(e) => {
                          e.currentTarget.src = '/tools/seo-tools.svg';
                        }}
                      />
                    )}
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

