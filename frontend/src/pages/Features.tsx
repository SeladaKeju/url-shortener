export default function Features() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#292929' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to manage, track, and optimize your links
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20" style={{ backgroundColor: '#292929' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Advanced Analytics
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Get detailed insights into your link performance with real-time analytics dashboard.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Click tracking & geographic data
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Device & browser breakdown
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Referral source tracking
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Branded Links
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Use your own domain to create branded short links that build trust.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom domain support
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom slug creation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SSL certificate included
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Link Management
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Organize and manage all your links from one powerful dashboard.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Edit & update links anytime
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Organize with folders & tags
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Set expiration dates
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Developer API
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Powerful API for bulk operations and integrations with your apps.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  RESTful API endpoints
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bulk link creation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive documentation
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Security & Privacy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Enterprise-grade security to protect your links and data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Password-protected links
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Link expiration control
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GDPR compliant
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#363636' }}>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f5f5' }}>
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Work together with your team on link campaigns and projects.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-user accounts
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Role-based permissions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-white mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Shared workspaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using ShortURL to manage their links
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md inline-block"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                Start Free Trial
              </a>
              <a
                href="#plan"
                className="px-8 py-4 text-white font-semibold rounded-lg border-2 hover:bg-white/10 transition-all duration-200 inline-block"
                style={{ borderColor: '#f5f5f5' }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
