'use client';

import { useState, useEffect } from 'react';

export default function ModernHero() {
  // State for card positions
  const [toolOrder, setToolOrder] = useState<number[]>([]);
  
  // Tools with logos AND shapes - Expanded list with 36 tools
  const tools = [
    { name: 'Ahrefs', image: 'https://logo.clearbit.com/ahrefs.com', shape: 'rounded-3xl' },
    { name: 'SEMrush', image: 'https://logo.clearbit.com/semrush.com', shape: 'rounded-full' },
    { name: 'Moz Pro', image: 'https://logo.clearbit.com/moz.com', shape: 'rounded-none' },
    { name: 'Canva', image: 'https://logo.clearbit.com/canva.com', shape: 'rounded-tl-3xl rounded-br-3xl' },
    { name: 'ChatGPT', image: 'https://logo.clearbit.com/openai.com', shape: 'rounded-tr-3xl rounded-bl-3xl' },
    { name: 'Grammarly', image: 'https://logo.clearbit.com/grammarly.com', shape: 'rounded-t-3xl' },
    { name: 'Notion', image: 'https://logo.clearbit.com/notion.so', shape: 'rounded-full' },
    { name: 'Adobe', image: 'https://img.icons8.com/color/96/adobe-creative-cloud.png', shape: 'rounded-xl' },
    { name: 'Spotify', image: 'https://logo.clearbit.com/spotify.com', shape: 'rounded-b-3xl' },
    { name: 'Figma', image: 'https://logo.clearbit.com/figma.com', shape: 'rounded-none' },
    { name: 'HubSpot', image: 'https://logo.clearbit.com/hubspot.com', shape: 'rounded-full' },
    { name: 'Mailchimp', image: 'https://logo.clearbit.com/mailchimp.com', shape: 'rounded-3xl' },
    { name: 'Jasper AI', image: 'https://logo.clearbit.com/jasper.ai', shape: 'rounded-2xl' },
    { name: 'QuillBot', image: 'https://logo.clearbit.com/quillbot.com', shape: 'rounded-tl-3xl rounded-br-3xl' },
    { name: 'Netflix', image: 'https://logo.clearbit.com/netflix.com', shape: 'rounded-full' },
    { name: 'Slack', image: 'https://logo.clearbit.com/slack.com', shape: 'rounded-tr-3xl rounded-bl-3xl' },
    { name: 'Trello', image: 'https://logo.clearbit.com/trello.com', shape: 'rounded-3xl' },
    { name: 'Dropbox', image: 'https://logo.clearbit.com/dropbox.com', shape: 'rounded-xl' },
    { name: 'Asana', image: 'https://logo.clearbit.com/asana.com', shape: 'rounded-full' },
    { name: 'Zoom', image: 'https://logo.clearbit.com/zoom.us', shape: 'rounded-2xl' },
    { name: 'Discord', image: 'https://logo.clearbit.com/discord.com', shape: 'rounded-none' },
    { name: 'GitHub', image: 'https://logo.clearbit.com/github.com', shape: 'rounded-tl-3xl rounded-br-3xl' },
    { name: 'LinkedIn', image: 'https://logo.clearbit.com/linkedin.com', shape: 'rounded-full' },
    { name: 'Twitter', image: 'https://logo.clearbit.com/twitter.com', shape: 'rounded-tr-3xl rounded-bl-3xl' },
    { name: 'WordPress', image: 'https://logo.clearbit.com/wordpress.com', shape: 'rounded-3xl' },
    { name: 'Shopify', image: 'https://logo.clearbit.com/shopify.com', shape: 'rounded-t-3xl' },
    { name: 'Google', image: 'https://logo.clearbit.com/google.com', shape: 'rounded-full' },
    { name: 'Microsoft', image: 'https://logo.clearbit.com/microsoft.com', shape: 'rounded-xl' },
    { name: 'Amazon', image: 'https://logo.clearbit.com/amazon.com', shape: 'rounded-b-3xl' },
    { name: 'Apple', image: 'https://logo.clearbit.com/apple.com', shape: 'rounded-full' },
    { name: 'Facebook', image: 'https://logo.clearbit.com/facebook.com', shape: 'rounded-none' },
    { name: 'Instagram', image: 'https://logo.clearbit.com/instagram.com', shape: 'rounded-3xl' },
    { name: 'YouTube', image: 'https://logo.clearbit.com/youtube.com', shape: 'rounded-2xl' },
    { name: 'TikTok', image: 'https://logo.clearbit.com/tiktok.com', shape: 'rounded-tl-3xl rounded-br-3xl' },
    { name: 'Pinterest', image: 'https://logo.clearbit.com/pinterest.com', shape: 'rounded-full' },
    { name: 'Snapchat', image: 'https://logo.clearbit.com/snapchat.com', shape: 'rounded-tr-3xl rounded-bl-3xl' },
  ];

  // Initialize and shuffle card positions every 1.5 seconds
  useEffect(() => {
    // Initial order
    const initialOrder = Array.from({ length: 16 }, (_, i) => i);
    setToolOrder(initialOrder);

    // Shuffle positions every 0.8 seconds (very fast)
    const interval = setInterval(() => {
      setToolOrder(prevOrder => {
        const newOrder = [...prevOrder];
        // Swap 2 random cards
        const idx1 = Math.floor(Math.random() * 16);
        let idx2 = Math.floor(Math.random() * 16);
        while (idx2 === idx1) {
          idx2 = Math.floor(Math.random() * 16);
        }
        [newOrder[idx1], newOrder[idx2]] = [newOrder[idx2], newOrder[idx1]];
        return newOrder;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with Vibrant Colors */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-300/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Diagonal Stripes */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #3b82f6 35px, #3b82f6 36px)',
        }}></div>
      </div>

      <div className="w-full px-0 pt-0 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen px-8">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            {/* Simple Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 border border-blue-300 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-slate-700 text-sm font-medium">Join 50K+ Digital Marketers</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              <span className="text-slate-900">Get Premium</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Marketing Tools
                </span>
                <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2, 100 2, 150 6C200 10, 250 6, 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="50%" stopColor="#8b5cf6"/>
                      <stop offset="100%" stopColor="#3b82f6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-slate-900">at </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                90% Discount
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-700 text-lg md:text-xl max-w-xl leading-relaxed">
              Get instant access to <span className="text-blue-600 font-semibold">industry-leading software</span> at a fraction of the cost. Empower your marketing campaigns with enterprise-grade tools while saving <span className="text-purple-600 font-semibold">thousands monthly</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-blue-600">60+</div>
                <div className="text-slate-600 text-sm">Premium Tools</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">100%</div>
                <div className="text-slate-600 text-sm">Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-slate-600 text-sm">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 border-2 border-purple-400 hover:border-purple-600"
              >
                <span>View Pricing</span>
              </a>
            </div>
          </div>

          {/* Right Side - Tool Cards Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-4 gap-6">
              {toolOrder.length > 0 && toolOrder.map((toolIdx, idx) => {
                const tool = tools[toolIdx];
                
                return (
                  <div
                    key={`tool-${toolIdx}`}
                    className={`bg-white ${tool.shape} p-4 shadow-md hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 cursor-pointer border-2 border-blue-400 hover:border-purple-500 group relative`}
                  >
                    
                    <div className="flex items-center justify-center relative">
                      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 ${tool.shape} group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-md`}>
                        <img
                          src={tool.image}
                          alt={`${tool.name} - Professional marketing and SEO software tool`}
                          title={`${tool.name} logo - Available through SEOGBTools subscription`}
                          loading="lazy"
                          className="w-12 h-12 object-contain group-hover:rotate-[-6deg] transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/48?text=' + tool.name.charAt(0);
                          }}
                        />
                      </div>
                      {/* Sparkle effect */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-center text-slate-700 font-bold text-xs mt-3 group-hover:text-purple-600 transition-colors duration-300">{tool.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

