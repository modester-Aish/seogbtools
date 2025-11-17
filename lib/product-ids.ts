/**
 * Product IDs Mapping from Google Sheet
 * Product names ko cart product IDs se map karta hai
 * All IDs from Google Sheet: https://docs.google.com/spreadsheets/d/1EcN5bUCBhiz1KOteq0bYdg-mNyvXI71MG85aApdzMn8
 */

// Google Sheet se product IDs mapping
// Format: product name (normalized) -> product ID
// Note: For products with multiple IDs, we use the most common/primary one
export const productIds: Record<string, number> = {
  // Plans
  'lite plan': 56,
  'student plan': 51,
  'basic plan': 30,
  'small plan': 35, // Primary ID (162 is alternative)
  'small plan for 3 months': 6,
  'standard plan': 12,
  'ecom plan': 3,
  'vip plan': 17,
  'mega pack': 2,
  'mega pack + ahrefs unlimited': 4,
  'writers pack': 42,
  'amazon tools plan': 45,
  'designers pack': 46,
  'agency plan (1)': 50,
  'agency plan (2)': 15,
  'agency plan for team': 74,
  'agency unlimited plan': 149,
  'team plan': 163,
  'custome plan': 70,
  'custom plan': 70,
  
  // SEO Tools - Ahrefs
  'ahref$ combo': 53, // Primary (148, 150 are alternatives)
  'ahref$ combo unlimited': 7,
  'ahref$ unlimited': 28,
  'ahref$': 53,
  'ahrefs': 53,
  'ahrefs combo': 53,
  'ahrefs + screaming frog': 40,
  
  // SEO Tools - SEMrush
  'semrush': 8,
  'semru$h': 8,
  'semrush combo pack': 60,
  'semrush private': 20,
  'semrush for 6 months': 55,
  
  // SEO Tools - Others
  'moz': 19,
  'moz pro': 19,
  'kwfinder': 9,
  'majestic': 10,
  'majestic seo': 10,
  'surfer seo': 108,
  'surfer': 108,
  'spyfu': 89,
  'ubersuggest': 96,
  'screaming frog': 73, // Primary (37, 164 are alternatives)
  'serpstat': 98,
  'seo profiler': 99,
  'woorank': 94,
  'seoptimer': 110,
  'seo site checkup': 111,
  'se ranking': 136,
  'wordtracker': 137,
  'semscoop': 132,
  'keywordtool.io': 32,
  'keyword revaeler': 76,
  'keyword revealer': 76,
  'keywords everywhere': 87,
  'spamzilla': 31,
  'ispionage': 83,
  'indexification': 86,
  'similarweb': 146,
  
  // AI Tools - ChatGPT
  'chat gpt premium': 29,
  'chat gpt pro': 59,
  'chatgpt plus': 59,
  'chatgpt': 29,
  'chatgpt premium': 29,
  'chatgpt pro': 59,
  
  // AI Tools - Others
  'claude ai': 113,
  'claude': 113,
  'jasper ai': 48,
  'jasper': 48,
  'leonardo ai': 141,
  'leonardo': 141,
  'midjourney': 161,
  'you ai': 112,
  'hix ai': 114,
  'smartcopy': 115,
  'closerscopy': 116,
  'copy ai': 117,
  'copy.ai': 117,
  'stealthwriter ai': 118,
  'writerzen': 119,
  'writesonic': 120,
  'rytr me': 121,
  'jenni ai': 122,
  'sider ai': 145,
  'grok ai': 155,
  'bypass gpt': 47,
  'heygen ai': 151,
  
  // Writing Tools
  'grammarly': 21,
  'quillbot': 103,
  'wordai': 77,
  'wordtune': 78,
  'wordhero': 79,
  'article builder': 104,
  'article forge': 105,
  'spin rewriter': 85,
  'writehuman': 147,
  
  // Design Tools
  'canva pro': 65,
  'canva': 65,
  'adobe creative cloud': 64, // Primary (75 is alternative)
  'adobe creative': 64,
  'adobe': 64,
  'freepik': 63,
  'freepik premium': 63,
  'envato elements': 18,
  'envato': 18,
  'picsart': 125,
  'fotojet': 126,
  'picmonkey': 133,
  'vecteezy': 123,
  'designs ai': 124,
  'icon scout': 143,
  
  // Video Tools
  'capcut pro': 72,
  'capcut': 157, // Alternative to capcut pro (72)
  'invideo io': 127,
  'invideo': 127,
  'vyond': 80,
  'renderforest': 142,
  'motionarray': 138,
  'videoblocks': 95,
  
  // Media & Stock
  'storyblocks': 24,
  'epidemicsound': 134,
  'epidemic sound': 134,
  'prezi': 139,
  'slidebean': 135,
  
  // E-commerce
  'helium 10': 36, // Primary (152 is alternative)
  'helium10': 36,
  'jungle scout': 33,
  'ecomhunt': 34,
  'amztrackers': 81,
  'viral launch': 130,
  'niche scraper': 131,
  'bigspy pro subscription': 158,
  'spyhero subscription': 159,
  'sell the trend': 93,
  'exploding topics': 92,
  
  // Entertainment
  'netflix': 52,
  'netflix logins': 16,
  'prime video': 109,
  'chaupal tv': 129,
  
  // Education
  'coursera': 91,
  'udemy': 66,
  'skillshare': 97,
  'linkedin learning (lynda)': 82,
  'linkedin learning': 82,
  'lynda': 82,
  'turnitin student account': 140,
  'turnitin with ai detector': 154,
  'turnitin': 140,
  'neuron writer': 67,
  
  // Marketing & Content
  'buzzsumo': 41,
  'buzzstream': 106,
  'answer the public': 88,
  'unbounce': 61,
  'copymatic.ai': 107,
  'copymatic': 107,
  'frase.io': 84,
  'frase': 84,
  'pillbanana': 100,
  'pexda': 101,
  'cbengine': 102,
  'salehoo': 90,
  
  // Other Tools
  'quetext': 57,
  'adspy subscription': 58,
  'adspy': 58,
  'gpl - themes/plugin wordpress': 128,
  'gpl themes plugin wordpress': 128,
  'gpl': 128,
  'gamma app pro': 160,
  'gamma': 160,
  'elevenlabs': 166,
  'premium vpn': 153,
  'vpn': 153,
  'google one ultra plan': 156,
  'google one': 156,
  'scribd premium': 144,
  'scribd': 144,
};

