import { UserRepository } from "../../repository/user/userRepository";

export class GetUserUrlsService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserUrls(userId: string) {
    const user = await this.userRepository.findByIdWithUrls(userId);

    if (!user) {
      throw new Error("User tidak ditemukan");
    }

    return user.urls;
  }
}
