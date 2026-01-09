import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/user/authService";

const authService = new AuthService();

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Token tidak ditemukan"
            });
            return;
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix

        const decoded = authService.verifyToken(token);

        // Attach userId to request object
        (req as any).userId = decoded.userId;

        next();
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: error.message || "Unauthorized"
        });
    }
};
