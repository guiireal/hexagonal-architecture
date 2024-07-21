import CryptoProvider from "@/core/shared/CryptoProvider";
import AlreadyExistException from "@/core/shared/exceptions/AlreadyExistException";
import ID from "@/core/shared/ID";
import UseCase from "@/core/shared/UseCase";
import User from "@/core/user/models/User";
import UserRepository from "@/core/user/repositories/UserRepository";

export default class CreateUser implements UseCase<User, void> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoProvider: CryptoProvider
  ) {}

  async handle(user: User): Promise<void> {
    const passwordCrypto = this.cryptoProvider.generate(
      user.password as string
    );

    const hasUser = !!(await this.userRepository.findByEmail(user.email));

    if (hasUser) {
      throw new AlreadyExistException("User already exists");
    }

    const newUser: User = {
      ...user,
      id: ID.generate(),
      password: passwordCrypto,
    };

    await this.userRepository.create(newUser);
  }
}
