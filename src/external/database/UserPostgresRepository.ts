import User from "@/core/user/models/User";
import UserRepository from "@/core/user/repositories/UserRepository";
import db from "./db";

export default class UserPostgresRepository implements UserRepository {
  async create({ id, name, email, password }: User): Promise<void> {
    await db.query(
      "INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)",
      [id, name, email, password]
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await db.oneOrNone<User>(
      "SELECT * FROM users WHERE email = $1",
      email
    );

    return user;
  }
}
