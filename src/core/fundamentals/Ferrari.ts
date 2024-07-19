import Car from "./Car";

export default class Ferrari implements Car {
  constructor(
    readonly maxSpeed: number = 324,
    private _currentSpeed: number = 0
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 20, this.maxSpeed);
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 20, 0);
  }

  get currentSpeed(): number {
    return this._currentSpeed;
  }
}
