import BCryptPasswordCrypto from "@/adapters/auth/BCryptPasswordCrypto";
import UserPostgresRepository from "@/adapters/database/UserPostgresRepository";
import TerminalUtil from "@/app/terminal/utils/TerminalUtil";
import User from "@/core/user/models/User";
import CreateUser from "@/core/user/usecases/CreateUser";

export default async function createUser() {
  const { title, requiredInput, success, error, waitEnter } = TerminalUtil;

  title("Criar usuário");

  const name = await requiredInput("Nome");
  const email = await requiredInput("E-mail");
  const password = await requiredInput("Senha");

  const user: User = {
    name,
    email,
    password,
  };

  const passwordCrypto = new BCryptPasswordCrypto();
  const userRepository = new UserPostgresRepository();

  const useCase = new CreateUser(userRepository, passwordCrypto);

  try {
    await useCase.handle(user);
    success("Usuário criado com sucesso!");
  } catch (exception: any) {
    error(exception.message);
  } finally {
    await waitEnter();
  }
}
