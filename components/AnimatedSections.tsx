'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, HeadphonesIcon, Lock, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';

// Why Choose Section
export function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced encryption protocols safeguard your information with military-grade security standards.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Setup',
      description: 'Start working within minutes of signing up. Zero configuration required, instant account activation.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Always-On Assistance',
      description: 'Our dedicated support team is available around the clock through multiple communication channels.',
    },
    {
      icon: Lock,
      title: 'Individual Access Control',
      description: 'Every member receives exclusive credentials with complete privacy and independent workspace.',
    },
    {
      icon: TrendingUp,
      title: 'Unmatched Value',
      description: 'Experience massive savings while accessing top-tier professional software at competitive rates.',
    },
    {
      icon: Users,
      title: 'Thriving Community',
      description: 'Be part of a global network of successful marketers, agencies, and content creators.',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Green Dot Pattern Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Partner With <span className="text-purple-600">SEOGBTools</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the perfect blend of affordability, reliability, and professional-grade tools backed by exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border-2 border-slate-700 rounded-xl p-6 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:transform hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Popular Tools Section - Simplified
export function PopularToolsSection() {
  const tools = [
    { name: 'Ahrefs', logo: '🔗', category: 'Backlinks & SEO' },
    { name: 'SEMrush', logo: '📊', category: 'All-in-One Marketing' },
    { name: 'Moz Pro', logo: '🎯', category: 'SEO Software' },
    { name: 'Surfer SEO', logo: '🏄', category: 'Content Optimization' },
    { name: 'Grammarly', logo: '✍️', category: 'Writing Assistant' },
    { name: 'Canva Pro', logo: '🎨', category: 'Graphic Design' },
    { name: 'SpyFu', logo: '🕵️', category: 'Competitor Analysis' },
    { name: 'Majestic SEO', logo: '👑', category: 'Link Intelligence' },
    { name: 'Screaming Frog', logo: '🐸', category: 'Website Crawler' },
    { name: 'Ubersuggest', logo: '💡', category: 'Keyword Research' },
    { name: 'BuzzSumo', logo: '📱', category: 'Content Research' },
    { name: 'Answer The Public', logo: '❓', category: 'Question Research' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Popular <span className="text-purple-600">SEO Tools</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access over 50 premium tools for SEO, content marketing, design, and more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-purple-600 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center group animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tool.logo}</div>
              <h3 className="text-slate-900 font-semibold mb-1">{tool.name}</h3>
              <p className="text-slate-500 text-xs">{tool.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Tools
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section - Social Media Style
export function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Our monthly software expenses dropped dramatically after joining this platform. The variety of professional tools available through one subscription is incredible - definitely worth every penny.',
      platform: 'linkedin',
      author: 'Alex Rivera',
      title: 'Digital Strategy Lead, Innovation Labs',
    },
    {
      text: 'Finally found a solution that fits our budget without compromising on quality. The platform delivers exactly what we need for our marketing operations at a price point that makes sense.',
      platform: 'linkedin',
      author: 'Jessica Park',
      title: 'Growth Manager, MediaPro Agency',
    },
    {
      text: 'The platform\'s consistent performance and comprehensive tool selection have transformed how we approach our digital campaigns. Reliability meets affordability here.',
      platform: 'g2',
      author: 'Verified User',
      title: 'Small Business (10-50 emp.)',
    },
    {
      text: 'Game changer for our team! @SEOGBTools gave us enterprise-level capabilities without the enterprise price tag. Our productivity has skyrocketed since switching over.',
      platform: 'twitter',
      author: 'DigitalEdge',
      handle: '@digitaledgepro',
    },
    {
      text: 'As someone managing multiple client accounts, having centralized access to various marketing platforms through one service has simplified our operations tremendously. Great value proposition.',
      platform: 'g2',
      author: 'Marcus Johnson',
      title: 'Large Enterprise (1000+ emp.)',
    },
    {
      text: 'Our content team relies on this service daily. The instant access feature and stable performance mean we can focus on creating rather than dealing with technical issues.',
      platform: 'linkedin',
      author: 'Emma Watson',
      title: 'Content Director, Creative Studio',
    },
    {
      text: 'We evaluated several options before choosing this platform. The combination of tool variety, responsive support, and competitive pricing made the decision straightforward.',
      platform: 'linkedin',
      author: 'David Lee',
      title: 'Marketing Operations, ScaleUp Inc',
    },
    {
      text: '@SEOGBTools transformed how we execute campaigns. From analytics to content creation, everything we need is accessible through one dashboard. Highly efficient setup.',
      platform: 'twitter',
      author: 'MetricsFirst',
      handle: '@metricsfirsthq',
    },
    {
      text: 'The service delivers on its promises. Clean interface, reliable tool access, and professional support when needed. It\'s become an essential part of our marketing infrastructure.',
      platform: 'g2',
      author: 'Sophie Martinez',
      title: 'Marketing Specialist',
    },
  ];

  // Social media icons
  const SocialIcon = ({ platform }: { platform: string }) => {
    if (platform === 'linkedin') {
      return (
        <div className="w-5 h-5 bg-[#0A66C2] rounded flex items-center justify-center text-white text-xs font-bold">
          in
        </div>
      );
    }
    if (platform === 'twitter') {
      return (
        <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
          𝕏
        </div>
      );
    }
    if (platform === 'g2') {
      return (
        <div className="w-5 h-5 bg-[#FF6D42] rounded flex items-center justify-center text-white text-[10px] font-bold">
          G2
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#1a1a1a]">
      {/* Customer Avatar Pattern Background - Real Photos */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-8 p-8">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            >
              <img
                src={`https://i.pravatar.cc/100?img=${(i % 70) + 1}`}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-purple-500/40 shadow-xl object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Members Are Saying
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real feedback from professionals who transformed their workflow with our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Social Icon */}
              <div className="mb-4">
                <SocialIcon platform={testimonial.platform} />
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-800 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-slate-900 font-semibold">
                  {testimonial.author}
                </h4>
                <p className="text-slate-600 text-sm">
                  {testimonial.title || testimonial.handle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Workflow?
          </h3>
          <a
            href="https://members.seotoolsgroupbuy.us/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-slate-900 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Join Today
          </a>
        </div>

        {/* Extra Testimonial at Bottom */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                𝕏
              </div>
              <div>
                <p className="text-slate-800 mb-3">
                  &quot;It&apos;s almost like all websites that use @SEOGBTools, I instantly associate them with serious SEO professionals. Just like premium tools = premium results 🙂&quot;
                </p>
                <p className="text-slate-600 text-sm">
                  Alex Johnson <span className="text-slate-400">@alexjseo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How to Order Section - Simplified Colors
export function HowToOrderSection() {
  const steps = [
    {
      number: '1',
      title: 'Pick Your Package',
      description: 'Browse through our flexible subscription tiers and find the perfect match for your requirements.',
      icon: '📋',
    },
    {
      number: '2',
      title: 'Register Instantly',
      description: 'Complete a quick registration process with your email address - takes under 60 seconds.',
      icon: '👤',
    },
    {
      number: '3',
      title: 'Secure Checkout',
      description: 'Process payment through our encrypted gateway with multiple payment method options available.',
      icon: '💳',
    },
    {
      number: '4',
      title: 'Begin Immediately',
      description: 'Receive instant access credentials and dive into your new toolkit right away.',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Green Dot Pattern Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="text-purple-600">Quick Start Guide</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Launch your digital marketing toolkit in just four simple steps - complete setup in under 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent transform translate-x-1/2 -translate-y-1/2"></div>
              )}

              <div className="bg-[#1a1a1a] rounded-xl p-6 border-2 border-slate-700 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 text-center relative z-10 animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-[#0a0a0a] shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://members.seotoolsgroupbuy.us/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

