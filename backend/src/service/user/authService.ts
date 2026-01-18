import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { UserRepository } from "../../repository/user/userRepository";

export class AuthService {
  private readonly JWT_SECRET: string;
  private readonly JWT_EXPIRES_IN: string;
  private readonly JWT_EXPIRES_IN_EXTENDED: string;
  private userRepository: UserRepository;

  constructor() {
    // 🔐 Pastikan JWT_SECRET ada
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    this.JWT_SECRET = process.env.JWT_SECRET;
    this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
    this.JWT_EXPIRES_IN_EXTENDED = process.env.JWT_EXPIRES_IN_EXTENDED || "30d";
    this.userRepository = new UserRepository();
  }

  async register(email: string, password: string) {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
    });

    return {
      user,
    };
  }

  async login(email: string, password: string, rememberMe: boolean = false) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Gunakan durasi token yang berbeda berdasarkan remember me
    const expiresIn = rememberMe
      ? this.JWT_EXPIRES_IN_EXTENDED
      : this.JWT_EXPIRES_IN;
    const token = this.generateToken(user.id, expiresIn);

    return {
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
      },
      token,
      expiresIn, // Return expires info untuk keperluan cookie
    };
  }

  async getUserById(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  private generateToken(userId: string, expiresIn?: string): string {
    const options: SignOptions = {
      expiresIn: (expiresIn || this.JWT_EXPIRES_IN) as any,
    };

    return jwt.sign(
      { userId }, // payload
      this.JWT_SECRET, // 🔑 dari .env
      options
    );
  }

  verifyToken(token: string): { userId: string } {
    try {
      return jwt.verify(token, this.JWT_SECRET) as { userId: string };
    } catch {
      throw new Error("Invalid token");
    }
  }
}
