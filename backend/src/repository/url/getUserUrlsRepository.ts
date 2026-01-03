import prisma from "../../../lib/prisma";

export class GetUserUrlsRepository {
    // Mendapatkan semua URL milik user
    async findByUserId(userId: string) {
        return await prisma.url.findMany({
            where: { userId },
            select: {
                id: true,
                originalUrl: true,
                shortUrl: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            }
        })
    }
}