import { Request, Response } from "express";
import { CreateUrlService } from "../../service/url/createUrlService";

export class CreateController {
  private createUrlService: CreateUrlService;

  constructor() {
    this.createUrlService = new CreateUrlService();
  }

  // Membuat short URL baru
  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId;
      const { originalUrl } = req.body;

      if (!originalUrl) {
        res.status(400).json({
          success: false,
          message: "Original URL is required",
        });
        return;
      }

      const result = await this.createUrlService.createShortUrl(userId, originalUrl);

      res.status(201).json({
        success: true,
        message: "Short URL created successfully",
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create short URL",
      });
    }
  };
}