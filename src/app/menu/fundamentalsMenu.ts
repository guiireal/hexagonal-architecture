import polymorphism from "@/app/fundamentals/polymorphism";
import TerminalUtil from "@/app/utils/TerminalUtil";
import dip from "../fundamentals/dip";

export default async function fundamentalsMenu() {
  TerminalUtil.title("Fundamentos");

  const [index] = await TerminalUtil.menu([
    "1. Polimorfismo",
    "2. DIP",
    "Voltar",
  ]);

  switch (index) {
    case 0:
      await polymorphism();
      break;
    case 1:
      await dip();
      break;
    default:
  }

  await fundamentalsMenu();
}
