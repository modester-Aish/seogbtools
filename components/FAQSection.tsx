'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const faqs = [
    {
      question: 'What are your subscription rates?',
      answer: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Our platform offers multiple subscription tiers designed to accommodate various budgets and usage needs. Each tier provides access to professional-grade software at significantly reduced rates.
          </p>
          
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Available Subscription Options:</h3>
            <p className="text-slate-700 leading-relaxed mb-2">
              Entry-level packages begin at <strong>$15 monthly</strong> with comprehensive tool access including industry-standard platforms.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Select from <strong>Basic, Premium, or Complete</strong> tiers depending on your operational needs. Detailed package information available <Link href="/products" className="text-blue-600 underline hover:text-purple-600">in our catalog</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Every tier includes:</h3>
            <ul className="space-y-3">
              <li className="text-slate-700">
                <strong className="text-slate-900">60+ Professional Platforms:</strong> Immediate access to leading marketing, analytics, and content creation software. <Link href="/products" className="text-blue-600 underline hover:text-purple-600">Explore catalog</Link>
              </li>
              <li className="text-slate-700">
                <strong className="text-slate-900">Round-the-Clock Support:</strong> Reach our assistance team any time through live chat, messaging apps, or email channels.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Transparent Pricing:</h3>
            <p className="text-slate-700 leading-relaxed">
              <strong>Zero hidden charges:</strong> Your subscription price covers everything - no activation fees, transaction charges, or surprise costs.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: 'Can I access specific tools individually?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Yes! We offer specialized packages focused on specific tool categories. This allows you to subscribe only to the software you actually need.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Our <strong>Content Creator Package</strong> ($14.99/mo) focuses on writing and editing platforms, while the <strong>Visual Designer Package</strong> (same price) provides graphic design and media tools.
          </p>
        </div>
      ),
    },
    {
      question: 'Is there a trial period available?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Absolutely! We provide a <strong>no-risk 7-day trial period</strong> for all subscription tiers. Register with your email, select your preferred package, and gain immediate platform access.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Credit card information is not required during the trial phase. Continue with monthly billing afterward, or cancel hassle-free. We also back this with a <strong>30-day satisfaction guarantee</strong>.
          </p>
        </div>
      ),
    },
    {
      question: 'What software is included in memberships?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Membership grants you access to an extensive library of 60+ professional marketing and productivity platforms. Each account comes with individual credentials and full feature availability.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Featured platforms include: <strong>Analytics tools</strong> for data tracking, <strong>Content optimization software</strong> for better rankings, <strong>Writing assistants</strong> for quality content, <strong>Design platforms</strong> for visual creation, plus many specialized applications.
          </p>
        </div>
      ),
    },
    {
      question: 'Which payment options do you support?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            We accommodate various payment preferences for maximum flexibility:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
            <li><strong>Major Credit Cards:</strong> Visa, Mastercard, Discover, AMEX</li>
            <li><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</li>
            <li><strong>Crypto Payments:</strong> BTC, ETH, and select altcoins</li>
            <li><strong>Direct Transfer:</strong> Wire transfer option for yearly plans</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Every transaction processes through secure, encrypted payment gateways. Your financial data is never retained on our servers.
          </p>
        </div>
      ),
    },
    {
      question: 'Is this platform secure and legitimate?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Absolutely! Our business model operates through authorized enterprise licensing agreements with software providers. The shared access approach we use is an established and legitimate industry practice.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We implement <strong>enterprise-grade security protocols</strong> to protect your information. Every member receives exclusive login credentials, ensuring your work remains private and isolated from other users&apos; activities.
          </p>
        </div>
      ),
    },
    {
      question: 'What is the account activation timeframe?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            <strong>Immediate activation!</strong> Your credentials arrive via email within 2-5 minutes after payment verification. Setup is instantaneous with zero waiting period.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Monitor your inbox (including spam/junk folders) for your account information. Begin utilizing the full platform immediately upon receiving your login details.
          </p>
        </div>
      ),
    },
    {
      question: 'Can subscriptions be terminated early?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Absolutely! You maintain full autonomy over your membership. Terminate your subscription at any moment through your account panel or by reaching out to our support staff.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We stand behind our service with a <strong>30-day satisfaction guarantee</strong>. Not happy with your experience? Request a complete refund within the first month—no complicated questions or forms required.
          </p>
        </div>
      ),
    },
    {
      question: 'How can I reach your support team?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Our assistance team operates continuously through various communication methods:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
            <li><strong>WhatsApp:</strong> Direct messaging for immediate responses</li>
            <li><strong>Messenger:</strong> Facebook chat integration</li>
            <li><strong>Email:</strong> support@seogbtools.com for detailed inquiries</li>
            <li><strong>Live Chat:</strong> Real-time assistance on our website</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Average response time is under 5 minutes. Our team handles technical troubleshooting, account queries, and general assistance.
          </p>
        </div>
      ),
    },
    {
      question: 'What if a platform experiences downtime?',
      answer: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Our infrastructure monitoring systems track all platforms continuously to maintain optimal performance. We guarantee <strong>99.9% availability</strong> across our entire service portfolio.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Should any platform experience temporary unavailability, we immediately deploy backup credentials or provide subscription extensions as compensation. Technical response teams address disruptions within minutes to minimize impact.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
        {/* Left Column - Questions (Dark) */}
        <div className="lg:col-span-2 bg-slate-900 p-8 lg:p-12">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-400/30">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-12">
            Common Questions,<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clear Answers
            </span>
          </h2>
          
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left py-5 text-white hover:text-blue-400 transition-colors ${
                    selectedIndex === index ? 'text-blue-400' : ''
                  }`}
                >
                  <span className="text-base lg:text-lg">{faq.question}</span>
                </button>
                {index < faqs.length - 1 && (
                  <div className="border-b border-[#333333]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Answer (Light) */}
        <div className="lg:col-span-3 bg-blue-50 p-8 lg:p-12 border-l-4 border-blue-400">
          <div className="max-w-3xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              {faqs[selectedIndex].question}
            </h3>
            
            <div className="text-slate-700">
              {faqs[selectedIndex].answer}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4 text-lg">Need more information?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/15205636362"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Message on WhatsApp
            </a>
            <a
              href="https://m.me/108606453898810"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Connect on Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

