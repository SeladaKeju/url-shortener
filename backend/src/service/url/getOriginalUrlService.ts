import { FindUrlRepository } from "../../repository/url/findUrlRepository";

export class GetOriginalUrlService {
    private urlRepository: FindUrlRepository;

    constructor() {
        this.urlRepository = new FindUrlRepository();
    }

    // Mendapatkan URL original (untuk redirect)
    async getOriginalUrl(shortCode: string) {
        const url = await this.urlRepository.findByShortUrl(shortCode);

        if (!url) {
            throw new Error("Short URL tidak ditemukan"); 
        }

        return url.originalUrl;
    }
}
