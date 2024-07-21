import TerminalUtil from "@/app/terminal/utils/TerminalUtil";
import Car from "@/core/fundamentals/Car";
import Civic from "@/core/fundamentals/Civic";
import Ferrari from "@/core/fundamentals/Ferrari";
import Fusca from "@/core/fundamentals/Fusca";
import race from "@/core/fundamentals/race";
import { terminal } from "terminal-kit";

export default async function dip() {
  TerminalUtil.title("DIP");

  const [type] = await TerminalUtil.select("Escolha o tipo de carro", [
    "Fusca",
    "Civic",
    "Ferrari",
  ]);

  let car: Car;

  switch (type) {
    case 0:
      car = new Fusca();
      break;
    case 1:
      car = new Civic();
      break;
    default:
      car = new Ferrari();
  }

  race(car, terminal.red);
  await TerminalUtil.waitEnter();
}
