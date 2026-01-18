import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import urlService from "../services/urlService";
import type { Url } from "../services/urlService";
import API_BASE_URL from "../config/api";
import Card from "../components/ui/Card";

export default function Dashboard() {
  const [userUrls, setUserUrls] = useState<Url[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchUserUrls();
  }, []);

  const fetchUserUrls = async () => {
    setLoading(true);
    try {
      const response = await urlService.getUserUrls();
      setUserUrls(response.data);
    } catch (error) {
      console.error("Error fetching URLs:", error);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#292929' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-300">Welcome back, {user?.email}</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card variant="elevated">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Total URLs</p>
                <p className="text-4xl font-bold text-white">{userUrls.length}</p>
              </div>
            </Card>
            <Card variant="elevated">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Total Clicks</p>
                <p className="text-4xl font-bold text-white">
                  {userUrls.reduce((sum, url) => sum + (url.clicks || 0), 0)}
                </p>
              </div>
            </Card>
            <Card variant="elevated">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Active Links</p>
                <p className="text-4xl font-bold text-white">{userUrls.length}</p>
              </div>
            </Card>
          </div>

          {/* URLs List */}
          <Card variant="elevated">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Your URLs</h2>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-400">Loading...</p>
              </div>
            ) : userUrls.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">You haven't created any short URLs yet.</p>
                <a
                  href="/"
                  className="inline-block px-6 py-3 rounded-lg font-semibold transition"
                  style={{ backgroundColor: '#f5f5f5', color: '#000' }}
                >
                  Create Your First URL
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {userUrls.map((url) => (
                  <div
                    key={url.id}
                    className="p-4 rounded-lg border hover:border-gray-600 transition"
                    style={{ backgroundColor: '#363636', borderColor: '#444' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="mb-2">
                          <a
                            href={`${API_BASE_URL}/${url.shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:text-gray-300 transition break-all"
                          >
                            {API_BASE_URL}/{url.shortUrl}
                          </a>
                        </div>
                        <div className="mb-1">
                          <a
                            href={url.originalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 text-sm hover:text-gray-300 transition break-all"
                          >
                            {url.originalUrl}
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-2">
                          <span>Created: {formatDate(url.createdAt)}</span>
                          <span>Clicks: {url.clicks || 0}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => copyToClipboard(`${API_BASE_URL}/${url.shortUrl}`)}
                          className="px-4 py-2 rounded-lg font-medium transition hover:bg-gray-100"
                          style={{ backgroundColor: '#f5f5f5', color: '#000' }}
                        >
                          Copy
                        </button>
                        <button
                          onClick={() => handleDelete(url.id)}
                          className="px-4 py-2 rounded-lg font-medium transition hover:bg-red-600"
                          style={{ backgroundColor: '#dc2626', color: '#fff' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
