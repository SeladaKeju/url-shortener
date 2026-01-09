import prisma from "../../../lib/prisma";

export class DeleteUrlRepository {
  // Mencari URL berdasarkan ID
  async findByUserId(id: string) {
    return await prisma.url.findUnique({
      where: { id },
    });
  }

  // Menghapus URL
  async delete(id: string) {
    return await prisma.url.delete({
      where: { id },
    });
  }
}
