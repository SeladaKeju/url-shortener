import { API_ENDPOINTS } from '../config/api';

export interface RegisterData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface ProfileResponse {
  success: boolean;
  data: {
    user: User;
  };
}

class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Registration failed' }));
        throw new Error(error.message || 'Registration failed');
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Please make sure the backend is running at ' + API_ENDPOINTS.REGISTER.split('/api')[0]);
      }
      throw error;
    }
  }

  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Login failed' }));
        throw new Error(error.message || 'Login failed');
      }

      return response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Please make sure the backend is running at ' + API_ENDPOINTS.LOGIN.split('/api')[0]);
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    const response = await fetch(API_ENDPOINTS.LOGOUT, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }
  }

  async getProfile(): Promise<ProfileResponse> {
    const response = await fetch(API_ENDPOINTS.PROFILE, {
      method: 'GET',
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to get profile');
    }

    return response.json();
  }
}

export default new AuthService();
