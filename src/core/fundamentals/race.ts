import { terminal } from "terminal-kit";
import Fusca from "./Fusca";

export default function race() {
  const car = new Fusca();

  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();
    terminal.red(`\nVelocidade: ${car.currentSpeed}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.brake();
    terminal.red(`\nVelocidade: ${car.currentSpeed}`);
  });
}
