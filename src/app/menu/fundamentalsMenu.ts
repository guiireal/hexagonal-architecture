import polymorphism from "@/app/fundamentals/polymorphism";
import TerminalUtil from "@/app/utils/TerminalUtil";

export default async function fundamentalsMenu() {
  TerminalUtil.title("Fundamentos");

  const [index] = await TerminalUtil.menu(["1. Polimorfismo", "Voltar"]);

  switch (index) {
    case 0:
      await polymorphism();
      break;
    case 1:
      return;
  }

  await fundamentalsMenu();
}
