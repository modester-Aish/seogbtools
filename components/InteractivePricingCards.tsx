'use client';

import { Check, Star } from 'lucide-react';

export default function InteractivePricingCards() {
  const plans = [
    {
      name: 'Small Plan',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for beginners and small projects',
      features: [
        'Ahrefs Lite',
        'SEMrush Guru',
        'Moz Pro',
        'Ubersuggest',
        'Grammarly Premium',
        'Basic Support',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Ahrefs Combo',
      price: '$19.99',
      period: '/month',
      description: 'Most popular for SEO professionals',
      features: [
        'Ahrefs Standard',
        'SEMrush Business',
        'Moz Pro Advanced',
        'Surfer SEO',
        'SpyFu Pro',
        'Majestic SEO',
        'Grammarly Premium',
        'Priority Support',
      ],
      popular: true,
      color: 'from-primary to-teal-600',
    },
    {
      name: 'Mega Plan',
      price: '$29.99',
      period: '/month',
      description: 'Complete toolkit for agencies',
      features: [
        'All Tools from Ahrefs Combo',
        'Canva Pro',
        'BuzzSumo Pro',
        'Answer The Public',
        'Screaming Frog',
        'All Premium Tools',
        '24/7 Priority Support',
        'Custom Solutions',
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Lite Plan',
      price: '$7.99',
      period: '/month',
      description: 'Basic tools for starters',
      features: [
        'Ubersuggest Pro',
        'Grammarly',
        'Canva Free',
        'Basic SEO Tools',
        'Email Support',
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            All plans include instant access, secure accounts, and money-back guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-slate-800 rounded-2xl p-8 border ${
                plan.popular ? 'border-primary shadow-xl shadow-primary/20 scale-105' : 'border-slate-700'
              } hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={14} fill="currentColor" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start space-x-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Additional Plans */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Writer Plan */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Writer Plan</h3>
            <p className="text-slate-400 text-sm mb-4">For content creators and bloggers</p>
            <div className="text-3xl font-bold text-white mb-4">$14.99<span className="text-lg text-slate-400">/month</span></div>
            <ul className="space-y-2 mb-6">
              {['Grammarly Premium', 'Surfer SEO', 'Copy.ai', 'Hemingway Editor', 'Priority Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-slate-300 text-sm">
                  <Check className="text-primary" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://members.seotoolsgroupbuy.us/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Designer Plan */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Designer Plan</h3>
            <p className="text-slate-400 text-sm mb-4">For graphic designers and marketers</p>
            <div className="text-3xl font-bold text-white mb-4">$14.99<span className="text-lg text-slate-400">/month</span></div>
            <ul className="space-y-2 mb-6">
              {['Canva Pro', 'Adobe Stock', 'Envato Elements', 'Shutterstock', 'Priority Support'].map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-slate-300 text-sm">
                  <Check className="text-primary" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://members.seotoolsgroupbuy.us/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <Shield className="text-primary" size={20} />
            <span className="text-primary font-semibold">30-Day Money-Back Guarantee on All Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

