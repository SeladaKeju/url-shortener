import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import urlService from "../services/urlService";
import type { Url } from "../services/urlService";
import API_BASE_URL from "../config/api";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userUrls, setUserUrls] = useState<Url[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserUrls();
    }
  }, [isAuthenticated]);

  const fetchUserUrls = async () => {
    try {
      const response = await urlService.getUserUrls();
      setUserUrls(response.data);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setShortUrl(""); // Clear previous result

    try {
      if (!isAuthenticated) {
        setError("Please login to shorten URLs");
        setLoading(false);
        return;
      }

      // Validate URL format
      if (!url || url.trim() === "") {
        setError("Please enter a URL");
        setLoading(false);
        return;
      }

      // Auto-add https:// if no protocol
      let formattedUrl = url.trim();
      if (!formattedUrl.match(/^https?:\/\//i)) {
        formattedUrl = `https://${formattedUrl}`;
      }

      // Validate URL format
      try {
        new URL(formattedUrl);
      } catch {
        setError("Please enter a valid URL (e.g., example.com or https://example.com)");
        setLoading(false);
        return;
      }

      console.log("Creating short URL for:", formattedUrl);
      const response = await urlService.createUrl({ originalUrl: formattedUrl });
      console.log("Response:", response);
      
      const fullShortUrl = `${API_BASE_URL}/${response.data.shortUrl}`;
      setShortUrl(fullShortUrl);
      setSuccess("URL shortened successfully!");
      setUrl("");
      
      // Refresh the list
      await fetchUserUrls();
    } catch (error) {
      console.error("Error creating short URL:", error);
      setError(error instanceof Error ? error.message : "Error shortening URL");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (urlId: string) => {
    try {
      await urlService.deleteUrl(urlId);
      fetchUserUrls();
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#292929' }}>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden text-white py-16 md:py-24"
        style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Shorten Your Links,
              <br />
              Amplify Your Reach
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300">
              Transform long URLs into short, shareable links in seconds
            </p>

            {isAuthenticated && (
              <div className="mb-6">
                <Link
                  to="/dashboard"
                  className="inline-block px-8 py-3 text-black font-semibold rounded-lg hover:bg-gray-200 transition"
                  style={{ backgroundColor: '#f5f5f5' }}
                >
                  Go to Dashboard →
                </Link>
              </div>
            )}

            {/* URL Shortener Form */}
            <div className="max-w-3xl mx-auto rounded-xl shadow-lg p-6" style={{ backgroundColor: '#292929' }}>
              {!isAuthenticated && (
                <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500 text-yellow-500">
                  ⚠️ Please login to shorten URLs
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500 text-red-500">
                  ❌ {error}
                </div>
              )}
              {success && !error && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500 text-green-500">
                  ✅ {success}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col md:flex-row gap-3 md:gap-0">
                  <input
                    type="text"
                    id="url-input"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.com/your-long-url"
                    disabled={!isAuthenticated || loading}
                    className="flex-1 px-5 py-3.5 border-2 text-white rounded-lg md:rounded-r-none md:border-r-0 focus:ring-2 focus:ring-white/20 focus:border-white/20 outline-none transition placeholder-gray-400 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#363636', borderColor: '#444' }}
                  />
                  <button
                    type="submit"
                    disabled={loading || !isAuthenticated || !url.trim()}
                    className="text-black font-semibold py-3.5 px-8 rounded-lg md:rounded-l-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-md"
                    style={{ backgroundColor: '#f5f5f5' }}
                  >
                    {loading ? "Shortening..." : "Shorten URL"}
                  </button>
                </div>
              </form>

              {/* Result */}
              {shortUrl && (
                <div className="mt-5 p-5 rounded-lg border" style={{ backgroundColor: '#363636', borderColor: '#444' }}>
                  <p className="text-sm font-medium text-gray-300 mb-3">
                    ✓ Your shortened URL:
                  </p>
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                    <input
                      type="text"
                      value={shortUrl}
                      readOnly
                      className="flex-1 px-4 py-2.5 border text-white rounded-lg font-mono text-sm"
                      style={{ backgroundColor: '#292929', borderColor: '#444' }}
                    />
                    <button
                      onClick={() => copyToClipboard(shortUrl)}
                      className="px-6 py-2.5 text-black font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 shadow-sm"
                      style={{ backgroundColor: '#f5f5f5' }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 -mb-1">
          <svg viewBox="0 0 1440 80" className="w-full h-auto">
            <path
              fill="#292929"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Features
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Feature 1 - Detailed Link Analytics */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Detailed Link Analytics
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Track every click with real-time analytics. Get insights into
                geographic data, device types, and referral sources to
                understand your audience better.
              </p>
            </div>

            {/* Feature 2 - Custom Branded Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Branded Links
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Create professional short links using your own custom domain to
                strengthen brand recognition and build trust with your audience.
              </p>
            </div>

            {/* Feature 3 - Bulk URL Creation */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bulk URL Creation
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Create thousands of short links instantly with our powerful API
                and bulk import tools. Perfect for large-scale campaigns and
                automated workflows.
              </p>
            </div>

            {/* Feature 4 - Link Management */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Advanced Link Management
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Manage all your links from one dashboard. Edit URLs, organize
                into folders, set expiration dates, and perform bulk operations
                with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My URLs Section - Only show if authenticated */}
      {isAuthenticated && userUrls.length > 0 && (
        <section className="py-20" style={{ backgroundColor: '#292929' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                My Shortened URLs
              </h2>
              <div className="space-y-4">
                {userUrls.map((urlItem) => (
                  <div
                    key={urlItem.id}
                    className="p-5 rounded-lg border"
                    style={{ backgroundColor: '#363636', borderColor: '#444' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-400 mb-1">Original URL</p>
                        <p className="text-white truncate mb-3">{urlItem.originalUrl}</p>
                        
                        <p className="text-sm text-gray-400 mb-1">Short URL</p>
                        <div className="flex items-center gap-2">
                          <a
                            href={`${API_BASE_URL}/${urlItem.shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-mono"
                          >
                            {`${API_BASE_URL}/${urlItem.shortUrl}`}
                          </a>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-2">
                          Created: {new Date(urlItem.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(`${API_BASE_URL}/${urlItem.shortUrl}`)}
                          className="px-4 py-2 text-black font-medium rounded-lg hover:bg-gray-200 transition"
                          style={{ backgroundColor: '#f5f5f5' }}
                        >
                          Copy
                        </button>
                        <button
                          onClick={() => handleDelete(urlItem.id)}
                          className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#292929' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by Millions Worldwide
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of businesses and individuals who rely on
                ShortURL
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">10M+</div>
                <div className="text-lg text-gray-300">Links Created</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">500K+</div>
                <div className="text-lg text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  99.99%
                </div>
                <div className="text-lg text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">150+</div>
                <div className="text-lg text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#363636' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Left Column - Title */}
              <div className="md:col-span-1">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* Right Column - Questions */}
              <div className="md:col-span-2 space-y-1">
                {/* FAQ 1 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      What Is a URL Shortener?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      A URL shortener is a tool that converts long URLs into
                      short, manageable links. It creates a unique alias that
                      redirects to your original URL, making links easier to
                      share and track.
                    </p>
                  </div>
                </details>

                {/* FAQ 2 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      How Does a URL Shortener Work?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      When you enter a long URL, our system generates a unique
                      short code and stores the mapping in our database. When
                      someone clicks the short link, our server looks up the
                      original URL and redirects them instantly.
                    </p>
                  </div>
                </details>

                {/* FAQ 3 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      What Are the Benefits of Using a Short URL?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      Short URLs are easier to share, remember, and look cleaner
                      in marketing materials. They also provide analytics to
                      track clicks, improve social media engagement, and help
                      maintain brand consistency.
                    </p>
                  </div>
                </details>

                {/* FAQ 4 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      What Is a Custom URL Shortener?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      A custom URL shortener allows you to use your own domain
                      name for shortened links, creating branded URLs like
                      yourbrand.com/offer instead of generic short links. This
                      builds trust and reinforces your brand identity.
                    </p>
                  </div>
                </details>

                {/* FAQ 5 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      How Do I Shorten a URL for Free?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      Simply paste your long URL into our homepage form and
                      click "Shorten URL". You'll instantly receive a shortened
                      link that you can copy and share. No registration required
                      for basic usage.
                    </p>
                  </div>
                </details>

                {/* FAQ 6 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      How Do I Know Your Service Is Reliable and Scalable?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      We maintain 99.99% uptime with globally distributed
                      infrastructure, automatic scaling, and redundant systems.
                      Our service handles millions of redirects daily with
                      sub-100ms response times across the globe.
                    </p>
                  </div>
                </details>

                {/* FAQ 7 */}
                <details className="group border-b" style={{ backgroundColor: '#292929', borderColor: '#363636' }}>
                  <summary className="flex items-center justify-between cursor-pointer p-6 transition" style={{ backgroundColor: 'transparent' }}>
                    <h3 className="text-lg font-semibold text-white">
                      Can I Use a Domain I Already Own?
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      Yes! Pro and Enterprise plans allow you to connect your
                      own custom domain. Simply add DNS records and verify
                      ownership through our dashboard to start creating branded
                      short links with your domain.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
