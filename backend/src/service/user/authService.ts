import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { UserRepository } from "../../repository/user/userRepository";

export class AuthService {
    private readonly JWT_SECRET: string;
    private readonly JWT_EXPIRES_IN: string;
    private userRepository: UserRepository;

    constructor() {
        // 🔐 Pastikan JWT_SECRET ada
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        this.JWT_SECRET = process.env.JWT_SECRET;
        this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
        this.userRepository = new UserRepository();
    }  

    async register(email: string, password: string) {
        const emailExists = await this.userRepository.findByEmail(email);

        if (emailExists) {
            throw new Error("Email sudah terdaftar");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userRepository.create({
            email,
            password: hashedPassword
        });

        const token = this.generateToken(user.id);

        return {
            user,
            token
        };
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email atau password salah");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Email atau password salah");
        }

        const token = this.generateToken(user.id);

        return {
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt
            },
            token
        };
    }

    async getUserById(userId: string) {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error("User tidak ditemukan");
        }

        return user;
    }

    private generateToken(userId: string): string {
        const options: SignOptions = {
            expiresIn: this.JWT_EXPIRES_IN as any
        };
        
        return jwt.sign(
            { userId },           // payload
            this.JWT_SECRET,      // 🔑 dari .env
            options
        );
    }

    verifyToken(token: string): { userId: string } {
        try {
            return jwt.verify(token, this.JWT_SECRET) as { userId: string };
        } catch {
            throw new Error("Token tidak valid");
        }
    }
}
