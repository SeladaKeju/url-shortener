import { DeleteUrlRepository } from "../../repository/url/deleteUrlRepository";

export class DeleteUrlService {
    private urlRepository: DeleteUrlRepository;

    constructor() {
        this.urlRepository = new DeleteUrlRepository();
    }

    async deleteUrl(urlId: string, userId: string) {
        // Cari URL
        const url = await this.urlRepository.findByUserId(urlId);

        if (!url) {
            throw new Error("URL not found");
        } 

        if (url.userId !== userId) {
            throw new Error("You do not have access to delete this URL");
        }

        await this.urlRepository.delete(urlId);

        return { message: "URL deleted successfully" };
    }
}