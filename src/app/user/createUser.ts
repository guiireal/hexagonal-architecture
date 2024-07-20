import TerminalUtil from "@/app/utils/TerminalUtil";
import User from "@/core/user/models/User";
import CreateUser from "@/core/user/usecases/CreateUser";

export default async function createUser() {
  TerminalUtil.title("Criar usuário");

  const name = await TerminalUtil.requiredInput("Nome", "Gui");
  const email = await TerminalUtil.requiredInput("E-mail", "gui@teste.com");
  const password = await TerminalUtil.requiredInput("Senha", "1234");

  const user: User = {
    name,
    email,
    password,
  };

  try {
    await new CreateUser().handle(user);
    TerminalUtil.success("Usuário criado com sucesso!");
  } catch (error: any) {
    TerminalUtil.error(error.message);
  } finally {
    await TerminalUtil.waitEnter();
  }
}
