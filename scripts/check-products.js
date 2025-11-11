// Script to check product names from WordPress/WooCommerce
const https = require('https');
const http = require('http');

const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || 'https://app.seogbtools.com';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || 'ck_fad47db227d25ee887362c1cc5d656a34d6671ac';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || 'cs_bea750f61d3424613ee985da5172e94e38e38338';

async function fetchProducts() {
  const url = `${WORDPRESS_BASE_URL}/wp-json/wc/v3/products?consumer_key=${WC_CONSUMER_KEY}&consumer_secret=${WC_CONSUMER_SECRET}&per_page=100&status=publish`;
  
  console.log('\n🔍 Fetching products from WordPress...\n');
  console.log('URL:', WORDPRESS_BASE_URL);
  console.log('-------------------------------------------\n');
  
  const protocol = WORDPRESS_BASE_URL.startsWith('https') ? https : http;
  
  protocol.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const products = JSON.parse(data);
        
        if (Array.isArray(products)) {
          console.log(`✅ Found ${products.length} products\n`);
          console.log('PRODUCT NAMES:\n');
          console.log('-------------------------------------------');
          
          products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name}`);
            
            // Check what logo would be matched
            const name = product.name.toLowerCase();
            let matchedLogo = 'Generic SEO icon';
            
            if (name.includes('semrush')) matchedLogo = 'SEMrush Logo ✅';
            else if (name.includes('ahrefs')) matchedLogo = 'Ahrefs Logo ✅';
            else if (name.includes('moz')) matchedLogo = 'Moz Logo ✅';
            else if (name.includes('chatgpt') || name.includes('chat gpt')) matchedLogo = 'ChatGPT Logo ✅';
            else if (name.includes('claude')) matchedLogo = 'Claude Logo ✅';
            else if (name.includes('canva')) matchedLogo = 'Canva Logo ✅';
            else if (name.includes('netflix')) matchedLogo = 'Netflix Logo ✅';
            else if (name.includes('runway')) matchedLogo = 'RunwayML Logo ✅';
            
            console.log(`   → Logo: ${matchedLogo}`);
            console.log('');
          });
          
          console.log('-------------------------------------------\n');
          console.log('💡 TIP: If a product shows "Generic SEO icon", add its company name to lib/product-images.ts\n');
        } else {
          console.error('❌ Invalid response:', products);
        }
      } catch (error) {
        console.error('❌ Error parsing response:', error.message);
        console.log('Response:', data.substring(0, 500));
      }
    });
  }).on('error', (error) => {
    console.error('❌ Error fetching products:', error.message);
  });
}

fetchProducts();

