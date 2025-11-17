import { WCProduct } from '@/types/wordpress';
import { getBuyNowUrlWithId, getProductIdBySlug, getProductId } from './product-ids';

/**
 * Get Buy Now URL from product
 * Priority:
 * 1. external_url (WooCommerce external product)
 * 2. meta_data custom field 'buy_now_url' or 'custom_buy_url'
 * 3. meta_data product_id field
 * 4. Slug matching with Google Sheet product IDs
 * 5. Name matching with Google Sheet product IDs
 * 6. Default signup URL
 */
export function getBuyNowUrl(product: WCProduct): string {
  const defaultUrl = 'https://members.seotoolsgroupbuy.us/signup';
  
  // 1. Check external_url (WooCommerce external product type)
  if (product.external_url && product.external_url.trim() !== '') {
    return product.external_url;
  }
  
  // 2. Check meta_data for custom buy URL
  if (product.meta_data && Array.isArray(product.meta_data)) {
    // Try 'buy_now_url' first
    const buyNowUrl = product.meta_data.find(
      (meta) => meta.key === 'buy_now_url' || meta.key === '_buy_now_url'
    );
    if (buyNowUrl && buyNowUrl.value && typeof buyNowUrl.value === 'string' && buyNowUrl.value.trim() !== '') {
      return buyNowUrl.value;
    }
    
    // Try 'custom_buy_url'
    const customBuyUrl = product.meta_data.find(
      (meta) => meta.key === 'custom_buy_url' || meta.key === '_custom_buy_url'
    );
    if (customBuyUrl && customBuyUrl.value && typeof customBuyUrl.value === 'string' && customBuyUrl.value.trim() !== '') {
      return customBuyUrl.value;
    }
    
    // Try 'product_id' from meta_data
    const productIdMeta = product.meta_data.find(
      (meta) => meta.key === 'product_id' || meta.key === '_product_id' || meta.key === 'cart_product_id'
    );
    if (productIdMeta && productIdMeta.value) {
      const productId = typeof productIdMeta.value === 'number' 
        ? productIdMeta.value 
        : parseInt(String(productIdMeta.value));
      if (!isNaN(productId) && productId > 0) {
        return getBuyNowUrlWithId(productId);
      }
    }
  }
  
  // 3. Try slug matching with Google Sheet product IDs
  if (product.slug) {
    const mappedProductId = getProductIdBySlug(product.slug);
    if (mappedProductId) {
      return getBuyNowUrlWithId(mappedProductId);
    }
  }
  
  // 4. Try name matching with Google Sheet product IDs
  if (product.name) {
    const mappedProductId = getProductId(product.name);
    if (mappedProductId) {
      return getBuyNowUrlWithId(mappedProductId);
    }
  }
  
  // 5. Return default URL
  return defaultUrl;
}

/**
 * Get Buy Now button text from product
 * Priority:
 * 1. button_text (WooCommerce external product)
 * 2. meta_data custom field 'buy_button_text'
 * 3. Default "Buy Now"
 */
export function getBuyButtonText(product: WCProduct): string {
  const defaultText = 'Buy Now';
  
  // 1. Check button_text (WooCommerce external product type)
  if (product.button_text && product.button_text.trim() !== '') {
    return product.button_text;
  }
  
  // 2. Check meta_data for custom button text
  if (product.meta_data && Array.isArray(product.meta_data)) {
    const buttonText = product.meta_data.find(
      (meta) => meta.key === 'buy_button_text' || meta.key === '_buy_button_text'
    );
    if (buttonText && buttonText.value && typeof buttonText.value === 'string' && buttonText.value.trim() !== '') {
      return buttonText.value;
    }
  }
  
  // 3. Return default text
  return defaultText;
}

