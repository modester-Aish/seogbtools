'use client';

import { useState } from 'react';

interface PricingCard {
  name: string;
  price: string;
  toolCount: string;
  description: string;
  icon: string;
  iconBgColor: string;
  benefits: string[];
  tools: string[];
  isPopular?: boolean;
}

export default function PricingPlansSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const pricingData: PricingCard[] = [
    {
      name: 'SMALL PLAN',
      price: '$15',
      toolCount: '60+ Tools',
      description: 'Perfect for starters',
      icon: '⭐',
      iconBgColor: 'from-blue-500 to-blue-600',
      benefits: [
        'Complete SEO Suite',
        'AI Writing Tools',
        'Design & Graphics'
      ],
      tools: [
        'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'Kwfinder', 'ChatGPT 4', 
        'Grammarly', 'WordAi', 'Quillbot', 'CANVA pro', 'Envato Elements', 
        'Leonardo.AI', 'Freepik', 'Netflix', 'Prime Video', 'Helium 10'
      ]
    },
    {
      name: 'AHREF$ COMBO',
      price: '$25',
      toolCount: '60+ Tools',
      description: 'Best value package',
      icon: '⚡',
      iconBgColor: 'from-orange-500 to-orange-600',
      benefits: [
        'Premium SEO Tools',
        'Advanced Analytics',
        'Content Creation'
      ],
      tools: [
        'AHREFS', 'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'ChatGPT 4', 
        'Grammarly', 'WordAi', 'Quillbot', 'Jasper Ai', 'CANVA pro', 
        'Envato Elements', 'Leonardo.AI', 'Freepik', 'CAPCUT Pro', 
        'Netflix', 'Helium 10', 'Buzzsumo'
      ],
      isPopular: true
    },
    {
      name: 'MEGA PLAN',
      price: '$50',
      toolCount: '80+ Tools',
      description: 'Everything you need',
      icon: '👑',
      iconBgColor: 'from-purple-500 to-purple-600',
      benefits: [
        'All Premium Tools',
        'E-commerce Suite',
        'Learning Platform'
      ],
      tools: [
        'AHREFS', 'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'ChatGPT 4', 
        'Claude Ai', 'Grammarly', 'WordAi', 'Jasper Ai', 'Copy Ai', 
        'CANVA pro', 'Envato Elements', 'Leonardo.AI', 'Freepik', 
        'StoryBlocks', 'CAPCUT Pro', 'Netflix', 'Prime Video', 
        'Helium 10', 'Jungle Scout', 'Buzzsumo', 'Turnitin'
      ]
    },
    {
      name: 'LITE PLAN',
      price: '$10',
      toolCount: 'SEMRUSH Combo, 20+ Tools',
      description: 'Essential tools',
      icon: '⭐',
      iconBgColor: 'from-blue-500 to-blue-600',
      benefits: [
        'Essential SEO',
        'Basic Design',
        'Entertainment'
      ],
      tools: [
        'SEMRUSH Guru', 'MOZ Pro', 'Ubersuggest', 'Grammarly', 
        'Quillbot', 'Canva', 'Envato Elements', 'Netflix', 
        'Prime Video', 'Buzzsumo', 'Turnitin'
      ]
    },
    {
      name: 'WRITER PLAN',
      price: '$14.99',
      toolCount: '40+ Tools',
      description: 'For content creators',
      icon: '✍️',
      iconBgColor: 'from-green-500 to-green-600',
      benefits: [
        'Premium Writing Tools',
        'SEO Content Suite',
        'Grammar & Style'
      ],
      tools: [
        'Grammarly Premium', 'Surfer SEO', 'Copy.ai', 'Jasper AI', 
        'QuillBot Premium', 'Hemingway Editor', 'WordAi', 
        'Copyscape Premium', 'SEMrush Writing Assistant', 'ChatGPT 4',
        'Claude AI', 'Content at Scale', 'Writesonic'
      ]
    },
    {
      name: 'DESIGNER PLAN',
      price: '$14.99',
      toolCount: '50+ Tools',
      description: 'For graphic designers',
      icon: '🎨',
      iconBgColor: 'from-pink-500 to-pink-600',
      benefits: [
        'Creative Cloud Access',
        'Stock Resources',
        'Design Templates'
      ],
      tools: [
        'Canva Pro', 'Adobe Creative Cloud', 'Envato Elements', 
        'Adobe Stock', 'Shutterstock', 'Figma Pro', 'Sketch',
        'InVision', 'Freepik Premium', 'IconScout', 'StoryBlocks',
        'Motion Array', 'Epidemic Sound'
      ]
    }
  ];

  const handleViewTools = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: false }));
  };

  return (
    <section 
      className="py-20 bg-[#0a0a0a] relative overflow-hidden" 
      id="pricing"
      aria-label="Subscription Pricing Plans"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Select Your Subscription Package
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get instant access to premium tools at unbeatable prices
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className="relative h-[500px]"
              style={{ perspective: '1000px' }}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className="relative w-full h-full transition-all duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* FRONT SIDE */}
                <div
                  className={`absolute w-full h-full bg-[#1a1a1a] rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    card.isPopular ? 'border-2 border-green-500' : 'border border-gray-800'
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-1 w-6 h-6">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {card.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white">{card.price}</span>
                      <span className="text-gray-400 text-sm ml-2 uppercase">/month</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {card.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-white">
                          <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Tools Link */}
                  <button
                    onClick={() => handleViewTools(index)}
                    className="text-gray-400 hover:text-white text-sm font-medium mb-6 underline transition-colors text-left"
                  >
                    View all {card.tools.length} tools →
                  </button>

                  {/* Buy Now Button */}
                  <a
                    href="https://members.seotoolsgroupbuy.us/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      card.isPopular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-[#252525] hover:bg-[#2a2a2a] text-white border border-gray-700'
                    }`}
                  >
                    Buy Now
                  </a>
                </div>

                {/* BACK SIDE - Tools List */}
                <div
                  className={`absolute w-full h-full bg-[#1a1a1a] rounded-2xl p-6 flex flex-col overflow-y-auto custom-scrollbar ${
                    card.isPopular ? 'border-2 border-green-500' : 'border border-gray-800'
                  }`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-4 text-center">
                    Included Tools ({card.tools.length})
                  </h4>
                  
                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <ul className="space-y-2">
                      {card.tools.map((tool, i) => (
                        <li key={i} className="flex items-start text-white text-sm">
                          <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleMouseLeave(index)}
                    className={`mt-4 w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center ${
                      card.isPopular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-[#252525] hover:bg-[#2a2a2a] text-white border border-gray-700'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

