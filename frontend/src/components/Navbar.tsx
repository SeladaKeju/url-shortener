import { Link } from 'react-router-dom';

export default function Navbar() {
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

          {/* Right side - Login button */}
          <div>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              style={{ backgroundColor: '#f5f5f5', color: '#000' }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
