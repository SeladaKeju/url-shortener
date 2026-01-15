import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import urlService from "../services/urlService";
import type { Url } from "../services/urlService";
import API_BASE_URL from "../config/api";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userUrls, setUserUrls] = useState<Url[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserUrls();
  }, []);

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
    setShortUrl("");

    try {
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

      const response = await urlService.createUrl({ originalUrl: formattedUrl });
      const fullShortUrl = `${API_BASE_URL}/${response.data.shortUrl}`;
      setShortUrl(fullShortUrl);
      setSuccess("URL shortened successfully!");
      setUrl("");
      
      await fetchUserUrls();
    } catch (error) {
      console.error("Error creating short URL:", error);
      setError(error instanceof Error ? error.message : "Error shortening URL");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (urlId: string) => {
    if (!confirm("Are you sure you want to delete this URL?")) return;

    try {
      await urlService.deleteUrl(urlId);
      setSuccess("URL deleted successfully!");
      await fetchUserUrls();
    } catch (error) {
      console.error("Error deleting URL:", error);
      setError("Failed to delete URL");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setSuccess("Copied to clipboard!");
    setTimeout(() => setSuccess(""), 2000);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#292929' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {user?.email}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Create Short URL Form */}
        <div className="rounded-xl shadow-lg p-6 mb-8" style={{ backgroundColor: '#363636' }}>
          <h2 className="text-xl font-bold text-white mb-4">Create Short URL</h2>
          
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500 text-red-500">
              ❌ {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500 text-green-500">
              ✅ {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="example.com/your-long-url"
                disabled={loading}
                className="flex-1 px-5 py-3 border-2 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400 disabled:opacity-50"
                style={{ backgroundColor: '#292929', borderColor: '#444' }}
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? "Shortening..." : "Shorten URL"}
              </button>
            </div>
          </form>

          {/* Result */}
          {shortUrl && (
            <div className="mt-5 p-5 rounded-lg border" style={{ backgroundColor: '#292929', borderColor: '#444' }}>
              <p className="text-sm font-medium text-gray-300 mb-3">
                ✓ Your shortened URL:
              </p>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="flex-1 px-4 py-2.5 border text-white rounded-lg font-mono text-sm"
                  style={{ backgroundColor: '#363636', borderColor: '#444' }}
                />
                <button
                  onClick={() => copyToClipboard(shortUrl)}
                  className="px-6 py-2.5 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* URL List */}
        <div className="rounded-xl shadow-lg p-6" style={{ backgroundColor: '#363636' }}>
          <h2 className="text-xl font-bold text-white mb-4">Your URLs</h2>
          
          {userUrls.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No URLs yet. Create your first short URL above!
            </p>
          ) : (
            <div className="space-y-3">
              {userUrls.map((urlItem) => (
                <div
                  key={urlItem.id}
                  className="p-4 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-3"
                  style={{ backgroundColor: '#292929', borderColor: '#444' }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-400 font-mono text-sm">
                        {API_BASE_URL}/{urlItem.shortUrl}
                      </span>
                      <button
                        onClick={() => copyToClipboard(`${API_BASE_URL}/${urlItem.shortUrl}`)}
                        className="text-gray-400 hover:text-white transition"
                        title="Copy"
                      >
                        📋
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm truncate">
                      {urlItem.originalUrl}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Created: {new Date(urlItem.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`${API_BASE_URL}/${urlItem.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
                    >
                      Visit
                    </a>
                    <button
                      onClick={() => handleDelete(urlItem.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
