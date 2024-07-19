export default interface Car {
  readonly maxSpeed: number;
  currentSpeed: number;
  accelerate(): void;
  brake(): void;
}
