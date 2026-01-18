export default function Plan() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#292929' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20" style={{ backgroundColor: '#292929' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="p-8 rounded-xl border-2" style={{ backgroundColor: '#363636', borderColor: '#444' }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-gray-300">Perfect for personal use</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">100 links per month</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Standard support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">7 days link history</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 text-white font-semibold rounded-lg border-2 hover:bg-white/10 transition-all duration-200" style={{ borderColor: '#f5f5f5' }}>
                Get Started
              </button>
            </div>

            {/* Pro Plan - Featured */}
            <div className="p-8 rounded-xl border-2 relative transform md:scale-105" style={{ backgroundColor: '#363636', borderColor: '#f5f5f5' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-black" style={{ backgroundColor: '#f5f5f5' }}>
                MOST POPULAR
              </div>
              
              <div className="mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-gray-300">For professionals and growing teams</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Unlimited links</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Custom branded links</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Unlimited link history</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">API access</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200" style={{ backgroundColor: '#f5f5f5' }}>
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-xl border-2" style={{ backgroundColor: '#363636', borderColor: '#444' }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-white">Custom</span>
                </div>
                <p className="text-gray-300">For large organizations</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">24/7 phone support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">SLA guarantee</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Team training</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 text-white font-semibold rounded-lg border-2 hover:bg-white/10 transition-all duration-200" style={{ borderColor: '#f5f5f5' }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Compare Plans
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Free</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Pro</th>
                    <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">Links per month</td>
                    <td className="text-center py-4 px-6 text-gray-300">100</td>
                    <td className="text-center py-4 px-6 text-gray-300">Unlimited</td>
                    <td className="text-center py-4 px-6 text-gray-300">Unlimited</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">Custom domain</td>
                    <td className="text-center py-4 px-6 text-gray-300">✗</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">Advanced analytics</td>
                    <td className="text-center py-4 px-6 text-gray-300">✗</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">API access</td>
                    <td className="text-center py-4 px-6 text-gray-300">✗</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                    <td className="text-center py-4 px-6 text-white">✓</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">Team collaboration</td>
                    <td className="text-center py-4 px-6 text-gray-300">✗</td>
                    <td className="text-center py-4 px-6 text-gray-300">Up to 5 users</td>
                    <td className="text-center py-4 px-6 text-white">Unlimited</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: '#444' }}>
                    <td className="py-4 px-6 text-gray-300">Support</td>
                    <td className="text-center py-4 px-6 text-gray-300">Email</td>
                    <td className="text-center py-4 px-6 text-gray-300">Priority</td>
                    <td className="text-center py-4 px-6 text-gray-300">24/7 Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#292929' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="group border-b pb-4" style={{ borderColor: '#444' }}>
                <summary className="flex items-center justify-between cursor-pointer py-4">
                  <h3 className="text-lg font-semibold text-white">
                    Can I change my plan later?
                  </h3>
                  <svg className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-300 mt-2">
                  Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </details>

              <details className="group border-b pb-4" style={{ borderColor: '#444' }}>
                <summary className="flex items-center justify-between cursor-pointer py-4">
                  <h3 className="text-lg font-semibold text-white">
                    What payment methods do you accept?
                  </h3>
                  <svg className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-300 mt-2">
                  We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
                </p>
              </details>

              <details className="group border-b pb-4" style={{ borderColor: '#444' }}>
                <summary className="flex items-center justify-between cursor-pointer py-4">
                  <h3 className="text-lg font-semibold text-white">
                    Is there a free trial for paid plans?
                  </h3>
                  <svg className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-300 mt-2">
                  Yes! We offer a 14-day free trial for the Pro plan. No credit card required.
                </p>
              </details>

              <details className="group border-b pb-4" style={{ borderColor: '#444' }}>
                <summary className="flex items-center justify-between cursor-pointer py-4">
                  <h3 className="text-lg font-semibold text-white">
                    What happens if I exceed my link limit?
                  </h3>
                  <svg className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-300 mt-2">
                  On the Free plan, you'll need to upgrade to create more links. We'll notify you before you reach your limit.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
