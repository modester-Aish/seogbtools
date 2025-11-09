import { CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

export default function FeatureSections() {
  return (
    <>
      {/* Main Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Access to <span className="text-primary">50+ Premium SEO Tools</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Our group buy service gives you affordable access to the most powerful SEO tools used by industry professionals worldwide.
              </p>
              
              <div className="space-y-4">
                {[
                  'Ahrefs - Complete SEO toolset for backlinks, keywords, and competitor analysis',
                  'SEMrush - All-in-one marketing toolkit for SEO, PPC, and content',
                  'Moz Pro - Advanced SEO software with rank tracking and site audits',
                  'Surfer SEO - Content optimization tool to rank higher on Google',
                  'Grammarly Premium - AI-powered writing assistant',
                  'Canva Pro - Professional design tool with premium templates',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, title: '99.9% Uptime', desc: 'Reliable service always available' },
                { icon: Shield, title: 'Secure & Private', desc: 'Your data is always protected' },
                { icon: Zap, title: 'Instant Access', desc: 'Get started in minutes' },
                { icon: CheckCircle, title: 'Money-Back', desc: '30-day guarantee' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary transition-all duration-300"
                >
                  <stat.icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                  <p className="text-slate-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Group Buy <span className="text-primary">SEO Tools</span>?
            </h2>
            <p className="text-xl text-slate-400">
              Save up to 90% on premium SEO tools subscriptions while getting full access to all features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Save Money</h3>
              <p className="text-slate-400">
                Get access to tools worth $1000+/month for just a fraction of the cost
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Boost Rankings</h3>
              <p className="text-slate-400">
                Use professional SEO tools to improve your search engine rankings
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Work Faster</h3>
              <p className="text-slate-400">
                Automate your SEO tasks and get better results in less time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl p-12 border border-primary/30">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by 50,000+ SEO Professionals Worldwide
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join our community of digital marketers, agencies, freelancers, and bloggers who save thousands of dollars every year
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-slate-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-slate-300">Premium Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-slate-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-slate-300">Uptime</div>
                </div>
              </div>

              <a
                href="https://members.seotoolsgroupbuy.us/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/50"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

