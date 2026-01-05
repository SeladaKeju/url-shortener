import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/user/authService";

const authService = new AuthService();

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Authentication required. Please login to continue",
      });
      return;
    }

    const decoded = authService.verifyToken(token);
    (req as any).userId = decoded.userId;

    next();
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || "Unauthorized",
    });
  }
};
