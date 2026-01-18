// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  // Auth endpoints
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  PROFILE: `${API_BASE_URL}/api/auth/profile`,
  
  // URL endpoints
  CREATE_URL: `${API_BASE_URL}/api/urls`,
  GET_URLS: `${API_BASE_URL}/api/urls`,
  DELETE_URL: (urlId: string) => `${API_BASE_URL}/api/urls/${urlId}`,
  REDIRECT_URL: (shortCode: string) => `${API_BASE_URL}/api/urls/${shortCode}`,
};

export default API_BASE_URL;
