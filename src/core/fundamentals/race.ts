import Car from "./Car";

export default function race(car: Car, logger: (str: string) => void) {
  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();
    logger(`\nVelocidade: ${car.currentSpeed}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.brake();
    logger(`\nVelocidade: ${car.currentSpeed}`);
  });
}
