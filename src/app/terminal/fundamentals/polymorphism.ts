import TerminalUtil from "@/app/terminal/utils/TerminalUtil";
import Car from "@/core/fundamentals/Car";
import Ferrari from "@/core/fundamentals/Ferrari";
import Fusca from "@/core/fundamentals/Fusca";

export default async function polymorphism() {
  TerminalUtil.title("Polimorfismo");

  const [index] = await TerminalUtil.select("Selecione o tipo de carro", [
    "Ferrari",
    "Fusca",
  ]);

  const car: Car = index === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.clear();

    TerminalUtil.keyValue("Velocidade máxima", car.maxSpeed);
    TerminalUtil.keyValue("Velocidade atual", car.currentSpeed);

    const [option] = await TerminalUtil.select("Qual opção?", [
      "Acelerar",
      "Frear",
    ]);

    option === 0 ? car.accelerate() : car.brake();

    if (!(await TerminalUtil.confirm("Deseja continuar?"))) {
      return;
    }
  }
}
