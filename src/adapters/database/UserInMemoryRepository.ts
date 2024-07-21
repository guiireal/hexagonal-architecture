import User from "@/core/user/models/User";
import UserRepository from "@/core/user/repositories/UserRepository";

export default class UserInMemoryRepository implements UserRepository {
  private static readonly items: User[] = [];

  async create(user: User): Promise<void> {
    const items = UserInMemoryRepository.items;
    const item = await this.findByEmail(user.email);

    if (item) {
      return;
    }

    items.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const items = UserInMemoryRepository.items;

    return items.find((item) => item.email === email) ?? null;
  }
}