/**
 * Normalize product name for matching
 * Removes special characters, converts to lowercase, trims spaces
 */
export function normalizeProductName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\$/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Get product ID from product slug
 * First tries direct slug match, then removes common suffixes and tries again
 */
export function getProductIdBySlug(slug: string): number | undefined {
  if (!slug) return undefined;
  
  const normalized = normalizeProductName(slug);
  
  // 1. Direct slug match
  if (productIds[normalized]) {
    return productIds[normalized];
  }
  
  // 2. Remove common suffixes and try again
  const suffixes = ['-group-buy', 'group-buy', '-groupbuy', 'groupbuy', '-buy', 'buy'];
  for (const suffix of suffixes) {
    if (normalized.endsWith(suffix)) {
      const withoutSuffix = normalized.slice(0, -suffix.length).trim();
      if (productIds[withoutSuffix]) {
        return productIds[withoutSuffix];
      }
    }
  }
  
  // 3. Try fuzzy matching with product name function
  return getProductId(normalized);
}

/**
 * Get product ID from product name
 * Uses advanced fuzzy matching to find product ID from Google Sheet
 * Priority: Direct match > Partial match > Word-by-word match > Without common words > Similarity match
 */
export function getProductId(productName: string): number | undefined {
  const normalized = normalizeProductName(productName);
  
  // 1. Direct match
  if (productIds[normalized]) {
    return productIds[normalized];
  }
  
  // 2. Partial match - check if any key contains the normalized name or vice versa
  for (const [key, id] of Object.entries(productIds)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return id;
    }
  }
  
  // 3. Word-by-word matching - extract key words from product name
  const productWords = normalized.split(/\s+/).filter(word => word.length > 2);
  const commonWords = ['plan', 'pack', 'combo', 'pro', 'premium', 'subscription', 'account', 'the', 'for', 'with', 'and', 'or', 'plus', 'unlimited', 'tool', 'tools', 'seo', 'ai', 'cloud'];
  const keyWords = productWords.filter(word => !commonWords.includes(word));
  
  // Try matching with key words
  if (keyWords.length > 0) {
    for (const [key, id] of Object.entries(productIds)) {
      const keyWordsInKey = key.split(/\s+/).filter(word => word.length > 2 && !commonWords.includes(word));
      // Check if at least 2 key words match
      const matchingWords = keyWords.filter(word => 
        keyWordsInKey.some(kw => kw.includes(word) || word.includes(kw))
      );
      if (matchingWords.length >= Math.min(2, keyWords.length)) {
        return id;
      }
    }
  }
  
  // 4. Try matching without common words
  const withoutCommon = normalized.replace(/\b(plan|pack|combo|pro|premium|subscription|account|the|for|with|and|or|plus|unlimited|tool|tools|seo|ai|cloud)\b/g, '').trim();
  if (withoutCommon && withoutCommon.length > 2) {
    // Direct match without common words
    if (productIds[withoutCommon]) {
      return productIds[withoutCommon];
    }
    
    // Partial match without common words
    for (const [key, id] of Object.entries(productIds)) {
      const keyWithoutCommon = key.replace(/\b(plan|pack|combo|pro|premium|subscription|account|the|for|with|and|or|plus|unlimited|tool|tools|seo|ai|cloud)\b/g, '').trim();
      if (withoutCommon.includes(keyWithoutCommon) || keyWithoutCommon.includes(withoutCommon)) {
        return id;
      }
    }
  }
  
  // 5. Similarity matching - check if product name contains significant portion of key
  for (const [key, id] of Object.entries(productIds)) {
    // If key is at least 5 characters and product name contains 70% of key
    if (key.length >= 5) {
      const keyChars = key.replace(/\s/g, '').split('');
      const matchingChars = keyChars.filter(char => normalized.includes(char)).length;
      const similarity = matchingChars / keyChars.length;
      if (similarity >= 0.7) {
        return id;
      }
    }
    
    // If product name is at least 5 characters and key contains 70% of product name
    if (normalized.length >= 5) {
      const productChars = normalized.replace(/\s/g, '').split('');
      const matchingChars = productChars.filter(char => key.includes(char)).length;
      const similarity = matchingChars / productChars.length;
      if (similarity >= 0.7) {
        return id;
      }
    }
  }
  
  // 6. Single word matching - if product name has one significant word, try to match
  if (keyWords.length === 1 && keyWords[0].length >= 4) {
    const singleWord = keyWords[0];
    for (const [key, id] of Object.entries(productIds)) {
      if (key.includes(singleWord) || singleWord.includes(key.split(/\s+/)[0])) {
        return id;
      }
    }
  }
  
  return undefined;
}

/**
 * Generate Buy Now URL with product ID
 */
export function getBuyNowUrlWithId(productId: number): string {
  return `https://members.seotoolsgroupbuy.us/cart/index/product/id/${productId}/c/?`;
}
