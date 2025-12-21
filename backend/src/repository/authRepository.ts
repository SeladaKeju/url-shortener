import prisma from "../../lib/prisma";

export class AuthRepository {
    async createUser(email: string, hashedPassword: string) {
        return await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                email: true,
                createdAt: true
            }
        });
    }

    async findUserByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async findUserById(userId: string) {
        return await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                createdAt: true,
                urls: {
                    select: {
                        id: true,
                        originalUrl: true,
                        shortUrl: true,
                        clicks: true,
                        createdAt: true,
                        updatedAt: true
                    }
                }
            }
        });
    }

    async checkEmailExists(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { email },
            select: { id: true }
        });
        return !!user;
    }
}
