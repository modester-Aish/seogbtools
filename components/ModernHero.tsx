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
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with Purple & Green */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl"></div>
        
        {/* Green Dot Pattern - Lighter & More Spaced */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 2px, transparent 2px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(139, 92, 246, 0.03) 49%, rgba(139, 92, 246, 0.03) 51%, transparent 52%)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="w-full px-0 pt-0 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen px-8">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Join 50K+ Digital Marketers</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Unlock Professional
              <br />
              <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Marketing Tools
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
              Get instant access to <span className="text-purple-200 font-semibold">industry-leading software</span> at a fraction of the cost. Empower your marketing campaigns with enterprise-grade tools while saving <span className="text-green-300 font-semibold">thousands monthly</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">60+</div>
                <div className="text-white/70 text-sm">Software Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Always</div>
                <div className="text-white/70 text-sm">Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white hover:bg-purple-50 text-purple-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <span>Explore Plans</span>
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
                    className={`bg-white/90 backdrop-blur-sm ${tool.shape} p-4 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 cursor-pointer border border-purple-200/30 hover:border-purple-400 group relative`}
                  >
                    
                    <div className="flex items-center justify-center relative">
                      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 ${tool.shape} group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-lg`}>
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
                    <p className="text-center text-purple-900 font-bold text-xs mt-3 group-hover:text-purple-600 transition-colors duration-300">{tool.name}</p>
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

