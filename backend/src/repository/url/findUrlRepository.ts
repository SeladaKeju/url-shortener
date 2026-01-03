import prisma from "../../../lib/prisma";

export class FindUrlRepository {
  // Mencari URL berdasarkan shortUrl
  async findByShortUrl(shortUrl: string) {
    return await prisma.url.findUnique({
      where: { shortUrl },
      select: { originalUrl: true },
    });
  }
}
