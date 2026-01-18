import { Request, Response } from "express";
import { AuthService } from "../../service/user/authService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
        return;
      }

      const result = await this.authService.register(email, password);

      res.status(201).json({
        success: true,
        message: "Registration successful",
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Registration failed",
      });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, rememberMe } = req.body;

      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
        return;
      }

      const result = await this.authService.login(email, password, rememberMe);

      // Hitung maxAge berdasarkan remember me
      // expiresIn format: "7d" atau "30d"
      const daysMatch = result.expiresIn.match(/^(\d+)d$/);
      const days = daysMatch ? parseInt(daysMatch[1]) : 7;
      const maxAge = days * 24 * 60 * 60 * 1000;

      // Cookie settings yang berbeda untuk development dan production
      const isProduction = process.env.NODE_ENV === "production";

      res.cookie("remember_token", result.token, {
        httpOnly: true,
        secure: isProduction, // false di development, true di production
        sameSite: isProduction ? "none" : "lax", // "lax" untuk development
        maxAge,
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          user: result.user,
        },
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message || "Login failed",
      });
    }
  };

  getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = (req as any).userId;

      const user = await this.authService.getUserById(userId);

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || "User not found",
      });
    }
  };

  logout = async (req: Request, res: Response): Promise<void> => {
    try {
      const isProduction = process.env.NODE_ENV === "production";

      res.clearCookie("remember_token", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
      });

      res.status(200).json({
        success: true,
        message: "Logout successful",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Logout failed",
      });
    }
  };
}
