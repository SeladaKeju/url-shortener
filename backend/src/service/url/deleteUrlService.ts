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
            throw new Error("URL tidak ditemukan");
        } 

        if (url.userId !== userId) {
            throw new Error("Anda tidak berhak menghapus URL ini");
        }

        await this.urlRepository.delete(urlId);

        return { message: "URL berhasil dihapus" };
    }
}