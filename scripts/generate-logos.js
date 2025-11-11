const fs = require('fs');
const path = require('path');

const logos = [
  { file: 'videoblocks-logo.svg', primary: '#fcbf49', text: 'VB', label: 'Videoblocks' },
  { file: 'unbounce-logo.svg', primary: '#1a8cff', text: 'UB', label: 'Unbounce' },
  { file: 'ubersuggest-logo.svg', primary: '#ff6b35', text: 'US', label: 'Ubersuggest' },
  { file: 'wordtune-logo.svg', primary: '#7b4efe', text: 'WT', label: 'Wordtune' },
  { file: 'wordai-logo.svg', primary: '#2ecc71', text: 'WA', label: 'WordAi' },
  { file: 'woorank-logo.svg', primary: '#0066ff', text: 'WR', label: 'Woorank' },
  { file: 'seoprofiler-logo.svg', primary: '#00a896', text: 'SP', label: 'SEOProfiler' },
  { file: 'skillshare-logo.svg', primary: '#00d474', text: 'SS', label: 'Skillshare' },
  { file: 'spamzilla-logo.svg', primary: '#6f42c1', text: 'SZ', label: 'SpamZilla' },
  { file: 'spyfu-logo.svg', primary: '#1f1f1f', text: 'SF', label: 'SpyFu' },
  { file: 'storyblocks-logo.svg', primary: '#f8b400', text: 'SB', label: 'Storyblocks' },
  { file: 'pexda-logo.svg', primary: '#d63031', text: 'PX', label: 'Pexda' },
  { file: 'pillbanana-logo.svg', primary: '#f4d03f', text: 'PB', label: 'Pillbanana' },
  { file: 'quillbot-logo.svg', primary: '#2ecc71', text: 'QB', label: 'Quillbot' },
  { file: 'salehoo-logo.svg', primary: '#e53935', text: 'SH', label: 'SaleHoo' },
  { file: 'sellthetrend-logo.svg', primary: '#1976d2', text: 'ST', label: 'SellTheTrend' },
  { file: 'majestic-logo.svg', primary: '#0b3d91', text: 'MJ', label: 'Majestic' },
  { file: 'kwfinder-logo.svg', primary: '#ff9800', text: 'KF', label: 'KWFinder' },
  { file: 'keywordtool-logo.svg', primary: '#ff7043', text: 'KT', label: 'KeywordTool' },
  { file: 'junglescout-logo.svg', primary: '#f57c00', text: 'JS', label: 'JungleScout' },
  { file: 'jasper-logo.svg', primary: '#6c63ff', text: 'JP', label: 'Jasper' },
  { file: 'ispionage-logo.svg', primary: '#26a69a', text: 'IP', label: 'iSpionage' },
  { file: 'indexification-logo.svg', primary: '#1e88e5', text: 'IX', label: 'Indexification' },
  { file: 'helium10-logo.svg', primary: '#2962ff', text: 'H10', label: 'Helium 10' },
  { file: 'grammarly-logo.svg', primary: '#00b67a', text: 'GR', label: 'Grammarly' },
  { file: 'freepik-logo.svg', primary: '#1f8eed', text: 'FP', label: 'Freepik' },
  { file: 'ecomhunt-logo.svg', primary: '#2ecc71', text: 'EH', label: 'EcomHunt' },
  { file: 'cbengine-logo.svg', primary: '#0288d1', text: 'CB', label: 'CBEngine' },
  { file: 'buzzsumo-logo.svg', primary: '#1976d2', text: 'BS', label: 'BuzzSumo' },
  { file: 'buzzstream-logo.svg', primary: '#ff9800', text: 'BT', label: 'BuzzStream' },
  { file: 'articlebuilder-logo.svg', primary: '#26c6da', text: 'AB', label: 'ArticleBuilder' },
  { file: 'envatoelements-logo.svg', primary: '#82bf11', text: 'EE', label: 'Envato' },
  { file: 'articleforge-logo.svg', primary: '#ff5722', text: 'AF', label: 'ArticleForge' },
  { file: 'anstrex-logo.svg', primary: '#8e24aa', text: 'AX', label: 'Anstrex' },
  { file: 'surferseo-logo.svg', primary: '#ff7eb6', text: 'SU', label: 'Surfer' },
  { file: 'cbengine-logo.svg', primary: '#0288d1', text: 'CB', label: 'CBEngine' },
  { file: 'wordai-logo.svg', primary: '#2ecc71', text: 'WA', label: 'WordAi' }
];

const outputDir = path.join(__dirname, '..', 'public', 'tools');

function createSvg({ file, primary, text, label }) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="36" fill="${primary}"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="70" font-weight="700" fill="#ffffff" letter-spacing="3">
    ${text}
  </text>
  <text x="50%" y="78%" text-anchor="middle" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="20" font-weight="500" fill="#ffffff" opacity="0.82">
    ${label}
  </text>
</svg>`;

  const filePath = path.join(outputDir, file);
  fs.writeFileSync(filePath, svg, 'utf-8');
  console.log(`✅ Generated logo: ${file}`);
}

logos.forEach(createSvg);
