import AlreadyExistException from "@/core/shared/exceptions/AlreadyExistException";
import ID from "@/core/shared/ID";
import UseCase from "@/core/shared/UseCase";
import User from "@/core/user/models/User";
import UserInMemoryRepository from "@/core/user/repositories/UserInMemoryRepository";

export default class CreateUser implements UseCase<User, void> {
  async handle(user: User): Promise<void> {
    const passwordCrypto = user.password.split("").reverse().join("");

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
