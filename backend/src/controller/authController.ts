import { Request, Response } from "express";
import { AuthService } from "../service/authService";

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
                    message: "Email dan password harus diisi"
                });
                return;
            }

            const result = await this.authService.register(email, password);

            res.status(201).json({
                success: true,
                message: "Registrasi berhasil",
                data: result
            });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: error.message || "Registrasi gagal"
            });
        }
    };

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).json({
                    success: false,
                    message: "Email dan password harus diisi"
                });
                return;
            }

            const result = await this.authService.login(email, password);

            res.status(200).json({
                success: true,
                message: "Login berhasil",
                data: result
            });
        } catch (error: any) {
            res.status(401).json({
                success: false,
                message: error.message || "Login gagal"
            });
        }
    };

    getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = (req as any).userId;

            const user = await this.authService.getUserById(userId);

            res.status(200).json({
                success: true,
                data: user
            });
        } catch (error: any) {
            res.status(404).json({
                success: false,
                message: error.message || "User tidak ditemukan"
            });
        }
    };
}
