import TerminalUtil from "@/app/utils/TerminalUtil";
import fundamentalsMenu from "./fundamentalsMenu";
import userMenu from "./userMenu";

export default async function mainMenu() {
  TerminalUtil.title("Menu principal");

  const [index] = await TerminalUtil.menu([
    "1. Fundamentos",
    "2. Usuário",
    "Sair",
  ]);

  switch (index) {
    case 0:
      await fundamentalsMenu();
      break;
    case 1:
      await userMenu();
      break;
    default:
      process.exit(0);
  }

  await mainMenu();
}
