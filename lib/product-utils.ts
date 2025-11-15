import { WCProduct } from '@/types/wordpress';

/**
 * Get Buy Now URL from product
 * Priority:
 * 1. external_url (WooCommerce external product)
 * 2. meta_data custom field 'buy_now_url' or 'custom_buy_url'
 * 3. Default signup URL
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
  }
  
  // 3. Return default URL
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

