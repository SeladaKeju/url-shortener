import { nanoid } from "nanoid";
import validator from "validator";
import { UrlRepository } from "../repository/urlRepository";

export class UrlService {
  private urlRepository: UrlRepository;
  private readonly SHORT_CODE_LENGTH = 7;
  private readonly MAX_RETRY = 5;

  constructor() {
    this.urlRepository = new UrlRepository();
  }

  /**
   * Generate unique short code
   */
  private generateShortCode(): string {
    // nanoid with URL-safe characters
    return nanoid(this.SHORT_CODE_LENGTH);
  }

  /**
   * Create shortened URL
   */
  async createShortUrl(userId: string, originalUrl: string) {
    // Validate URL format
    if (!validator.isURL(originalUrl)) {
      throw new Error("Format URL tidak valid");
    }

    // Generate unique short code with retry mechanism
    let shortCode = this.generateShortCode();
    let attempts = 0;

    // Check for collision and retry if needed
    while (attempts < this.MAX_RETRY) {
      const existing = await this.urlRepository.findUrlByShortUrl(shortCode);

      if (!existing) {
        break; // Short code is unique
      }

      shortCode = this.generateShortCode();
      attempts++;
    }

    if (attempts >= this.MAX_RETRY) {
      throw new Error("Gagal generate short code unik, silakan coba lagi");
    }

    // Create URL in database
    const url = await this.urlRepository.createUrl(
      originalUrl,
      shortCode,
      userId
    );

    return {
      ...url,
      shortUrl: shortCode, // Return just the short code
    };
  }

  /**
   * Get original URL and increment clicks
   */
  async getOriginalUrl(shortCode: string) {
    const url = await this.urlRepository.findUrlByShortUrl(shortCode);

    if (!url) {
      throw new Error("URL tidak ditemukan");
    }

    // Increment click count
    await this.urlRepository.incrementClicks(url.id);

    return url.originalUrl;
  }

  /**
   * Get all URLs for a user
   */
  async getUserUrls(userId: string) {
    const user = await this.urlRepository.findUserWithUrls(userId);

    if (!user) {
      throw new Error("User tidak ditemukan");
    }

    return user.urls;
  }

  /**
   * Get URL statistics with ownership check
   */
  async getUrlStats(urlId: string, userId: string) {
    const url = await this.urlRepository.findUrlById(urlId);

    if (!url) {
      throw new Error("URL tidak ditemukan");
    }

    // Check ownership
    if (url.userId !== userId) {
      throw new Error("Anda tidak memiliki akses ke URL ini");
    }

    return url;
  }

  /**
   * Delete URL with ownership check
   */
  async deleteUrl(urlId: string, userId: string) {
    const url = await this.urlRepository.findUrlById(urlId);

    if (!url) {
      throw new Error("URL tidak ditemukan");
    }

    // Check ownership
    if (url.userId !== userId) {
      throw new Error("Anda tidak memiliki akses untuk menghapus URL ini");
    }

    await this.urlRepository.deleteUrl(urlId);

    return { message: "URL berhasil dihapus" };
  }
}
