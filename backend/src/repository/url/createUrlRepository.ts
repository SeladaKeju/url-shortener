import prisma from "../../../lib/prisma";

export class CreateUrlRepository {
  // Membuat URL baru
  async create(data: {
    originalUrl: string;
    shortUrl: string;
    userId: string;
  }) {
    return await prisma.url.create({
      data,
      select: {
        id: true,
        originalUrl: true,
        shortUrl: true,
        createdAt: true,
      },
    });
  }
}
