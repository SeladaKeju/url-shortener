import { Request, Response } from "express";
import { GetOriginalUrlService } from "../../service/url/getOriginalUrlService";

export class RedirectUrlController {
  private getOriginalUrlService: GetOriginalUrlService;

  constructor() {
    this.getOriginalUrlService = new GetOriginalUrlService();
  }

  // Redirect ke URL asli
  redirect = async (req: Request, res: Response): Promise<void> => {
    try {
      const { shortCode } = req.params;
      const originalUrl = await this.getOriginalUrlService.getOriginalUrl(shortCode);

      res.redirect(originalUrl);
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || "Short URL not found",
      });
    }
  };
}
