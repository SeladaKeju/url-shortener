import { Request, Response } from "express";
import { GetUserUrlsService } from "../../service/url/getUserUrlsService";

export class GetUserUrlsController {
  private getUserUrlsService: GetUserUrlsService;

  constructor() {
    this.getUserUrlsService = new GetUserUrlsService();
  }

  // Mendapatkan semua URL milik user
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId;
      const urls = await this.getUserUrlsService.getUserUrls(userId);

      res.status(200).json({
        success: true,
        data: urls,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to fetch URLs",
      });
    }
  };
}
