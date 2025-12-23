import { Request, Response } from "express";
import { UrlService } from "../service/urlService";

export class UrlController {
  private urlService: UrlService;

  constructor() {
    this.urlService = new UrlService();
  }

  /**
   * Create short URL (Protected)
   * POST /api/urls
   */
  createShortUrl = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId; // From auth middleware
      const { originalUrl } = req.body;

      if (!originalUrl) {
        res.status(400).json({
          success: false,
          message: "URL original harus diisi",
        });
        return;
      }

      const result = await this.urlService.createShortUrl(userId, originalUrl);

      res.status(201).json({
        success: true,
        message: "Short URL berhasil dibuat",
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Gagal membuat short URL",
      });
    }
  };

  /**
   * Get all user URLs (Protected)
   * GET /api/urls
   */
  getUserUrls = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId; // From auth middleware

      const urls = await this.urlService.getUserUrls(userId);

      res.status(200).json({
        success: true,
        data: urls,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Gagal mengambil data URL",
      });
    }
  };

  /**
   * Get URL statistics (Protected)
   * GET /api/urls/:urlId/stats
   */
  getUrlStats = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId; // From auth middleware
      const { urlId } = req.params;

      if (!urlId) {
        res.status(400).json({
          success: false,
          message: "URL ID harus diisi",
        });
        return;
      }

      const stats = await this.urlService.getUrlStats(urlId, userId);

      res.status(200).json({
        success: true,
        data: stats,
      });
    } catch (error: any) {
      const statusCode = error.message.includes("tidak ditemukan")
        ? 404
        : error.message.includes("tidak memiliki akses")
        ? 403
        : 400;

      res.status(statusCode).json({
        success: false,
        message: error.message || "Gagal mengambil statistik URL",
      });
    }
  };

  /**
   * Delete URL (Protected)
   * DELETE /api/urls/:urlId
   */
  deleteUrl = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId; // From auth middleware
      const { urlId } = req.params;

      if (!urlId) {
        res.status(400).json({
          success: false,
          message: "URL ID harus diisi",
        });
        return;
      }

      const result = await this.urlService.deleteUrl(urlId, userId);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      const statusCode = error.message.includes("tidak ditemukan")
        ? 404
        : error.message.includes("tidak memiliki akses")
        ? 403
        : 400;

      res.status(statusCode).json({
        success: false,
        message: error.message || "Gagal menghapus URL",
      });
    }
  };

  /**
   * Redirect to original URL (Public)
   * GET /api/urls/:shortCode/redirect
   */
  redirectUrl = async (req: Request, res: Response): Promise<void> => {
    try {
      const { shortCode } = req.params;

      if (!shortCode) {
        res.status(400).json({
          success: false,
          message: "Short code harus diisi",
        });
        return;
      }

      const originalUrl = await this.urlService.getOriginalUrl(shortCode);

      // Redirect to original URL
      res.redirect(originalUrl);
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || "URL tidak ditemukan",
      });
    }
  };
}
