import TerminalUtil from "@/app/utils/TerminalUtil";
import fundamentalsMenu from "./fundamentalsMenu";

export default async function mainMenu() {
  TerminalUtil.title("Menu principal");

  const [index] = await TerminalUtil.menu(["1. Fundamentos", "Sair"]);

  switch (index) {
    case 0:
      await fundamentalsMenu();
      break;
    case 1:
      process.exit(0);
  }

  await mainMenu();
}
