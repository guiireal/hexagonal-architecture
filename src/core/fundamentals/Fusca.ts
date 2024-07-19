import Car from "./Car";

export default class Fusca implements Car {
  constructor(
    readonly maxSpeed: number = 140,
    private _currentSpeed: number = 0
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 5, this.maxSpeed);
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 5, 0);
  }

  get currentSpeed(): number {
    return this._currentSpeed;
  }
}
