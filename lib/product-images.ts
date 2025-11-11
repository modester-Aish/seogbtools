/**
 * Map product names to corresponding logos and brand colors.
 */

interface BrandDefinition {
  keywords: string[];
  logo: string;
  label: string;
  background: string;
}

const BRAND_DEFINITIONS: BrandDefinition[] = [
  { keywords: ['semrush', 'sem rush'], logo: '/tools/semrush-logo.svg', label: 'SEMrush', background: 'bg-orange-100' },
  { keywords: ['ahrefs', 'ahref'], logo: '/tools/ahrefs-logo.svg', label: 'Ahrefs', background: 'bg-blue-100' },
  { keywords: ['moz'], logo: '/tools/moz-logo.svg', label: 'Moz', background: 'bg-blue-200' },
  { keywords: ['chatgpt', 'chat gpt', 'chat-gpt'], logo: '/tools/chatgpt-logo.svg', label: 'ChatGPT', background: 'bg-green-100' },
  { keywords: ['claude'], logo: '/tools/claude-logo.svg', label: 'Claude', background: 'bg-purple-100' },
  { keywords: ['runway', 'runwayml'], logo: '/tools/runwayml-logo.svg', label: 'RunwayML', background: 'bg-purple-50' },
  { keywords: ['canva'], logo: '/tools/canva-logo.svg', label: 'Canva', background: 'bg-cyan-100' },
  { keywords: ['netflix'], logo: '/tools/netflix-logo.svg', label: 'Netflix', background: 'bg-red-100' },
  { keywords: ['stripe'], logo: '/tools/stripe-logo.svg', label: 'Stripe', background: 'bg-blue-200' },
  { keywords: ['shurjopay'], logo: '/tools/shurjopay-logo.svg', label: 'Shurjopay', background: 'bg-amber-100' },
  { keywords: ['vyond'], logo: '/tools/vyond-logo.svg', label: 'Vyond', background: 'bg-orange-100' },
  { keywords: ['videoblocks'], logo: '/tools/videoblocks-logo.svg', label: 'Videoblocks', background: 'bg-yellow-100' },
  { keywords: ['storyblocks'], logo: '/tools/storyblocks-logo.svg', label: 'Storyblocks', background: 'bg-yellow-100' },
  { keywords: ['unbounce'], logo: '/tools/unbounce-logo.svg', label: 'Unbounce', background: 'bg-blue-100' },
  { keywords: ['ubersuggest'], logo: '/tools/ubersuggest-logo.svg', label: 'Ubersuggest', background: 'bg-orange-100' },
  { keywords: ['wordtune'], logo: '/tools/wordtune-logo.svg', label: 'Wordtune', background: 'bg-purple-200' },
  { keywords: ['word.ai', 'wordai', 'word ai'], logo: '/tools/wordai-logo.svg', label: 'WordAi', background: 'bg-emerald-100' },
  { keywords: ['woorank'], logo: '/tools/woorank-logo.svg', label: 'WooRank', background: 'bg-blue-100' },
  { keywords: ['seo profiler', 'seoprofiler'], logo: '/tools/seoprofiler-logo.svg', label: 'SEOProfiler', background: 'bg-teal-100' },
  { keywords: ['skillshare', 'skills share'], logo: '/tools/skillshare-logo.svg', label: 'Skillshare', background: 'bg-emerald-100' },
  { keywords: ['spamzilla'], logo: '/tools/spamzilla-logo.svg', label: 'SpamZilla', background: 'bg-purple-200' },
  { keywords: ['spyfu'], logo: '/tools/spyfu-logo.svg', label: 'SpyFu', background: 'bg-slate-700' },
  { keywords: ['pexda'], logo: '/tools/pexda-logo.svg', label: 'Pexda', background: 'bg-red-100' },
  { keywords: ['pillbanana'], logo: '/tools/pillbanana-logo.svg', label: 'Pillbanana', background: 'bg-amber-100' },
  { keywords: ['quillbot'], logo: '/tools/quillbot-logo.svg', label: 'Quillbot', background: 'bg-emerald-100' },
  { keywords: ['salehoo'], logo: '/tools/salehoo-logo.png', label: 'SaleHoo', background: 'bg-red-100' },
  { keywords: ['sellthetrend', 'sell the trend'], logo: '/tools/sellthetrend-logo.png', label: 'SellTheTrend', background: 'bg-blue-100' },
  { keywords: ['majestic'], logo: '/tools/majestic-logo.png', label: 'Majestic', background: 'bg-blue-900' },
  { keywords: ['kwfinder', 'kw finder'], logo: '/tools/kwfinder-logo.png', label: 'KWFinder', background: 'bg-orange-100' },
  { keywords: ['keywordtool'], logo: '/tools/keywordtool-logo.png', label: 'KeywordTool', background: 'bg-orange-100' },
  { keywords: ['jungle scout', 'junglescout'], logo: '/tools/junglescout-logo.png', label: 'Jungle Scout', background: 'bg-orange-200' },
  { keywords: ['jasper'], logo: '/tools/jasper-logo.png', label: 'Jasper', background: 'bg-purple-200' },
  { keywords: ['ispionage', 'i-spionage'], logo: '/tools/ispionage-logo.png', label: 'iSpionage', background: 'bg-teal-200' },
  { keywords: ['indexification'], logo: '/tools/indexification-logo.png', label: 'Indexification', background: 'bg-blue-100' },
  { keywords: ['helium 10', 'helium10'], logo: '/tools/helium10-logo.png', label: 'Helium 10', background: 'bg-blue-200' },
  { keywords: ['grammarly'], logo: '/tools/grammarly-logo.png', label: 'Grammarly', background: 'bg-emerald-100' },
  { keywords: ['freepik'], logo: '/tools/freepik-logo.png', label: 'Freepik', background: 'bg-blue-100' },
  { keywords: ['ecomhunt'], logo: '/tools/ecomhunt-logo.png', label: 'EcomHunt', background: 'bg-emerald-100' },
  { keywords: ['cbengine'], logo: '/tools/cbengine-logo.png', label: 'CBEngine', background: 'bg-blue-200' },
  { keywords: ['buzzsumo'], logo: '/tools/buzzsumo-logo.png', label: 'BuzzSumo', background: 'bg-blue-100' },
  { keywords: ['buzzstream'], logo: '/tools/buzzstream-logo.png', label: 'BuzzStream', background: 'bg-orange-100' },
  { keywords: ['article builder'], logo: '/tools/articlebuilder-logo.png', label: 'Article Builder', background: 'bg-cyan-100' },
  { keywords: ['envato elements', 'envatoelements'], logo: '/tools/envatoelements-logo.svg', label: 'Envato Elements', background: 'bg-lime-100' },
  { keywords: ['article forge'], logo: '/tools/articleforge-logo.svg', label: 'Article Forge', background: 'bg-orange-100' },
  { keywords: ['anstrex'], logo: '/tools/anstrex-logo.svg', label: 'Anstrex', background: 'bg-purple-200' },
  { keywords: ['surfer seo', 'surferseo'], logo: '/tools/surferseo-logo.svg', label: 'Surfer SEO', background: 'bg-pink-100' }
];

