import { Request, Response } from "express";
import { DeleteUrlService } from "../../service/url/deleteUrlService";

export class DeleteUrlController {
  private deleteUrlService: DeleteUrlService;

  constructor() {
    this.deleteUrlService = new DeleteUrlService();
  }

  // Menghapus URL
  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId;
      const { urlId } = req.params;

      if (!urlId) {
        res.status(400).json({
          success: false,
          message: "URL ID harus diisi",
        });
        return;
      }

      await this.deleteUrlService.deleteUrl(urlId, userId);

      res.status(200).json({
        success: true,
        message: "URL berhasil dihapus",
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
}
