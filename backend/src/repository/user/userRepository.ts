import prisma from "../../../lib/prisma";

export class UserRepository {
  // Mencari user berdasarkan email
  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  // Mencari user berdasarkan ID
  async findById(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });
  }

  // Membuat user baru
  async create(data: { email: string; password: string }) {
    return await prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });
  }

  // Mendapatkan user dengan URLs
  async findByIdWithUrls(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        urls: {
          select: {
            id: true,
            originalUrl: true,
            shortUrl: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }
}