interface CategoryDefinition {
  keywords: string[];
  logo: string;
  label: string;
}

const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  { keywords: ['rank', 'backlink', 'keyword', 'audit'], logo: '/tools/seo-tools.svg', label: 'SEO Tools' },
  { keywords: ['ai ', 'artificial', 'machine learning', 'ai-'], logo: '/tools/ai-tools.svg', label: 'AI Tools' },
  { keywords: ['design', 'graphic', 'photo'], logo: '/tools/design-tools.svg', label: 'Design Tools' },
  { keywords: ['content', 'writing', 'blog', 'article'], logo: '/tools/content-tools.svg', label: 'Content Tools' },
  { keywords: ['social', 'facebook', 'instagram', 'twitter'], logo: '/tools/social-media-tools.svg', label: 'Social Media Tools' },
  { keywords: ['amazon', 'ecommerce', 'store', 'shop'], logo: '/tools/amazon-tools.svg', label: 'Amazon & Ecommerce' },
  { keywords: ['seo'], logo: '/tools/seo-tools.svg', label: 'SEO Tools' },
];

/**
 * Find brand definition based on product name
 */
function findBrand(productName: string): BrandDefinition | undefined {
  const name = productName.toLowerCase();
  return BRAND_DEFINITIONS.find((brand) =>
    brand.keywords.some((keyword) => name.includes(keyword))
  );
}

/**
 * Get product logo based on product name
 */
export function getProductLogo(productName: string): string {
  console.log('Getting logo for product:', productName);

  const brand = findBrand(productName);
  if (brand) {
    console.log(`→ Matched: ${brand.label}`);
    return brand.logo;
  }

  console.log('→ No direct brand match, checking categories...');

  const name = productName.toLowerCase();
  const category = CATEGORY_DEFINITIONS.find((def) =>
    def.keywords.some((keyword) => name.includes(keyword))
  );

  if (category) {
    console.log(`→ Category: ${category.label}`);
    return category.logo;
  }

  console.log('→ Default: Generic SEO icon');
  return '/tools/seo-tools.svg';
}

/**
 * Get product background color based on product name
 */
export function getProductBgColor(productName: string): string {
  const brand = findBrand(productName);
  if (brand) {
    return brand.background;
  }

  const name = productName.toLowerCase();
  if (name.includes('ai')) return 'bg-purple-50';
  if (name.includes('design')) return 'bg-pink-50';
  if (name.includes('content')) return 'bg-green-50';
  if (name.includes('social')) return 'bg-indigo-50';
  if (name.includes('amazon') || name.includes('ecommerce')) return 'bg-amber-50';
  if (name.includes('seo')) return 'bg-blue-50';

  return 'bg-slate-100';
}

