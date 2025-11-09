# SEOGBTools - Premium SEO Tools Group Buy Platform

A modern, high-performance Next.js 14 website for selling group buy access to premium SEO tools like Ahrefs, SEMrush, Moz Pro, and more.

## 🌟 Features

- **Modern UI/UX**: Beautiful gradient designs, smooth animations, and responsive layout
- **50+ Premium Tools**: Ahrefs, SEMrush, Moz Pro, Surfer SEO, Grammarly, Canva Pro, and more
- **WordPress Backend**: Headless CMS with WooCommerce for easy content management
- **SEO Optimized**: Complete meta tags, Open Graph, structured data (Schema.org), and canonical URLs
- **Fast Performance**: Server-side rendering, image optimization, code splitting
- **Multiple Pricing Plans**: Small, Ahrefs Combo, Mega, Lite, Writer, Designer plans
- **24/7 Support**: WhatsApp and Facebook Messenger integration
- **Secure & Private**: Bank-level encryption and private accounts

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: WordPress + WooCommerce (Headless)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel / Coolify / Railway

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- WordPress site with WooCommerce plugin
- WooCommerce REST API credentials

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/seogbtools.git
cd seogbtools
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:
```env
WORDPRESS_BASE_URL=https://your-wordpress-site.com
WC_CONSUMER_KEY=ck_your_consumer_key_here
WC_CONSUMER_SECRET=cs_your_consumer_secret_here
NEXT_PUBLIC_SITE_URL=https://seogbtools.com
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
seogbtools/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── products/                # Products listing page
│   ├── blog/                    # Blog listing page
│   ├── pages/                   # Pages listing page
│   ├── [slug]/                  # Dynamic route (products/posts/pages)
│   └── not-found.tsx            # 404 page
│
├── components/                   # React components
│   ├── Header.tsx               # Navigation with dropdowns
│   ├── Footer.tsx               # Footer with links
│   ├── FloatingChat.tsx         # WhatsApp/Messenger widget
│   ├── ModernHero.tsx           # Homepage hero section
│   ├── AnimatedSections.tsx     # Why Choose, Tools, Testimonials, How to Order
│   ├── FeatureSections.tsx      # SEO features content
│   ├── InteractivePricingCards.tsx  # Pricing plans
│   ├── FAQSection.tsx           # FAQ accordion
│   ├── ProductCard.tsx          # Product card component
│   └── ProductDetailClient.tsx  # Product detail page
│
├── lib/                         # Utility functions
│   ├── wordpress-api.ts         # WordPress REST API calls
│   ├── woocommerce-api.ts       # WooCommerce REST API calls
│   ├── content-parser.ts        # Clean WordPress content
│   └── canonical.ts             # SEO canonical URLs
│
├── types/                       # TypeScript definitions
│   └── wordpress.ts             # WordPress/WooCommerce types
│
├── public/                      # Static assets
│   └── (add your images here)
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🔧 WordPress Setup

### Required Plugins

1. **WooCommerce** - For products and e-commerce
2. **WooCommerce REST API** - Enable REST API access

### Generate API Keys

1. Go to: `WordPress Admin > WooCommerce > Settings > Advanced > REST API`
2. Click "Add Key"
3. Set permissions to "Read"
4. Copy the Consumer Key and Consumer Secret
5. Add them to your `.env.local` file

### Create Products

1. Add products in `WordPress Admin > Products > Add New`
2. Set product name, description, price, images
3. Assign categories
4. Publish

### Create Pages

1. Add pages in `WordPress Admin > Pages > Add New`
2. Create pricing plan pages, tool info pages, etc.
3. Publish

### Create Blog Posts

1. Add posts in `WordPress Admin > Posts > Add New`
2. Write SEO content, tips, guides
3. Add featured images
4. Publish

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#14b8a6', // Change to your brand color
  secondary: '#8b5cf6',
}
```

### Update Contact Links

Edit these files:
- `components/FloatingChat.tsx` - WhatsApp and Messenger links
- `components/Footer.tsx` - Social media links
- All "Buy Now" buttons - Update signup URL

### Modify Content

- **Homepage sections**: Edit components in `components/` folder
- **Pricing plans**: Edit `components/InteractivePricingCards.tsx`
- **FAQ**: Edit `components/FAQSection.tsx`
- **Tools list**: Edit `components/AnimatedSections.tsx`

## 🔍 SEO Features

### Implemented

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, Twitter)
- ✅ Canonical URLs
- ✅ Structured Data (Schema.org):
  - Organization Schema
  - Website Schema
  - Product Schema
  - Breadcrumb Schema
  - Aggregate Rating Schema
- ✅ XML Sitemap (auto-generated by Next.js)
- ✅ Robots.txt
- ✅ Image optimization with alt text
- ✅ Semantic HTML structure

### Keyword Targeting

- group buy seo tools
- ahrefs group buy
- semrush group buy
- cheap seo tools
- best seo tools 2025
- premium seo tools discount

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Laptop: 1024px - 1279px
- Desktop: 1280px+

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Deploy to Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy

### Deploy to Coolify

1. Setup Coolify instance
2. Connect repository
3. Configure environment
4. Deploy

## 🔒 Security

- Environment variables for sensitive data
- Never commit `.env.local` to Git
- HTTPS only (enforced)
- Secure API communication
- Input sanitization

## 📈 Performance

- Server-side rendering (SSR)
- Static generation (SSG) where possible
- Image optimization (WebP)
- Code splitting
- Lazy loading
- Revalidation strategy (ISR)

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style

- TypeScript strict mode
- ESLint configuration
- Prettier formatting (recommended)

## 📞 Support

For issues or questions:
- WhatsApp: [+1-520-563-6362](https://wa.me/15205636362)
- Facebook: [Messenger](https://m.me/108606453898810)
- Email: support@seogbtools.com

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [WordPress](https://wordpress.org/)
- [WooCommerce](https://woocommerce.com/)

---

**Built with ❤️ for SEO Professionals**

© 2025 SEOGBTools. All rights reserved.

