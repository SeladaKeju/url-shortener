import { API_ENDPOINTS } from '../config/api';

export interface CreateUrlData {
  originalUrl: string;
}

export interface Url {
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  userId: string;
}

export interface CreateUrlResponse {
  success: boolean;
  message: string;
  data: Url;
}

export interface GetUrlsResponse {
  success: boolean;
  data: Url[];
}

export interface DeleteUrlResponse {
  success: boolean;
  message: string;
}

class UrlService {
  async createUrl(data: CreateUrlData): Promise<CreateUrlResponse> {
    const response = await fetch(API_ENDPOINTS.CREATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for cookies
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create short URL');
    }

    return response.json();
  }

  async getUserUrls(): Promise<GetUrlsResponse> {
    const response = await fetch(API_ENDPOINTS.GET_URLS, {
      method: 'GET',
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to get URLs');
    }

    return response.json();
  }

  async deleteUrl(urlId: string): Promise<DeleteUrlResponse> {
    const response = await fetch(API_ENDPOINTS.DELETE_URL(urlId), {
      method: 'DELETE',
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete URL');
    }

    return response.json();
  }

  getShortUrl(shortCode: string): string {
    return API_ENDPOINTS.REDIRECT_URL(shortCode);
  }
}

export default new UrlService();
