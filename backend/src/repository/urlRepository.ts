import prisma from "../../lib/prisma";

export class UrlRepository {
  async createUrl(originalUrl: string, shortUrl: string, userId: string) {
    return await prisma.url.create({
      data: {
        originalUrl,
        shortUrl,
        userId,
      },
      select: {
        id: true,
        originalUrl: true,
        shortUrl: true,
        clicks: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findUrlByShortUrl(shortUrl: string) {
    return await prisma.url.findUnique({
      where: { shortUrl },
    });
  }

  async findUrlById(id: string) {
    return await prisma.url.findUnique({
      where: { id },
    });
  }

  async incrementClicks(id: string) {
    return await prisma.url.update({
      where: { id },
      data: { clicks: { increment: 1 } },
    });
  }

  async deleteUrl(id: string) {
    return await prisma.url.delete({
      where: { id },
    });
  }

  async findUserWithUrls(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        urls: {
          select: {
            id: true,
            originalUrl: true,
            shortUrl: true,
            clicks: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }
}
