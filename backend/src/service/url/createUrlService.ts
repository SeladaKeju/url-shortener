import { nanoid } from "nanoid";
import { CreateUrlRepository } from "../../repository/url/createUrlRepository";

export class CreateUrlService {
  private urlRepository: CreateUrlRepository;

  constructor() {
    this.urlRepository = new CreateUrlRepository();
  }

//   membuat short URL
  async createShortUrl(userId: string, originalUrl: string) {
    // validasi URL
    try {
      new URL(originalUrl);
    } catch (error) {
      throw new Error("Invalid URL format");
    }

    // Generate kode pendek unik
    const shortUrl = nanoid(8);

    // Simpan ke database
    return await this.urlRepository.create({
      originalUrl,
      shortUrl,
      userId,
    });
  }
}
