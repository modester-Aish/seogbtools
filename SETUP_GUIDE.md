# SEOGBTools - Quick Setup Guide

## 📋 Prerequisites Checklist

Before starting, make sure you have:

- ✅ Node.js 18+ installed ([Download](https://nodejs.org/))
- ✅ WordPress website with admin access
- ✅ WooCommerce plugin installed on WordPress
- ✅ Git installed (optional, for version control)

---

## 🚀 Step-by-Step Setup

### Step 1: WordPress Configuration

#### 1.1 Install Required Plugins

1. Log into your WordPress admin panel
2. Go to **Plugins > Add New**
3. Search for and install **WooCommerce**
4. Activate the plugin

#### 1.2 Generate WooCommerce API Keys

1. Go to **WooCommerce > Settings > Advanced > REST API**
2. Click **Add Key**
3. Fill in the details:
   - **Description**: SEOGBTools Frontend
   - **User**: Select your admin user
   - **Permissions**: Select **Read**
4. Click **Generate API Key**
5. **IMPORTANT**: Copy the **Consumer Key** and **Consumer Secret** - you won't see them again!

Example:
```
Consumer Key: ck_abc123def456ghi789...
Consumer Secret: cs_xyz789uvw456rst123...
```

#### 1.3 Enable WordPress REST API

1. Go to **Settings > Permalinks**
2. Make sure permalinks are set to **Post name** (not Plain)
3. Click **Save Changes**

#### 1.4 Add Sample Products

1. Go to **Products > Add New**
2. Create products for your SEO tools:
   - **Name**: e.g., "Ahrefs Group Buy"
   - **Description**: Full description of the tool
   - **Short Description**: Brief summary
   - **Price**: Regular price and sale price
   - **Product Image**: Upload tool logo/image
   - **Categories**: Create categories (SEO Tools, Combo Pack, etc.)
3. Click **Publish**

Repeat for all your tools (Ahrefs, SEMrush, Moz Pro, etc.)

---

### Step 2: Frontend Setup (This Project)

#### 2.1 Download/Clone Project

If you received this as a zip file:
```bash
# Extract the zip file to your desired location
cd seogbtools
```

If using Git:
```bash
git clone https://github.com/yourusername/seogbtools.git
cd seogbtools
```

#### 2.2 Install Dependencies

Open terminal in the project folder and run:
```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

⏱️ This may take 2-5 minutes depending on your internet speed.

#### 2.3 Configure Environment Variables

1. Create a new file named `.env.local` in the project root
2. Copy the following content and update with your details:

```env
# WordPress Configuration
WORDPRESS_BASE_URL=https://your-wordpress-site.com

# WooCommerce API Credentials (from Step 1.2)
WC_CONSUMER_KEY=ck_your_consumer_key_here
WC_CONSUMER_SECRET=cs_your_consumer_secret_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://seogbtools.com
```

**Important Notes:**
- Remove `http://` or `https://` trailing slashes from URLs
- Use the actual Consumer Key and Secret from WordPress
- Update `NEXT_PUBLIC_SITE_URL` to your actual domain

#### 2.4 Test Development Server

Run the development server:
```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your website! 🎉

**Common Issues:**

❌ **Port 3000 already in use**
- Solution: Run `npm run dev -- -p 3001` to use port 3001

❌ **Cannot connect to WordPress**
- Check `WORDPRESS_BASE_URL` is correct
- Make sure WordPress site is accessible
- Verify API keys are correct

❌ **No products showing**
- Make sure you have published products in WordPress
- Check WooCommerce API keys have **Read** permission
- Verify WooCommerce REST API is enabled

---

### Step 3: Customization

#### 3.1 Update Contact Information

**WhatsApp Number** (in `components/FloatingChat.tsx`):
```typescript
// Change this line:
href="https://wa.me/15205636362"
// To your number:
href="https://wa.me/YOUR_WHATSAPP_NUMBER"
```

**Facebook Messenger** (in `components/FloatingChat.tsx` and `components/Footer.tsx`):
```typescript
// Change this line:
href="https://m.me/108606453898810"
// To your page ID:
href="https://m.me/YOUR_FB_PAGE_ID"
```

**Signup URL** (search for all instances):
```typescript
// Find and replace all occurrences:
href="https://members.seotoolsgroupbuy.us/signup"
// With your actual signup URL:
href="https://your-signup-url.com"
```

#### 3.2 Update Branding

**Site Name** (in `components/Header.tsx` and `components/Footer.tsx`):
- Find `SEOGBTools` and update to your brand name

**Colors** (in `tailwind.config.ts`):
```typescript
colors: {
  primary: '#14b8a6', // Change to your brand color
}
```

#### 3.3 Add Your Logo

1. Create/upload your logo image to `/public/` folder
2. Update references in:
   - `components/Header.tsx` (header logo)
   - `app/layout.tsx` (organization schema)

---

### Step 4: Build for Production

#### 4.1 Test Production Build

```bash
npm run build
```

This will create an optimized production build. Check for any errors.

#### 4.2 Test Production Locally

```bash
npm start
```

Open **http://localhost:3000** and verify everything works.

---

### Step 5: Deployment

#### Option A: Deploy to Vercel (Recommended - Free)

1. Create account on [Vercel](https://vercel.com)
2. Click **Add New Project**
3. Import your Git repository (or upload folder)
4. Add environment variables:
   - `WORDPRESS_BASE_URL`
   - `WC_CONSUMER_KEY`
   - `WC_CONSUMER_SECRET`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**

Your site will be live in 2-3 minutes! 🚀

#### Option B: Deploy to Railway

1. Create account on [Railway](https://railway.app)
2. Click **New Project**
3. Select **Deploy from GitHub**
4. Add environment variables (same as above)
5. Click **Deploy**

#### Option C: Deploy to Your Own Server

Requirements:
- Node.js 18+ installed on server
- PM2 or similar process manager
- Nginx for reverse proxy

```bash
# On your server
git clone <your-repo>
cd seogbtools
npm install
npm run build

# Start with PM2
pm2 start npm --name "seogbtools" -- start
pm2 save
```

Configure Nginx:
```nginx
server {
    listen 80;
    server_name seogbtools.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### Step 6: Connect Your Domain

#### For Vercel:
1. Go to **Project Settings > Domains**
2. Add your domain (e.g., seogbtools.com)
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

#### For Railway:
1. Go to **Settings > Domains**
2. Add custom domain
3. Update DNS records
4. SSL is automatic

---

## ✅ Final Checklist

Before launching, verify:

- [ ] All products display correctly
- [ ] Blog posts are showing (if you have any)
- [ ] All links work (header, footer, buttons)
- [ ] WhatsApp and Messenger links are correct
- [ ] Signup URL redirects properly
- [ ] Website is responsive on mobile
- [ ] All images load properly
- [ ] Contact information is updated
- [ ] Social media links are correct
- [ ] SEO meta tags are showing (check page source)

---

## 🐛 Troubleshooting

### Products Not Showing

**Problem**: Products page is empty

**Solutions**:
1. Check WordPress has published products
2. Verify WooCommerce API keys in `.env.local`
3. Check WordPress REST API is enabled
4. Try accessing: `https://your-wordpress.com/wp-json/wc/v3/products?consumer_key=XXX&consumer_secret=YYY`

### Images Not Loading

**Problem**: Product images show as broken

**Solutions**:
1. Check images are uploaded in WordPress
2. Verify `next.config.js` allows remote images
3. Check WordPress media library is accessible

### Build Errors

**Problem**: `npm run build` shows errors

**Solutions**:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Check all environment variables are set
4. Look at error message for specific file/line

### Slow Performance

**Solutions**:
1. Enable caching in WordPress
2. Use CDN for images
3. Check `revalidate` values in page files
4. Enable gzip compression on server

---

## 📞 Need Help?

If you encounter any issues:

1. Check the error message carefully
2. Search for the error on Google
3. Check [Next.js Documentation](https://nextjs.org/docs)
4. Contact WhatsApp: [+1-520-563-6362](https://wa.me/15205636362)

---

## 🎉 Congratulations!

Your SEOGBTools website is now ready! 🚀

### What's Next?

1. **Add Content**: Create more products, blog posts, and pages in WordPress
2. **SEO**: Submit sitemap to Google Search Console
3. **Marketing**: Share on social media, run ads
4. **Analytics**: Add Google Analytics tracking
5. **Optimize**: Monitor performance and improve

### Recommended Next Steps

- Create at least 20+ products
- Write 10+ blog posts about SEO
- Set up Google Analytics
- Submit to Google Search Console
- Create Facebook/Instagram pages
- Set up email marketing
- Add live chat support
- Create video tutorials
- Build backlinks

---

**Built with ❤️ for SEO Professionals**

Good luck with your SEO tools business! 💪

