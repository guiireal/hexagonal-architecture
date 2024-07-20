import Car from "./Car";

export default class Civic implements Car {
  constructor(
    readonly maxSpeed: number = 208,
    private _currentSpeed: number = 0
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 10, this.maxSpeed);
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 10, 0);
  }

  get currentSpeed(): number {
    return this._currentSpeed;
  }
}
