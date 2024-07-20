import CryptoProvider from "@/core/shared/CryptoProvider";
import AlreadyExistException from "@/core/shared/exceptions/AlreadyExistException";
import ID from "@/core/shared/ID";
import UseCase from "@/core/shared/UseCase";
import User from "@/core/user/models/User";
import UserInMemoryRepository from "@/core/user/repositories/UserInMemoryRepository";

export default class CreateUser implements UseCase<User, void> {
  constructor(private readonly cryptoProvider: CryptoProvider) {}

  async handle(user: User): Promise<void> {
    const passwordCrypto = this.cryptoProvider.handle(user.password);

    const repository = new UserInMemoryRepository();

    const hasUser = !!(await repository.findByEmail(user.email));

    if (hasUser) {
      throw new AlreadyExistException("User already exists");
    }

    const newUser: User = {
      ...user,
      id: ID.generate(),
      password: passwordCrypto,
    };

    await repository.create(newUser);
  }
}
