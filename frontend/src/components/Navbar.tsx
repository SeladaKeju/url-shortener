import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="shadow-md" style={{ backgroundColor: '#292929' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and navigation links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-3xl font-bold text-white">
              ShortURL
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-2xl text-white hover:text-gray-300 transition">
                Home
              </Link>
              <Link to="/features" className="text-2xl text-white hover:text-gray-300 transition">
                Features
              </Link>
              <Link to="/plan" className="text-2xl text-white hover:text-gray-300 transition">
                Plan
              </Link>
            </div>
          </div>

          {/* Right side - Login/User info */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hidden md:block hover:text-gray-300 transition cursor-pointer"
                >
                  {user?.email}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                  style={{ backgroundColor: '#f5f5f5', color: '#000' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                  style={{ backgroundColor: '#f5f5f5', color: '#000' }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
