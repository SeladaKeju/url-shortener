import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: '#292929' }}>
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-bold text-white">
            ShortURL
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Create Account
          </h2>
          <p className="mt-2 text-gray-300">
            Start shortening your links today
          </p>
        </div>

        <Card variant="elevated">
          {error && <Alert type="error" message={error} className="mb-4" />}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              label="Confirm Password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-white/20"
                style={{ backgroundColor: '#292929', borderColor: '#444' }}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-white hover:text-gray-200 transition">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-white hover:text-gray-200 transition">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={loading}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-white hover:text-gray-200 transition">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
