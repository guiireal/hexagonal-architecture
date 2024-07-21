import User from "@/core/user/models/User";

export default class UserInMemoryRepository {
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
