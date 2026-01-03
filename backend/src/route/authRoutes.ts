import { Router } from "express";
import { AuthController } from "../controller/user/authController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const authController = new AuthController();

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes
router.get("/profile", authMiddleware, authController.getProfile);

export default router;
