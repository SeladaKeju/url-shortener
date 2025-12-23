import { Router } from "express";
import { UrlController } from "../controller/urlController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const urlController = new UrlController();

// Public routes
router.get("/:shortCode/redirect", urlController.redirectUrl);

// Protected routes (require authentication)
router.post("/", authMiddleware, urlController.createShortUrl);
router.get("/", authMiddleware, urlController.getUserUrls);
router.get("/:urlId/stats", authMiddleware, urlController.getUrlStats);
router.delete("/:urlId", authMiddleware, urlController.deleteUrl);

export default router;