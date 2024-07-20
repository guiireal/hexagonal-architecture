import UseCase from "@/core/shared/UseCase";
import User from "../models/User";

export default class CreateUser implements UseCase<User, void> {
  async handle(user: User): Promise<void> {
    const passwordCrypto = user.password.split("").reverse().join("");
    console.log(`User ${user.name} created with password ${passwordCrypto}`);
  }
}
