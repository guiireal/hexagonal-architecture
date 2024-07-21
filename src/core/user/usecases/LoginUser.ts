import CryptoProvider from "@/core/shared/CryptoProvider";
import NotFoundException from "@/core/shared/exceptions/NotFoundException";
import UseCase from "@/core/shared/UseCase";
import User from "../models/User";
import UserRepository from "../repositories/UserRepository";

export type InputLoginUserDTO = {
  email: string;
  password: string;
};

export type OutputLoginUserDTO = {
  user: User;
  token: string;
};

export default class LoginUser
  implements UseCase<InputLoginUserDTO, OutputLoginUserDTO>
{
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptoProvider: CryptoProvider
  ) {}

  async handle({
    email,
    password,
  }: InputLoginUserDTO): Promise<OutputLoginUserDTO> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const samePassword = this.cryptoProvider.compare(
      password,
      user.password as string
    );

    if (!samePassword) {
      throw new Error("Invalid password");
    }

    return {
      user: { ...user, password: undefined },
      token: "1",
    };
  }
}
