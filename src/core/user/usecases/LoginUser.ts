import CryptoProvider from "@/core/shared/CryptoProvider";
import NotFoundException from "@/core/shared/exceptions/NotFoundException";
import UseCase from "@/core/shared/UseCase";
import User from "../models/User";
import UserRepository from "../repositories/UserRepository";

export type InputLoginUserDTO = {
  email: string;
  password: string;
};

export default class LoginUser implements UseCase<InputLoginUserDTO, User> {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider
  ) {}

  async handle({ email, password }: InputLoginUserDTO): Promise<User> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const samePassword = this.cryptoProvider.compare(password, user.password!);

    if (!samePassword) {
      throw new Error("Invalid password");
    }

    return { ...user, password: undefined };
  }
}
