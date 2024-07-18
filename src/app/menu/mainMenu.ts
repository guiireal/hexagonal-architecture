import { terminal } from "terminal-kit";
import TerminalUtil from "../utils/TerminalUtil";

export default async function mainMenu() {
  TerminalUtil.title("Menu principal");

  const response = await terminal.singleColumnMenu(["1. Fundamentos", "Sair"])
    .promise;

  switch (response.selectedIndex) {
    case 1:
      process.exit(0);
  }

  mainMenu();
}
