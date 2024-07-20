import TerminalUtil from "@/app/utils/TerminalUtil";
import createUser from "../user/createUser";

export default async function userMenu() {
  TerminalUtil.title("Usuário");

  const [index] = await TerminalUtil.menu(["1. Criar usuário", "Voltar"]);

  switch (index) {
    case 0:
      await createUser();
      break;
    default:
      return;
  }

  await userMenu();
}
