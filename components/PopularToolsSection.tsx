'use client';

import { useState } from 'react';

export default function PopularToolsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const tools = [
    {
      name: 'AHREF$',
      price: '$30.00',
      image: '/tools/ahrefs-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'SEMRU$H',
      price: '$4.99',
      image: '/tools/semrush-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Moz Pro',
      price: '$4.99',
      image: '/tools/moz-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Canva Pro',
      price: '$4.99',
      image: '/tools/canva-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'ChatGPT Plus',
      price: '$4.99',
      image: '/tools/chatgpt-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'RunwayML',
      price: '$4.99',
      image: '/tools/runwayml-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Netflix',
      price: '$4.99',
      image: '/tools/netflix-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Claude',
      price: '$4.99',
      image: '/tools/claude-logo.svg',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Grammarly',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/grammarly.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Notion',
      price: '$4.99',
      image: 'https://img.icons8.com/fluency/96/notion.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Adobe Creative',
      price: '$9.99',
      image: 'https://img.icons8.com/color/96/adobe-creative-cloud.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Spotify Premium',
      price: '$3.99',
      image: 'https://img.icons8.com/color/96/spotify.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Jasper AI',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/chatgpt.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Surfer SEO',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/google-logo.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Mailchimp',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/email.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Hootsuite',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/twitter--v1.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Figma Pro',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/figma.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'HubSpot',
      price: '$9.99',
      image: 'https://img.icons8.com/color/96/business.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'QuillBot',
      price: '$3.99',
      image: 'https://img.icons8.com/color/96/documents.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Midjourney',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/image-gallery.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Envato Elements',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/design.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Buzzsumo',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/graph.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Helium 10',
      price: '$9.99',
      image: 'https://img.icons8.com/color/96/amazon.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Leonardo.AI',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/artificial-intelligence.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Freepik Premium',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/image.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'CapCut Pro',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/video-editing.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'InVideo',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/video.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Coursera Plus',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/graduation-cap.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Udemy Pro',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/udemy.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Turnitin',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/checked-2.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'WordHero',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/edit.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Copy.ai',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/document.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Majestic SEO',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/link.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'SpyFu',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/search.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Ubersuggest',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/analytics.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Scribd Premium',
      price: '$3.99',
      image: 'https://img.icons8.com/color/96/book.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Prime Video',
      price: '$3.99',
      image: 'https://img.icons8.com/color/96/amazon-prime-video.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Prezi',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/presentation.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'Epidemic Sound',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/music.png',
      bgColor: '#f0f4ff'
    },
    {
      name: 'StoryBlocks',
      price: '$4.99',
      image: 'https://img.icons8.com/color/96/movie.png',
      bgColor: '#f0f4ff'
    }
  ];

  const displayedTools = showAll ? tools : tools.slice(0, 20);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
      aria-label="Premium Marketing Tools Collection"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      {/* Dot Pattern Background - Blue Version */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Tools Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-900">Explore Our </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Premium Tool Collection
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Access Ahrefs, SEMrush, Moz Pro, ChatGPT Plus, Canva Pro & more at 90% discount. Best group buy SEO tools 2025.
          </p>
        </div>

        {/* Tools Grid - 4 columns per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1850px] mx-auto">
          {displayedTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-blue-400 hover:border-purple-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 flex flex-col h-[340px]"
            >
              {/* Logo Section */}
              <div 
                className="h-[145px] flex items-center justify-center p-5"
                style={{ backgroundColor: tool.bgColor }}
              >
                <img
                  src={tool.image}
                  alt={`${tool.name} logo - Premium SEO and marketing tool available at affordable price`}
                  title={`${tool.name} - Professional digital marketing software`}
                  className="w-20 h-20 object-contain"
                  loading="lazy"
                  style={{ 
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }}
                />
              </div>

              {/* Large Tool Name - Black on White */}
              <div className="bg-white py-3 px-3">
                <h3 className="text-slate-900 font-bold text-base text-center uppercase leading-tight">
                  {tool.name}
                </h3>
              </div>

              {/* Blue Name Band */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-2">
                <p className="text-white font-semibold text-sm text-center">
                  {tool.name}
                </p>
              </div>

              {/* Price */}
              <div className="bg-white py-3 flex-1 flex items-center justify-center">
                <p className="text-slate-900 font-bold text-lg text-center">
                  {tool.price}
                </p>
              </div>

              {/* Buy Button */}
              <div className="bg-white px-4 pb-4">
                <a 
                  href="https://members.seotoolsgroupbuy.us/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2.5 rounded text-center transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {tools.length > 20 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  View More Tools ({tools.length - 20} more)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

