import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { WCProduct } from '@/types/wordpress';
import { getProductLogo, getProductBgColor } from '@/lib/product-images';
import { getBuyNowUrl, getBuyButtonText } from '@/lib/product-utils';

interface ProductCardProps {
  product: WCProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Priority system:
  // 1. Use WordPress product image if exists and is valid
  // 2. Fall back to company logo based on name
  // 3. Final fallback to placeholder
  const hasRealImage = product.images && 
                       product.images.length > 0 && 
                       product.images[0]?.src && 
                       product.images[0].src.trim() !== '' &&
                       !product.images[0].src.includes('placeholder') &&
                       !product.images[0].src.includes('seo-tools.svg') &&
                       !product.images[0].src.includes('woocommerce-placeholder') &&
                       (product.images[0].src.startsWith('http') || product.images[0].src.startsWith('/'));
  
  const imageUrl = hasRealImage ? product.images[0].src : getProductLogo(product.name);
  const isCompanyLogo = !hasRealImage;
  const bgColor = isCompanyLogo ? getProductBgColor(product.name) : 'bg-slate-700';

  const regularPrice = parseFloat(product.regular_price) || 0;
  const salePrice = parseFloat(product.sale_price) || 0;
  const currentPrice = product.on_sale && salePrice > 0 ? salePrice : regularPrice;

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full">
      {/* Product Image */}
      <Link href={`/${product.slug}`} className={`relative h-48 ${bgColor} overflow-hidden group flex items-center justify-center`}>
        {isCompanyLogo ? (
          // Company logo - use plain img to avoid Next optimizer
          <div className="relative w-32 h-32">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 p-4"
              loading="lazy"
              onError={(event) => {
                console.error('Image load error:', imageUrl);
                event.currentTarget.src = '/tools/seo-tools.svg';
              }}
            />
          </div>
        ) : (
          // Real product image - full cover
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            unoptimized={!imageUrl.startsWith('/')}
            onError={(e) => {
              console.error('Image load error:', imageUrl);
              e.currentTarget.src = '/tools/seo-tools.svg';
            }}
          />
        )}
        
        {/* Sale Badge */}
        {product.on_sale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale!
          </div>
        )}

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category */}
        {product.categories && product.categories.length > 0 && (
          <div className="text-primary text-xs font-semibold mb-2">
            {product.categories[0].name}
          </div>
        )}

        {/* Product Name */}
        <Link href={`/${product.slug}`}>
          <h3 className="text-white font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {parseFloat(product.average_rating) > 0 && (
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.round(parseFloat(product.average_rating))
                      ? 'text-yellow-500 fill-current'
                      : 'text-slate-600'
                  }
                />
              ))}
            </div>
            <span className="text-slate-400 text-xs">
              ({product.rating_count})
            </span>
          </div>
        )}

        {/* Short Description */}
        {product.short_description && (
          <div 
            className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1"
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline space-x-2">
            {product.on_sale && regularPrice > 0 ? (
              <>
                <span className="text-2xl font-bold text-white">${currentPrice}</span>
                <span className="text-slate-500 line-through text-sm">${regularPrice}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-white">
                {currentPrice > 0 ? `$${currentPrice}` : 'Free'}
              </span>
            )}
          </div>
        </div>

        {/* Buy Button - URL from WordPress/WooCommerce */}
        <a
          href={getBuyNowUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={18} />
          <span>{getBuyButtonText(product)}</span>
        </a>
      </div>
    </div>
  );
}

